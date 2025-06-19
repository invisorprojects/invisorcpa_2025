import ContactUs from '@/components/sections/contact-us';
import Faq from '@/components/sections/faq-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pricing',
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
                    src="/assets/banners/banner-10.jpg"
                    alt="Services"
                    width={3074}
                    height={1333}
                    className="rounded-4xl shadow-md"
                />
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
                    <SamplePricingCard />
                    <SamplePricingCard />
                    <SamplePricingCard />
                    <SamplePricingCard />
                </div>
            </section>

            <Faq />
            <ContactUs />
        </main>
    );
}

function SamplePricingCard() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-lg">
            <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Column 1: Prof Services */}
                <div>
                    <h4 className="text-xl font-bold">Prof Services</h4>
                    <p className="mt-2 text-sm">Vancouver, Canada</p>
                    <p className="mt-2 text-sm font-medium">6 Employees</p>
                    <p className="mt-2 text-sm font-medium">$1.5M Revenue</p>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h4 className="text-xl font-bold">Services</h4>
                    <p className="mt-2 text-sm">Controller + Tax</p>
                    <p className="mt-1 text-sm">+ Bookkeeping</p>
                </div>

                {/* Column 3: Price */}
                <div>
                    <h4 className="text-xl font-bold">Price</h4>
                    <p className="mt-2 text-sm">
                        <span className="text-lg font-bold">$1,880</span> CAD
                    </p>
                    <p className="text-sm">per month</p>
                </div>

                {/* Column 4: Tools */}
                <div>
                    <h4 className="text-xl font-bold">Tools</h4>
                    <div className="mt-2 flex flex-wrap items-center gap-4">
                        {/* Replace below spans with actual images later */}
                        <span className="text-sm">[Xero]</span>
                        <span className="text-sm">[QuickBooks]</span>
                        <span className="text-sm">[Dext]</span>
                        <span className="text-sm">[Odoo]</span>
                        <span className="text-sm">[Asana]</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
