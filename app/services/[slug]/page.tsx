import ContactUs from '@/components/sections/contact-us';
import { BarChart3, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

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
                            Sales Tax Reporting
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Managing sales tax requirements can be both complex
                            and time-consuming, especially when navigating
                            ever-changing regulations. Our expert sales tax
                            reporting services are designed to take the burden
                            off your shoulders, ensuring accurate and timely
                            filings for your business.
                        </p>
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

            <ContactUs />
        </main>
    );
}
