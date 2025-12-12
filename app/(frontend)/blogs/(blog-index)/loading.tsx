import { BlogCardSkeleton } from '@/components/blog-card';

export default function BlogIndexPageLoading() {
    return (
        <div className="mt-20 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
            ))}
        </div>
    );
}
