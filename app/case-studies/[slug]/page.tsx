export const dynamic = 'force-static';
export const revalidate = false;

import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getStoryblokApi } from '@/lib/storyblok';

import { StoryblokRichText } from '@storyblok/react';
// We have identified issues with richtext and Types on React 19 and Next.js 15. As a temporary measure, we advise you to continue using React 18 and Next.js 14 until we have fully resolved the issues.
// Refer this link
// https://www.storyblok.com/docs/packages/storyblok-react#storyblokrichtext

export const metadata: Metadata = {
    title: 'Case Studies',
};

async function fetchData(slug: string) {
    const storyblokApi = getStoryblokApi();
    try {
        const { data } = await storyblokApi.get(
            `cdn/stories/case-studies/${slug}`,
            {
                content_type: 'case_study',
                version:
                    process.env.NODE_ENV === 'production'
                        ? 'published'
                        : 'draft',
            }
        );
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
    // console.log('data::', data);
    const content = data.story.content;
    // console.log('content::', content);
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            CASE STUDIES
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold 2xl:text-5xl">
                            {content.title}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">{content.description}</p>
                    </div>
                </div>
                <div>
                    <Image
                        src={content.image.filename}
                        alt="Case Studies"
                        width={4096}
                        height={1638}
                        className="max-h-[500px] rounded-4xl object-cover object-top shadow-md"
                    />
                </div>
            </section>

            <CaseStudyDetails content={content} />
            <ContactUs />
        </main>
    );
}

function CaseStudyDetails({ content }: { content: any }) {
    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Main Content */}
                <div className="prose lg:col-span-2">
                    <StoryblokRichText doc={content.content} />
                </div>

                {/* Sidebar */}
                <aside className="space-y-10">
                    <div className="rounded-md bg-sky-50 p-6 shadow-sm">
                        <h4 className="mb-4 text-lg font-semibold text-sky-800">
                            Recent Case Studies
                        </h4>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                            <li>
                                <Link
                                    href="/case-studies/3"
                                    className="underline hover:text-sky-600"
                                >
                                    Optimizing Financial Management for IT
                                    Solutions Provider
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies/1"
                                    className="underline hover:text-sky-600"
                                >
                                    Optimizing Financial Management for
                                    E-Commerce Growth and Efficiency
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-md border bg-white p-6 shadow-sm">
                        <h4 className="mb-4 text-center text-lg font-semibold">
                            Contact Us
                        </h4>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <textarea
                                placeholder="What services interest you?"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-md bg-sky-600 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export async function generateStaticParams() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get('cdn/stories', {
        starts_with: 'case-studies/',
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });

    return data.stories.map((story: any) => ({
        slug: story.slug.replace('case-studies/', ''),
    }));
}
