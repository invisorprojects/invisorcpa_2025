const fileName = 'invisor-exam-v0.exe';
const downloadUrl =
    'https://bztgr9pqtx9afvzn.public.blob.vercel-storage.com/invisor-exam-v0.exe';

export const runtime = 'nodejs';

export async function GET() {
    try {
        const fileResponse = await fetch(downloadUrl);

        if (!fileResponse.ok || !fileResponse.body) {
            return new Response('Download file not found.', { status: 404 });
        }

        const headers = new Headers({
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Type':
                fileResponse.headers.get('Content-Type') ||
                'application/vnd.microsoft.portable-executable',
        });

        const contentLength = fileResponse.headers.get('Content-Length');
        if (contentLength) {
            headers.set('Content-Length', contentLength);
        }

        return new Response(fileResponse.body, { headers });
    } catch {
        return new Response('Download file not found.', { status: 404 });
    }
}
