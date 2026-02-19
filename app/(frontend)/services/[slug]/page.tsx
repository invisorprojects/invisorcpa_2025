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
import { notFound } from 'next/navigation';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES.find((service) => service.slug === slug);

    if (!service) {
        return {
            title: 'Service Not Found',
        };
    }

    const serviceKeywords = {
        'personal-tax-returns': [
            'Personal tax returns Canada',
            'Personal tax accountant Canada',
            'Personal tax filing',
            'Personal tax preparation',
            'Individual tax returns Canada',
            'Personal tax services Canada',
            'CRA personal tax filing',
            'Personal tax consultant Canada',
        ],
        'business-tax-returns': [
            'Business tax returns Canada',
            'Business tax preparation',
            'Business tax filing',
            'Corporate tax services Canada',
            'Business tax accountant Canada',
            'Corporate tax preparation',
            'Business tax consultant Canada',
            'CRA business tax filing',
        ],
        'bookkeeping-services': [
            'Bookkeeping services Canada',
            'Professional bookkeeping',
            'Business bookkeeping',
            'Accounting bookkeeping services',
            'Bookkeeping consultant Canada',
            'Small business bookkeeping',
            'Online bookkeeping services',
            'Bookkeeping for businesses',
        ],
        'payroll-management-services': [
            'Payroll management services Canada',
            'Payroll processing Canada',
            'Payroll services',
            'Payroll management',
            'Payroll processing services',
            'Business payroll services',
            'Payroll consultant Canada',
            'Payroll management Canada',
        ],
        'catch-up-bookkeeping-services': [
            'Catch up bookkeeping services',
            'Backlog bookkeeping',
            'Catch up accounting',
            'Bookkeeping catch up services',
            'Backlog accounting services',
            'Catch up financial records',
            'Bookkeeping cleanup services',
            'Catch up bookkeeping Canada',
        ],
        'accounting-services': [
            'Accounting services Canada',
            'Professional accounting services',
            'Business accounting',
            'Corporate accounting services',
            'Accounting consultant Canada',
            'Small business accounting',
            'Professional accounting',
            'Accounting services for businesses',
        ],
        'tax-planning-services': [
            'Tax planning services Canada',
            'Tax planning consultant',
            'Tax planning Canada',
            'Tax strategy services',
            'Tax planning consultant Canada',
            'Business tax planning',
            'Personal tax planning',
            'Tax planning expert Canada',
        ],
        'consulting-services': [
            'Business consulting services Canada',
            'Financial consulting',
            'Business consulting Canada',
            'Financial advisory services',
            'Business consultant Canada',
            'Financial consulting Canada',
            'Business advisory services',
            'Consulting services Canada',
        ],
    };

    const keywords = serviceKeywords[slug as keyof typeof serviceKeywords] || [
        'Tax services Canada',
        'Professional tax services',
        'Tax preparation services Canada',
        'Canadian tax expert',
        'Tax filing services',
        'Tax consultant Canada',
    ];

    if (slug === 'business-tax-prep-filing') {
        return {
            title: 'Corporate Tax Accountant - Business Tax Prep & Filing',
            description:
                'Tax season doesnt have to be a nightmare.Trusted Corporate Tax Accountant offering expert business tax filing services. Save time, & ensure compliance',
            keywords: [
                ...keywords,
                'Tax services Canada',
                'Tax preparation services Canada',
                'Canadian tax expert',
                'CRA tax help',
                'Best tax service Canada',
            ],
            openGraph: {
                title: `${service.title} | Tax Services Canada | Invisor CPA`,
                description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
                url: `https://www.invisorcpa.ca/services/${slug}`,
                siteName: 'Invisor CPA',
                images: [
                    {
                        url: '/assets/banners/banner-4.webp',
                        width: 1200,
                        height: 630,
                        alt: `${service.title} - Tax Services Canada`,
                    },
                ],
                locale: 'en_CA',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: `${service.title} | Tax Services Canada | Invisor CPA`,
                description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
                images: ['/assets/banners/banner-4.webp'],
            },
            alternates: {
                canonical: `https://www.invisorcpa.ca/services/${slug}`,
            },
        };
    }

    if (slug === 'personal-tax-returns') {
        return {
            title: 'Personal Tax Accountant Toronto - Tax Return Accountant',
            description:
                'Need a Personal Tax Accountant Toronto? Get expert tax return preparation with accuracy, deductions optimization, and timely CRA filing for maximum savings.',
            keywords: [
                ...keywords,
                'Tax services Canada',
                'Tax preparation services Canada',
                'Canadian tax expert',
                'CRA tax help',
                'Best tax service Canada',
            ],
            openGraph: {
                title: `${service.title} | Tax Services Canada | Invisor CPA`,
                description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
                url: `https://www.invisorcpa.ca/services/${slug}`,
                siteName: 'Invisor CPA',
                images: [
                    {
                        url: '/assets/banners/banner-4.webp',
                        width: 1200,
                        height: 630,
                        alt: `${service.title} - Tax Services Canada`,
                    },
                ],
                locale: 'en_CA',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: `${service.title} | Tax Services Canada | Invisor CPA`,
                description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
                images: ['/assets/banners/banner-4.webp'],
            },
            alternates: {
                canonical: `https://www.invisorcpa.ca/services/${slug}`,
            },
        };
    }
    if (slug === 'quickbooks-setup-bookkeeping') {
        return {
            title: 'Business Bookkeeping Services - Bookkeeper London, Ontario',
            description:
                'Streamline your finances with our Business Bookkeeping Services. Expert QuickBooks setup, accurate records, and tailored support in London, Ontario.',
            keywords: [
                ...keywords,
                'Tax services Canada',
                'Tax preparation services Canada',
                'Canadian tax expert',
                'CRA tax help',
                'Best tax service Canada',
            ],
            openGraph: {
                title: `${service.title} | Tax Services Canada | Invisor CPA`,
                description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
                url: `https://www.invisorcpa.ca/services/${slug}`,
                siteName: 'Invisor CPA',
                images: [
                    {
                        url: '/assets/banners/banner-4.webp',
                        width: 1200,
                        height: 630,
                        alt: `${service.title} - Tax Services Canada`,
                    },
                ],
                locale: 'en_CA',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: `${service.title} | Tax Services Canada | Invisor CPA`,
                description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
                images: ['/assets/banners/banner-4.webp'],
            },
            alternates: {
                canonical: `https://www.invisorcpa.ca/services/${slug}`,
            },
        };
    }

    return {
        title: `${service.title} | Tax Services Canada | Invisor CPA`,
        description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada. Expert tax preparation and filing services.`,
        keywords: [
            ...keywords,
            'Tax services Canada',
            'Tax preparation services Canada',
            'Canadian tax expert',
            'CRA tax help',
            'Best tax service Canada',
        ],
        openGraph: {
            title: `${service.title} | Tax Services Canada | Invisor CPA`,
            description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
            url: `https://www.invisorcpa.ca/services/${slug}`,
            siteName: 'Invisor CPA',
            images: [
                {
                    url: '/assets/banners/banner-4.webp',
                    width: 1200,
                    height: 630,
                    alt: `${service.title} - Tax Services Canada`,
                },
            ],
            locale: 'en_CA',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${service.title} | Tax Services Canada | Invisor CPA`,
            description: `${service.description} Professional ${service.title.toLowerCase()} services in Canada.`,
            images: ['/assets/banners/banner-4.webp'],
        },
        alternates: {
            canonical: `https://www.invisorcpa.ca/services/${slug}`,
        },
    };
}

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
export async function generateStaticParams() {
    return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = SERVICES.find((service) => service.slug === slug);
    if (!service) {
        notFound();
    }
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
                    Why Choose Our {service?.title} Services?
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
                            Our {service?.title} Services Include
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
                    What You Gain with Our Service
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
                            Simplify Finances Across Industries with Expert
                            Solutions
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
                        <Link href={`/services/industries`}>
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
