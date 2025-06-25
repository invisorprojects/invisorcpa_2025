import ContactUs from '@/components/sections/contact-us';
import { BarChart3 } from 'lucide-react';
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

            <section className="bg-white py-16 text-center">
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

            <ContactUs />
        </main>
    );
}
