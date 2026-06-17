import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    CircleDollarSign,
    ClipboardCheck,
    Clock,
    FileText,
    MessageCircle,
    ShieldCheck,
    TrendingUp,
    UsersRound,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl = 'https://www.invisorcpa.ca/services/outsourced-bookkeeping';

const comparisonRows = [
    {
        label: 'Annual cost',
        inHouse: '$55,000 - $85,000+ in salary, benefits and taxes',
        outsourced: 'A predictable monthly fee - usually far less',
    },
    {
        label: 'Software & training',
        inHouse: 'You pay for it',
        outsourced: 'Included in the workflow',
    },
    {
        label: 'Coverage if they leave',
        inHouse: 'Work stops until you re-hire',
        outsourced: 'A team covers you with no gap',
    },
    {
        label: 'Expertise',
        inHouse: "One person's knowledge",
        outsourced: 'CPA-level oversight plus multiple specialists',
    },
    {
        label: 'Management time',
        inHouse: 'You supervise the work',
        outsourced: 'We manage the bookkeeping cycle',
    },
];

const benefitCards = [
    {
        title: 'Lower, predictable cost',
        description:
            'A fixed monthly fee replaces salary, benefits, software and overhead.',
        icon: CircleDollarSign,
    },
    {
        title: 'No single point of failure',
        description:
            'A team keeps your books running even when one person is away.',
        icon: UsersRound,
    },
    {
        title: 'CPA-level expertise',
        description:
            "You get accountants' judgment, not just data entry, so issues get caught early.",
        icon: ShieldCheck,
    },
    {
        title: 'Scales with you',
        description:
            'Ramp services up or down as volume changes, with no hiring or layoffs.',
        icon: TrendingUp,
    },
    {
        title: 'Your time back',
        description:
            'Stop supervising books and spend the hours running and growing the business.',
        icon: Clock,
    },
    {
        title: 'Always compliant',
        description:
            'GST/HST, payroll and CRA deadlines are handled correctly and on time.',
        icon: ClipboardCheck,
    },
];

const includedServices = [
    'Transaction recording, categorization and coding',
    'Bank and credit-card reconciliations',
    'Accounts payable and receivable management',
    'GST/HST tracking and filing',
    'Payroll processing, source deductions, T4s and ROEs',
    'Monthly financial statements and reporting',
    'Year-end package prepared for your accountant - or handled by our in-house CPAs',
    'A dedicated point of contact who learns your business',
];

const rightFitItems = [
    'Spend hours each month on books instead of running the business',
    "Can't justify a full-time salary but have outgrown doing it yourself",
    'Want CPA oversight without paying for a CPA-level employee',
    'Need reliable, on-time reporting for lenders, investors or tax season',
    'Are tired of being the only person who knows where the numbers are',
];

const processSteps = [
    {
        title: 'Free consultation',
        description:
            'We learn your business, current setup and what needs to improve.',
    },
    {
        title: 'Onboarding & cleanup',
        description:
            'We connect your accounts, tidy any backlog and set a clean baseline.',
    },
    {
        title: 'Ongoing bookkeeping',
        description:
            'We run your books on a predictable monthly cycle with clear ownership.',
    },
    {
        title: 'Regular check-ins',
        description:
            'You get clear reports and we flag issues before they cost you.',
    },
];

const pricingRows = [
    {
        plan: 'Starter',
        cost: '$300 - $600/month',
        bestFor: 'Lower volume, simple needs',
    },
    {
        plan: 'Growth',
        cost: '$600 - $1,200/month',
        bestFor: 'Steady volume, payroll',
    },
    {
        plan: 'Scale',
        cost: '$1,200 - $2,500+/month',
        bestFor: 'Higher volume, multiple accounts',
    },
];

const faqs = [
    {
        question: 'Is outsourced bookkeeping cheaper than hiring in-house?',
        answer: 'For most small and mid-sized businesses, yes. A full-time in-house bookkeeper in Canada typically costs $55,000-$85,000 a year once you include salary, benefits, payroll taxes, software and training. Outsourcing is a predictable monthly fee with all of that included, and you get a full team rather than a single employee - usually for a fraction of the total cost.',
    },
    {
        question: 'Will I lose control of my finances if I outsource?',
        answer: 'No. You keep full ownership of your accounts and data, and you see the same live numbers we do through your cloud accounting software. You actually gain visibility because your books stay current and you get clear monthly reports instead of waiting until year-end.',
    },
    {
        question: 'Is it safe to outsource my bookkeeping?',
        answer: 'Yes. Your data stays in secure, encrypted cloud platforms that you own, and access is controlled. With a Canadian CPA firm like Invisor, your information stays onshore and is handled under Canadian privacy and professional standards - not sent offshore.',
    },
    {
        question: "Can you take over bookkeeping that's behind or messy?",
        answer: 'Yes. We regularly take on businesses with months or years of backlog, clean up the records, reconcile everything and set a reliable baseline before moving to ongoing monthly bookkeeping.',
    },
    {
        question: 'Do you outsource the work overseas?',
        answer: 'No. Your books are handled by our Canadian team, with CPA oversight. You get a dedicated point of contact you can call or email - not an anonymous offshore queue.',
    },
];

export const metadata: Metadata = {
    title: 'Outsourced Bookkeeping Services in Canada | Invisor CPA',
    description:
        'Outsource your bookkeeping to a Canadian CPA team for less than hiring in-house. CRA-compliant books, monthly reports, fixed monthly fees. Get a free quote.',
    keywords: [
        'outsourced bookkeeping services',
        'bookkeeping outsourcing services',
        'outsource bookkeeping Canada',
        'outsourced bookkeeping for small business',
        'in-house vs outsourced bookkeeping',
    ],
    alternates: {
        canonical: pageUrl,
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Outsourced Bookkeeping Services in Canada | Invisor CPA',
        description:
            'Outsource your bookkeeping to a Canadian CPA team for less than hiring in-house, with CRA-compliant books and fixed monthly fees.',
        url: pageUrl,
        siteName: 'Invisor CPA',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: '/assets/banners/banner-4.webp',
                width: 1200,
                height: 630,
                alt: 'Outsourced bookkeeping services for Canadian businesses by Invisor CPA',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Outsourced Bookkeeping Services in Canada | Invisor CPA',
        description:
            'Outsource your bookkeeping to a Canadian CPA team for less than hiring in-house, with CRA-compliant books and fixed monthly fees.',
        images: ['/assets/banners/banner-4.webp'],
    },
};

export default function Page() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'AccountingService',
                '@id': `${pageUrl}#accountingservice`,
                name: 'Invisor CPA',
                url: 'https://www.invisorcpa.ca',
                image: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
                logo: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
                telephone: '+1-226-227-3482',
                email: 'connect@invisorcpa.ca',
                priceRange: '$$',
                address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'ON',
                    addressCountry: 'CA',
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Canada',
                },
            },
            {
                '@type': 'Service',
                '@id': `${pageUrl}#service`,
                name: 'Outsourced Bookkeeping Services in Canada',
                serviceType: 'Outsourced Bookkeeping Services',
                provider: {
                    '@id': `${pageUrl}#accountingservice`,
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Canada',
                },
                description:
                    'Outsourced bookkeeping services for Canadian businesses including transaction coding, reconciliations, payroll, GST/HST filing, monthly reporting and CPA oversight.',
                url: pageUrl,
            },
            {
                '@type': 'FAQPage',
                '@id': `${pageUrl}#faq`,
                mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                    },
                })),
            },
        ],
    };

    return (
        <main className="pb-10">
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
                <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Outsourced Bookkeeping
                        </p>
                        <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                            Outsourced Bookkeeping Services for Canadian
                            Businesses
                        </h1>
                        <p className="max-w-3xl text-base leading-7 text-[#4F5565] sm:text-lg sm:leading-8">
                            Hiring a full-time bookkeeper costs most Canadian
                            businesses well over $55,000 a year once you add
                            benefits, software and the time spent managing
                            them. Outsourcing the same work to Invisor costs a
                            predictable monthly fee, and you get a whole CPA
                            team instead of a single hire who might quit.
                        </p>
                        <p className="max-w-3xl text-base leading-7 text-[#4F5565] sm:text-lg sm:leading-8">
                            We become your bookkeeping department: your books
                            stay accurate, CRA-compliant and current, without
                            the payroll, the recruiting, or the worry about who
                            covers the work when someone is away.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/lp/bookkeeping-ontario#hero-form">
                                    Get a Free Quote
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full"
                            >
                                <Link href="#cost-comparison">
                                    Compare the Cost vs Hiring
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-5 rounded-[2rem] bg-[#EAF4FF] p-5 shadow-sm">
                        <Image
                            src="/assets/banners/banner-4.webp"
                            alt="Invisor CPA team handling outsourced bookkeeping for a Canadian business"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full rounded-[1.5rem] object-cover"
                            loading="eager"
                        />
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                {
                                    title: '$55k+',
                                    text: 'Typical annual in-house cost before management time.',
                                },
                                {
                                    title: 'Fixed fee',
                                    text: 'Predictable monthly bookkeeping cost.',
                                },
                                {
                                    title: 'CPA-led',
                                    text: 'Canadian team with professional oversight.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-3xl bg-white p-4"
                                >
                                    <p className="text-primary text-2xl font-bold">
                                        {item.title}
                                    </p>
                                    <p className="mt-2 text-sm text-[#596172]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="cost-comparison"
                className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24"
            >
                <div className="mb-10 max-w-3xl">
                    <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                        In-House vs. Outsourced Bookkeeping: The Real Cost
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        Most owners assume hiring someone in-house gives them
                        more control for less money. Once you add up the true
                        cost, the math usually says otherwise. Here is an honest
                        side-by-side for a typical Canadian small business.
                    </p>
                </div>

                <div className="overflow-hidden rounded-[1.75rem] border border-[#DCE6F2] bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] text-left">
                            <thead className="bg-[#0E172A] text-white">
                                <tr>
                                    <th className="px-5 py-4 text-sm font-semibold">
                                        Comparison point
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold">
                                        In-house bookkeeper
                                    </th>
                                    <th className="px-5 py-4 text-sm font-semibold">
                                        Outsourced to Invisor
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr
                                        key={row.label}
                                        className="border-t border-[#E6EEF7]"
                                    >
                                        <td className="text-primary bg-[#F4F8FC] px-5 py-5 font-semibold">
                                            {row.label}
                                        </td>
                                        <td className="px-5 py-5 text-[#596172]">
                                            {row.inHouse}
                                        </td>
                                        <td className="px-5 py-5 text-[#263143]">
                                            {row.outsourced}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="mt-6 max-w-4xl text-base leading-8 text-[#4F5565]">
                    For most small and growing businesses, outsourcing delivers
                    the same work - often better - for a fraction of the all-in
                    cost of an employee.
                </p>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="mb-10 max-w-3xl">
                    <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                        Why Canadian Businesses Outsource Their Bookkeeping?
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        Each benefit maps to a real pressure point in the
                        in-house-versus-outsource decision: cost, continuity,
                        expertise, scalability, time and compliance.
                    </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {benefitCards.map((card) => {
                        const Icon = card.icon;

                        return (
                            <article
                                key={card.title}
                                className="rounded-[1.75rem] border border-[#DCE6F2] bg-white p-6 shadow-sm"
                            >
                                <div className="bg-primary/10 text-primary mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-primary text-xl font-semibold">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[#596172]">
                                    {card.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="bg-[#E9F6FB] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="space-y-5">
                        <Image
                            src="/assets/banners/banner-6.webp"
                            alt="Cloud bookkeeping records organized by Invisor CPA for Canadian businesses"
                            width={1600}
                            height={1100}
                            className="h-[360px] w-full rounded-[2rem] object-cover object-bottom shadow-sm"
                        />
                        <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                            <h3 className="text-primary text-lg font-semibold">
                                A full bookkeeping department, without the hire
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#596172]">
                                We handle the same duties an in-house bookkeeper
                                would, backed by a Canadian CPA team and a
                                dedicated point of contact.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            What Is Included When You Outsource to Invisor?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            We act as your full bookkeeping department -
                            everything an in-house hire would do, handled by our
                            team.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {includedServices.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-3xl bg-white p-4 text-sm text-[#263143] shadow-sm"
                                >
                                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div className="rounded-[2rem] bg-[#FFF7ED] p-6">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Is Outsourced Bookkeeping Right for Your Business?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Outsourcing is not for everyone, and we would rather
                            be honest about that. If your business is large
                            enough to keep a finance team fully busy and you
                            value having someone physically in-house, an
                            internal hire can make sense.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            For most small and mid-sized Canadian businesses,
                            outsourcing wins on cost and reliability.
                        </p>
                    </div>
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                        <h3 className="text-primary text-xl font-semibold">
                            It is usually the right call if you:
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {rightFitItems.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-[#263143]"
                                >
                                    <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/services/bookkeeping-services"
                                className="rounded-full border border-[#DCE6F2] px-4 py-2 text-sm font-medium text-[#263143] transition-colors hover:border-[#B8D2F0] hover:bg-[#F8FBFF]"
                            >
                                Bookkeeping services
                            </Link>
                            <Link
                                href="/services/small-business-bookkeeping-services-ontario"
                                className="rounded-full border border-[#DCE6F2] px-4 py-2 text-sm font-medium text-[#263143] transition-colors hover:border-[#B8D2F0] hover:bg-[#F8FBFF]"
                            >
                                Ontario small businesses
                            </Link>
                            <Link
                                href="/services/outsourced-fractional-cfo-and-part-time-controller"
                                className="rounded-full border border-[#DCE6F2] px-4 py-2 text-sm font-medium text-[#263143] transition-colors hover:border-[#B8D2F0] hover:bg-[#F8FBFF]"
                            >
                                Fractional CFO support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            How Outsourcing Your Books Works?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Getting started is structured, practical and built
                            around keeping your books moving without disrupting
                            your business.
                        </p>
                        <div className="mt-8 space-y-5">
                            {processSteps.map((step, index) => (
                                <article
                                    key={step.title}
                                    className="rounded-[1.5rem] bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="bg-primary/10 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold">
                                            {(index + 1)
                                                .toString()
                                                .padStart(2, '0')}
                                        </span>
                                        <div>
                                            <h3 className="text-primary text-lg font-semibold">
                                                {step.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-7 text-[#596172] sm:text-base">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <Image
                        src="/assets/our-process.webp"
                        alt="Invisor CPA outsourced bookkeeping process for Canadian businesses"
                        width={1600}
                        height={1200}
                        className="h-[560px] w-full rounded-[2rem] object-cover shadow-sm"
                    />
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div className="rounded-[2rem] bg-[#FFF7ED] p-6">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            How Much Does Outsourced Bookkeeping Cost?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Outsourced bookkeeping is priced as a monthly fee
                            based on your transaction volume and the services
                            you need - not an hourly rate that balloons. For
                            most Canadian small businesses, it lands far below
                            the all-in cost of an in-house hire.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Compare that to $55,000+ a year for an employee.
                            Tell us about your business and we will send a flat
                            monthly quote.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button asChild className="rounded-full">
                                <Link href="/contact-us">
                                    Get Your Free Quote
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full bg-white"
                            >
                                <Link href="/pricing">
                                    View Pricing
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] border border-[#DCE6F2] bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[680px] text-left">
                                <thead className="bg-[#0E172A] text-white">
                                    <tr>
                                        <th className="px-5 py-4 text-sm font-semibold">
                                            Plan
                                        </th>
                                        <th className="px-5 py-4 text-sm font-semibold">
                                            Typical monthly cost
                                        </th>
                                        <th className="px-5 py-4 text-sm font-semibold">
                                            Best for
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricingRows.map((row) => (
                                        <tr
                                            key={row.plan}
                                            className="border-t border-[#E6EEF7]"
                                        >
                                            <td className="text-primary bg-[#F4F8FC] px-5 py-5 font-semibold">
                                                {row.plan}
                                            </td>
                                            <td className="px-5 py-5 text-[#263143]">
                                                {row.cost}
                                            </td>
                                            <td className="px-5 py-5 text-[#596172]">
                                                {row.bestFor}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="faq"
                className="bg-[#F4F8FC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24"
            >
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-[2rem] bg-[linear-gradient(160deg,#0E172A_0%,#123A6B_65%,#1E5C94_100%)] p-8 text-white shadow-sm lg:sticky lg:top-8 lg:h-fit">
                        <p className="text-sm font-semibold tracking-[0.24em] text-white/70 uppercase">
                            FAQs
                        </p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/80">
                            Answers to the questions Canadian business owners
                            usually ask before deciding whether to outsource
                            their bookkeeping or hire in-house.
                        </p>
                        <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                            <div className="flex items-start gap-3">
                                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-white/80" />
                                <p className="text-sm leading-7 text-white/80">
                                    Need an answer specific to your business?
                                    Schedule a consultation and we will review
                                    your bookkeeping volume, software and
                                    reporting needs.
                                </p>
                            </div>
                          <Link
                                href="/new-clients"
                                className="mt-5 inline-flex h-9 items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium whitespace-nowrap text-[#0E172A] shadow-xs transition-all outline-none hover:bg-white/90 focus-visible:border-white focus-visible:ring-3 focus-visible:ring-white/50"
                            >
                                Ask About Your Situation
                                <ArrowRight className="h-4 w-4 shrink-0" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                className="group rounded-[1.75rem] border border-[#DCE6F2] bg-white p-1 shadow-sm transition-all duration-300 ease-out open:border-[#B8D2F0] open:shadow-md"
                                open={index === 0}
                            >
                                <summary className="flex cursor-pointer list-none items-start gap-4 rounded-[1.5rem] px-5 py-5 transition-colors duration-300 group-open:bg-[#F8FBFF]">
                                    <span className="bg-primary/10 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold transition-transform duration-300 ease-out group-open:scale-105">
                                        {(index + 1)
                                            .toString()
                                            .padStart(2, '0')}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="text-primary block text-base font-semibold transition-colors duration-300 group-open:text-[#123A6B] sm:text-lg">
                                            {faq.question}
                                        </span>
                                    </span>
                                    <span className="relative mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF5FB] transition-transform duration-300 ease-out group-open:rotate-180 group-open:bg-[#DCEBFA]">
                                        <span className="absolute h-0.5 w-4 rounded-full bg-[#123A6B]" />
                                        <span className="absolute h-4 w-0.5 rounded-full bg-[#123A6B] transition-transform duration-200 group-open:scale-y-0" />
                                    </span>
                                </summary>
                                <div className="grid grid-rows-[0fr] px-5 pl-[4.75rem] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-open:grid-rows-[1fr] group-open:opacity-100 max-sm:pl-5">
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#E6EEF7] pt-4 pb-5">
                                            <p className="text-sm leading-7 text-[#596172] sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 md:py-16 lg:px-16 xl:px-24">
                <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#0E172A_0%,#123A6B_100%)] p-8 text-white sm:p-10 lg:p-14">
                    <div className="max-w-4xl">
                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                            <FileText className="h-5 w-5" />
                        </div>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Get a Whole Bookkeeping Team for Less Than the Cost
                            of One Hire.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                            Request a free, no-pressure quote and we will show
                            you exactly what outsourcing would look like for
                            your business.
                        </p>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-[#0E172A] hover:bg-white/90"
                            >
                                <Link href="/contact-us">
                                    Get Your Free Quote
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
