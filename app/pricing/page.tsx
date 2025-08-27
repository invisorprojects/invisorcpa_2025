import ContactUs from '@/components/sections/contact-us';
import Faq from '@/components/sections/faq-section';
import { Metadata } from 'next';
import Image from 'next/image';
import PricingSection from '../../components/PricingSection';

export const metadata: Metadata = {
    title: 'Pricing',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/pricing',
    },
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            PRICING
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Affordable Pricing Plans
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Pricing options are designed with flexibility in
                            mind, allowing you to choose the plan that best fits
                            your needs.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-9.webp"
                    alt="Services"
                    width={3074}
                    height={1333}
                    className="rounded-4xl shadow-md"
                />
            </section>
            <section className="px-4 py-8 sm:p-4 md:p-8 lg:p-12 xl:p-16">
                <PricingSection />
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-sm">
                        <h2 className="text-primary text-4xl font-bold">
                            Sample Pricing{' '}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Compare real-world examples of service packages,
                            tools used, and pricing across businesses just like
                            yours.
                        </p>
                    </div>
                </div>{' '}
                <div className="flex flex-col items-center justify-center gap-4">
                    {pricingData.map((item, index) => (
                        <SamplePricingCard key={index} {...item} />
                    ))}
                </div>
            </section>

            <Faq />
            <ContactUs />
        </main>
    );
}
const pricingData = [
    {
        title: 'Prof Services',
        location: 'Vancouver, Canada',
        employees: 6,
        revenue: '$1.5M',
        services: 'Controller + Tax + Bookkeeping',
        price: {
            amount: '$940',
            currency: 'CAD',
        },
        tools: ['xero.svg', 'dext.webp', 'plooto.webp'],
    },
    {
        title: 'SaaS',
        location: 'Toronto, Canada',
        employees: 28,
        revenue: '$3M',
        services: 'Controller + Tax + Bookkeeping + Payroll',
        price: {
            amount: '$1,470',
            currency: 'CAD',
        },
        tools: [
            'quickbooks.webp',
            'dext.webp',
            'plooto.webp',
            'float.webp',
            'wagepoint.webp',
        ],
    },
    {
        title: 'Medical Devices',
        location: 'Ottawa, Canada',
        employees: null,
        revenue: null,
        services: 'Controller + Tax + Bookkeeping + Payroll',
        price: {
            amount: '$2,100',
            currency: 'CAD',
        },
        tools: [
            'dext.webp',
            'xero.svg',
            'plooto.webp',
            'humi.webp',
            'venn.webp',
        ],
    },
    {
        title: 'US Company',
        location: 'Delaware, USA',
        employees: 3,
        revenue: '$0M',
        services: 'Tax + Payroll',
        price: {
            amount: '$375',
            currency: 'USD',
        },
        tools: ['xero.svg', 'wagepoint.webp'],
    },
];

function SamplePricingCard({
    title,
    location,
    employees,
    revenue,
    services,
    price,
    tools,
}: {
    title: string;
    location: string;
    employees: number | null;
    revenue: string | null;
    services: string;
    price: {
        amount: string;
        currency: string;
    };
    tools: string[];
}) {
    return (
        <div className="w-full rounded-xl border bg-white p-4 shadow-lg sm:p-6">
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Column 1: Basic Info */}
                <div className="mb-2 flex flex-col">
                    <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
                    <p className="mt-2 text-sm">{location}</p>
                    {employees && (
                        <p className="mt-2 text-sm font-medium">
                            {employees} Employees
                        </p>
                    )}
                    {revenue && (
                        <p className="mt-2 text-sm font-medium">
                            {revenue} Revenue
                        </p>
                    )}
                </div>

                {/* Column 2: Services */}
                <div className="mb-2 flex flex-col">
                    <h3 className="text-lg font-bold sm:text-xl">Services</h3>
                    <p className="mt-1 text-sm">{services}</p>
                </div>

                {/* Column 3: Price */}
                <div className="mb-2 flex flex-col">
                    <h3 className="text-lg font-bold sm:text-xl">Price</h3>
                    <p className="mt-2 text-sm">
                        <span className="text-lg font-bold">
                            {price.amount}
                        </span>{' '}
                        {price.currency}
                    </p>
                    <p className="text-sm">per month</p>
                </div>

                {/* Column 4: Tools */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold sm:text-xl">Tools</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                        {tools.map((tool, i) => (
                            <Image
                                key={i}
                                src={`/assets/tools/${tool}`}
                                alt={tool}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full border shadow duration-300 hover:scale-110 hover:shadow-md"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
