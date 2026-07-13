export const dynamic = 'force-static';
export const revalidate = false;

import ContactUs from '@/components/sections/contact-us';
import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Banknote,
    CalendarCheck2,
    CheckCircle2,
    Clock3,
    FileCheck2,
    HardHat,
    LineChart,
    ReceiptText,
    type LucideIcon,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl =
    'https://www.invisorcpa.ca/case-studies/construction-bookkeeping';

const heroImage = '/assets/industries/industries-3.webp';

const caseFacts = [
    {
        label: 'Client',
        value: 'Residential & light-commercial contractor',
    },
    {
        label: 'Industry',
        value: 'Construction & trades',
    },
    {
        label: 'Location',
        value: 'Southwestern Ontario',
    },
    {
        label: 'Size',
        value: '~14 on the crew, including employees and regular subcontractors',
    },
    {
        label: 'Software',
        value: 'QuickBooks Online, set up for job costing',
    },
    {
        label: 'Services',
        value: 'Job costing, subcontractor T5018 support, payroll support, HST filing, monthly reporting, monthly bookkeeping, corporate tax filing, T4 and T4A filing, WSIB calculation and filing',
    },
];

const metrics = [
    {
        value: '$6,300',
        label: 'in missed input tax credits recovered on materials and equipment across Q1-Q2',
        icon: Banknote,
    },
    {
        value: '12 hrs',
        label: "of the owner's time back every month, off truck-cab paperwork",
        icon: Clock3,
    },
    {
        value: '0',
        label: 'missed T5018, WSIB or HST deadlines since onboarding',
        icon: CalendarCheck2,
    },
];

const challenges = [
    'No job costing meant labour, materials and subcontractors all landed in one bucket, so profit per project was a mystery.',
    'Cash was always tight because money sat in receivables and 10% holdbacks while payroll and material suppliers came due.',
    'Subcontractor records were scattered, and T5018 slips became a year-end scramble.',
    'Payroll and WSIB never quite tied out, raising the risk of over- or under-paying premiums.',
    'Materials receipts from multiple suppliers piled up, and input tax credits were slipping through the cracks.',
    'Invoicing and paperwork happened at night from the truck cab or the kitchen table.',
];

const solutions = [
    'Set up job costing in QuickBooks Online so labour, materials, equipment and subcontractors are tracked against each project.',
    'Put progress billing and holdbacks on a clear schedule so invoices go out on time and nothing gets left on the table.',
    'Organized subcontractor records and took over T5018 filing so it is handled year-round instead of during a year-end panic.',
    'Reconciled payroll to WSIB and kept remittances on track.',
    'Captured supplier receipts and claimed the input tax credits that had been slipping away.',
    'Delivered monthly financials plus a per-job profitability report, including profit-and-loss, balance sheet and cash-flow snapshot.',
    'Added project-wise analysis to support profit forecasting and cost management.',
];

const results = [
    'Every job finally showed its true margin, and light-commercial work turned out to run about 9 points higher than residential.',
    'The owner rebalanced the pipeline toward higher-margin light-commercial work.',
    'Tighter progress billing and holdback tracking pulled invoicing forward and eased the monthly cash crunch.',
    '$6,300 in missed input tax credits was recovered across the first two quarters on materials and equipment.',
    'T5018, WSIB and HST have all been filed on time since onboarding, with no more year-end scramble, penalties or interest.',
    'About 12 hours a month went back to the owner once truck-cab paperwork stopped driving the evenings.',
    'The owner now bids new work with real cost data and knows mid-project whether a job is on track.',
];

export const metadata: Metadata = {
    title: 'Construction Bookkeeping Case Study | InvisorCPA',
    description:
        'See how InvisorCPA helped a Southwestern Ontario contractor set up job costing, recover missed input tax credits, file T5018, WSIB and HST on time, and improve cash flow.',
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Construction Bookkeeping Case Study | InvisorCPA',
        description:
            'A growing contractor gained job-by-job profit clarity, cleaner subcontractor records, stronger cash flow and on-time compliance with InvisorCPA.',
        url: pageUrl,
        siteName: 'InvisorCPA',
        locale: 'en_CA',
        type: 'article',
        images: [
            {
                url: heroImage,
                width: 1024,
                height: 684,
                alt: 'Construction bookkeeping and job costing case study by InvisorCPA',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Construction Bookkeeping Case Study | InvisorCPA',
        description:
            'How InvisorCPA helped a contractor find out which jobs actually made money and fix cash flow.',
        images: [heroImage],
    },
};

export default function Page() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
            'How a Local Contractor Found Out Which Jobs Actually Made Money and Fixed Its Cash Flow',
        description: metadata.description,
        image: `https://www.invisorcpa.ca${heroImage}`,
        author: {
            '@type': 'Organization',
            name: 'InvisorCPA',
            url: 'https://www.invisorcpa.ca',
        },
        publisher: {
            '@type': 'Organization',
            name: 'InvisorCPA',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
            },
        },
        mainEntityOfPage: pageUrl,
        articleSection: 'Case Studies',
        about: [
            'Construction bookkeeping',
            'Job costing',
            'T5018 filing',
            'WSIB filing',
            'HST filing',
        ],
    };

    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(
                        /</g,
                        '\\u003c'
                    ),
                }}
            />

            <section className="px-4 py-12 sm:px-8 md:py-16 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="text-secondary text-lg font-medium tracking-wide uppercase">
                            Case Study · Construction & Trades
                        </p>
                        <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl 2xl:text-6xl">
                            How a Local Contractor Found Out Which Jobs Actually
                            Made Money
                        </h1>
                        <p className="max-w-3xl text-base leading-8 text-[#4F5565] sm:text-lg">
                            A growing contractor was winning plenty of work but
                            never sure which jobs were profitable, while cash
                            was always tight and CRA paperwork piled up. Invisor
                            set up proper job costing, sorted out subs,
                            holdbacks and HST, and gave the owner numbers to bid
                            and build with confidence.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/new-clients">
                                    Book a 15-Minute Call
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full"
                            >
                                <Link href="/services/bookkeeping-services">
                                    Explore Bookkeeping
                                    <ReceiptText className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-[#EAF4FF] p-4 shadow-sm">
                        <Image
                            src={heroImage}
                            alt="Construction plans, calculator and hard hat for job costing"
                            width={1024}
                            height={684}
                            className="h-[360px] w-full rounded-[1.5rem] object-cover shadow-sm sm:h-[460px]"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 pb-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-5 md:grid-cols-3">
                    {metrics.map((metric) => {
                        const Icon = metric.icon;

                        return (
                            <article
                                key={metric.value}
                                className="rounded-[1.5rem] border border-[#DCE6F2] bg-white p-6 shadow-sm"
                            >
                                <div className="bg-primary/10 text-primary mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <p className="text-primary text-4xl font-bold">
                                    {metric.value}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-[#596172]">
                                    {metric.label}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                    <aside className="space-y-6 lg:sticky lg:top-8 lg:h-fit">
                        <div className="rounded-[1.5rem] border border-[#DCE6F2] bg-white p-6 shadow-sm">
                            <h2 className="text-primary text-2xl font-bold">
                                At a Glance
                            </h2>
                            <dl className="mt-6 space-y-5">
                                {caseFacts.map((fact) => (
                                    <div key={fact.label}>
                                        <dt className="text-secondary text-xs font-semibold tracking-[0.18em] uppercase">
                                            {fact.label}
                                        </dt>
                                        <dd className="mt-1 text-sm leading-7 text-[#263143]">
                                            {fact.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="rounded-[1.5rem] bg-primary p-6 text-white shadow-sm">
                            <h2 className="text-2xl font-bold">
                                Not sure which jobs are actually making money?
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-white/80">
                                Most contractors we meet are flat-out busy, but
                                busy and profitable are not always the same
                                thing. Get a clear read on job costs, cash flow
                                and where the money is really going.
                            </p>
                            <Button
                                asChild
                                variant="outline"
                                className="mt-6 rounded-full text-primary hover:bg-white"
                            >
                                <Link href="/new-clients">
                                    Book a Health Check
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </aside>

                    <div className="space-y-10">
                        <CaseStudySection
                            eyebrow="The Challenge"
                            title="The contractor was busy, but profit per job was a mystery"
                            description="The owner was great on the tools and great at winning work, but the business had outgrown shoebox bookkeeping. Invoices went out late, subs and suppliers needed paying now, and nobody could say which jobs were actually making money."
                            icon={HardHat}
                            items={challenges}
                        />

                        <CaseStudySection
                            eyebrow="The Solution"
                            title="Books rebuilt around how contractors actually work"
                            description="Invisor rebuilt the books around job costing first, then locked down subcontractor records, payroll, WSIB, HST and cash-flow reporting."
                            icon={FileCheck2}
                            items={solutions}
                        />

                        <CaseStudySection
                            eyebrow="The Results"
                            title="Job-by-job margin clarity and cleaner cash flow"
                            description="Within a couple of months, the owner had a clear read on the business and started making decisions with numbers instead of instinct."
                            icon={LineChart}
                            items={results}
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                    <blockquote className="rounded-[2rem] bg-[#E9F6FB] p-8">
                        <p className="text-primary text-2xl leading-10 font-semibold sm:text-3xl">
                            &ldquo;I always figured we were doing fine. I just
                            couldn&apos;t prove it. Now I know exactly which
                            jobs make money and which ones to walk away from,
                            and I&apos;m not doing invoices at 11 at night
                            anymore. Should have done this years ago.&rdquo;
                        </p>
                        <footer className="mt-6 text-sm font-semibold text-[#596172]">
                            Owner, residential & light-commercial contractor in
                            Southwestern Ontario
                        </footer>
                    </blockquote>

                    <div className="space-y-5">
                        <p className="text-secondary text-lg font-medium tracking-wide uppercase">
                            From Busy to Profitable
                        </p>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            The owner finally knew which jobs to chase, price
                            and walk away from.
                        </h2>
                        <p className="text-base leading-8 text-[#4F5565]">
                            Clean job costing made labour, materials,
                            equipment, subcontractors, holdbacks and tax filings
                            visible. That gave the owner better bids, faster
                            invoicing and mid-project warning signs before
                            profit slipped away.
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                'QuickBooks Online job costing setup',
                                'Progress billing and holdback tracking',
                                'Subcontractor T5018 records and filings',
                                'Payroll, WSIB, HST, T4 and T4A compliance',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl border border-[#DCE6F2] bg-white p-4 text-sm text-[#263143] shadow-sm"
                                >
                                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}

function CaseStudySection({
    eyebrow,
    title,
    description,
    icon: Icon,
    items,
}: {
    eyebrow: string;
    title: string;
    description: string;
    icon: LucideIcon;
    items: string[];
}) {
    return (
        <section className="rounded-[1.5rem] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="bg-primary/10 text-primary inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <p className="text-secondary text-sm font-semibold tracking-[0.18em] uppercase">
                        {eyebrow}
                    </p>
                    <h2 className="text-primary mt-3 text-3xl font-bold">
                        {title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        {description}
                    </p>
                </div>
            </div>
            <ul className="mt-7 space-y-4">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 h-5 w-5 shrink-0" />
                        <span className="leading-8 text-[#263143]">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
