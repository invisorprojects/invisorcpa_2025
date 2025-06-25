import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Industries',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            Industries
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold 2xl:text-5xl">
                            Innovative Accounting Solutions for Your Business
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We provide expert accounting and tax services with a
                            focus on accuracy and efficiency.Our tailored
                            approach ensures your financial operations run
                            smoothly and stay compliant.Let us handle the
                            numbers so you can focus on growing your business
                            with confidence.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-8.jpg"
                    alt="Case Studies"
                    width={4096}
                    height={1638}
                    className="rounded-4xl shadow-md"
                />
            </section>
            <CaseStudyDetails />
            <ContactUs />
        </main>
    );
}
const industries = [
    {
        title: 'Charities & Non-Profits',
        desc: 'Charities and non-profits tirelessly create positive change, but managing finances can be a challenge. We support you with grant optimization, accurate financial reporting, and donor transparency.',
        bullets: [
            'Transparent Reporting: Clear financial summaries for boards and donors.',
            'Non-Profit Expertise: Financial solutions that meet regulatory and reporting requirements.',
            'Reliable Support: Trusted by charities for tailored support and timely results.',
        ],
    },
    {
        title: 'Hospitality',
        desc: 'In the fast-paced hospitality industry, managing finances can be time-consuming. Our tailored bookkeeping, accounting, and financial tools work for hotels, restaurants, and event venues.',
        bullets: [
            'Hospitality-Specific Solutions: Tailored to the unique needs of service-oriented businesses.',
            'Insightful Analytics: Understand trends in guest spending and cost management.',
            'Flexible Support: Works for small boutique hotels or nationwide chains.',
        ],
    },
    {
        title: 'Health & Wellness',
        desc: 'In the health and wellness industry, our priority is helping others live healthier lives, not worrying over numbers. Our financial tools support clinics, spas, gyms, and therapists to grow with ease.',
        bullets: [
            'HIPAA-Compliant Tools: Ensures data security and patient confidentiality.',
            'Customized Services: Designed for fitness coaches to wellness clinic networks.',
            'Reliable Support: Trusted by chiropractors, nutritionists, and wellness professionals.',
        ],
    },
    {
        title: 'Property Management',
        desc: 'From collecting rent to tracking repairs, financial clarity is vital. We help property managers and real estate investors stay organized and profitable.',
        bullets: [
            'Centralized Management: Solutions designed to handle multiple properties and tenants.',
            'Scalable Solutions: Scales up to support your growing portfolio.',
            'Trusted Expertise: Financial management trusted by property professionals.',
        ],
    },
    {
        title: 'Construction',
        desc: 'In construction, deadlines and finances go hand-in-hand. We help contractors budget, invoice, and forecast with ease so they can focus on delivering great builds.',
        bullets: [
            'Project-Focused Support: Solutions tailored to project-based businesses.',
            'Job Costing Accuracy: Track costs with granularity across contractors.',
            'Reliable Support: Trusted by contractors for scalable and timely results.',
        ],
    },
    {
        title: 'Marketing & Advertising Agencies',
        desc: 'Creative agencies face unique challenges with project billing, client invoicing, and contractor management. We help you stay focused on creativity and results.',
        bullets: [
            'Tailored for Agencies: Solutions for digital, social, and creative businesses.',
            'Simplifies Invoicing: Easy to manage retainers and projects.',
            'Reliable Support: Trusted by agencies who want financial clarity.',
        ],
    },
    {
        title: 'E-Commerce & Shopify',
        desc: 'Online selling comes with unique financial needs. From inventory tracking to tax compliance, our tools help e-commerce businesses grow faster.',
        bullets: [
            'Integrated Tools: Connects with Shopify, WooCommerce, and other platforms.',
            'Real-Time Sales Tracking: Keep up with transactions across multiple channels.',
            'Financial Services: Trusted by e-commerce brands for timely and precise results.',
        ],
    },
    {
        title: 'Startups',
        desc: 'Startups thrive on innovation, not managing finances. We support early-stage companies with clean books, cash flow tracking, and startup-friendly financial tools.',
        bullets: [
            'Startup-Centric Tools: Designed for agile, fast-moving companies.',
            'Transparent Reporting: Clear insights for fundraising or pitching.',
            'Flexible Support: Scales as your startup grows.',
        ],
    },
    {
        title: 'Franchises',
        desc: 'Franchises require consistent accounting across multiple locations. Our financial tools ensure standardized, compliant reporting to power growth.',
        bullets: [
            'Franchise-Ready Tools: Uniform systems for scalable growth.',
            'Advanced Reporting: Tailored insights for franchise networks.',
            'Reliable Support: Trusted by franchises for dependable financial management.',
        ],
    },
    {
        title: 'Small Businesses',
        desc: 'Running a small business is demanding. Our financial management solutions scale to your size and help you succeed with clear financial insight and compliance.',
        bullets: [
            'Simple Tools: Easy to use and tailored for non-financial users.',
            'Growth-Ready: Scales to support small business growth.',
            'Reliable Support: Trusted by small businesses for scalable clarity.',
        ],
    },
];
import Link from 'next/link';
function CaseStudyDetails() {
    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Main Content */}
                <div className="space-y-8 lg:col-span-2">
                    {industries.map(({ title, desc, bullets }, index) => (
                        <div
                            key={index}
                            className="border-l-8 border-blue-500 pl-4"
                        >
                            <h3 className="text-primary text-lg font-semibold sm:text-xl">
                                {title}
                            </h3>
                            <p className="mt-2 text-gray-700">{desc}</p>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                                {bullets.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <aside className="space-y-10">
                    <div className="max-w-md px-4 py-6">
                        <h3 className="mb-2 text-lg font-bold text-black">
                            Still Not Sure? Let’s Talk
                        </h3>
                        <p className="leading-relaxed text-gray-700">
                            Not sure which category your business falls under?
                            We’ll work with you to understand your needs and
                            build a custom plan that fits.
                        </p>
                    </div>

                    <div className="rounded-md border bg-white p-6 shadow-sm">
                        <h4 className="mb-4 text-center text-lg font-semibold">
                            Contact Us
                        </h4>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <textarea
                                placeholder="What services interest you?"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-md bg-sky-600 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    );
}
