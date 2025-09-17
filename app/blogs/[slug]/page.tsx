/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = 'force-static';
export const revalidate = false;

import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getStoryblokApi } from '@/lib/storyblok';

import ContactUsForm from '@/components/ContactUsForm';
import { StoryblokServerRichText } from '@storyblok/react/rsc';
// We have identified issues with richtext and Types on React 19 and Next.js 15. As a temporary measure, we advise you to continue using React 18 and Next.js 14 until we have fully resolved the issues.
// Refer this link
// https://www.storyblok.com/docs/packages/storyblok-react#storyblokrichtext

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: 'Blog Post',
        alternates: {
            canonical: `https://www.invisorcpa.ca/blogs/${slug}`,
        },
    };
}

async function fetchData(slug: string) {
    const storyblokApi = getStoryblokApi();
    try {
        const { data } = await storyblokApi.get(`cdn/stories/blogs/${slug}`, {
            content_type: 'blog',
            version:
                process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        });
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
        return null;
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await fetchData(slug);
    if (!data) {
        return notFound();
    }
    const content = data.story.content;

    // Fetch 2 most recent blogs (excluding the current one)
    const storyblokApi = getStoryblokApi();
    const { data: recentData } = await storyblokApi.get('cdn/stories', {
        starts_with: 'blogs/',
        sort_by: 'first_published_at:desc',
        per_page: 3, // Fetch 3 in case current is included, we'll filter below
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
    // console.log('recentData', recentData);

    // Filter out the current blog and take 2
    const recentBlogs = recentData.stories
        .filter((story: any) => story.slug !== slug)
        .slice(0, 2)
        .map((story: any) => ({
            name: story.content.title,
            slug: story.slug.replace('blogs/', ''),
        }));

    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h3>
                        <h1 className="text-primary mt-4 text-4xl font-bold 2xl:text-5xl">
                            {content.title}
                        </h1>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">{content.description}</p>
                    </div>
                </div>
                <div>
                    <Image
                        src={content.image.filename}
                        alt="Blogs"
                        width={4096}
                        height={1638}
                        className="max-h-[500px] rounded-4xl object-cover object-top shadow-md"
                    />
                </div>
            </section>

            <BlogDetails content={content} recentBlogs={recentBlogs} />
            <ContactUs />
        </main>
    );
}

function BlogDetails({
    content,
    recentBlogs,
}: {
    content: any;
    recentBlogs: { name: string; slug: string }[];
}) {
    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Main Content */}
                <div className="prose lg:col-span-2">
                    <StoryblokServerRichText doc={content.content} />
                </div>

                {/* Sidebar */}
                <aside className="space-y-10">
                    <div className="rounded-md bg-sky-50 p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold text-sky-800">
                            Recent Blogs
                        </h3>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                            {recentBlogs.map((blog) => (
                                <li key={blog.slug}>
                                    <Link
                                        href={`/blogs/${blog.slug}`}
                                        className="underline hover:text-sky-600"
                                    >
                                        {blog.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ContactUsForm />
                </aside>
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get('cdn/stories', {
        starts_with: 'blogs/',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });

    return data.stories.map((story: any) => ({
        slug: story.slug.replace('blogs/', ''),
    }));
}
