import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Tax Services Canada | Personal Tax Accountant | Business Tax Preparation',
    description:
        'Comprehensive tax services in Canada. Expert personal tax accountant, business tax preparation, and CRA tax filing services. Professional tax preparation services for individuals and businesses.',
    keywords: [
        'Tax services Canada',
        'Personal tax accountant Canada',
        'Business tax preparation',
        'Tax preparation services Canada',
        'CRA tax filing',
        'Tax consultant Canada',
        'Personal tax returns Canada',
        'Business tax services Canada',
        'Tax preparation Canada',
        'Canadian tax accountant',
        'Tax filing services',
        'Tax planning Canada',
        'Tax compliance Canada',
        'Professional tax services',
        'Tax accountant near me',
        'Business tax filing',
        'Personal tax preparation',
        'Tax return services Canada',
    ],
    openGraph: {
        title: 'Tax Services Canada | Personal Tax Accountant | Business Tax Preparation',
        description:
            'Comprehensive tax services in Canada. Expert personal tax accountant, business tax preparation, and CRA tax filing services.',
        url: 'https://www.invisorcpa.ca/services',
        siteName: 'Invisor CPA',
        images: [
            {
                url: '/assets/banners/banner-7.jpg',
                width: 1200,
                height: 630,
                alt: 'Tax Services Canada - Professional Tax Preparation',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tax Services Canada | Personal Tax Accountant | Business Tax Preparation',
        description:
            'Comprehensive tax services in Canada. Expert personal tax accountant, business tax preparation, and CRA tax filing services.',
        images: ['/assets/banners/banner-7.jpg'],
    },
    alternates: {
        canonical: 'https://www.invisorcpa.ca/services',
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
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Innovative Accounting Solutions for Your
                            Business{' '}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We offer comprehensive accounting and tax services
                            tailored to your business needs, combining expert
                            insights with advanced tools to ensure accuracy and
                            compliance.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-7.jpg"
                    alt="Professional tax services Canada - Personal tax accountant and business tax preparation"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>
            <section className="flex flex-col items-center justify-between gap-4 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Why Our Clients Prefer Working with Us
                    </h2>
                    <p className="max-w-3xl text-base leading-relaxed font-medium sm:text-lg">
                        At the heart of every successful business is a financial
                        partner that truly understands its needs. Here&#39;s why
                        our clients consistently choose us—and stay with us.
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div>
                        <Image
                            src="/assets/features-section.jpg"
                            alt="Professional tax preparation services in Canada"
                            width={1280}
                            height={800}
                            className="w-auto rounded-2xl shadow-md"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, index) => (
                        <ServicesCard key={index} service={service} />
                    ))}
                </div>
            </section>

            <ContactUs />
        </main>
    );
}

import {
    BrainCircuit,
    Lightbulb,
    Cog,
    MessagesSquare,
    ChartBar,
} from 'lucide-react';
import ContactUs from '@/components/sections/contact-us';
import { SERVICES } from '@/constants/SERVICES';
import { ServicesCard } from '@/components/service-card';
const iconMap = {
    BrainCircuit,
    Lightbulb,
    Cog,
    MessagesSquare,
    ChartNoAxesCombined: ChartBar, // Fallback, adjust as needed
};

const features = [
    {
        title: 'Expert Canadian Tax Accountants',
        description:
            'Our experienced professionals bring deep knowledge in accounting, tax, and financial management to ensure your business stays compliant and financially healthy.',
        icon: 'BrainCircuit',
    },
    {
        title: 'Tailored Solutions',
        description:
            "We understand that every business is different. That's why we offer customized services designed to meet your specific goals and challenges.",
        icon: 'Lightbulb',
    },
    {
        title: 'Tech-Driven Efficiency',
        description:
            'We leverage powerful tax preparation tools and cloud-based platforms to automate, streamline, and optimize your tax filing process for maximum accuracy and efficiency.',
        icon: 'Cog',
    },
    {
        title: 'Reliable & Transparent',
        description:
            'With clear communication and dependable service, we become an extension of your team—committed to your success and growth.',
        icon: 'MessagesSquare',
    },
    {
        title: 'Scalable Tax Services Canada',
        description:
            "Whether you're a solo entrepreneur or a growing enterprise, our services scale with you—offering the flexibility and expertise you need at every stage.",
        icon: 'ChartNoAxesCombined',
    },
];

function FeatureCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    const Icon = iconMap[icon as keyof typeof iconMap];
    return (
        <div className="flex max-w-xl items-start gap-4">
            <div className="rounded-lg bg-[#1B1E65] p-2">
                <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
