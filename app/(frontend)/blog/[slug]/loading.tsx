import { Spinner } from '@/components/ui/spinner';

export default function BlogPostPageLoading() {
    return (
        <section className="flex h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <Spinner className="text-primary size-10" />
            <p className="text-primary text-sm">Loading...</p>
        </section>
    );
}
