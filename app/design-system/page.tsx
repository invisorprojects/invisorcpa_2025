import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Design System',
};

export default function Page() {
    return (
        <main>
            <section className="flex h-[calc(100vh-80px)] flex-col justify-between gap-4 bg-amber-300 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="flex h-full w-full items-center justify-center border-2 border-red-500">
                    <h1 className="text-4xl font-bold sm:hidden">Small</h1>
                    <h1 className="hidden text-4xl font-bold sm:block md:hidden">
                        Medium
                    </h1>
                    <h1 className="hidden text-4xl font-bold md:block lg:hidden">
                        Large
                    </h1>
                    <h1 className="hidden text-4xl font-bold lg:block xl:hidden">
                        Extra Large
                    </h1>
                    <h1 className="hidden text-4xl font-bold xl:block 2xl:hidden">
                        2 Extra Large
                    </h1>
                    <h1 className="hidden text-4xl font-bold 2xl:block">
                        3 Extra Large
                    </h1>
                </div>
            </section>
        </main>
    );
}
