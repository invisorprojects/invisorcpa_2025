import { BehindTheTeam } from '@/components/sections/behind-the-team';
import { Button } from '@/components/ui/button';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    ArrowRight,
    BarChart3,
    BriefcaseBusiness,
    Building2,
    CalendarCheck2,
    CheckCircle2,
    CircleDollarSign,
    Clock3,
    FileText,
    HeartPulse,
    Home,
    MapPin,
    MessagesSquare,
    Phone,
    ReceiptText,
    ShoppingCart,
    Utensils,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import BookkeepingQuoteForm from './_components/bookkeeping-quote-form';
import ScrollLink from './_components/scroll-link';

const pageUrl = 'https://www.invisorcpa.ca/lp/bookkeeping-ontario';

const trustItems = [
    'CPA-Led Firm',
    'EFILE Certified',
    '1,000+ Clients',
    'Ontario-Based',
];

const painPoints = [
    {
        icon: ReceiptText,
        text: 'A growing pile of receipts you keep meaning to deal with later',
    },
    {
        icon: CalendarCheck2,
        text: 'QuickBooks reminders you keep dismissing',
    },
    {
        icon: Clock3,
        text: 'That sinking feeling every time HST is due',
    },
    {
        icon: FileText,
        text: 'Tax season panic that costs you weekends',
    },
    {
        icon: CircleDollarSign,
        text: "A nagging worry that you're missing deductions or making CRA-flagged mistakes",
    },
];

const hookCards = [
    {
        icon: BarChart3,
        title: 'Books Always Up to Date',
        description:
            'Daily transaction posting and reconciliation. See your cash position anytime, anywhere.',
    },
    {
        icon: CalendarCheck2,
        title: 'GST/HST Filed On Time',
        description:
            'Never pay another late penalty. We track filing dates and submit to CRA on your behalf.',
    },
    {
        icon: BriefcaseBusiness,
        title: 'Real CPA, Not a Chatbot',
        description:
            'Talk to a Canadian CPA whenever you need. Same-day responses. No outsourced call centers.',
    },
];

const includedItems = [
    'Daily transaction posting & reconciliation',
    'GST/HST tracking & filing',
    'Bank, credit card & payment platform integration',
    'Year-end financial statements, audit-ready',
    'Monthly Profit & Loss statements',
    'QuickBooks Online or Xero setup',
    'Monthly Balance Sheet',
    'Cloud-based access to see your books 24/7',
    'Cash flow statements',
    'Direct CPA support via email & WhatsApp',
    'Accounts receivable & payable tracking',
    'CRA correspondence handling',
    'Customized chart of accounts',
    'Quarterly business performance review',
];

const testimonials = [
    {
        initials: 'SM',
        name: 'Sarah M.',
        image: '/assets/lp-testimonial/sara.webp',
        meta: 'Restaurant Owner, Toronto, ON',
        quote: "Switched to Invisor after my last bookkeeper missed an HST filing. Geevar's team caught up six months of messy books in two weeks. Now everything runs like clockwork.",
    },
    {
        initials: 'DR',
        name: 'David R.',
        image: '/assets/lp-testimonial/david.webp',
        meta: 'General Contractor, London, ON',
        quote: "As a contractor running between job sites, I don't have time for spreadsheets. Invisor sends me my P&L every month and just handles my GST. Best decision I made this year.",
    },
    {
        initials: 'PJ',
        name: 'Priya J.',
        image: '/assets/lp-testimonial/priya.webp',
        meta: 'E-commerce Founder, Mississauga, ON',
        quote: "What I love is that they actually pick up the phone. When CRA sent me a review letter, Invisor handled the entire response. I didn't lose a single hour of sleep.",
    },
];

const processSteps = [
    {
        title: 'Submit Your Quote Request',
        description:
            'Fill out our 60-second form. Tell us about your business and current bookkeeping situation.',
    },
    {
        title: 'Receive Your Custom Quote',
        description:
            'Within 24 hours, get a flat-fee quote based on your transaction volume. No surprises.',
    },
    {
        title: 'We Connect & Take Over',
        description:
            'Securely link your accounts. We handle everything from day one with clean books within 30 days.',
    },
];

const packages = [
    {
        name: 'Bookkeeping Essentials',
        tagline: 'Starting price for end-to-end bookkeeping',
        amount: '$299',
        period: 'per month',
        note: 'Lowest entry price',
        bestFor: 'Sole proprietors, freelancers, and small businesses.',
        featured: true,
        features: [
            'Monthly transaction posting & reconciliation',
            'GST/HST filing',
            'Monthly P&L + Balance Sheet',
            'Bank & credit card integration',
            'Cloud-based access',
            'Direct CPA email support',
            'CRA correspondence handling',
        ],
    },
    {
        name: 'Monthly Bookkeeping + Tax',
        tagline: 'Complete financial management for incorporated businesses',
        amount: '$495',
        period: 'per month',
        bestFor:
            'Incorporated small businesses needing the full corporate package.',
        intro: 'Everything in Essentials, plus:',
        features: [
            'QuickBooks Online subscription included',
            'T2 Annual Corporate Tax Return',
            'Payroll Management, T4, ROE, pay stubs',
            'T5018 filings for sub-contractors',
            'Annual Return Filing',
            'AP, AR & bank feeds management',
            'Dividend planning & T5 filings',
        ],
    },
    {
        name: 'Quarterly Bookkeeping + Tax',
        tagline: 'Cost-effective option for low-transaction businesses',
        amount: '$745',
        period: 'per quarter',
        note: 'About $248/month',
        bestFor:
            'Incorporated businesses with under 50 transactions per month.',
        intro: 'Everything in Essentials, plus:',
        features: [
            'QuickBooks Online subscription',
            'T2 Annual Corporate Tax Return',
            'Annual Return Filing',
            'Bank feed management',
            'T5018 filings for sub-contractors',
            'T5 & dividend planning',
        ],
    },
    {
        name: 'Year-End Bookkeeping',
        tagline: 'Catch-up service for end-of-year filing',
        amount: '$1,495',
        period: 'per year',
        note: 'About $125/month',
        bestFor:
            'Businesses doing books themselves who need year-end support only.',
        intro: 'Everything in Essentials, plus:',
        features: [
            'QuickBooks Online subscription, ledgers',
            'T2 Annual Corporate Tax Return',
            'GST/HST/PST annual filing',
            'Annual Return Filing',
            'Bank feed management',
            'T4 & T5 filings',
            'T5018 filings & dividend planning',
        ],
    },
];

const stats = [
    ['15+', 'Years in Business'],
    ['1,000+', 'Clients Served'],
    ['2', 'Ontario Offices'],
    ['CPA', 'Led Team'],
];

const industries = [
    {
        icon: Building2,
        title: 'Construction & Contractors',
        description: 'Progress billing, holdbacks, WSIB tracking',
    },
    {
        icon: Home,
        title: 'Real Estate Investors',
        description: 'Property-level tracking, capital gains prep',
    },
    {
        icon: Utensils,
        title: 'Restaurants & Food Service',
        description: 'Daily sales, tip tracking, food cost analysis',
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce & Shopify',
        description: 'Multi-channel reconciliation, multi-province sales tax',
    },
    {
        icon: BriefcaseBusiness,
        title: 'Professional Services',
        description: 'Time tracking, project profitability',
    },
    {
        icon: HeartPulse,
        title: 'Healthcare Practices',
        description: 'HST exemptions, billing reconciliation',
    },
];

const faqs = [
    {
        question: "What's actually included in the $299/month package?",
        answer: 'End-to-end monthly bookkeeping: transaction posting, reconciliation, GST/HST filing, monthly P&L and balance sheet reports, bank and credit card integration, cloud access, and direct CPA email support.',
    },
    {
        question: 'How is $299/month possible when other firms charge more?',
        answer: "We've streamlined our processes using cloud accounting and a Canadian-trained team, which lets us pass savings to clients. You still get CPA-level oversight, not offshore data entry.",
    },
    {
        question: 'How do I switch from my current bookkeeper?',
        answer: 'We handle the transition, including data migration from QuickBooks, Xero, or other software. Most clients are fully onboarded within 14 days.',
    },
    {
        question: 'What if my books are behind or messy?',
        answer: "That's our specialty. Our catch-up service can clean up months or years of backlogged books, then move you onto a predictable monthly workflow.",
    },
    {
        question: 'Do I need to use specific software?',
        answer: "We work with QuickBooks Online, Xero, Zoho Books, and Wave. If you're not on any platform yet, we'll recommend the best fit and handle setup.",
    },
    {
        question: 'How quickly will I receive my monthly reports?',
        answer: "Your previous month's P&L and Balance Sheet are delivered by the 10th of the following month.",
    },
    {
        question: 'What if CRA contacts me?',
        answer: 'Forward the letter to us. We respond on your behalf, handle follow-ups, and keep you informed throughout. CRA correspondence is included in all packages.',
    },
    {
        question: 'Can I cancel anytime?',
        answer: "Yes. No long-term contracts. Give us 30 days' notice and we'll provide a complete handoff to your next bookkeeper.",
    },
    {
        question: 'Is my financial data secure?',
        answer: 'Yes. We use secure cloud storage and strict data privacy practices aligned with Canadian expectations, including PIPEDA obligations.',
    },
    {
        question: 'How is Invisor different from Bench or Wave?',
        answer: 'Bench and Wave can work for basic needs, but Invisor is Canadian-CPA-led and focused on CRA compliance, Canadian tax law, and Ontario small business realities.',
    },
    {
        question: 'Do you only work with incorporated businesses?',
        answer: 'No. Our $299/month Bookkeeping Essentials package is built for sole proprietors, freelancers, and unincorporated small businesses. Higher packages add corporate tax, payroll, and other services.',
    },
];

export const metadata: Metadata = {
    title: 'Bookkeeping Services Ontario | From $299/Month | Invisor CPA',
    description:
        'Professional bookkeeping for Ontario small businesses from $299/month. CPA-led team. 1,000+ clients served. Get your free quote in 24 hours.',
    alternates: {
        canonical: pageUrl,
    },
    robots: {
        index: false,
        follow: true,
    },
    openGraph: {
        title: 'Bookkeeping Services Ontario | From $299/Month | Invisor CPA',
        description:
            'CPA-led bookkeeping for Ontario small businesses. Monthly reporting, GST/HST filing, CRA support, and flat-fee packages from $299/month.',
        url: pageUrl,
        siteName: 'Invisor CPA',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: '/assets/banners/banner-4.webp',
                width: 1200,
                height: 630,
                alt: 'Ontario small business bookkeeping services by Invisor CPA',
            },
        ],
    },
};

export default function BookkeepingOntarioPage() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'AccountingService',
                '@id': `${pageUrl}#accountingservice`,
                name: 'Invisor CPA',
                url: 'https://www.invisorcpa.ca',
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
            },
            {
                '@type': 'Service',
                '@id': `${pageUrl}#service`,
                name: 'Bookkeeping Services Ontario',
                serviceType: 'Bookkeeping',
                provider: {
                    '@id': `${pageUrl}#accountingservice`,
                },
                areaServed: {
                    '@type': 'AdministrativeArea',
                    name: 'Ontario',
                },
                description:
                    'CPA-led bookkeeping services for Ontario small businesses, including transaction posting, reconciliations, GST/HST filing, reporting, and CRA correspondence support.',
                offers: {
                    '@type': 'Offer',
                    price: '299',
                    priceCurrency: 'CAD',
                    availability: 'https://schema.org/InStock',
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
        <main className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <section className="overflow-hidden bg-[#F4F8FC] px-4 py-12 sm:px-8 md:py-16 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="flex flex-col gap-7">
                        <div className="flex w-fit items-center gap-2 rounded-full border border-[#CFE3F7] bg-white px-4 py-2 text-sm font-semibold text-[#123A6B] shadow-sm">
                            <span className="size-2 rounded-full bg-yellow-400 shadow-[0_0_0_4px_rgba(250,204,21,0.22)]" />
                            Bookkeeping for Ontario Small Businesses
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-primary max-w-4xl text-4xl leading-tight font-bold text-balance sm:text-5xl lg:text-6xl">
                                Professional Bookkeeping for Ontario Small
                                Businesses Starting at{' '}
                                <span className="text-[#0F6EAE]">
                                    $299/Month
                                </span>
                            </h1>
                            <p className="max-w-3xl text-base leading-8 text-[#4F5565] sm:text-lg">
                                Stop drowning in receipts. Our CPA-led team
                                handles your books, GST/HST, and monthly reports
                                so you can focus on running your business.
                                Trusted by 1,000+ Canadian businesses.
                            </p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {trustItems.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#263143] shadow-sm"
                                >
                                    <CheckCircle2 className="size-5 text-green-700" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button asChild size="lg" className="rounded-full">
                                <ScrollLink href="#hero-form">
                                    Get My Free Quote in 24 Hours
                                    <ArrowRight data-icon="inline-end" />
                                </ScrollLink>
                            </Button>
                            <a
                                href="tel:+12262273482"
                                className="text-primary inline-flex items-center gap-2 text-sm font-semibold"
                            >
                                <Phone className="size-4" />
                                Or call +1 (226) 227-3482
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                   
                        <div
                            id="hero-form"
                            className="mx-auto w-full max-w-xl scroll-mt-28 sm:mx-0"
                        >
                            <BookkeepingQuoteForm />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
                    <div className="flex flex-col gap-4">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            The Real Problem
                        </p>
                        <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            You started your business to build something, not to
                            wrestle with receipts.
                        </h2>
                        <p className="text-base leading-8 text-[#4F5565] sm:text-lg">
                            If you&apos;re like most Ontario business owners we
                            work with, your books look something like this:
                        </p>
                    </div>
                    <div className="grid w-full gap-4 text-left">
                        {painPoints.map((item) => (
                            <div
                                key={item.text}
                                className="flex items-start gap-4 rounded-[1.5rem] border border-[#DCE6F2] bg-[#F8FAFC] p-5"
                            >
                                <span className="bg-primary/10 text-primary flex size-11 shrink-0 items-center justify-center rounded-2xl">
                                    <item.icon className="size-5" />
                                </span>
                                <p className="pt-2 text-base font-medium text-[#263143]">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-primary max-w-3xl text-xl leading-8 font-semibold text-balance">
                        You don&apos;t need another app. You need a real
                        Canadian CPA who will handle this accurately, on time,
                        every month.
                    </p>
                    <Button asChild size="lg" className="rounded-full">
                        <ScrollLink href="#hero-form">
                            Sound familiar? Get your free quote
                            <ArrowRight data-icon="inline-end" />
                        </ScrollLink>
                    </Button>
                </div>
            </section>

            <section className="bg-[#0E172A] px-4 py-14 text-white sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <p className="text-sm font-semibold tracking-[0.22em] text-[#8ED6FF] uppercase">
                            The Invisor Way
                        </p>
                        <h2 className="text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Done-For-You Bookkeeping. From Just $299/Month.
                        </h2>
                        <p className="text-base leading-8 text-white/75 sm:text-lg">
                            End-to-end bookkeeping services that pay for
                            themselves.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {hookCards.map((card) => (
                            <article
                                key={card.title}
                                className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
                            >
                                <span className="flex size-12 items-center justify-center rounded-2xl bg-[#FACC15] text-[#0E172A]">
                                    <card.icon className="size-6" />
                                </span>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-xl font-semibold">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm leading-7 text-white/70">
                                        {card.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-white text-[#0E172A] hover:bg-white/90"
                        >
                            <ScrollLink href="#hero-form">
                                Get my custom quote based on my business
                                <ArrowRight data-icon="inline-end" />
                            </ScrollLink>
                        </Button>
                    </div>
                </div>
            </section>

            <BehindTheTeam />


            <section className="px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Everything Included
                        </p>
                        <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Everything you need at $299/month.
                        </h2>
                        <p className="text-base leading-8 text-[#4F5565] italic sm:text-lg">
                            One flat monthly fee. No hidden charges. No
                            nickel-and-diming.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                        {includedItems.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3 rounded-[1.25rem] border border-[#DCE6F2] bg-white p-5 shadow-sm"
                            >
                                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-700" />
                                <span className="text-sm leading-6 font-medium text-[#263143] sm:text-base">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-[1.5rem] bg-[#FFF7ED] p-6 text-center text-sm leading-7 text-[#4F5565] sm:text-base">
                        Need full corporate services like T2 tax filing,
                        payroll, T5018s, or dividend planning? We have packages
                        for that too, starting at $495/month.{' '}
                        <strong className="text-primary">
                            Just ask during your consultation.
                        </strong>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild size="lg" className="rounded-full">
                            <ScrollLink href="#hero-form">
                                Get My Free Quote
                                <ArrowRight data-icon="inline-end" />
                            </ScrollLink>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Trusted Across Canada
                        </p>
                        <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Why 1,000+ Canadian businesses trust Invisor.
                        </h2>
                    </div>
                    <div className="grid gap-5 lg:grid-cols-3">
                        {testimonials.map((testimonial) => (
                            <article
                                key={testimonial.name}
                                className="flex flex-col justify-between gap-6 rounded-[1.75rem] bg-white p-6 shadow-sm"
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="text-sm font-semibold tracking-[0.18em] text-[#F59E0B] uppercase">
                                        5/5 Rating
                                    </div>
                                    <p className="text-base leading-8 text-[#263143]">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                </div>
                                <div className="flex items-center gap-3 border-t border-[#E6EEF7] pt-5">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <p className="text-primary text-sm font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-[#6B7280]">
                                            {testimonial.meta}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="grid gap-3 rounded-[1.5rem] bg-white p-5 text-center shadow-sm sm:grid-cols-5">
                        {[
                            'Google Reviews',
                            'Facebook',
                            'EFILE Member',
                            'QuickBooks Partner',
                            'Xero Partner',
                        ].map((badge) => (
                            <div
                                key={badge}
                                className="rounded-2xl bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#263143]"
                            >
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Simple Onboarding
                        </p>
                        <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Get clean books in 3 simple steps.
                        </h2>
                    </div>
                    <div className="grid gap-5 md:grid-cols-3">
                        {processSteps.map((step, index) => (
                            <article
                                key={step.title}
                                className="flex flex-col gap-5 rounded-[1.75rem] border border-[#DCE6F2] bg-white p-6 text-center shadow-sm"
                            >
                                <span className="bg-primary mx-auto flex size-14 items-center justify-center rounded-full text-xl font-bold text-white">
                                    {index + 1}
                                </span>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-primary text-xl font-semibold">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-7 text-[#596172]">
                                        {step.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Button asChild size="lg" className="rounded-full">
                            <ScrollLink href="#hero-form">
                                Start Step 1: Get My Free Quote
                                <ArrowRight data-icon="inline-end" />
                            </ScrollLink>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="bg-[#F4F8FC] px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Transparent Pricing
                        </p>
                        <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Choose your package.
                        </h2>
                        <p className="text-base leading-8 text-[#4F5565] italic sm:text-lg">
                            From basic bookkeeping to full corporate services.
                            Pick what your business needs today and upgrade
                            anytime.
                        </p>
                    </div>
                    <div className="grid gap-5 xl:grid-cols-4">
                        {packages.map((item) => (
                            <article
                                key={item.name}
                                className={`relative flex flex-col gap-5 rounded-[1.75rem] border bg-white p-6 shadow-sm ${
                                    item.featured
                                        ? 'border-[#FACC15] ring-4 ring-[#FACC15]/20'
                                        : 'border-[#DCE6F2]'
                                }`}
                            >
                                {item.featured && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FACC15] px-4 py-2 text-xs font-bold tracking-[0.12em] whitespace-nowrap text-[#0E172A] uppercase">
                                        Most Popular
                                    </span>
                                )}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-primary text-xl font-bold">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm leading-6 text-[#6B7280]">
                                        {item.tagline}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-primary text-4xl font-bold tracking-tight">
                                        {item.amount}
                                    </p>
                                    <p className="text-sm font-medium text-[#6B7280]">
                                        {item.period}
                                    </p>
                                    <p className="mt-1 min-h-5 text-xs font-semibold text-[#0F6EAE]">
                                        {item.note}
                                    </p>
                                </div>
                                <div className="rounded-2xl bg-[#F8FAFC] p-4 text-sm leading-6 text-[#4F5565]">
                                    <strong className="text-primary">
                                        Best for:
                                    </strong>{' '}
                                    {item.bestFor}
                                </div>
                                {item.intro && (
                                    <p className="text-sm font-semibold text-[#6B7280] italic">
                                        {item.intro}
                                    </p>
                                )}
                                <ul className="flex grow flex-col gap-3">
                                    {item.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2 text-sm leading-6 text-[#263143]"
                                        >
                                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-700" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    className="mt-auto rounded-full"
                                    variant={
                                        item.featured ? 'default' : 'outline'
                                    }
                                >
                                    <ScrollLink href="#hero-form">
                                        Get This Package
                                        <ArrowRight data-icon="inline-end" />
                                    </ScrollLink>
                                </Button>
                            </article>
                        ))}
                    </div>
                    <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center text-sm leading-7 text-[#4F5565]">
                        <p>
                            Not sure which package fits?{' '}
                            <ScrollLink
                                href="#hero-form"
                                className="text-primary font-semibold underline-offset-4 hover:underline"
                            >
                                Get a personalized recommendation in your free
                                consultation.
                            </ScrollLink>
                        </p>
                        <p>
                            More than 500 transactions per month?{' '}
                            <ScrollLink
                                href="#hero-form"
                                className="text-primary font-semibold underline-offset-4 hover:underline"
                            >
                                We offer custom enterprise packages.
                            </ScrollLink>
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="overflow-hidden rounded-[2rem] bg-[#EAF4FF] p-3">
                        <Image
                            src="/assets/our-process.webp"
                            alt="Invisor CPA team serving Canadian business owners"
                            width={1600}
                            height={1200}
                            className="h-[420px] w-full rounded-[1.5rem] object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                                Why Invisor
                            </p>
                            <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                                You&apos;re hiring a CPA, not bookkeeping
                                software.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4 text-base leading-8 text-[#4F5565]">
                            <p>
                                Invisor was founded with a simple belief: small
                                business owners deserve the same financial
                                expertise that big corporations get without the
                                corporate price tag.
                            </p>
                            <p>
                                Today, our Ontario-based team handles
                                bookkeeping, tax, and CRA compliance for over
                                1,000 Canadian businesses from our Fergus and
                                London offices.
                            </p>
                            <p className="text-primary text-xl font-semibold">
                                That&apos;s the Invisor difference.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-4">
                            {stats.map(([value, label]) => (
                                <div
                                    key={label}
                                    className="rounded-2xl bg-[#F8FAFC] p-4"
                                >
                                    <p className="text-primary text-2xl font-bold">
                                        {value}
                                    </p>
                                    <p className="mt-1 text-xs leading-5 text-[#596172]">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="flex flex-col gap-10">
                    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                        <p className="text-secondary text-sm font-semibold tracking-[0.22em] uppercase">
                            Industry Expertise
                        </p>
                        <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Bookkeeping expertise across industries.
                        </h2>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {industries.map((industry) => (
                            <article
                                key={industry.title}
                                className="flex flex-col gap-4 rounded-[1.75rem] bg-white p-6 shadow-sm"
                            >
                                <span className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-2xl">
                                    <industry.icon className="size-6" />
                                </span>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-primary text-xl font-semibold">
                                        {industry.title}
                                    </h3>
                                    <p className="text-sm leading-6 text-[#596172]">
                                        {industry.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-5 text-center">
                        <p className="text-base text-[#4F5565]">
                            Don&apos;t see your industry? We work with
                            businesses across every sector.
                        </p>
                        <Button asChild size="lg" className="rounded-full">
                            <ScrollLink href="#hero-form">
                                Tell us about your business
                                <ArrowRight data-icon="inline-end" />
                            </ScrollLink>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-[2rem] bg-[linear-gradient(160deg,#0E172A_0%,#123A6B_70%,#1E5C94_100%)] p-8 text-white lg:sticky lg:top-28 lg:h-fit">
                        <p className="text-sm font-semibold tracking-[0.22em] text-white/70 uppercase">
                            Got Questions?
                        </p>
                        <h2 className="mt-4 text-3xl leading-tight font-bold text-balance sm:text-4xl">
                            Frequently asked questions.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/80">
                            Straight answers about pricing, onboarding,
                            backlogged books, CRA support, and how monthly
                            bookkeeping works.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            className="mt-8 rounded-full"
                        >
                            <ScrollLink href="#hero-form">
                                Ask About Your Business
                                <ArrowRight data-icon="inline-end" />
                            </ScrollLink>
                        </Button>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-0"
                        className="flex flex-col gap-4"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.question}
                                value={`item-${index}`}
                                className="rounded-[1.5rem] border border-[#DCE6F2] bg-white px-5 shadow-sm"
                            >
                                <AccordionTrigger className="text-primary py-5 text-left text-base font-semibold hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm leading-7 text-[#596172] sm:text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <section className="bg-[#0E172A] px-4 py-14 text-white sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <p className="text-sm font-semibold tracking-[0.22em] text-[#8ED6FF] uppercase">
                                Ready to Hand Off Your Books?
                            </p>
                            <h2 className="text-3xl leading-tight font-bold text-balance sm:text-5xl">
                                Get your free custom quote in 24 hours.
                            </h2>
                            <p className="text-base leading-8 text-white/80 sm:text-lg">
                                Tell us about your business and we&apos;ll show
                                you exactly what your books should cost. Zero
                                obligation.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            {[
                                'No sales pressure',
                                'Custom quote in 24 hours',
                                'Cancel anytime',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-white/90"
                                >
                                    <CheckCircle2 className="size-5 text-[#FACC15]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 border-t border-white/15 pt-6">
                            <p className="text-sm font-semibold tracking-[0.16em] text-[#8ED6FF] uppercase">
                                Or reach us directly
                            </p>
                            <a
                                href="tel:+12262273482"
                                className="inline-flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                            >
                                <Phone className="size-4" />
                                <strong>+1 (226) 227-3482</strong> Speak to a
                                CPA today
                            </a>
                            <a
                                href="https://wa.me/12262273482"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                            >
                                <MessagesSquare className="size-4" />
                                <strong>WhatsApp us</strong> Quick response,
                                anytime
                            </a>
                            <a
                                href="https://calendly.com/geevar-invisorstaffing/meeting-with-geevar-thambi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 text-white/85 transition-colors hover:text-white"
                            >
                                <MapPin className="size-4" />
                                <strong>Schedule a call</strong> Book a
                                30-minute slot
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-xl sm:mx-0">
                        <BookkeepingQuoteForm />
                    </div>
                </div>
            </section>


            <ScrollLink
                href="#hero-form"
                className="bg-primary fixed right-4 bottom-4 left-4 z-40 rounded-full px-5 py-4 text-center text-sm font-bold text-white shadow-lg sm:hidden"
            >
                Get Free Quote
            </ScrollLink>
        </main>
    );
}
