import ContactUs from '@/components/sections/contact-us';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/constants/SERVICES';
import {
    BarChart3,
    CheckCheck,
    CheckCircle,
    CircleArrowRight,
    SquareCheck,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Services',
};
const features = [
    {
        title: 'Accurate & Timely Filing',
        description:
            'Eliminate late fees and penalties with precise and punctual reporting.',
    },
    {
        title: 'Expert Guidance',
        description:
            'Our team stays updated on ever-changing tax regulations to ensure your business stays compliant.',
    },
    {
        title: 'Tailored Solutions',
        description:
            'From small businesses to large enterprises, we adapt our services to meet your specific needs.',
    },
    {
        title: 'Seamless Integration',
        description:
            'Our process aligns with your existing systems for a hassle-free experience.',
    },
];

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
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            {service?.title}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">{service?.description}</p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-4.jpg"
                    alt="Services"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>

            <section className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <h2 className="text-primary mb-24 text-3xl font-bold lg:text-4xl">
                    Why Choose Our Sales Tax Reporting Services?
                </h2>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-4 rounded-lg bg-[linear-gradient(180deg,rgba(1,244,152,0.2)_0%,rgba(1,163,249,0.2)_100%)] p-3">
                                <BarChart3 className="text-primary h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-black">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-black">
                                {feature.description}
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
                            src="/assets/banners/banner-6.jpg"
                            alt="Sales Tax Services"
                            width={800}
                            height={600}
                            className="h-full w-full object-cover object-bottom"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full max-w-2xl space-y-6">
                        <h2 className="text-primary text-3xl leading-snug font-bold sm:text-4xl">
                            Our Sales Tax Reporting Services Include
                        </h2>

                        <ul className="space-y-4">
                            {[
                                {
                                    title: 'Sales Tax Calculations',
                                    desc: 'Accurate computations based on applicable regulations.',
                                },
                                {
                                    title: 'Filing & Remittance',
                                    desc: 'Preparing and filing sales tax returns on your behalf.',
                                },
                                {
                                    title: 'Audit Support',
                                    desc: 'Assistance in managing and responding to tax audits.',
                                },
                                {
                                    title: 'Nexus Compliance',
                                    desc: 'Ensuring adherence to tax obligations across different states or regions.',
                                },
                                {
                                    title: 'Record Management',
                                    desc: 'Organizing and maintaining essential documentation for easy reference.',
                                },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="text-primary mt-1 h-5 w-5" />
                                    <span>
                                        <span className="font-bold">
                                            {item.title}:
                                        </span>{' '}
                                        {item.desc}
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
                            {/* Item 1 */}
                            <div>
                                <h3 className="text-lg font-bold text-black">
                                    Assessment & Analysis
                                </h3>
                                <p className="text-primary mt-2">
                                    Review your business transactions to
                                    determine tax obligations.
                                </p>
                            </div>
                            {/* Item 2 */}
                            <div>
                                <h3 className="text-lg font-bold text-black">
                                    System Setup
                                </h3>
                                <p className="text-primary mt-2">
                                    Implement tools and processes for efficient
                                    sales tax management.
                                </p>
                            </div>
                            {/* Item 3 */}
                            <div>
                                <h3 className="text-lg font-bold text-black">
                                    Filing & Reporting
                                </h3>
                                <p className="text-primary mt-2">
                                    Prepare, file, and remit sales tax returns
                                    in compliance with regulations.
                                </p>
                            </div>
                            {/* Item 4 */}
                            <div>
                                <h3 className="text-lg font-bold text-black">
                                    Ongoing Monitoring
                                </h3>
                                <p className="text-primary mt-2">
                                    Provide regular updates and ensure adherence
                                    to any changes in tax laws.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full max-w-xl overflow-hidden rounded-xl shadow">
                        <Image
                            src="https://placehold.co/800x600.png"
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
                        <Link href={`/services/${slug}/industries`}>
                            <Button className="bg-primary flex items-center gap-2 rounded-full px-6 py-4 text-white">
                                <span className="font-bold">Learn More</span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {[
                        'https://placehold.co/400x500?text=Image+1',
                        'https://placehold.co/400x500?text=Image+2',
                        'https://placehold.co/400x500?text=Image+3',
                        'https://placehold.co/400x500?text=Image+4',
                    ].map((src, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-sm"
                        >
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="h-auto w-full rounded-xl object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
