import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Banknote,
    CheckCircle2,
    ChevronRight,
    Cloud,
    DatabaseBackup,
    FileText,
    Laptop,
    LockKeyhole,
    MessageCircle,
    ReceiptText,
    RefreshCcw,
    Smartphone,
    UsersRound,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl = 'https://www.invisorcpa.ca/services/cloud-bookkeeping';

const benefitCards = [
    {
        title: 'See your numbers anytime',
        description:
            'Check cash flow, invoices and reports from any device, anywhere in Canada.',
        icon: Smartphone,
    },
    {
        title: 'Always backed up',
        description:
            'Your data is stored and continuously backed up in the cloud, not on a laptop that can be lost or fail.',
        icon: DatabaseBackup,
    },
    {
        title: 'Bank-level security',
        description:
            'Encrypted platforms keep your financial data safer than files emailed around or kept on a local drive.',
        icon: LockKeyhole,
    },
    {
        title: 'Real-time, not year-end',
        description:
            "Books are kept current every month, so you make decisions on today's numbers.",
        icon: RefreshCcw,
    },
    {
        title: 'Less admin for you',
        description:
            'Automatic bank feeds and digital receipt capture cut the manual data entry.',
        icon: ReceiptText,
    },
    {
        title: 'One source of truth',
        description:
            'You, your bookkeeper and your accountant all work in the same live file.',
        icon: UsersRound,
    },
];

const serviceIncludes = [
    'Bank and credit-card feeds connected and reconciled',
    'Transaction categorization and coding',
    'Digital receipt and document capture with Dext or Hubdoc',
    'Monthly financial statements - profit & loss, balance sheet, cash flow',
    'GST/HST tracking and filing',
    'Payroll processing and remittances',
    'Accounts payable and receivable management',
    'Year-end package prepared for your accountant',
    'A dedicated bookkeeper you can actually reach',
];

const softwareTools = [
    {
        title: 'QuickBooks Online',
        description:
            'Our most popular platform; ideal for most small businesses.',
        icon: Laptop,
    },
    {
        title: 'Xero',
        description:
            'A strong choice for growing and product-based businesses.',
        icon: Cloud,
    },
    {
        title: 'Dext & Hubdoc',
        description:
            'Automated receipt and bill capture, so paperwork handles itself.',
        icon: ReceiptText,
    },
    {
        title: 'Plooto',
        description: 'Streamlined, trackable bill payments.',
        icon: Banknote,
    },
];

const processSteps = [
    {
        title: 'Free consultation',
        description:
            'We review your current setup and where your books stand today.',
    },
    {
        title: 'Setup & migration',
        description:
            'We connect your accounts, move your data into the cloud and tidy any backlog.',
    },
    {
        title: 'Live monthly bookkeeping',
        description:
            'We categorize, reconcile and file on a predictable schedule.',
    },
    {
        title: "Reports you'll read",
        description:
            'Clear statements each month, with your bookkeeper a call or message away.',
    },
];

const pricingRows = [
    {
        plan: 'Starter',
        cost: '$200 - $450 / month',
        bestFor: 'Sole proprietors, low volume',
    },
    {
        plan: 'Growth',
        cost: '$450 - $1,000 / month',
        bestFor: 'Incorporated, steady volume',
    },
    {
        plan: 'Scale',
        cost: '$1,000 - $2,000+ / month',
        bestFor: 'Higher volume + payroll',
    },
];

const faqs = [
    {
        question: 'Is cloud bookkeeping secure?',
        answer: "Yes - and in most cases it's safer than traditional bookkeeping. Platforms like QuickBooks Online and Xero use bank-level encryption, and your data is continuously backed up in the cloud rather than sitting on a single computer that could be lost, stolen or fail. Your information always belongs to you, and access is protected by secure logins.",
    },
    {
        question:
            "What's the difference between cloud bookkeeping and regular bookkeeping?",
        answer: 'The bookkeeping work is the same; where it happens is different. Traditional bookkeeping often lives in a desktop file or spreadsheet on one machine, updated periodically. Cloud bookkeeping runs in online software with automatic bank feeds, so your books stay current in real time and you and your bookkeeper see the same live numbers from anywhere.',
    },
    {
        question: 'Which cloud accounting software is best?',
        answer: "For most Canadian small businesses, QuickBooks Online is the best all-round choice, while Xero suits many growing and product-based businesses. The honest answer is that the right software depends on your industry, size and how you invoice. We're certified in both and will recommend the fit that's right for you, not the one that's easiest for us.",
    },
    {
        question: 'Can you move my existing books to the cloud?',
        answer: "Yes. Whether you're on desktop software, spreadsheets or paper, we migrate your data, set up your chart of accounts and run things in parallel where it helps, so the switch is smooth and nothing falls through the cracks.",
    },
    {
        question: 'Do you offer cloud bookkeeping outside Ontario?',
        answer: 'Absolutely. Because everything runs in the cloud, we serve businesses right across Canada. Our offices are in London and Fergus, Ontario, but your books, reports and filings are handled entirely online with a dedicated Canadian bookkeeper you can call or message.',
    },
];

export const metadata: Metadata = {
    title: 'Cloud Bookkeeping Services Across Canada | Invisor CPA',
    description:
        'Secure cloud bookkeeping services for Canadian businesses. Real-time books in QuickBooks Online & Xero, monthly reports and a dedicated bookkeeper. Free quote.',
    keywords: [
        'cloud bookkeeping services',
        'cloud based bookkeeping services',
        'cloud accounting and bookkeeping',
        'online cloud bookkeeping',
        'QuickBooks Online bookkeeping',
        'Xero bookkeeping Canada',
    ],
    alternates: {
        canonical: pageUrl,
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Cloud Bookkeeping Services Across Canada | Invisor CPA',
        description:
            'Secure cloud bookkeeping services for Canadian businesses with real-time books, monthly reports and a dedicated bookkeeper.',
        url: pageUrl,
        siteName: 'Invisor CPA',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: '/assets/banners/banner-4.webp',
                width: 1200,
                height: 630,
                alt: 'Cloud bookkeeping services for Canadian businesses by Invisor CPA',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cloud Bookkeeping Services Across Canada | Invisor CPA',
        description:
            'Secure cloud bookkeeping services for Canadian businesses with real-time books, monthly reports and a dedicated bookkeeper.',
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
                name: 'Cloud Bookkeeping Services Across Canada',
                serviceType: 'Cloud Bookkeeping Services',
                provider: {
                    '@id': `${pageUrl}#accountingservice`,
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Canada',
                },
                description:
                    'Secure cloud bookkeeping services for Canadian businesses using QuickBooks Online, Xero, Dext, Hubdoc and Plooto.',
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
                            Online Cloud Bookkeeping
                        </p>
                        <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                            Cloud Bookkeeping Services for Businesses Across
                            Canada
                        </h1>
                        <p className="max-w-3xl text-base leading-7 text-[#4F5565] sm:text-lg sm:leading-8">
                            See exactly where your business stands - from your
                            desk, your phone, or a cabin in Muskoka. Invisor
                            runs your books entirely in the cloud, so your
                            numbers are always current, always backed up, and
                            always a click away. No dropped-off shoeboxes, no
                            wondering which version is latest, and no waiting
                            until year-end to find out how you did.
                        </p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/contact-us">
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
                                <Link href="/contact-us">
                                    Book a 15-Minute Call
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-5 rounded-[2rem] bg-[#EAF4FF] p-5 shadow-sm">
                        <Image
                            src="/assets/banners/banner-4.webp"
                            alt="Invisor CPA bookkeeper reviewing cloud bookkeeping reports for a Canadian business"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full rounded-[1.5rem] object-cover"
                            loading="eager"
                        />
                        <div className="grid gap-4 sm:grid-cols-3">
                            {[
                                {
                                    title: 'Real-time',
                                    text: 'Books updated on a consistent monthly cycle.',
                                },
                                {
                                    title: 'Secure',
                                    text: 'Cloud platforms with encrypted access and backups.',
                                },
                                {
                                    title: 'Reachable',
                                    text: 'A dedicated Canadian bookkeeper you can call.',
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
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            What Is Cloud Bookkeeping?
                        </h2>
                        <div className="mt-5 space-y-4 text-base leading-8 text-[#4F5565]">
                            <p>
                                Cloud bookkeeping means your financial records
                                live in secure online software like QuickBooks
                                Online or Xero instead of a desktop file or a
                                spreadsheet on one computer. Your bank feeds
                                connect automatically, receipts are captured
                                digitally, and your bookkeeper works in the same
                                live file you can see any time.
                            </p>
                            <p>
                                For you, that means three things: you can check
                                your numbers from anywhere, your data is
                                continuously backed up, and the work happens in
                                real time rather than in a once-a-year scramble.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                        <ul className="space-y-4">
                            {[
                                'Nothing is trapped on a single machine',
                                'No file version confusion between owner and bookkeeper',
                                'No paper receipt piles waiting until year-end',
                                'Current reports available when you need them',
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 text-[#263143]"
                                >
                                    <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="mb-10 max-w-3xl">
                    <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                        Why Canadian Businesses Switch to Cloud Bookkeeping
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        Cloud accounting gives owners faster access to cleaner
                        books without creating more admin. Here is what changes
                        when your bookkeeping runs online.
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
                            alt="Cloud accounting software dashboard for Canadian bookkeeping services"
                            width={1600}
                            height={1100}
                            className="h-[360px] w-full rounded-[2rem] object-cover object-bottom shadow-sm"
                        />
                        <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                            <h3 className="text-primary text-lg font-semibold">
                                Clean books, handled online
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#596172]">
                                Everything you need to keep clean, compliant
                                books is handled for you in the cloud, with a
                                dedicated bookkeeper who understands your
                                business.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            What Our Cloud Bookkeeping Service Includes
                        </h2>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {serviceIncludes.map((item) => (
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
                            The Software We Work With
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            We are certified in the tools Canadian businesses
                            actually use, and we recommend the right fit rather
                            than forcing one platform on you.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="rounded-full">
                        <Link href="/services/bookkeeping-services">
                            Explore Bookkeeping Services
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {softwareTools.map((tool) => {
                        const Icon = tool.icon;

                        return (
                            <article
                                key={tool.title}
                                className="rounded-[1.75rem] border border-[#DCE6F2] bg-white p-6 shadow-sm"
                            >
                                <div className="bg-primary/10 text-primary mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-primary text-xl font-semibold">
                                    {tool.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[#596172]">
                                    {tool.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            How Moving to the Cloud Works
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Switching is easier than most owners expect. We
                            handle the heavy lifting and run things in parallel
                            where needed so nothing breaks.
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
                        alt="Invisor CPA process for moving bookkeeping to the cloud"
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
                            How Much Do Cloud Bookkeeping Services Cost?
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Cloud bookkeeping usually costs less than
                            traditional bookkeeping because automation handles
                            more of the manual work. Pricing depends on your
                            transaction volume, payroll and how many accounts
                            you run, but these ranges help Canadian small
                            businesses budget with confidence.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Every business is a little different. Tell us about
                            yours and we will send a flat monthly quote with no
                            surprises.
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
                            usually ask before moving their bookkeeping online.
                        </p>
                        <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                            <div className="flex items-start gap-3">
                                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-white/80" />
                                <p className="text-sm leading-7 text-white/80">
                                    Need an answer specific to your business?
                                    Schedule a consultation and we will review
                                    your current software, data migration needs
                                    and monthly reporting process.
                                </p>
                            </div>
                            <Button
                                asChild
                                variant="secondary"
                                className="mt-5 rounded-full"
                            >
                                <Link href="/contact-us">
                                    Ask About Your Situation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
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
                            Ready to See Your Numbers Clearly, from Anywhere?
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                            Get a free, no-pressure quote and find out how
                            simple cloud bookkeeping can be.
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
