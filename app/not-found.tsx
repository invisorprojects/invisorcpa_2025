import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="`p-8 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6 rounded-3xl border bg-white p-10 shadow-lg">
                <h1 className="text-primary text-7xl font-extrabold">404</h1>
                <h2 className="text-secondary text-2xl font-bold">
                    Page Not Found
                </h2>
                <p className="max-w-md text-center text-[#686666]">
                    Oops! The page you are looking for does not exist or has
                    been moved.
                    <br />
                    Let&#39;s get you back to where you belong.
                </p>
                <Link href="/">
                    <button className="mt-4 rounded-full bg-[#1E1E5A] px-8 py-4 text-lg font-bold text-white transition-colors hover:cursor-pointer hover:bg-[#131346]">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </main>
    );
}
