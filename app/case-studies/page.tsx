export const dynamic = 'force-static';
export const revalidate = false;

import ContactUs from '@/components/sections/contact-us';
import { getStoryblokApi } from '@/lib/storyblok';
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Case Studies',
};

export default async function CaseStudies() {
    const storyblokApi = getStoryblokApi();
    const caseStudies = await storyblokApi.getAll('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'case-studies',
        content_type: 'case_study',
    });
    console.log('caseStudies:', caseStudies[0].content);
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            CASE STUDIES
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Discover Case Studies
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Each case study provides a detailed look at a
                            specific client&apos;s challenges, goals, and the
                            customized solutions.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-1.jpg"
                    alt="Case Studies"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>

            <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-stretch">
                {caseStudies.map((study, index) => (
                    <div
                        key={index}
                        className="flex max-w-sm flex-1 flex-col overflow-hidden rounded-xl bg-gray-100 hover:bg-sky-50"
                    >
                        <Image
                            src={study.content.image.filename}
                            alt="Case Study"
                            width={2048}
                            height={1152}
                            className="h-64 w-full object-cover"
                        />
                        <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                            <h3 className="text-primary text-lg font-bold">
                                {study.content.title}
                            </h3>
                            <Link href={`/case-studies/${study.slug}`}>
                                <Button
                                    variant="ghost"
                                    className="text-primary flex items-center gap-2 px-0 text-sm font-bold hover:bg-sky-50 hover:underline"
                                >
                                    View Case Study
                                    <CircleArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <ContactUs />
        </main>
    );
}
