import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

export const metadata: Metadata = {
    title: '7 Essential Reasons to Work With a Small Business Tax Accountant | Invisor CPA',
    description:
        'Discover why partnering with a small business tax accountant can significantly benefit your business. Learn about compliance, deductions, strategic advice, and more from Canadian tax experts.',
    keywords: [
        'small business tax accountant',
        'tax accountant for small business',
        'business tax services',
        'small business accounting',
        'tax compliance',
        'business tax deductions',
        'Canadian tax accountant',
        'small business tax advice',
        'business tax planning',
        'tax accountant benefits',
        'small business CPA',
        'business tax consultant',
        'tax preparation services',
        'business financial advisor',
        'tax strategy for small business',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: '7 Essential Reasons to Work With a Small Business Tax Accountant',
        description:
            'Discover why partnering with a small business tax accountant can significantly benefit your business. Expert insights on compliance, deductions, and strategic growth.',
        url: 'https://www.invisorcpa.ca/blogs/small-business-tax-accountant',
        siteName: 'Invisor CPA',
        images: [
            {
                url: 'https://www.invisorcpa.ca/assets/banners/banner-3.webp',
                width: 1200,
                height: 630,
                alt: '7 Essential Reasons to Work With a Small Business Tax Accountant - Invisor CPA',
            },
        ],
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '7 Essential Reasons to Work With a Small Business Tax Accountant',
        description:
            'Discover why partnering with a small business tax accountant can significantly benefit your business. Expert insights from Canadian tax professionals.',
        images: ['https://www.invisorcpa.ca/assets/banners/banner-3.webp'],
        creator: '@invisorcpa',
    },
    alternates: {
        canonical:
            'https://www.invisorcpa.ca/blogs/small-business-tax-accountant',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: 'Tax Services',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h3>
                        <h1 className="text-primary mt-4 text-4xl font-bold 2xl:text-5xl">
                            7 Essential Reasons to Work With a Small Business
                            Tax Accountant
                        </h1>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            For entrepreneurs, managing taxes is one of the
                            biggest responsibilities. While many owners attempt
                            to handle it alone, a{' '}
                            <Link href="/" className="text-primary underline">
                                {' '}
                                small business tax accountant{' '}
                            </Link>
                            ensures compliance, efficiency, and valuable
                            savings. Their guidance helps simplify financial
                            obligations while freeing time to focus on growth.
                        </p>
                    </div>
                </div>

                <div className="mb-12 w-full text-center">
                    <p>
                        From payroll management to quarterly filings, the rules
                        are detailed and time-sensitive. Missing deadlines or
                        overlooking deductions can cost a business more than
                        just money. It can damage credibility. Professional
                        accountants not only prevent errors but also find
                        opportunities that reduce the tax burden and improve
                        financial health.
                    </p>
                    <br />
                    <p>
                        Working with an accountant also means better
                        decision-making. By providing accurate reports and clear
                        insights, they allow small business owners to
                        confidently plan investments, expansions, and
                        operational improvements without worrying about hidden
                        financial risks.
                    </p>
                </div>
                <h5 className="text-primary max-w-5xl text-center text-4xl font-bold">
                    Here is an infographic showing 7 essential reasons to work
                    with a small business tax accountant.
                </h5>
            </section>

            <Image
                src="/assets/infographic.png"
                alt="7 Essential Reasons to Work With a Small Business Tax Accountant"
                width={1920}
                height={600}
                className="w-full object-cover"
            />

            <ContactUs />
        </main>
    );
}
