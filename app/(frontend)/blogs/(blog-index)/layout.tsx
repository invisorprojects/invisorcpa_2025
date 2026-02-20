import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Accounting & Bookkeeping Insights | InvisorCPA Blog',
    description:
        "Explore expert tips on bookkeeping, tax planning, payroll, and financial reporting for Canadian businesses. Stay informed with InvisorCPA's accounting blog.",
    alternates: {
        canonical: 'https://www.invisorcpa.ca/blogs',
    },
};
export default function BlogIndexLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h1 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h1>
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
                    src="/assets/banners/banner-6.webp"
                    alt="Blogs"
                    width={4096}
                    height={1632}
                    className="h-[500px] rounded-4xl object-cover shadow-md"
                />
                {children}
            </section>

            <ContactUs />
        </main>
    );
}
