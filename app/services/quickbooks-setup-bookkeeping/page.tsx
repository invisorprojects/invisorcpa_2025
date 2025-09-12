import ContactUs from '@/components/sections/contact-us';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/constants/SERVICES';
import {
    BarChart3,
    CheckCircle,
    CircleArrowRight,
    SquareCheck,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const service = {
    slug: 'quickbooks-setup-bookkeeping',
    title: 'Business Bookkeeping & QuickBooks Setup',
    description:
        "Managing finances shouldn't be a hassle. With our Professional Bookkeeping services, we combine technology and expertise to streamline your financial processes, ensuring accuracy and efficiency.",
    why: [
        {
            caption: 'Tailored Solutions',
            content: 'Custom chart of accounts and workflows.',
        },
        {
            caption: 'Expertise Across Industries',
            content: '20+ years serving diverse sectors.',
        },
        {
            caption: 'Cost-Effective',
            content: 'Bookkeeping-team results at freelancer pricing.',
        },
        {
            caption: 'Compliance Guaranteed',
            content: 'Accurate, regulation-compliant records.',
        },
    ],
    includes: [
        {
            caption: 'QuickBooks Setup & Integration',
            content: 'Clean onboarding and optimisation.',
        },
        {
            caption: 'Transaction Management',
            content: 'Daily categorisation of income and expenses.',
        },
        {
            caption: 'Bank Reconciliation',
            content: 'Balance statements to the cent each month.',
        },
        {
            caption: 'Financial Reporting',
            content: 'P&L, balance sheet, cash-flow, and custom reports.',
        },
        {
            caption: 'Tax Support',
            content:
                'Export-ready data for smooth year-end filing by experienced bookkeeper in London, Ontario.',
        },
    ],
    our_process: [
        {
            caption: 'Consultation',
            content: 'Define goals, pain-points, and integrations needed.',
        },
        {
            caption: 'System Setup',
            content: 'Implement QuickBooks with custom settings.',
        },
        {
            caption: 'Data Management',
            content: 'Routine transaction posting and record upkeep.',
        },
        {
            caption: 'Ongoing Support',
            content: 'Live help and periodic performance reviews.',
        },
    ],
};

const benefits = [
    {
        title: 'No More Missed Deadlines',
        description: 'Timely and accurate filings to help you avoid penalties.',
    },
    {
        title: 'Real-Time Accuracy',
        description:
            'Up-to-date tax calculations based on the latest regulations.',
    },
    {
        title: 'Audit-Ready Documentation',
        description: 'Well-organized records that simplify audit preparation.',
    },
    {
        title: 'Easy Integration',
        description: 'Seamlessly connects with QuickBooks, Zoho, and more.',
    },
    {
        title: 'Scalable for Any Business Size',
        description: 'Flexible support that grows with your business needs.',
    },
    {
        title: 'Expert Guidance',
        description:
            'Insights from professionals who stay ahead of tax law changes.',
    },
];

export const metadata: Metadata = {
    title: 'Business Bookkeeping Services - Bookkeeper London, Ontario',
    description:
        'Work with a trusted Cross Border Tax Accountant at Invisor CPA. We simplify Canada–US taxes, ensure CRA & IRS compliance, and handle FBAR & FATCA reporting.',
    keywords: [
        'Cross-border tax services',
        'Canada US tax',
        'IRS Streamlined Filing',
        'FBAR',
        'FATCA',
        'US estate tax',
        'US gift tax',
        'International tax compliance',
        'Canadian American tax',
        'Cross-border accountant',
    ],
    openGraph: {
        title: 'Cross-Border Tax Services Canada-US | Invisor CPA',
        description:
            'Invisor CPA helps individuals and businesses navigate Canada-US tax compliance: Streamlined Filing, FBAR/FATCA, estate & gift, and strategic advisory.',
        url: 'https://www.invisorcpa.ca/cross-border-taxes',
        siteName: 'Invisor CPA',
        images: [
            {
                url: '/assets/banners/banner-10.webp',
                width: 1200,
                height: 630,
                alt: 'Cross-Border Tax Services by Invisor',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cross-Border Tax Services Canada-US | Invisor CPA',
        description:
            'Navigate Canada-US taxes with confidence: Streamlined Filing, FBAR/FATCA, estate & gift, and ongoing compliance.',
        images: ['/assets/banners/banner-10.webp'],
    },
    alternates: {
        canonical: 'https://www.invisorcpa.ca/cross-border-taxes',
    },
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            SERVICES
                        </h3>
                        <h1 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            {service?.title}
                        </h1>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">{service?.description}</p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-4.webp"
                    alt="Services"
                    width={4096}
                    height={1632}
                    className="h-[500px] w-full rounded-4xl object-cover shadow-md"
                />
            </section>

            <section className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <h2 className="text-primary mb-24 text-3xl font-bold lg:text-4xl">
                    Why Choose Our Professional Bookkeeping Services?
                </h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
                    {service?.why.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-4 rounded-lg bg-[linear-gradient(180deg,rgba(1,244,152,0.2)_0%,rgba(1,163,249,0.2)_100%)] p-3">
                                <BarChart3 className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-black">
                                {feature.caption}
                            </h3>
                            <p className="text-sm text-black">
                                {feature.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#E5F2F8] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col items-center justify-between gap-10 py-4 lg:flex-row">
                    {/* Left Image */}
                    <div className="h-[400px] w-full max-w-xl overflow-hidden rounded-xl shadow">
                        <Image
                            src="/assets/banners/banner-6.webp"
                            alt="Sales Tax Services"
                            width={800}
                            height={600}
                            className="h-full w-full object-cover object-bottom"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full max-w-2xl space-y-6">
                        <h2 className="text-primary text-3xl leading-snug font-bold sm:text-4xl">
                            Our Business Bookkeeping Services Include
                        </h2>

                        <ul className="space-y-4">
                            {service?.includes.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="text-primary mt-1 h-5 w-5" />
                                    <span>
                                        <span className="font-bold">
                                            {item.caption}:
                                        </span>{' '}
                                        {item.content}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
                    {/* Left Content */}
                    <div className="w-full max-w-2xl">
                        <h2 className="text-primary mb-8 text-3xl font-bold sm:text-4xl">
                            Our Process
                        </h2>
                        <div className="grid grid-cols-1 gap-8 text-gray-800 sm:grid-cols-2">
                            {service?.our_process.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-bold text-black">
                                        {item.caption}
                                    </h3>
                                    <p className="text-primary mt-2">
                                        {item.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full max-w-xl overflow-hidden rounded-xl shadow">
                        <Image
                            src="/assets/our-process.webp"
                            alt="Our Process"
                            width={800}
                            height={600}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <h2 className="text-primary mb-10 text-center text-2xl font-bold sm:text-3xl">
                    What You Gain with Our Business Bookkeeping Service
                </h2>
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-gray-100 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start gap-4 bg-white p-6 hover:bg-sky-50"
                        >
                            <div className="bg-primary/10 mt-1 shrink-0 rounded-md p-2 shadow-md">
                                <SquareCheck className="text-primary h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black">
                                    {item.title}
                                </h3>
                                <p className="mt-1 max-w-xs text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            Industries{' '}
                        </h3>
                        <h2 className="text-primary text-3xl font-bold md:text-4xl">
                            Simplify Finances Across Industries with
                            Professional Bookkeeping Solutions
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            No matter your industry—small business, startup,
                            franchise, or e-commerce—we offer tailored
                            bookkeeping and accounting services. With scalable
                            plans, clear pricing, and expert support, we
                            simplify your finances so you can focus on growth.
                        </p>
                        <Link
                            href={`/services/quickbooks-setup-bookkeeping/industries`}
                        >
                            <Button className="bg-primary flex items-center gap-2 rounded-full px-6 py-4 text-white">
                                <span className="font-bold">Learn More</span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {[
                        '/assets/industries/industries-1.webp',
                        '/assets/industries/industries-2.webp',
                        '/assets/industries/industries-3.webp',
                        '/assets/industries/industries-4.webp',
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="h-96 w-full max-w-xs overflow-hidden rounded-xl shadow-sm"
                        >
                            <Image
                                src={src}
                                alt={`Image ${index + 1}`}
                                width={320}
                                height={384}
                                className="h-full w-full rounded-xl object-cover object-center"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
