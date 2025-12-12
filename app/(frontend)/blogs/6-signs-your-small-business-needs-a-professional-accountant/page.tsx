import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

export const metadata: Metadata = {
    title: '6 Signs Your Small Business Needs a Professional Accountant | Invisor CPA',
    description:
        'Learn the top signs your small business needs a professional accountant. Discover how expert accounting support can help you avoid mistakes, save time, reduce tax penalties, and unlock sustainable growth for your Canadian business.',
    keywords: [
        'professional accountant for small business',
        'when to hire a business accountant',
        'signs you need an accountant',
        'small business accounting help',
        'Canadian small business accountant',
        'business tax compliance',
        'bookkeeping support',
        'accounting mistakes small business',
        'business tax penalties',
        'business financial management',
        'hiring an accountant',
        'business growth advice',
        'strategic accounting',
        'Invisor CPA',
        'small business CPA Canada',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: '6 Signs Your Small Business Needs a Professional Accountant',
        description:
            'Are you struggling with bookkeeping, tax deadlines, or complex finances? Discover six key signs your small business should consider a professional accountant, from cash flow challenges to missed tax deductions.',
        url: 'https://www.invisorcpa.ca/blogs/6-signs-your-small-business-needs-a-professional-accountant',
        siteName: 'Invisor CPA',
        images: [
            {
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
                            6 Signs Your Small Business Needs a Professional
                            Accountant
                        </h1>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Running a small business often means managing
                            multiple responsibilities at once, from daily
                            operations to customer service and finances. While
                            many business owners begin by handling bookkeeping
                            and tax tasks themselves, the complexity quickly
                            grows as the business expands. Small mistakes in
                            accounting can lead to cash flow issues, tax
                            penalties, or missed financial opportunities.
                        </p>
                    </div>
                </div>

                <div className="mb-12 w-full text-center">
                    <p>
                        If you have been searching for
                        <Link href="/" className="text-primary underline">
                            {' '}
                            an accountant for small business{' '}
                        </Link>
                        near me, look for someone who provides clarity,
                        structure, and compliance support that helps small
                        businesses stay financially healthy. With expert
                        guidance, business owners can make informed decisions,
                        understand their financial position, and plan for
                        sustainable growth. A dedicated accountant also frees up
                        valuable time, allowing owners to focus on customers,
                        services, and strategy instead of paperwork.
                    </p>
                    <br />
                    <p>
                        If your workload feels difficult, or you are unsure
                        whether your financial systems are accurate, it may be
                        time to bring in expert help.
                    </p>
                </div>
                <h5 className="text-primary max-w-5xl text-center text-4xl font-bold">
                    Here is an infographic showing 6 Signs Your Small Business
                    Needs a Professional Accountant.
                </h5>
            </section>

            <Image
                src="/assets/infographic-2.png"
                alt="6 Signs Your Small Business Needs a Professional Accountant"
                width={1920}
                height={600}
                quality={100}
                className="w-full object-cover"
            />

            <ContactUs />
        </main>
    );
}
