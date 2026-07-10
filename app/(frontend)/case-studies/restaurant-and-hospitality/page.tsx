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
    LineChart,
    ReceiptText,
    Store,
    type LucideIcon,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl =
    'https://www.invisorcpa.ca/case-studies/restaurant-and-hospitality';

const caseFacts = [
    {
        label: 'Client',
        value: 'Family-owned full-service restaurant',
    },
    {
        label: 'Industry',
        value: 'Restaurant & hospitality',
    },
    {
        label: 'Location',
        value: 'Southwestern Ontario',
    },
    {
        label: 'Size',
        value: '~60 seats, single location, dine-in, takeout and delivery',
    },
    {
        label: 'Software',
        value: 'QuickBooks Online + TouchBistro POS, integrated with delivery apps',
    },
    {
        label: 'Services',
        value: 'Catch-up bookkeeping, monthly bookkeeping, bank reconciliation, HST filing, payroll, corporate tax filing and T4 filing',
    },
];

const metrics = [
    {
        value: '10+ hrs',
        label: "of the owner's time handed back every month",
        icon: Clock3,
    },
    {
        value: '$4,180',
        label: 'in missed input tax credits and duplicate charges recovered in Q1',
        icon: Banknote,
    },
    {
        value: '0',
        label: 'missed HST deadlines since onboarding',
        icon: CalendarCheck2,
    },
];

const challenges = [
    'Four months of backlog, with receipts and supplier invoices stuffed in a drawer.',
    "Sales were split across dine-in, TouchBistro, Uber Eats, DoorDash and SkipTheDishes, with no reliable reconciliation across channels.",
    'Tips, hourly wages and week-to-week schedule changes turned payroll into a monthly scramble.',
    'Two late HST filings the year before had already cost the restaurant penalties and interest.',
    "No monthly profit-and-loss statement meant the owner could not tell whether a busy month was actually profitable.",
    'Reconciliations were happening after midnight, once the doors were locked.',
];

const solutions = [
    'Reconciled four months of backlog and rebuilt a restaurant-specific chart of accounts covering food, beverage, labour and delivery-app commissions.',
    'Connected TouchBistro and the delivery platforms to QuickBooks Online so each channel could flow into the books cleanly.',
    'Took over monthly bookkeeping and bank reconciliation, reducing month-end close from roughly two weeks of guesswork to four business days.',
    'Set up HST tracking and handled filings so deadlines stopped becoming a fire drill.',
    'Streamlined payroll for hourly staff and tips, with T4 filings prepared and submitted on time.',
    'Delivered a monthly report pack with a plain-English profit-and-loss statement, balance sheet and cash-flow snapshot.',
    'Kept the business compliant with accurate, on-time corporate tax filing support.',
];

const results = [
    'Books were brought fully current in about three weeks after being four months behind.',
    'Roughly 10 hours a month went back to the owner once the midnight bookkeeping stopped.',
    '$4,180 was recovered in the first quarter from missed input tax credits and duplicate supplier charges surfaced during cleanup.',
    "Monthly reporting exposed food costs running near 36% of sales. Renegotiating with two suppliers and adjusting select menu prices brought food costs closer to 31%, adding roughly $1,700 a month back to the restaurant's pocket.",
    'HST deadlines have not been missed since onboarding, removing penalties and interest from the routine.',
    'The owner now reviews a monthly P&L and makes pricing, staffing and menu decisions with confidence instead of gut feel.',
];

export const metadata: Metadata = {
    title: 'Restaurant & Hospitality Case Study | InvisorCPA',
    description:
        'See how InvisorCPA helped a family-owned Ontario restaurant clear four months of bookkeeping backlog, recover missed credits, file HST on time, and regain monthly profit clarity.',
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Restaurant & Hospitality Case Study | InvisorCPA',
        description:
            'A family-owned restaurant got current books, on-time HST filings, recovered credits, and clear monthly reporting with InvisorCPA.',
        url: pageUrl,
        siteName: 'InvisorCPA',
        locale: 'en_CA',
        type: 'article',
        images: [
            {
                url: '/assets/hero.png',
                width: 1120,
                height: 1120,
                alt: 'Restaurant bookkeeping case study by InvisorCPA',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Restaurant & Hospitality Case Study | InvisorCPA',
        description:
            'How InvisorCPA helped a family-owned restaurant get its evenings back and know its true profit.',
        images: ['/assets/hero.png'],
    },
};

export default function Page() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
            'How a Family-Owned Restaurant Got Its Evenings Back and Finally Knew Its True Profit',
        description: metadata.description,
        image: `https://www.invisorcpa.ca/assets/hero.png`,
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
            'Restaurant bookkeeping',
            'Hospitality accounting',
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
                            Case Study · Restaurant & Hospitality
                        </p>
                        <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl 2xl:text-6xl">
                            How a Family-Owned Restaurant Got Its Evenings Back
                        </h1>
                        <p className="max-w-3xl text-base leading-8 text-[#4F5565] sm:text-lg">
                            A busy family-owned restaurant was months behind on
                            its books and flying blind on cash flow. Invisor
                            cleared the backlog, kept every HST filing on time,
                            and turned messy numbers into decisions the owner
                            could actually act on.
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
                            src="/assets/hero.png"
                            alt="Restaurant owner reviewing financial reports after hours"
                            width={1120}
                            height={1120}
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
                                Curious what your numbers could be telling you?
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-white/80">
                                Most restaurant owners we meet are working
                                harder than their books are working for them.
                                Get a clear picture of where your money is
                                going without the midnight spreadsheet
                                sessions.
                            </p>
                            <Button
                                asChild
                                variant="secondary"
                                className="mt-6 rounded-full"
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
                            title="The books were four months behind, and profit was a guess"
                            description="Like many restaurant owners, this owner did not get into hospitality to wrangle spreadsheets. Between lunch rushes, dinner service, suppliers and staffing, the books kept slipping until tax season was close."
                            icon={Store}
                            items={challenges}
                        />

                        <CaseStudySection
                            eyebrow="The Solution"
                            title="A catch-up project first, then a monthly rhythm"
                            description="Invisor started by bringing the books current, then built a restaurant-specific bookkeeping system so the same problem would not return."
                            icon={FileCheck2}
                            items={solutions}
                        />

                        <CaseStudySection
                            eyebrow="The Results"
                            title="Current books, clearer decisions and evenings back"
                            description="Within weeks, the owner had numbers they could use to run the business instead of a backlog they had to work around."
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
                            &ldquo;Honestly, I used to dread month-end. Now I
                            get a report I actually understand, and I&apos;ve
                            stopped doing the books at midnight. I only wish
                            I&apos;d made the call a year sooner.&rdquo;
                        </p>
                        <footer className="mt-6 text-sm font-semibold text-[#596172]">
                            Owner, family-owned restaurant in Southwestern
                            Ontario
                        </footer>
                    </blockquote>

                    <div className="space-y-5">
                        <p className="text-secondary text-lg font-medium tracking-wide uppercase">
                            From Messy Books to Monthly Clarity
                        </p>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            The owner finally knew whether a busy month was a
                            profitable one.
                        </h2>
                        <p className="text-base leading-8 text-[#4F5565]">
                            Clean monthly reporting made food costs, supplier
                            charges, payroll and delivery-app commissions
                            visible. That gave the owner room to renegotiate,
                            price with confidence and stop treating month-end
                            like an after-hours emergency.
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                'Restaurant-specific chart of accounts',
                                'QuickBooks Online and POS integrations',
                                'Monthly P&L, balance sheet and cash-flow snapshot',
                                'HST, payroll, T4 and corporate tax compliance',
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
