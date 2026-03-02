import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    MapPin,
    Phone,
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl =
    'https://www.invisorcpa.ca/services/small-business-bookkeeping-services-ontario';

const serviceItems = [
    {
        title: 'Day-to-Day Bookkeeping & Transaction Recording',
        description:
            'Every sale, expense, payment, and receipt is recorded accurately, categorized properly, and reconciled on time. We use QuickBooks Online, Xero, and Wave to keep everything organized and accessible.',
    },
    {
        title: 'Bank & Credit Card Reconciliation',
        description:
            'We reconcile your bank accounts and credit cards monthly so discrepancies are caught before they turn into reporting or cash flow problems.',
    },
    {
        title: 'Accounts Payable & Receivable Management',
        description:
            'We track vendor payments, monitor unpaid invoices, and help keep your receivables cycle healthy so you are not guessing what is overdue.',
    },
    {
        title: 'HST/GST Filing & Sales Tax Compliance',
        description:
            "We prepare and file HST returns accurately and on time, including support for mixed supplies, input tax credits, and Ontario-specific compliance requirements.",
    },
    {
        title: 'Payroll Processing & Source Deductions',
        description:
            'We handle payroll calculations, source deductions, T4 preparation, and ROE filings so your payroll stays compliant and on schedule.',
    },
    {
        title: 'Monthly & Quarterly Financial Statements',
        description:
            'You receive clear income statements, balance sheets, cash flow statements, and practical reporting that shows where your business stands right now.',
    },
    {
        title: 'Year-End Preparation & CPA Coordination',
        description:
            'We keep your books clean throughout the year so year-end is straightforward, whether you work with our in-house CPA team or another accountant.',
    },
    {
        title: 'Receipt Management & Document Organization',
        description:
            'We help you implement digital receipt capture and maintain organized support files so your records stay audit-ready.',
    },
];

const industries = [
    'E-commerce & online retail businesses',
    'Construction & trades contractors',
    'Professional service firms',
    'Healthcare practitioners & clinics',
    'Real estate investors & property managers',
    'Restaurants & food service businesses',
    'Tech startups & SaaS companies',
    'Retail & brick-and-mortar stores',
    'Non-profit organizations',
];

const differentiators = [
    {
        title: "We're CPAs, Not Just Bookkeepers",
        description:
            'Because our team includes Chartered Professional Accountants, we bring deeper tax, reporting, and financial insight to your books and catch issues that basic data-entry providers miss.',
    },
    {
        title: 'We Actually Know Ontario Tax Law',
        description:
            'From HST and the Ontario small business deduction to EHT, WSIB, and filing obligations, we understand the rules that affect Ontario businesses every day.',
    },
    {
        title: 'Technology-Forward, But Human-Centered',
        description:
            'You get cloud accounting efficiency backed by a real advisor who knows your business and can explain what the numbers mean.',
    },
    {
        title: 'Transparent, Predictable Pricing',
        description:
            'Fixed monthly pricing means no surprise invoices and no billable-hour anxiety. You know what is included before work starts.',
    },
    {
        title: 'Proactive Communication',
        description:
            'If we see unusual expenses, deadlines, or cash flow issues, we raise them early. We do not disappear after the monthly close.',
    },
];

const processSteps = [
    {
        title: 'Step 1: Free Consultation',
        description:
            'We start with a no-obligation conversation to understand your business, current bookkeeping setup, and what needs to improve.',
    },
    {
        title: 'Step 2: Onboarding & Cleanup',
        description:
            'If your books are behind or disorganized, we clean them up, establish a reliable starting point, and optimize your cloud accounting workflow.',
    },
    {
        title: 'Step 3: Ongoing Monthly Bookkeeping',
        description:
            'We manage your books on a consistent monthly cycle with transaction posting, reconciliations, and timely reporting.',
    },
    {
        title: 'Step 4: Regular Check-Ins',
        description:
            'We review your reports with you, answer questions, and flag tax or growth issues before they become expensive.',
    },
];

const faqs = [
    {
        question:
            'How much do bookkeeping services cost for a small business in Ontario?',
        answer:
            "Pricing depends on transaction volume, complexity, and the services you need. Our bookkeeping plans are fixed-fee, and most small businesses land in a range comparable to a part-time bookkeeper, but with CPA-level oversight included.",
    },
    {
        question: "What's the difference between a bookkeeper and a CPA?",
        answer:
            'A bookkeeper handles transaction recording, reconciliations, and expense categorization. A CPA also brings training in tax law, financial analysis, and advisory, so you get accurate books plus stronger financial guidance.',
    },
    {
        question:
            'Do I really need professional bookkeeping if my business is small?',
        answer:
            'Yes. Smaller businesses often feel errors more sharply. Accurate bookkeeping helps you protect margins, claim available deductions, stay CRA-compliant, and make decisions using reliable numbers.',
    },
    {
        question: 'Can you clean up messy or backlogged books?',
        answer:
            'Yes. We regularly help Ontario businesses catch up months or years of backlog, reconcile accounts, and establish a clean baseline going forward.',
    },
    {
        question: 'What accounting software do you work with?',
        answer:
            'We primarily work with QuickBooks Online, Xero, and Wave. If you already have a system, we can usually work within it. If not, we will recommend and configure the right fit.',
    },
    {
        question: 'How does virtual bookkeeping work?',
        answer:
            'We connect securely to your cloud accounting tools, bank feeds, and shared documents, then manage your books remotely while communicating by phone, email, or video.',
    },
    {
        question: 'Will I have a dedicated bookkeeper assigned to my account?',
        answer:
            'Yes. You work with a consistent point of contact who learns your business and keeps continuity in your reporting process.',
    },
    {
        question: 'What if I get audited by the CRA?',
        answer:
            'Clean, organized books are your best defense. We keep your records audit-ready and can help you respond if the CRA requests information.',
    },
    {
        question: 'How often will I receive financial reports?',
        answer:
            'Most clients receive monthly financial statements, including profit and loss and balance sheet reports. We can also support custom weekly or quarterly reporting.',
    },
    {
        question:
            'When should a small business start using professional bookkeeping services?',
        answer:
            'As early as possible. Starting early prevents costly cleanup later and gives you financial visibility from the beginning.',
    },
];

export const metadata: Metadata = {
    title: 'Small Business Bookkeeping Services Ontario | Invisor CPA',
    description:
        'Trusted small business bookkeeping services in Ontario. Accurate books, HST filing, payroll & financial reporting by experienced CPAs. Get a free consultation today.',
    keywords: [
        'small business bookkeeping services Ontario',
        'bookkeeping services Ontario',
        'bookkeeping for small business Ontario',
        'Ontario bookkeeping company',
        'small business bookkeeper Ontario',
        'CPA bookkeeping Ontario',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Small Business Bookkeeping Services Ontario | Invisor CPA',
        description:
            'Trusted small business bookkeeping services in Ontario. Accurate books, HST filing, payroll & financial reporting by experienced CPAs.',
        url: pageUrl,
        siteName: 'Invisor CPA',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: '/assets/banners/banner-4.webp',
                width: 1200,
                height: 630,
                alt: 'Small business owner reviewing bookkeeping reports with Invisor CPA accountant in Ontario',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Small Business Bookkeeping Services Ontario | Invisor CPA',
        description:
            'Trusted small business bookkeeping services in Ontario. Accurate books, HST filing, payroll & financial reporting by experienced CPAs.',
        images: ['/assets/banners/banner-4.webp'],
    },
};

export default function Page() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                '@id': `${pageUrl}#localbusiness`,
                name: 'Invisor CPA',
                url: 'https://www.invisorcpa.ca',
                image: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
                logo: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
                telephone: '+1-226-227-3482',
                email: 'connect@invisorcpa.ca',
                priceRange: '$$',
                areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Ontario',
                },
                address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'ON',
                    addressCountry: 'CA',
                },
                sameAs: ['https://www.invisorcpa.ca'],
            },
            {
                '@type': 'Service',
                '@id': `${pageUrl}#service`,
                name: 'Small Business Bookkeeping Services in Ontario',
                serviceType: 'Small business bookkeeping',
                provider: {
                    '@id': `${pageUrl}#localbusiness`,
                },
                areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Ontario',
                },
                description:
                    'Small business bookkeeping services in Ontario including transaction recording, bank reconciliations, HST filing, payroll, reporting, and year-end preparation.',
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
                    __html: JSON.stringify(structuredData),
                }}
            />

            <section className="px-4 py-12 sm:px-8 md:py-16 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div className="space-y-6">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Ontario Bookkeeping
                        </p>
                        <h1 className="text-primary text-4xl font-bold sm:text-5xl lg:text-6xl">
                            Small Business Bookkeeping Services in Ontario
                        </h1>
                        <div className="space-y-4 text-base leading-8 text-[#4F5565] sm:text-lg">
                            <p>
                                Running a small business in Ontario means wearing
                                a dozen hats before lunch. You handle sales,
                                customer service, hiring, and operations, and
                                somewhere in the middle of that, the books still
                                need to get done.
                            </p>
                            <p>
                                At Invisor CPA, we take bookkeeping off your
                                plate so you can focus on what actually moves
                                the needle. We support small business owners
                                across Ontario with reliable, accurate
                                bookkeeping that keeps finances clean,
                                compliant, and clear.
                            </p>
                            <p>
                                No cookie-cutter packages. No offshore data
                                entry. Just experienced professionals who
                                understand the Ontario business landscape and
                                care about helping you grow.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/contact-us">
                                    Book Your Free Consultation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="rounded-full"
                            >
                                <Link href="/services">
                                    Explore Tax Services
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-5 rounded-[2rem] bg-[#EAF4FF] p-5 shadow-sm">
                        <Image
                            src="/assets/banners/banner-4.webp"
                            alt="Small business owner reviewing bookkeeping reports with Invisor CPA accountant in Ontario"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full rounded-[1.5rem] object-cover"
                        />
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl bg-white p-4">
                                <p className="text-primary text-2xl font-bold">
                                    Accurate
                                </p>
                                <p className="mt-2 text-sm text-[#596172]">
                                    Bookkeeping built for clean reporting and
                                    confident decisions.
                                </p>
                            </div>
                            <div className="rounded-3xl bg-white p-4">
                                <p className="text-primary text-2xl font-bold">
                                    Compliant
                                </p>
                                <p className="mt-2 text-sm text-[#596172]">
                                    HST, payroll, and documentation handled with
                                    Ontario requirements in mind.
                                </p>
                            </div>
                            <div className="rounded-3xl bg-white p-4">
                                <p className="text-primary text-2xl font-bold">
                                    Local
                                </p>
                                <p className="mt-2 text-sm text-[#596172]">
                                    Support for businesses across Toronto,
                                    Ottawa, Hamilton, and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Why Bookkeeping Matters More Than Most Business
                            Owners Think
                        </h2>
                        <p className="mt-5 text-base leading-8 text-[#4F5565]">
                            Bookkeeping may not be why you started your
                            business, but every financial decision you make is
                            only as strong as the numbers behind it. Poor
                            bookkeeping does not just create messy records. It
                            creates missed deductions, CRA risk, cash flow blind
                            spots, financing friction, and wasted hours at
                            year-end.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Professional bookkeeping is not an expense to
                            minimize. It is the foundation for tax planning,
                            growth, financing, and better decisions.
                        </p>
                    </div>
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                        <ul className="space-y-4">
                            {[
                                'Missed tax deductions that cost you money every year',
                                'CRA compliance issues that can trigger penalties and audits',
                                'Cash flow blind spots that show up at the worst possible time',
                                'Difficulty securing financing because your reports are unclear',
                                'Hours wasted trying to reconcile transactions at year-end',
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
                <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Our Small Business Bookkeeping Services
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            We built these services specifically for Ontario
                            small and medium-sized businesses. Whether you
                            process 50 transactions a month or 5,000, the goal
                            is the same: accurate books, clear reporting, and a
                            smoother operation.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="rounded-full">
                        <Link href="/contact-us">
                            Tell Us About Your Business
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    {serviceItems.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-[1.75rem] border border-[#DCE6F2] bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-primary text-xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#596172] sm:text-base">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-[#E9F6FB] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="space-y-5">
                        <Image
                            src="/assets/banners/banner-6.webp"
                            alt="Cloud bookkeeping software dashboard for Ontario small business"
                            width={1600}
                            height={1100}
                            className="h-[360px] w-full rounded-[2rem] object-cover"
                        />
                        <div className="rounded-[1.5rem] bg-white p-5">
                            <h3 className="text-primary text-lg font-semibold">
                                Who We Work With
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#596172]">
                                We support solo founders, owner-operators, and
                                growing teams with bookkeeping that scales as
                                your business grows.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Who We Work With
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            We serve small businesses across virtually every
                            industry in Ontario. We do not force one-size-fits-all
                            bookkeeping because your business does not operate
                            that way.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {industries.map((industry) => (
                                <div
                                    key={industry}
                                    className="flex items-start gap-3 rounded-3xl bg-white p-4 text-sm text-[#263143] shadow-sm"
                                >
                                    <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                                    <span>{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="mb-10 max-w-3xl">
                    <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                        What Makes Invisor CPA Different from Other Ontario
                        Bookkeeping Firms
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        Ontario has no shortage of bookkeeping providers. Small
                        business owners choose us because they need more than
                        transaction entry. They need dependable execution and
                        stronger financial judgment.
                    </p>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                    {differentiators.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-[1.75rem] bg-[#0E172A] p-6 text-white shadow-sm"
                        >
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-white/80 sm:text-base">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            How Our Bookkeeping Process Works
                        </h2>
                        <div className="mt-8 space-y-5">
                            {processSteps.map((step) => (
                                <div
                                    key={step.title}
                                    className="rounded-[1.5rem] bg-white p-5 shadow-sm"
                                >
                                    <h3 className="text-primary text-lg font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-[#596172] sm:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/contact-us">
                                    Get Started with a Free Consultation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <Image
                        src="/assets/our-process.webp"
                        alt="Invisor CPA team providing bookkeeping services to Ontario entrepreneurs"
                        width={1600}
                        height={1200}
                        className="h-[560px] w-full rounded-[2rem] object-cover"
                    />
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="rounded-[2rem] bg-[#FFF7ED] p-6">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            The Real Cost of Doing Your Own Bookkeeping
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            A lot of Ontario business owners try to manage their
                            own books early on. It feels cost-effective until
                            the time loss, missed filings, cleanup fees, and bad
                            reporting start adding up.
                        </p>
                        <ul className="mt-6 space-y-4">
                            {[
                                'You spend hours every month on work a professional can complete faster and more accurately',
                                'Miscategorized transactions create reporting and tax errors',
                                'Missed HST deadlines can trigger CRA penalties and interest',
                                'Messy year-end books increase accounting fees',
                                'Business decisions get made using unreliable financial data',
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
                    <div className="rounded-[2rem] bg-[#EDF7F2] p-6">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Serving Small Businesses Across Ontario
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Thanks to our cloud-based workflow, location is not
                            a barrier. You get the same responsiveness and
                            expertise whether you are in a major city or a
                            smaller community.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            {[
                                'Toronto',
                                'Mississauga',
                                'Brampton',
                                'Hamilton',
                                'Ottawa',
                                'London',
                                'Kitchener-Waterloo',
                                'Windsor',
                                'Barrie',
                                'Oshawa',
                                'Markham',
                                'Vaughan',
                                'Richmond Hill',
                                'Burlington',
                                'St. Catharines',
                                'Guelph',
                                'Cambridge',
                                'Thunder Bay',
                                'Sudbury',
                                'Kingston',
                            ].map((city) => (
                                <span
                                    key={city}
                                    className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm text-[#263143] shadow-sm"
                                >
                                    <MapPin className="text-primary mr-2 h-4 w-4" />
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F4F8FC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-[2rem] bg-[linear-gradient(160deg,#0E172A_0%,#123A6B_65%,#1E5C94_100%)] p-8 text-white shadow-sm lg:sticky lg:top-8 lg:h-fit">
                        <p className="text-sm font-semibold tracking-[0.24em] uppercase text-white/70">
                            FAQs
                        </p>
                        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                            Frequently Asked Questions About Small Business
                            Bookkeeping in Ontario
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/80">
                            These are the questions we hear most often from
                            Ontario business owners comparing bookkeeping
                            options, pricing, cleanup work, and reporting
                            support.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/services"
                                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            >
                                Tax Services
                            </Link>
                            <Link
                                href="/services"
                                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            >
                                CPA Advisory
                            </Link>
                            <Link
                                href="/about-us"
                                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact-us"
                                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                            >
                                Contact
                            </Link>
                        </div>
                        <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                            <p className="text-sm leading-7 text-white/80">
                                Need an answer specific to your business?
                                Schedule a consultation and we will review your
                                bookkeeping process, reporting needs, and CRA
                                compliance risks directly.
                            </p>
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
                            >
                                <summary className="flex cursor-pointer list-none items-start gap-4 rounded-[1.5rem] px-5 py-5 transition-colors duration-300 group-open:bg-[#F8FBFF]">
                                    <span className="bg-primary/10 text-primary inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold transition-transform duration-300 ease-out group-open:scale-105">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="text-primary block text-base font-semibold transition-colors duration-300 sm:text-lg group-open:text-[#123A6B]">
                                            {faq.question}
                                        </span>
                                    </span>
                                    <span className="relative mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF5FB] transition-transform duration-300 ease-out group-open:rotate-180 group-open:bg-[#DCEBFA]">
                                        <span className="absolute h-0.5 w-4 rounded-full bg-[#123A6B]" />
                                        <span className="absolute h-4 w-0.5 rounded-full bg-[#123A6B] transition-transform duration-200 group-open:scale-y-0" />
                                    </span>
                                </summary>
                                <div className="grid grid-rows-[0fr] px-5 pl-[4.75rem] opacity-0 transition-[grid-template-rows,opacity] duration-300 ease-out group-open:grid-rows-[1fr] group-open:opacity-100">
                                    <div className="overflow-hidden">
                                        <div className="border-t border-[#E6EEF7] pb-5 pt-4">
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
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Stop Stressing About Your Books. We&apos;ve Got This.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                            You did not start your business to spend evenings
                            categorizing expenses and chasing receipts. At
                            Invisor CPA, we handle the bookkeeping so you can
                            handle the business.
                        </p>
                        <p className="mt-4 text-base leading-8 text-white/85 sm:text-lg">
                            Accurate books, reliable reporting, CRA compliance,
                            and a team that genuinely has your back. That is
                            what we deliver to small businesses across Ontario.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-[#0E172A] hover:bg-white/90"
                            >
                                <Link href="/contact-us">
                                    Book Your Free Consultation Today
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <a
                                href="tel:+12262273482"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
                            >
                                <Phone className="h-4 w-4" />
                                Or call us at +1 (226) 227-3482
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
