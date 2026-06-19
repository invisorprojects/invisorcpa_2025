import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(request: Request) {
    let connection;
    try {
        const body = await request.json();
        const { name } = body;

        if (!name || name.trim() === '') {
            return NextResponse.json(
                { success: false, error: 'Category name is required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Check duplicate name
        const [existing] = await connection.query<any[]>(
            'SELECT id FROM tracker_categories WHERE name = ? LIMIT 1',
            [name.trim()]
        );
        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, error: 'A category with this name already exists.' },
                { status: 400 }
            );
        }

        const [result] = await connection.query<any>(
            'INSERT INTO tracker_categories (name) VALUES (?)',
            [name.trim()]
        );

        return NextResponse.json({
            success: true,
            categoryId: result.insertId,
            message: 'Category created successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker categories POST:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to create category.' },
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
        const { id, name } = body;

        if (!id || !name || name.trim() === '') {
            return NextResponse.json(
                { success: false, error: 'Category ID and name are required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Check duplicate name excluding this category
        const [existing] = await connection.query<any[]>(
            'SELECT id FROM tracker_categories WHERE name = ? AND id != ? LIMIT 1',
            [name.trim(), parseInt(id, 10)]
        );
        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, error: 'Another category with this name already exists.' },
                { status: 400 }
            );
        }

        await connection.query(
            'UPDATE tracker_categories SET name = ? WHERE id = ?',
            [name.trim(), parseInt(id, 10)]
        );

        return NextResponse.json({
            success: true,
            message: 'Category updated successfully.',
        });
    } catch (err: any) {
        console.error('API Error in tracker categories PUT:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to update category.' },
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
                { success: false, error: 'Category ID is required.' },
                { status: 400 }
            );
        }

        connection = await pool.getConnection();

        // Delete the category (Cascade constraint handles associated tasks and task runs)
        await connection.query('DELETE FROM tracker_categories WHERE id = ?', [parseInt(id, 10)]);

        return NextResponse.json({
            success: true,
            message: 'Category and all associated task schedules/runs deleted.',
        });
    } catch (err: any) {
        console.error('API Error in tracker categories DELETE:', err);
        return NextResponse.json(
            { success: false, error: err.message || 'Failed to delete category.' },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}
