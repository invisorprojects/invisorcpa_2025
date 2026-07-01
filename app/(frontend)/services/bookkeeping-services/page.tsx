import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    BarChart3,
    CalendarCheck2,
    CheckCircle2,
    ChevronRight,
    ClipboardCheck,
    Cloud,
    FileText,
    Landmark,
    MessageCircle,
    ReceiptText,
    ShieldCheck,
    UserRoundCheck,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl = 'https://www.invisorcpa.ca/services/bookkeeping-services';

const valueCards = [
    {
        title: 'Always up to date',
        description:
            'Your transactions are categorized and reconciled every month, not in a panic each spring.',
        icon: CalendarCheck2,
    },
    {
        title: 'CRA-compliant, always',
        description:
            'GST/HST and payroll handled correctly, so filings are on time and penalty-free.',
        icon: ShieldCheck,
    },
    {
        title: 'Real reports you understand',
        description:
            'A plain-English profit & loss, balance sheet and cash-flow summary every month.',
        icon: BarChart3,
    },
    {
        title: 'A real person, not a portal',
        description:
            'You get a named bookkeeper who knows your business, not a ticket queue.',
        icon: UserRoundCheck,
    },
];

const bookkeepingIncludes = [
    'Transaction categorization and coding',
    'Bank and credit-card reconciliations',
    'Monthly financial statements - profit & loss, balance sheet, cash flow',
    'GST/HST and PST filing',
    'Payroll processing, T4s and ROEs',
    'Accounts payable and receivable tracking',
    'Expense and receipt management',
    'Year-end financial package prepared for your accountant',
    'QuickBooks Online and Xero setup and management',
];

const childServices = [
    {
        title: 'Monthly & Quarterly Bookkeeping',
        description: 'Ongoing, done-for-you books.',
        href: '/services/monthly-quarterly-bookkeeping',
        icon: CalendarCheck2,
    },
    {
        title: 'Catch-Up Bookkeeping',
        description: "Behind on your books? We'll bring them current.",
        href: '/services/catch-up-bookkeeping-services',
        icon: ClipboardCheck,
    },
    {
        title: 'Payroll Management',
        description: 'Accurate, on-time pay runs and remittances.',
        href: '/services/payroll-management-services',
        icon: ReceiptText,
    },
    {
        title: 'Cloud & Online Bookkeeping',
        description: 'Fully remote, real-time books from anywhere in Canada.',
        href: '/services/cloud-bookkeeping',
        icon: Cloud,
    },
    {
        title: 'Small Business Bookkeeping',
        description: 'Packages built for owner-operators.',
        href: '/services/bookkeeping-services',
        icon: Landmark,
    },
];

const processSteps = [
    {
        title: 'Free consultation',
        description:
            'We learn about your business, your software and where things stand today.',
    },
    {
        title: 'Setup & cleanup',
        description:
            'We connect your accounts, tidy any backlog and set up your chart of accounts.',
    },
    {
        title: 'Monthly bookkeeping',
        description:
            'We categorize, reconcile and file on a set schedule you can count on.',
    },
    {
        title: "Reports you'll actually read",
        description:
            "Clear monthly statements land in your inbox, and we're a call away.",
    },
];

const pricingRows = [
    {
        level: 'Essential',
        cost: '$200 - $500/month',
        bestFor: 'Sole proprietors, low volume',
    },
    {
        level: 'Advanced',
        cost: '$500 - $1,200/month',
        bestFor: 'Growing incorporated businesses',
    },
    {
        level: 'Premium',
        cost: '$1,200 - $2,500/month',
        bestFor: 'Higher volume, payroll, multiple accounts',
    },
];

const faqs = [
    {
        question: "What's the difference between bookkeeping and accounting?",
        answer: 'Bookkeeping is the day-to-day work of recording and organizing your transactions - categorizing income and expenses, reconciling accounts, running payroll and filing GST/HST. Accounting builds on those records: year-end statements, tax filing and strategic advice, usually handled by a CPA. In short, your bookkeeper keeps the foundation accurate so your accountant can do their job without expensive cleanup. At Invisor, we do both, so nothing falls through the cracks.',
    },
    {
        question: 'How much do bookkeeping services cost in Canada?',
        answer: 'For most Canadian small businesses, bookkeeping runs between $200 and $2,500 a month depending on transaction volume, payroll and complexity. Freelancers may charge $30-$90 an hour, while flat monthly packages give you a predictable cost. We quote a flat monthly rate so you always know what you will pay.',
    },
    {
        question: 'Do I still need a bookkeeper if I use QuickBooks or Xero?',
        answer: "Software automates data entry, but it doesn't guarantee your books are right. A professional makes sure transactions are categorized correctly, accounts actually reconcile and your filings are compliant. We use QuickBooks Online and Xero and manage them for you, so you get the software's speed plus expert oversight.",
    },
    {
        question: "How do I know it's time to outsource my bookkeeping?",
        answer: "If you're spending more than a few hours a month on your books, falling behind on reconciliations, unsure of your cash position, or heading into tax season with messy records - it's time. Most owners hand it off well before it becomes a year-end emergency.",
    },
    {
        question: 'Do you work with businesses outside Ontario?',
        answer: 'Yes. While our offices are in London and Fergus, Ontario, we work with small businesses across Canada through secure cloud accounting. Your books, reports and filings are handled entirely online, with a real Canadian bookkeeper you can call.',
    },
    {
        question: 'Is my financial data safe?',
        answer: 'Your data is protected with bank-level encryption inside trusted cloud platforms, and it always belongs to you. If you ever move on, we hand over full account ownership and your complete history - no lock-in.',
    },
];

export const metadata: Metadata = {
    title: 'Bookkeeping Services in Canada | Invisor CPA',
    description:
        'Professional bookkeeping services for Canadian small businesses. Accurate, CRA-compliant books, monthly reports and GST/HST filing. Get a free quote.',
    keywords: [
        'bookkeeping services',
        'bookkeeping services for small business',
        'bookkeeping services near me',
        'accounting and bookkeeping services',
        'small business bookkeeping services',
        'bookkeeping services canada',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Bookkeeping Services in Canada | Invisor CPA',
        description:
            'Professional bookkeeping services for Canadian small businesses. Accurate, CRA-compliant books, monthly reports and GST/HST filing.',
        url: pageUrl,
        siteName: 'Invisor CPA',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: '/assets/banners/banner-4.webp',
                width: 1200,
                height: 630,
                alt: 'Bookkeeping services for Canadian small businesses by Invisor CPA',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Bookkeeping Services in Canada | Invisor CPA',
        description:
            'Professional bookkeeping services for Canadian small businesses. Accurate, CRA-compliant books, monthly reports and GST/HST filing.',
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
                name: 'Bookkeeping Services in Canada',
                serviceType: 'Bookkeeping services',
                provider: {
                    '@id': `${pageUrl}#accountingservice`,
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Canada',
                },
                description:
                    'Professional bookkeeping services for Canadian small businesses including monthly reports, reconciliations, payroll, GST/HST filing, and CRA-ready records.',
                url: pageUrl,
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Bookkeeping Services',
                    itemListElement: childServices.map((service) => ({
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: service.title,
                            description: service.description,
                            url: `https://www.invisorcpa.ca${service.href}`,
                        },
                    })),
                },
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
                        <h1 className="text-primary text-3xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                            Bookkeeping Services for Canadian Small Businesses
                        </h1>
                        <p className="max-w-3xl text-base leading-7 text-[#4F5565] sm:text-lg sm:leading-8">
                            Running a business is hard enough without chasing
                            receipts at midnight. Invisor keeps your books
                            accurate, current and ready for the CRA - so you
                            always know where your money stands and never
                            scramble at tax time. Based in London and Fergus,
                            Ontario, we work with small businesses right across
                            Canada through secure cloud accounting.
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
                                <Link href="/new-clients">
                                    Book a 15-Minute Call
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-5 rounded-[2rem] bg-[#EAF4FF] p-5 shadow-sm">
                        <Image
                            src="/assets/banners/banner-4.webp"
                            alt="Invisor CPA bookkeeper reviewing cloud bookkeeping reports for a Canadian small business"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full rounded-[1.5rem] object-cover"
                            loading="eager"
                        />
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                {
                                    title: 'Current',
                                    text: 'Books kept up to date every month.',
                                },
                                {
                                    title: 'Clear',
                                    text: 'Reports written for owner decisions.',
                                },
                                {
                                    title: 'CRA-ready',
                                    text: 'Records organized before tax time.',
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

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="mb-10 max-w-3xl">
                    <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                        Why Businesses Choose Invisor?
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        Most owners do not come to us because they love
                        spreadsheets. They come because they are behind, unsure
                        if their numbers are right, or tired of spending
                        evenings on data entry. Here is what changes when we
                        take over your books:
                    </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {valueCards.map((card) => {
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
                            alt="Cloud accounting records organized for Canadian bookkeeping services"
                            width={1600}
                            height={1100}
                            className="h-[360px] w-full rounded-[2rem] object-cover object-bottom shadow-sm"
                        />
                        <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                            <h3 className="text-primary text-lg font-semibold">
                                Clean books, cleaner year-end
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#596172]">
                                Whether you are a sole proprietor or running an
                                incorporated company with staff, our bookkeeping
                                covers the day-to-day work that keeps your
                                finances clean and your accountant happy at
                                year-end.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            What Our Bookkeeping Services Include?
                        </h2>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {bookkeepingIncludes.map((item) => (
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
                <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Bookkeeping Built Around Your Business
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            No two businesses keep their books the same way, so
                            we offer a few ways to work together. Each service
                            links to a dedicated page as part of this
                            bookkeeping hub.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="rounded-full">
                        <Link href="/new-clients">
                            Ask Which Service Fits
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                    {childServices.map((service) => {
                        const Icon = service.icon;

                        return (
                            <Link
                                key={service.href}
                                href={service.href}
                                className="group rounded-[1.75rem] border border-[#DCE6F2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8D2F0] hover:shadow-md"
                            >
                                <div className="bg-primary/10 text-primary mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-primary text-xl font-semibold">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[#596172]">
                                    {service.description}
                                </p>
                                <span className="text-primary mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                                    Learn more
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            How It Works?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Getting started takes about a week. Here is the
                            process:
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
                        alt="Invisor CPA bookkeeping process for Canadian small businesses"
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
                            How Much Do Bookkeeping Services Cost?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Pricing is one of the first things owners search
                            for, and being upfront builds trust. There is no
                            single price because it depends on your transaction
                            volume, payroll and how far behind the books are -
                            but here is an honest range for Canadian small
                            businesses so you can budget with confidence.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Want an exact number? Tell us a little about your
                            business and we will send a flat-rate quote with no
                            surprises.
                        </p>
                        <Button asChild className="mt-6 rounded-full">
                            <Link href="/lp/bookkeeping-ontario#hero-form">
                                Get Your Free Quote
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="overflow-hidden rounded-[1.75rem] border border-[#DCE6F2] bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[680px] text-left">
                                <thead className="bg-[#0E172A] text-white">
                                    <tr>
                                        <th className="px-5 py-4 text-sm font-semibold">
                                            Service level
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
                                            key={row.level}
                                            className="border-t border-[#E6EEF7]"
                                        >
                                            <td className="text-primary bg-[#F4F8FC] px-5 py-5 font-semibold">
                                                {row.level}
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
                            Each question targets a real concern we hear from
                            Canadian business owners comparing bookkeeping
                            software, outsourced service, pricing and CRA
                            readiness.
                        </p>
                        <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                            <div className="flex items-start gap-3">
                                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-white/80" />
                                <p className="text-sm leading-7 text-white/80">
                                    Need an answer specific to your business?
                                    Schedule a consultation and we will review
                                    your bookkeeping process, reporting needs
                                    and compliance risks directly.
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
                            Spend Less Time on Your Books and More Time on Your
                            Business.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                            Get a free, no-pressure quote and see what
                            dependable bookkeeping feels like.
                        </p>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-[#0E172A] hover:bg-white/90"
                            >
                                <Link href="/lp/bookkeeping-ontario#hero-form">
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
