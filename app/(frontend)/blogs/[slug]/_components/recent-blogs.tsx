import { getRecentBlogPosts } from '@/collections/BlogPosts/fetchers';
import Link from 'next/link';

export default async function RecentBlogs({
    currentBlogSlug,
}: {
    currentBlogSlug: string;
}) {
    const recentBlogPosts = await getRecentBlogPosts();
    if (!recentBlogPosts.length) {
        return <p>No blog posts found</p>;
    }
    return (
        <div className="rounded-md bg-sky-50 p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-sky-800">
                Recent Blogs
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                {recentBlogPosts
                    .filter((blog) => blog.slug !== currentBlogSlug)
                    .map((blog) => (
                        <li key={blog.slug}>
                            <Link
                                href={`/blogs/${blog.slug}`}
                                className="underline hover:text-sky-600"
                            >
                                {blog.title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
