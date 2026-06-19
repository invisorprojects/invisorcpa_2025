import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(request: Request) {
    let connection;
    try {
        const body = await request.json();
        const { instanceId, completionNotes } = body;

        // Validation
        if (!instanceId || !completionNotes || completionNotes.trim() === '') {
            return NextResponse.json(
                { success: false, error: 'Instance ID and completion notes are required.' },
                { status: 400 }
            );
        }

        // Strict URL check (notes must contain a URL for validation proof)
        const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/i;
        if (!urlRegex.test(completionNotes)) {
            return NextResponse.json(
                { success: false, error: 'Completion notes must contain at least one valid URL (e.g. proof of work).' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();
        await connection.beginTransaction();

        // 1. Fetch the instance
        const [instances] = await connection.query<any[]>(
            'SELECT * FROM tracker_task_instances WHERE id = ?',
            [instanceId]
        );

        if (instances.length === 0) {
            return NextResponse.json(
                { success: false, error: 'Task instance not found.' },
                { status: 404 }
            );
        }

        const instance = instances[0];

        if (instance.status === 'Completed') {
            return NextResponse.json(
                { success: false, error: 'Task instance is already completed.' },
                { status: 400 }
            );
        }

        // 2. Fetch the parent task definition
        const [tasks] = await connection.query<any[]>(
            'SELECT * FROM tracker_tasks WHERE id = ?',
            [instance.task_id]
        );

        if (tasks.length === 0) {
            return NextResponse.json(
                { success: false, error: 'Parent task definition not found.' },
                { status: 404 }
            );
        }

        const task = tasks[0];

        // 3. Mark the current instance as completed
        const now = new Date();
        const nowStr = now.toISOString().slice(0, 19).replace('T', ' ');

        await connection.query(
            `UPDATE tracker_task_instances 
             SET status = 'Completed', completion_notes = ?, completed_at = ?
             WHERE id = ?`,
            [completionNotes.trim(), nowStr, instanceId]
        );

        // 4. Calculate next instance if recurring (Daily, Weekly, Monthly) and active
        if (task.is_active && (task.frequency === 'Daily' || task.frequency === 'Weekly' || task.frequency === 'Bi-Weekly' || task.frequency === 'Monthly')) {
            // Check if there is already another Pending instance (to avoid duplicates)
            const [pending] = await connection.query<any[]>(
                "SELECT id FROM tracker_task_instances WHERE task_id = ? AND status = 'Pending' LIMIT 1",
                [task.id]
            );

            if (pending.length === 0) {
                // Calculate next due date
                // To avoid overdue cycles accumulating messy duplicate rows, we start from the completed instance's due date
                // and advance it iteratively until it's in the future (relative to now).
                let nextDue = new Date(instance.due_date);
                
                // If the due date is somehow in the deep past, starting from now is safer to prevent endless loops
                if (isNaN(nextDue.getTime())) {
                    nextDue = new Date();
                }

                do {
                    if (task.frequency === 'Daily') {
                        nextDue.setDate(nextDue.getDate() + 1);
                    } else if (task.frequency === 'Weekly') {
                        nextDue.setDate(nextDue.getDate() + 7);
                    } else if (task.frequency === 'Bi-Weekly') {
                        nextDue.setDate(nextDue.getDate() + 14);
                    } else if (task.frequency === 'Monthly') {
                        nextDue.setMonth(nextDue.getMonth() + 1);
                    } else {
                        break;
                    }
                } while (nextDue <= now); // Ensure the next due date is strictly in the future relative to completion time

                // Set final hours to end-of-day for the calculated next date
                nextDue.setHours(23, 59, 59, 999);
                const nextDueStr = nextDue.toISOString().slice(0, 19).replace('T', ' ');

                await connection.query(
                    `INSERT INTO tracker_task_instances (task_id, due_date, status)
                     VALUES (?, ?, 'Pending')`,
                    [task.id, nextDueStr]
                );
            }
        }

        await connection.commit();

        return NextResponse.json({
            success: true,
            message: 'Task instance marked as completed successfully.',
        });

    } catch (err: any) {
        if (connection) await connection.rollback();
        console.error('API Error in tracker complete:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to complete task instance.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
