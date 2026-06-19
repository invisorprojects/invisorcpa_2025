import { NextResponse } from 'next/server';
import { initDatabase } from '@/lib/db';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const reset = searchParams.get('reset') === 'true';
        await initDatabase(reset);
        return NextResponse.json({
            success: true,
            message: `Database initialized ${reset ? 'with reset ' : ''}successfully.`,
        });
    } catch (err: any) {
        console.error('Failed to initialize database:', err);
        return NextResponse.json(
            {
                success: false,
                error: err.message || 'Database initialization failed.',
            },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    let reset = false;
    try {
        const body = await request.json();
        reset = body.reset === true;
    } catch {}

    try {
        await initDatabase(reset);
        return NextResponse.json({
            success: true,
            message: `Database initialized ${reset ? 'with reset ' : ''}successfully.`,
        });
    } catch (err: any) {
        console.error('Failed to reset database:', err);
        return NextResponse.json(
            {
                success: false,
                error: err.message || 'Database initialization failed.',
            },
            { status: 500 }
        );
    }
}
