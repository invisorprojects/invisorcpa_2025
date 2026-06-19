import { NextResponse } from 'next/server';
import { pool, generateShareToken } from '@/lib/db';

export async function POST(request: Request) {
    let connection;
    try {
        const body = await request.json();
        const { name, email, role } = body;

        if (!name || !email) {
            return NextResponse.json(
                { success: false, error: 'Name and email are required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Check duplicate email
        const [existing] = await connection.query<any[]>(
            'SELECT id FROM tracker_users WHERE email = ? LIMIT 1',
            [email]
        );
        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, error: 'A member with this email already exists.' },
                { status: 400 }
            );
        }

        const userRole = role === 'manager' ? 'manager' : 'member';
        const shareToken = generateShareToken();

        const [result] = await connection.query<any>(
            'INSERT INTO tracker_users (name, email, role, share_token) VALUES (?, ?, ?, ?)',
            [name.trim(), email.trim().toLowerCase(), userRole, shareToken]
        );

        return NextResponse.json({
            success: true,
            userId: result.insertId,
            message: 'User created successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker users POST:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to create user.' },
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
        const { id, name, email, role } = body;

        if (!id || !name || !email || !role) {
            return NextResponse.json(
                { success: false, error: 'User ID, name, email, and role are required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Check duplicate email excluding this user
        const [existing] = await connection.query<any[]>(
            'SELECT id FROM tracker_users WHERE email = ? AND id != ? LIMIT 1',
            [email.trim().toLowerCase(), parseInt(id, 10)]
        );
        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, error: 'Another member with this email already exists.' },
                { status: 400 }
            );
        }

        // Update the user details
        await connection.query(
            'UPDATE tracker_users SET name = ?, email = ?, role = ? WHERE id = ?',
            [name.trim(), email.trim().toLowerCase(), role, parseInt(id, 10)]
        );

        return NextResponse.json({
            success: true,
            message: 'User updated successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker users PUT:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to update user.' },
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
                { success: false, error: 'User ID is required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // 1. Verify user is not a manager (cannot delete managers to prevent lockout)
        const [userCheck] = await connection.query<any[]>(
            'SELECT role FROM tracker_users WHERE id = ?',
            [parseInt(id, 10)]
        );
        if (userCheck.length === 0) {
            return NextResponse.json(
                { success: false, error: 'User not found.' },
                { status: 404 }
            );
        }
        if (userCheck[0].role === 'manager') {
            return NextResponse.json(
                { success: false, error: 'Admin/Manager roles cannot be deleted.' },
                { status: 400 }
            );
        }

        // 2. Check if user has active assignments in tracker_tasks
        const [tasks] = await connection.query<any[]>(
            'SELECT id FROM tracker_tasks WHERE assigned_to = ? LIMIT 1',
            [parseInt(id, 10)]
        );
        if (tasks.length > 0) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Cannot delete user because they are assigned to active tasks. Please reassign or delete their tasks first.',
                },
                { status: 400 }
            );
        }

        // 3. Delete the user
        await connection.query('DELETE FROM tracker_users WHERE id = ?', [parseInt(id, 10)]);

        return NextResponse.json({
            success: true,
            message: 'User deleted successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker users DELETE:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to delete user.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
