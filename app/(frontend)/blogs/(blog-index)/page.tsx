export const dynamic = 'force-dynamic';

import { getPublishedBlogPosts } from '@/collections/BlogPosts/fetchers';
import BlogCard from '@/components/blog-card';
import { relationIsObject } from '@/lib/payload/helpers/relation-is-object';

import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/blogs',
    },
};

export default async function BlogIndexPage() {
    const blogPosts = await getPublishedBlogPosts();
    if (!blogPosts.length) {
        return <p>No blog posts found</p>;
    }

    return (
        <div className="mt-20 grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {blogPosts.map(
                ({
                    id,
                    title,
                    slug,
                    contentSummary,
                    coverImage,
                    readTimeInMins,
                    publishedAt,
                }) => {
                    if (!relationIsObject(coverImage)) return null;

                    return (
                        <BlogCard
                            key={id}
                            title={title}
                            href={`/blogs/${slug}`}
                            summary={contentSummary}
                            readTimeMins={readTimeInMins ?? 0}
                            publishedAt={new Date(publishedAt ?? new Date())}
                            coverImage={coverImage}
                        />
                    );
                }
            )}

            <div className="group relative max-w-sm overflow-hidden rounded-xl shadow-sm">
                <Image
                    src={'/assets/banners/banner-3.webp'}
                    alt={`7 Essential Reasons to Work With a Small Business Tax Accountant - Tax services blog post by Invisor CPA, Canadian tax accountants`}
                    width={600}
                    height={400}
                    className="h-[436px] w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
                />
                <Link
                    href={`/blogs/small-business-tax-accountant`}
                    aria-label={`Read blog post: 
                                7 Essential Reasons to Work With a Small Business Tax Accountant`}
                >
                    <div className="absolute right-0 bottom-0 left-0 m-4 rounded-xl bg-white p-6 shadow-md transition-transform duration-300 group-hover:scale-95">
                        <h3 className="text-lg leading-snug font-bold">
                            7 Essential Reasons to Work With a Small Business
                            Tax Accountant
                        </h3>
                        <div className="text-primary mt-4 inline-flex items-center text-sm font-semibold hover:underline">
                            Read Post
                            <span className="sr-only">
                                :7 Essential Reasons to Work With a Small
                                Business Tax Accountant
                            </span>
                            <CircleArrowRight className="ml-1 h-4 w-4" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
