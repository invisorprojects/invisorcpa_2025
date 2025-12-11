import { BlogCardSkeleton } from './_components/blog-card'

export default function BlogIndexPageLoading() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
            ))}
        </div>
    )
}
