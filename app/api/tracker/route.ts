import { NextResponse } from 'next/server';
import { pool, initDatabase, generateShareToken } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    let connection;
    try {
        connection = await pool.getConnection();

        // Perform safe schema migration (only add missing tables or columns, do not drop or alter data)
        try {
            await initDatabase(false); // creates any missing tables safely

            // Check if count and notes columns exist in tracker_tasks
            const [columns] = await connection.query<any[]>('SHOW COLUMNS FROM tracker_tasks');
            const colNames = columns.map(c => c.Field);
            
            if (!colNames.includes('count')) {
                await connection.query('ALTER TABLE tracker_tasks ADD COLUMN count INT DEFAULT 1');
                console.log('Migrated: Added count column to tracker_tasks');
            }
            if (!colNames.includes('notes')) {
                await connection.query('ALTER TABLE tracker_tasks ADD COLUMN notes TEXT NULL');
                console.log('Migrated: Added notes column to tracker_tasks');
            }
            const freqCol = columns.find(c => c.Field === 'frequency');
            if (freqCol && !freqCol.Type.includes('Bi-Weekly')) {
                await connection.query("ALTER TABLE tracker_tasks MODIFY COLUMN frequency ENUM('Daily', 'Weekly', 'Bi-Weekly', 'Monthly', 'One-Time') NOT NULL");
                console.log('Migrated: Added Bi-Weekly to frequency enum in tracker_tasks');
            }

            // Check if share_token column exists in tracker_users
            const [userCols] = await connection.query<any[]>('SHOW COLUMNS FROM tracker_users');
            const userColNames = userCols.map(c => c.Field);
            if (!userColNames.includes('share_token')) {
                await connection.query('ALTER TABLE tracker_users ADD COLUMN share_token VARCHAR(50) NULL UNIQUE');
                console.log('Migrated: Added share_token column to tracker_users');
            }

            // Fill empty share_tokens if any
            const [usersWithNoToken] = await connection.query<any[]>('SELECT id FROM tracker_users WHERE share_token IS NULL');
            for (const u of usersWithNoToken) {
                const token = generateShareToken();
                await connection.query('UPDATE tracker_users SET share_token = ? WHERE id = ?', [token, u.id]);
                console.log(`Migrated: Generated share_token for user ID ${u.id}`);
            }
        } catch (migrationError) {
            console.error('Database migration failed:', migrationError);
        }

        // Run self-healing instance check
        const [activeTasks] = await connection.query<any[]>(
            'SELECT * FROM tracker_tasks WHERE is_active = true'
        );
        const [pendingInstances] = await connection.query<any[]>(
            "SELECT task_id FROM tracker_task_instances WHERE status = 'Pending'"
        );
        
        const pendingTaskIds = new Set(pendingInstances.map(pi => pi.task_id));

        for (const task of activeTasks) {
            if (!pendingTaskIds.has(task.id)) {
                let nextDue = new Date();
                
                if (task.frequency === 'One-Time') {
                    const [anyInstance] = await connection.query<any[]>(
                        'SELECT id FROM tracker_task_instances WHERE task_id = ? LIMIT 1',
                        [task.id]
                    );
                    if (anyInstance.length > 0) continue;
                    
                    nextDue = new Date(task.due_date);
                } else if (task.frequency === 'Daily') {
                    nextDue.setHours(23, 59, 59, 999);
                } else if (task.frequency === 'Weekly' || task.frequency === 'Bi-Weekly') {
                    const day = nextDue.getDay();
                    const daysToAdd = (5 - day + 7) % 7;
                    nextDue.setDate(nextDue.getDate() + daysToAdd);
                    nextDue.setHours(23, 59, 59, 999);
                } else if (task.frequency === 'Monthly') {
                    nextDue = new Date(
                        nextDue.getFullYear(),
                        nextDue.getMonth() + 1,
                        0,
                        23,
                        59,
                        59,
                        999
                    );
                }

                const dueStr = nextDue.toISOString().slice(0, 19).replace('T', ' ');
                await connection.query(
                    "INSERT INTO tracker_task_instances (task_id, due_date, status) VALUES (?, ?, 'Pending')",
                    [task.id, dueStr]
                );
            }
        }

        // Fetch users
        const [users] = await connection.query(
            'SELECT id, name, email, role, share_token FROM tracker_users ORDER BY role DESC, name ASC'
        );

        // Fetch projects
        const [projects] = await connection.query(
            'SELECT id, name, created_at FROM tracker_projects ORDER BY name ASC'
        );

        // Fetch categories
        const [categories] = await connection.query(
            'SELECT id, name, created_at FROM tracker_categories ORDER BY name ASC'
        );

        // Fetch task instances joined with projects & categories
        const [instances] = await connection.query(
            `SELECT 
                ti.id AS instance_id,
                ti.task_id,
                ti.due_date AS instance_due_date,
                ti.status AS instance_status,
                ti.completion_notes,
                ti.completed_at,
                p.name AS project_name,
                p.id AS project_id,
                c.name AS category,
                c.id AS category_id,
                t.title,
                t.frequency,
                t.count,
                t.notes AS task_notes,
                t.assigned_to AS user_id,
                u.name AS user_name,
                u.email AS user_email
            FROM tracker_task_instances ti
            JOIN tracker_tasks t ON ti.task_id = t.id
            JOIN tracker_projects p ON t.project_id = p.id
            JOIN tracker_categories c ON t.category_id = c.id
            JOIN tracker_users u ON t.assigned_to = u.id
            ORDER BY ti.status ASC, ti.due_date ASC, ti.id DESC`
        );

        // Fetch tasks master list joined with projects & categories
        const [tasks] = await connection.query(
            `SELECT 
                t.id, t.project_id, p.name AS project_name, t.category_id, c.name AS category, t.title, t.frequency, t.due_date, t.is_active,
                t.count, t.notes,
                t.assigned_to AS user_id, u.name AS user_name
            FROM tracker_tasks t
            JOIN tracker_projects p ON t.project_id = p.id
            JOIN tracker_categories c ON t.category_id = c.id
            JOIN tracker_users u ON t.assigned_to = u.id
            ORDER BY t.id DESC`
        );

        return NextResponse.json({
            success: true,
            users,
            projects,
            categories,
            instances,
            tasks,
        });

    } catch (err: any) {
        console.error('API Error in tracker GET:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to fetch tracker data.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

export async function POST(request: Request) {
    let connection;
    try {
        const body = await request.json();
        const { project_id, category_id, title, assigned_to, frequency, due_date, count, notes } = body;

        // Validation
        if (!project_id || !category_id || !title || !assigned_to || !frequency) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields.' },
                { status: 400 }
            );
        }

        if (frequency === 'One-Time' && !due_date) {
            return NextResponse.json(
                { success: false, error: 'Due date is mandatory for one-time tasks.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();
        await connection.beginTransaction();

        const formattedDueDate = due_date
            ? new Date(due_date).toISOString().slice(0, 19).replace('T', ' ')
            : null;

        const [taskResult] = await connection.query<any>(
            `INSERT INTO tracker_tasks (project_id, category_id, title, assigned_to, frequency, due_date, count, notes)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                parseInt(project_id, 10),
                parseInt(category_id, 10),
                title,
                parseInt(assigned_to, 10),
                frequency,
                formattedDueDate,
                count ? parseInt(count, 10) : 1,
                notes ? notes.trim() : null
            ]
        );

        const taskId = taskResult.insertId;

        // Generate first pending instance
        let instanceDueDate = new Date();
        if (frequency === 'One-Time') {
            instanceDueDate = new Date(due_date);
        } else if (frequency === 'Daily') {
            instanceDueDate.setHours(23, 59, 59, 999);
        } else if (frequency === 'Weekly' || frequency === 'Bi-Weekly') {
            const day = instanceDueDate.getDay();
            const daysToAdd = (5 - day + 7) % 7;
            instanceDueDate.setDate(instanceDueDate.getDate() + daysToAdd);
            instanceDueDate.setHours(23, 59, 59, 999);
        } else if (frequency === 'Monthly') {
            instanceDueDate = new Date(
                instanceDueDate.getFullYear(),
                instanceDueDate.getMonth() + 1,
                0,
                23,
                59,
                59,
                999
            );
        }

        const dueStr = instanceDueDate.toISOString().slice(0, 19).replace('T', ' ');
        await connection.query(
            "INSERT INTO tracker_task_instances (task_id, due_date, status) VALUES (?, ?, 'Pending')",
            [taskId, dueStr]
        );

        await connection.commit();

        return NextResponse.json({
            success: true,
            taskId,
            message: 'Task created and scheduled successfully.',
        });

    } catch (err: any) {
        if (connection) await connection.rollback();
        console.error('API Error in tracker POST:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to create task.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

export async function PUT(request: Request) {
    let connection;
    try {
        const body = await request.json();
        const { id, project_id, category_id, title, assigned_to, frequency, due_date, is_active, count, notes } = body;

        if (!id || !project_id || !category_id || !title || !assigned_to || !frequency) {
            return NextResponse.json(
                { success: false, error: 'Missing required fields.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();
        await connection.beginTransaction();

        // 1. Fetch original task to check changes
        const [oldTasks] = await connection.query<any[]>(
            'SELECT frequency, due_date FROM tracker_tasks WHERE id = ?',
            [parseInt(id, 10)]
        );

        if (oldTasks.length === 0) {
            return NextResponse.json(
                { success: false, error: 'Task not found.' },
                { status: 404 }
            );
        }

        const oldFrequency = oldTasks[0].frequency;
        const oldDueDate = oldTasks[0].due_date;
        const frequencyChanged = oldFrequency !== frequency;
        const dueDateChanged = due_date && oldDueDate !== due_date;

        // 2. Update database record
        const isActiveVal = is_active !== undefined ? (is_active ? 1 : 0) : 1;
        const formattedDueDate = due_date
            ? new Date(due_date).toISOString().slice(0, 19).replace('T', ' ')
            : null;

        await connection.query(
            `UPDATE tracker_tasks 
             SET project_id = ?, category_id = ?, title = ?, assigned_to = ?, frequency = ?, due_date = ?, is_active = ?, count = ?, notes = ?
             WHERE id = ?`,
            [
                parseInt(project_id, 10),
                parseInt(category_id, 10),
                title,
                parseInt(assigned_to, 10),
                frequency,
                formattedDueDate,
                isActiveVal,
                count ? parseInt(count, 10) : 1,
                notes ? notes.trim() : null,
                parseInt(id, 10),
            ]
        );

        // 3. Re-schedule active pending cycle if scheduling params changed
        if (isActiveVal === 1 && (frequencyChanged || dueDateChanged)) {
            let instanceDueDate = new Date();
            if (frequency === 'One-Time' && due_date) {
                instanceDueDate = new Date(due_date);
            } else if (frequency === 'Daily') {
                instanceDueDate.setHours(23, 59, 59, 999);
            } else if (frequency === 'Weekly' || frequency === 'Bi-Weekly') {
                const day = instanceDueDate.getDay();
                const daysToAdd = (5 - day + 7) % 7;
                instanceDueDate.setDate(instanceDueDate.getDate() + daysToAdd);
                instanceDueDate.setHours(23, 59, 59, 999);
            } else if (frequency === 'Monthly') {
                instanceDueDate = new Date(
                    instanceDueDate.getFullYear(),
                    instanceDueDate.getMonth() + 1,
                    0,
                    23,
                    59,
                    59,
                    999
                );
            }

            const dueStr = instanceDueDate.toISOString().slice(0, 19).replace('T', ' ');
            await connection.query(
                `UPDATE tracker_task_instances 
                 SET due_date = ? 
                 WHERE task_id = ? AND status = 'Pending'`,
                [dueStr, parseInt(id, 10)]
            );
        }

        // 4. If task is deactivated, remove any outstanding Pending cycle
        if (isActiveVal === 0) {
            await connection.query(
                "DELETE FROM tracker_task_instances WHERE task_id = ? AND status = 'Pending'",
                [parseInt(id, 10)]
            );
        }

        await connection.commit();

        return NextResponse.json({
            success: true,
            message: 'Task definition updated successfully.',
        });

    } catch (err: any) {
        if (connection) await connection.rollback();
        console.error('API Error in tracker PUT:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to update task.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

export async function DELETE(request: Request) {
    let connection;
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { success: false, error: 'Task ID is required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Delete the definition (Cascade constraints handle task instance cleanups)
        await connection.query('DELETE FROM tracker_tasks WHERE id = ?', [parseInt(id, 10)]);

        return NextResponse.json({
            success: true,
            message: 'Task definition and execution runs deleted successfully.',
        });

    } catch (err: any) {
        console.error('API Error in tracker DELETE:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to delete task.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
