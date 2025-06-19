import { CaseStudiesCard } from '@/components/case-studies-card';
import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Case Studies',
};

export default function CaseStudies() {
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
            <CaseStudiesCard />
            <ContactUs />
        </main>
    );
}
