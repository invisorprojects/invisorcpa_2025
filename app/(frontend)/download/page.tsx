import { Button } from '@/components/ui/button';

export default function DownloadPage() {
    return (
        <main className="flex h-[calc(100vh-7rem)] items-center justify-center">
            <a
                href="https://bztgr9pqtx9afvzn.public.blob.vercel-storage.com/invisor-exam-v0.exe"
                download
            >
                <Button>Download Invisor Exam Software</Button>
            </a>
        </main>
    );
}
