import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(request: Request) {
    let connection;
    try {
        const body = await request.json();
        const { name } = body;

        if (!name || name.trim() === '') {
            return NextResponse.json(
                { success: false, error: 'Project name is required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Check duplicate name
        const [existing] = await connection.query<any[]>(
            'SELECT id FROM tracker_projects WHERE name = ? LIMIT 1',
            [name.trim()]
        );
        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, error: 'A project with this name already exists.' },
                { status: 400 }
            );
        }

        const [result] = await connection.query<any>(
            'INSERT INTO tracker_projects (name) VALUES (?)',
            [name.trim()]
        );

        return NextResponse.json({
            success: true,
            projectId: result.insertId,
            message: 'Project created successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker projects POST:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to create project.' },
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
                { success: false, error: 'Project ID is required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Delete the project (ON DELETE CASCADE handles all definitions and instances dynamically)
        await connection.query('DELETE FROM tracker_projects WHERE id = ?', [parseInt(id, 10)]);

        return NextResponse.json({
            success: true,
            message: 'Project and all its associated tasks deleted successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker projects DELETE:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to delete project.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
