// export const dynamic = 'force-static';

import BlogCard from '@/components/blog-card';
import ContactUs from '@/components/sections/contact-us';
import { getStoryblokApi } from '@/lib/storyblok';
import { CircleArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blogs',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/blogs',
    },
};

export default async function Blogs() {
    const storyblokApi = getStoryblokApi();
    const blogs = await storyblokApi.getAll('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'blogs',
        content_type: 'blog',
    });
    // console.log('blogs:', blogs);
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Explore Our Knowledge Hub
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Dive into our collection of insightful articles,
                            designed to help you stay informed and make informed
                            financial decisions.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-3.webp"
                    alt="Blogs"
                    width={4096}
                    height={1632}
                    className="h-[500px] rounded-4xl object-cover shadow-md"
                />
                <div className="mt-20 grid w-fit grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.slug}
                            content={blog.content}
                            slug={blog.slug}
                        />
                    ))}

                    <div className="group relative max-w-sm overflow-hidden rounded-xl shadow-sm">
                        <Image
                            src={'https://ui.shadcn.com/placeholder.svg'}
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
                                    7 Essential Reasons to Work With a Small
                                    Business Tax Accountant
                                </h3>
                                <div className="text-primary mt-4 inline-flex items-center text-sm font-semibold hover:underline">
                                    Read Post
                                    <span className="sr-only">
                                        :7 Essential Reasons to Work With a
                                        Small Business Tax Accountant
                                    </span>
                                    <CircleArrowRight className="ml-1 h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
