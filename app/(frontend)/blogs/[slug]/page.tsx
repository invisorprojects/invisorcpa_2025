import Image from 'next/image';
import { getBlogPostBySlug } from '@/collections/BlogPosts/fetchers';
import { notFound } from 'next/navigation';
import { relationIsObject } from '@/lib/payload/helpers/relation-is-object';
import { RichText } from '@/lib/payload/components/rich-text';
import { Metadata } from 'next';
import ContactUsForm from '@/components/ContactUsForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ContactUs from '@/components/sections/contact-us';
import { BlogMetadata } from '@/components/blog-metadata';
import RecentBlogs from './_components/recent-blogs';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    if (slug === 'bookkeeper-london-ontario-transaction-management-books') {
        return {
            title: 'Bookkeeper London Ontario | Transaction Management for Error-Free Books',
            description:
                'Discover how expert transaction management keeps your books accurate and audit-ready. Learn why hiring a skilled bookkeeper in London, Ontario ensures compliance and financial clarity.',
            keywords: ['books'],
        };
    }
    return {
        title: 'Blog Post',
        alternates: {
            canonical: `https://www.invisorcpa.ca/blogs/${slug}`,
        },
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blogPost = await getBlogPostBySlug(slug);
    if (!blogPost) notFound();

    if (!relationIsObject(blogPost.coverImage)) return null;

    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <Link
                            href="/blogs"
                            aria-label="Back to blog posts"
                            className="relative mb-8 inline-flex items-center gap-2 no-underline after:absolute after:right-0 after:-bottom-1 after:left-1 after:hidden after:h-0.5 after:bg-gray-600 after:content-[''] hover:after:block"
                        >
                            <ArrowLeft />
                            All blog posts
                        </Link>
                        <h3 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h3>
                        <h1 className="text-primary mt-4 text-4xl font-bold 2xl:text-5xl">
                            {blogPost.title}
                        </h1>
                        {/* metadata */}
                        <BlogMetadata
                            intent="post"
                            data={{
                                publishedAt: new Date(
                                    blogPost.publishedAt ?? new Date()
                                ),
                                readTimeMins: blogPost.readTimeInMins ?? 0,
                            }}
                            className="not-prose mt-4 flex"
                        />
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            {blogPost.contentSummary}
                        </p>
                    </div>
                </div>
                <div>
                    {/* cover image */}
                    <Image
                        src={blogPost.coverImage.url ?? ''}
                        alt="Cover image"
                        width={4096}
                        height={1638}
                        className="w-full rounded-md object-cover object-center"
                        placeholder="blur"
                        blurDataURL={blogPost.coverImage.blurDataUrl}
                    />
                </div>
            </section>

            <section className="w-full px-4 py-12">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="prose lg:col-span-2">
                        <RichText lexicalData={blogPost.content} />
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-10">
                        <RecentBlogs currentBlogSlug={blogPost.slug} />
                        <ContactUsForm />
                    </aside>
                </div>
            </section>
            <ContactUs />
        </main>
    );
}
