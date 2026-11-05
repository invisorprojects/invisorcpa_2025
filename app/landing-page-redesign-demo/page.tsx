import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Calculator,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock,
    Coins,
    FileText,
    Mail,
    MapPin,
    Phone,
    Users,
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import SiteHeader, { Logo } from './_components/site-header';
import DiscoveryForm from './_components/discovery-form';

/* ------------------------------------------------------------------ *
 * Content
 * ------------------------------------------------------------------ */

const PHONE_DISPLAY = '(226) 227-3482';
const PHONE_HREF = 'tel:+12262273482';

const trustPoints = [
    'CPA-Supervised Files',
    'CRA EFILE Certified',
    'PST / GST / HST Specialists',
    'Wagepoint & Plooto Certified',
    'Xero & QBO Platinum',
    'Strict Data Encryption',
];

const stats = [
    { value: '1,000+', label: 'Canadian Clients Served' },
    { value: '15+', label: 'Years Combined CPA Experience' },
    { value: '100%', label: 'CRA & Tax Compliance Track Record' },
    { value: '2 Physical', label: 'Offices in Southwestern Ontario' },
];

const integrations: { name: string; className: string }[] = [
    { name: 'QuickBooks Online', className: 'font-semibold text-slate-600' },
    { name: 'Xero', className: 'font-semibold text-slate-700' },
    { name: 'Dext Prepare', className: 'font-semibold text-slate-700' },
    { name: 'Wagepoint', className: 'font-semibold text-slate-700' },
    { name: 'Plooto Payments', className: 'font-semibold text-slate-400' },
    { name: 'Float Financial', className: 'font-bold text-slate-900' },
];

const services = [
    {
        icon: Calculator,
        tint: 'bg-sky-50 text-sky-700',
        title: 'Monthly & Catch-Up Bookkeeping',
        body: 'Never stress about reconciliation backlogs. We categorize expenses, reconcile multi-currency Stripe/PayPal transactions, and close monthly books with audit-proof precision.',
        points: [
            'Bank & credit card reconciliations',
            'Multi-year cleanups & catch-ups',
            'Monthly balance sheet & P&L',
        ],
    },
    {
        icon: FileText,
        tint: 'bg-emerald-50 text-emerald-600',
        title: 'Corporate Tax (T2) & Planning',
        body: 'Maximize your small business tax deductions while maintaining bulletproof CRA compliance. We handle corporate returns, shareholder loan reconciliations, and compilation engagements.',
        points: [
            'Corporate T2 filings via EFILE',
            'Salary vs. dividend optimization',
            'Notice to Reader / Compilations',
        ],
    },
    {
        icon: Users,
        tint: 'bg-violet-50 text-violet-600',
        title: 'Payroll & Source Deductions',
        body: 'End-to-end Canadian payroll management. We eliminate late penalties by calculating CPP, EI, and income tax withholdings, remitting them directly to the CRA on your schedule.',
        points: [
            'Direct deposits via Wagepoint',
            'ROE filings & termination paperwork',
            'Year-end T4 / T4A & T5018 slips',
        ],
    },
    {
        icon: Coins,
        tint: 'bg-amber-50 text-amber-600',
        title: 'Sales Tax: HST / GST / PST / QST',
        body: 'Avoid penalties from interprovincial sales. We track registration thresholds and file returns across all Canadian jurisdictions, including Ontario HST, BC/SK/MB PST, and Quebec QST.',
        points: [
            'Multi-province tax registration',
            'Input Tax Credit (ITC) reconciliation',
            'Quick Method & regular filings',
        ],
    },
];

const provinces = [
    {
        title: 'Ontario (13% HST)',
        body: 'Single combined return managed via CRA My Business Account.',
    },
    {
        title: 'British Columbia (5% GST + 7% PST)',
        body: 'Dual filings: GST to CRA, PST through BC eTaxBC system.',
    },
    {
        title: 'Alberta (5% GST)',
        body: 'No provincial sales tax. Only federal 5% GST filing needed.',
    },
    {
        title: 'Saskatchewan (5% GST + 6% PST)',
        body: 'Mandatory SK SETS electronic return filing for remote sellers.',
    },
];

const offices = [
    {
        badge: 'Headquarters & Walk-In Office',
        title: 'London, Ontario CPA Office',
        body: 'Providing in-person corporate accounting, bookkeeping, and tax planning to businesses across Middlesex County, St. Thomas, Woodstock, and Strathroy.',
        address: '375V - 341 Talbot St., London, ON N6A 2R5',
        hours: 'Mon - Fri: 9:00 AM – 5:00 PM EST',
        cta: 'Schedule an In-Person Meeting in London',
    },
    {
        badge: 'Regional Branch',
        title: 'Centre Wellington (Fergus), ON Office',
        body: 'Serving agricultural businesses, contractors, retail, and professionals throughout Fergus, Elora, Guelph, Kitchener-Waterloo, and Wellington County.',
        address: '645-B St. David St. N., Fergus, ON N1M 2K6',
        hours: 'Mon - Fri: By Appointment & General Hours',
        cta: 'Schedule an In-Person Meeting in Fergus',
    },
];

const cloudHubs = [
    'Toronto & GTA',
    'Vancouver',
    'Calgary',
    'Edmonton',
    'Winnipeg',
    'Ottawa',
    'Montreal',
    'Halifax',
];

const plans = [
    {
        eyebrow: 'Self-Employed & Freelance',
        title: 'Sole Proprietor',
        body: 'Designed for independent contractors and consultants needing annual compliance.',
        price: '$595',
        period: 'Annually',
        features: [
            'QuickBooks Online Setup Support',
            'Track Income & Expenses',
            'Business GST/HST Filing',
            'T1 Return & T2125 Statement Filing',
            'CRA Review Assistance',
        ],
        featured: false,
    },
    {
        eyebrow: 'Small Incorporated Business',
        title: 'Monthly Bookkeeping & Tax',
        body: 'Complete financial back-office support with month-end closes and payroll.',
        price: '$495',
        period: 'Month',
        features: [
            'Everything in Sole Proprietor, plus:',
            'Monthly Reconciliation & Management Reports',
            'Annual Corporate Tax (T2) Filing',
            'GST / HST / PST Filing & Remittance',
            'Payroll Management (T4, ROE & Pay Stubs)',
            'Dividend Planning & T5 Filings',
        ],
        featured: true,
    },
    {
        eyebrow: 'Annual Incorporated Filing',
        title: 'Year-End Corporate (T2)',
        body: 'For corporations whose day-to-day books are ready and need annual compilation and tax.',
        price: '$1,495',
        period: 'Annually',
        features: [
            'Corporate Tax (T2) Preparation & Filing',
            'Financial Compilation / Notice to Reader',
            'Shareholder Loan Reconciliation',
            'Annual GST/HST Reporting Check',
            'T4/T5 Year-End Dividend Prep',
        ],
        featured: false,
    },
];

const leaders = [
    {
        name: 'Geevar Thambi',
        credentials: 'MBA, CMA, CSCA, CPB, EA',
        bio: 'Specializing in cross-border tax advisory, small business bookkeeping architecture, and financial leadership across Canadian jurisdictions.',
        photo: '/assets/team/team-members-3.webp',
    },
    {
        name: 'Bernie Keim',
        credentials: 'MBA, CGA, CPA',
        bio: 'Senior Canadian CPA with extensive experience in corporate tax structuring, compilation engagements, and CRA notice resolutions.',
        photo: '/assets/team/team-members-2.webp',
    },
    {
        name: 'Roji Thomas',
        credentials: 'Finance Transformation & ERP Migration Specialist',
        bio: 'Partners with fast-growing businesses to streamline back-office ERP software, data migrations, and automated multi-currency reporting.',
        photo: '/assets/team/team-members-1.webp',
    },
];

const faqs = [
    {
        q: 'Can Invisor CPA handle my accounting if I am located outside Ontario (e.g., in Calgary, Vancouver, or Winnipeg)?',
        a: 'Yes. Most of our clients never visit an office. We work through secure cloud tools like QuickBooks Online, Xero and Dext, meet by phone or video, and file federal and provincial returns for businesses registered anywhere in Canada.',
    },
    {
        q: 'How do you handle multi-provincial sales tax (PST, GST, HST, QST) for e-commerce and national trade?',
        a: 'We map where your customers are, track the registration thresholds for each province, register you where required, and file every return on schedule, including HST, BC/SK/MB PST and Quebec QST, so you are never collecting or remitting at the wrong rate.',
    },
    {
        q: 'What is the difference between hiring Invisor CPA vs. an in-house bookkeeper?',
        a: 'An in-house bookkeeper is one person with a salary, benefits and vacation gaps. With Invisor you get a CPA-supervised team, month-end reviews, payroll and tax filing under one fixed monthly fee, typically for less than the cost of a part-time hire.',
    },
    {
        q: 'Can I visit an office in person in London or Centre Wellington (Fergus)?',
        a: 'Absolutely. Our London office at 341 Talbot St. is open Monday to Friday, 9:00 AM to 5:00 PM, and our Fergus office on St. David St. N. sees clients by appointment. Book a time with the form above or call us.',
    },
    {
        q: 'Are your prices really fixed?',
        a: 'Yes. After a free discovery session we quote a fixed monthly or annual fee based on your transaction volume and filings. There is no hourly billing, and we tell you before any change in scope affects your price.',
    },
    {
        q: 'I am behind on my books and filings. Can you help me catch up?',
        a: 'Catch-up and multi-year cleanup work is one of our specialties. We rebuild your records, file any missed GST/HST and corporate returns, and help you deal with the CRA if notices or penalties have already arrived.',
    },
];

/* ------------------------------------------------------------------ *
 * Small building blocks
 * ------------------------------------------------------------------ */

const display = 'font-[family-name:var(--font-rd-display)]';
const container = 'mx-auto w-full max-w-[1560px] px-4 sm:px-6 lg:px-10';

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="mb-3 text-sm font-bold tracking-[0.08em] text-sky-700 uppercase">
            {children}
        </p>
    );
}

function SectionHeading({
    eyebrow,
    title,
    body,
}: {
    eyebrow: string;
    title: React.ReactNode;
    body?: string;
}) {
    return (
        <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
                className={`${display} text-4xl font-bold tracking-tight text-slate-950 text-balance sm:text-5xl`}
            >
                {title}
            </h2>
            {body && (
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 text-pretty sm:text-xl">
                    {body}
                </p>
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ *
 * Page
 * ------------------------------------------------------------------ */

export default function LandingPageRedesignDemo() {
    return (
        <>
            <SiteHeader />

            <main id="top">
                {/* ---------------- Hero ---------------- */}
                <section className="relative overflow-hidden bg-gradient-to-br from-sky-50/80 via-white to-sky-50/60">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/3 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-sky-100/50 blur-3xl"
                    />
                    <div
                        className={`${container} relative grid gap-12 pt-14 pb-16 lg:grid-cols-[1.45fr_1fr] lg:gap-16 lg:pt-14 lg:pb-20`}
                    >
                        <div>
                            <p className="inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm sm:text-[1.05rem]">
                                <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
                                Local Offices in London & Centre Wellington
                                (Fergus) • Serving SMBs Across Canada
                            </p>

                            <h1
                                className={`${display} mt-9 text-5xl leading-[1.02] font-extrabold tracking-[-0.035em] text-slate-950 sm:text-6xl xl:text-[5.1rem]`}
                            >
                                Modern CPA Accounting, Bookkeeping & Tax for{' '}
                                <span className="text-sky-700">
                                    Growing Canadian Businesses
                                </span>
                            </h1>

                            <p className="mt-9 max-w-[52rem] text-xl leading-relaxed text-slate-600 sm:text-2xl sm:leading-[1.45]">
                                Take the headache out of daily bookkeeping,
                                payroll, GST/HST/PST returns, and corporate T2
                                tax filings. Led by licensed CPAs with local
                                walk-in offices in Southwestern Ontario and
                                digital cloud delivery for business owners
                                nationwide.
                            </p>

                            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:gap-5">
                                <a
                                    href="#consultation"
                                    className={`${display} inline-flex items-center justify-center gap-3 rounded-xl bg-sky-700 px-8 py-5 text-xl font-bold text-white shadow-lg shadow-sky-900/20 transition-colors hover:bg-sky-800`}
                                >
                                    Book a Free Consultation
                                    <ArrowRight className="size-5" />
                                </a>
                                <a
                                    href="#pricing"
                                    className={`${display} inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-9 py-5 text-xl font-bold text-slate-800 shadow-sm transition-colors hover:border-sky-300 hover:text-sky-800`}
                                >
                                    View Fixed-Fee Pricing
                                </a>
                            </div>

                            <ul className="mt-12 grid gap-x-6 gap-y-4 text-lg text-slate-700 sm:grid-cols-2 xl:grid-cols-[repeat(3,max-content)] xl:gap-x-5">
                                {trustPoints.map((t) => (
                                    <li
                                        key={t}
                                        className="flex items-center gap-3 xl:whitespace-nowrap"
                                    >
                                        <CheckCircle2
                                            className="size-5 shrink-0 text-emerald-600"
                                            aria-hidden="true"
                                        />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Lead form */}
                        <div
                            id="consultation"
                            className="relative scroll-mt-32 self-start lg:mt-28"
                        >
                            <span className="absolute -top-4 right-6 z-10 rounded-full bg-emerald-600 px-4 py-2 text-xs font-extrabold tracking-[0.06em] text-white uppercase shadow-md sm:text-sm">
                                24-Hour Response Guarantee
                            </span>
                            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-10">
                                <h2
                                    className={`${display} text-[1.75rem] font-bold tracking-tight text-slate-950`}
                                >
                                    Request a Discovery Session
                                </h2>
                                <p className="mt-1.5 mb-8 text-slate-500">
                                    Select your business type and location to
                                    connect with the right advisor.
                                </p>
                                <DiscoveryForm />
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className={`${container} relative pb-20`}>
                        <dl className="grid grid-cols-2 rounded-3xl border border-slate-200 bg-white py-6 shadow-sm lg:grid-cols-4 lg:py-10">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`flex flex-col items-center px-4 py-5 text-center lg:py-2 ${i > 0 ? 'lg:border-l lg:border-slate-200' : ''} ${i % 2 === 1 ? 'border-l border-slate-200' : ''}`}
                                >
                                    <dt className="order-2 mt-2 text-sm font-medium text-slate-700 sm:text-lg">
                                        {s.label}
                                    </dt>
                                    <dd
                                        className={`${display} order-1 text-4xl font-bold tracking-tight text-sky-700 sm:text-5xl`}
                                    >
                                        {s.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* ---------------- Integrations ---------------- */}
                <section
                    id="software"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-14"
                >
                    <div className={container}>
                        <p className="text-center text-sm font-semibold tracking-[0.12em] text-slate-500 uppercase">
                            Certified Cloud Integrations for Zero-Friction
                            Accounting
                        </p>
                        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-2xl">
                            {integrations.map((i) => (
                                <li
                                    key={i.name}
                                    className={`${display} ${i.className} tracking-tight`}
                                >
                                    {i.name === 'QuickBooks Online' ? (
                                        <>
                                            QuickBooks{' '}
                                            <span className="font-medium text-slate-400">
                                                Online
                                            </span>
                                        </>
                                    ) : (
                                        i.name
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------------- Services ---------------- */}
                <section id="services" className="scroll-mt-24 py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Complete Accounting Solutions"
                            title={
                                <>
                                    CRA-Compliant Services Engineered for
                                    <br className="hidden lg:block" />{' '}
                                    Canadian Small Businesses
                                </>
                            }
                            body="Whether you operate a storefront in London or run an e-commerce brand shipping across Vancouver, Calgary, and Toronto, we tailor your books to provincial and federal rules."
                        />

                        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                            {services.map((s) => (
                                <article
                                    key={s.title}
                                    className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-slate-900/5"
                                >
                                    <span
                                        className={`grid size-14 place-items-center rounded-xl ${s.tint}`}
                                    >
                                        <s.icon
                                            className="size-7"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <h3
                                        className={`${display} mt-7 text-2xl leading-snug font-bold tracking-tight text-slate-950`}
                                    >
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 text-[1.05rem] leading-relaxed text-slate-600">
                                        {s.body}
                                    </p>
                                    <ul className="mt-auto space-y-2.5 pt-7 text-[0.95rem] text-slate-700">
                                        {s.points.map((p) => (
                                            <li
                                                key={p}
                                                className="flex items-start gap-2.5"
                                            >
                                                <Check
                                                    className="mt-0.5 size-4 shrink-0 text-emerald-600"
                                                    aria-hidden="true"
                                                />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- Provinces ---------------- */}
                <section className="border-y border-slate-200 bg-slate-50 py-20">
                    <div className={container}>
                        <Eyebrow>
                            Cross-Border & Interprovincial Compliance
                        </Eyebrow>
                        <h2
                            className={`${display} text-4xl font-bold tracking-tight text-slate-950`}
                        >
                            Do You Sell Across Canadian Provinces?
                        </h2>
                        <p className="mt-3 max-w-4xl text-lg text-slate-600">
                            Canadian sales tax rules vary drastically by
                            destination province. Invisor CPA manages
                            calculations and remittances for every tax regime:
                        </p>
                        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {provinces.map((p) => (
                                <div
                                    key={p.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6"
                                >
                                    <h3 className="text-lg font-bold text-sky-900">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-500">
                                        {p.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- Offices ---------------- */}
                <section id="offices" className="scroll-mt-24 py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Our Operating Architecture"
                            title={
                                <>
                                    Local Roots in Southwestern Ontario,
                                    <br className="hidden lg:block" />{' '}
                                    Seamless Cloud Delivery Nationwide
                                </>
                            }
                            body="Meet with our CPAs face-to-face at our physical offices or collaborate 100% digitally through modern client portals."
                        />

                        <div className="mx-auto mt-16 grid max-w-[1520px] gap-10 lg:grid-cols-2">
                            {offices.map((o) => (
                                <article
                                    key={o.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10"
                                >
                                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-sm font-semibold text-sky-800">
                                        <MapPin
                                            className="size-4"
                                            aria-hidden="true"
                                        />
                                        {o.badge}
                                    </span>
                                    <h3
                                        className={`${display} mt-5 text-3xl font-bold tracking-tight text-slate-950`}
                                    >
                                        {o.title}
                                    </h3>
                                    <p className="mt-3 text-lg leading-relaxed text-slate-600">
                                        {o.body}
                                    </p>
                                    <ul className="mt-7 space-y-4 rounded-2xl border border-slate-200 p-6 text-[1.05rem] text-slate-700">
                                        <li className="flex items-start gap-3">
                                            <MapPin
                                                className="mt-0.5 size-5 shrink-0 text-sky-700"
                                                aria-hidden="true"
                                            />
                                            <span>
                                                <strong className="font-semibold text-slate-900">
                                                    Address:
                                                </strong>{' '}
                                                {o.address}
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Phone
                                                className="mt-0.5 size-5 shrink-0 text-sky-700"
                                                aria-hidden="true"
                                            />
                                            <span>
                                                <strong className="font-semibold text-slate-900">
                                                    Direct Phone:
                                                </strong>{' '}
                                                <a
                                                    href={PHONE_HREF}
                                                    className="hover:text-sky-700"
                                                >
                                                    {PHONE_DISPLAY}
                                                </a>
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Clock
                                                className="mt-0.5 size-5 shrink-0 text-sky-700"
                                                aria-hidden="true"
                                            />
                                            <span>
                                                <strong className="font-semibold text-slate-900">
                                                    Hours:
                                                </strong>{' '}
                                                {o.hours}
                                            </span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#consultation"
                                        className="mt-8 inline-flex items-center gap-1.5 text-lg font-bold text-sky-700 hover:text-sky-900"
                                    >
                                        {o.cta}
                                        <ChevronRight
                                            className="size-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </article>
                            ))}
                        </div>

                        {/* Remote reach */}
                        <div className="mx-auto mt-16 max-w-[1520px] overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white sm:p-14">
                            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                                <div>
                                    <span className="inline-block rounded-md bg-sky-700 px-3 py-1.5 text-sm font-bold">
                                        100% Virtual Back Office
                                    </span>
                                    <h3
                                        className={`${display} mt-5 text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-tight`}
                                    >
                                        Coast-to-Coast Cloud Accounting Hubs
                                    </h3>
                                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                                        No matter where you are registered in
                                        Canada, our paperless infrastructure
                                        handles everything from monthly
                                        bookkeeping to corporate filings
                                        without you ever having to visit an
                                        office.
                                    </p>
                                    <a
                                        href="#consultation"
                                        className={`${display} mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-slate-900 transition-colors hover:bg-sky-50`}
                                    >
                                        Start Remotely
                                        <ArrowRight className="size-4" />
                                    </a>
                                </div>
                                <ul className="grid grid-cols-2 gap-3">
                                    {cloudHubs.map((c) => (
                                        <li
                                            key={c}
                                            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.95rem] font-medium text-slate-100"
                                        >
                                            <span className="size-1.5 rounded-full bg-emerald-400" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------- Pricing ---------------- */}
                <section
                    id="pricing"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24 lg:py-28"
                >
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Transparent Monthly Investment"
                            title="No Hourly Billing. No Surprise Fees."
                            body="Fixed-price accounting plans built specifically for Canadian corporations, sole proprietors, and fast-growing startups."
                        />

                        <div className="mx-auto mt-16 grid max-w-[1520px] items-start gap-8 lg:grid-cols-3">
                            {plans.map((p) => (
                                <article
                                    key={p.title}
                                    className={`relative flex h-full flex-col rounded-3xl bg-white p-8 sm:p-10 ${
                                        p.featured
                                            ? 'border-2 border-sky-700 shadow-2xl shadow-sky-900/10 lg:-mt-4 lg:pb-14'
                                            : 'border border-slate-200'
                                    }`}
                                >
                                    {p.featured && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-sky-700 px-5 py-2 text-xs font-extrabold tracking-[0.06em] whitespace-nowrap text-white uppercase">
                                            Most Popular for SMBs
                                        </span>
                                    )}
                                    <p
                                        className={`text-sm font-bold tracking-[0.08em] uppercase ${p.featured ? 'text-sky-700' : 'text-slate-500'}`}
                                    >
                                        {p.eyebrow}
                                    </p>
                                    <h3
                                        className={`${display} mt-2 text-3xl font-bold tracking-tight text-slate-950`}
                                    >
                                        {p.title}
                                    </h3>
                                    <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-500">
                                        {p.body}
                                    </p>
                                    <p className="mt-7 flex items-baseline gap-2">
                                        <span
                                            className={`${display} text-5xl font-extrabold tracking-tight text-slate-950`}
                                        >
                                            {p.price}
                                        </span>
                                        <span className="text-lg text-slate-500">
                                            / {p.period}
                                        </span>
                                    </p>
                                    <ul className="mt-8 space-y-4 text-[1.05rem] text-slate-700">
                                        {p.features.map((f) => (
                                            <li
                                                key={f}
                                                className={`flex items-start gap-3 ${f.endsWith('plus:') ? 'font-semibold text-slate-900' : ''}`}
                                            >
                                                <Check
                                                    className="mt-1 size-4 shrink-0 text-emerald-600"
                                                    aria-hidden="true"
                                                />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto pt-10">
                                        <a
                                            href="#consultation"
                                            className={`${display} flex justify-center rounded-lg px-6 py-4 font-bold transition-colors ${
                                                p.featured
                                                    ? 'bg-sky-700 text-white hover:bg-sky-800'
                                                    : 'border border-slate-300 text-slate-800 hover:border-sky-600 hover:text-sky-800'
                                            }`}
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <p className="mt-10 text-center text-slate-600">
                            Need personal tax, quarterly or high-volume
                            bookkeeping?{' '}
                            <Link
                                href="/pricing"
                                className="font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-900"
                            >
                                See all plans
                            </Link>
                        </p>
                    </div>
                </section>

                {/* ---------------- Leadership ---------------- */}
                <section className="py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="E-E-A-T Leadership"
                            title="Meet Your Dedicated Canadian Accounting Leaders"
                            body="Work with experienced CPAs and financial transformation experts dedicated to the success of Canadian entrepreneurs."
                        />
                        <div className="mx-auto mt-16 grid max-w-[1520px] gap-10 md:grid-cols-3">
                            {leaders.map((l) => (
                                <article
                                    key={l.name}
                                    className="flex flex-col items-center rounded-3xl border border-slate-200 bg-slate-50 px-8 py-8 text-center"
                                >
                                    <div className="relative size-30 overflow-hidden rounded-full bg-slate-200 ring-4 ring-white">
                                        <Image
                                            src={l.photo}
                                            alt={l.name}
                                            fill
                                            sizes="120px"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                    <h3
                                        className={`${display} mt-6 text-2xl font-bold tracking-tight text-slate-950`}
                                    >
                                        {l.name}
                                    </h3>
                                    <p className="mt-1 text-[0.95rem] font-semibold text-sky-700">
                                        {l.credentials}
                                    </p>
                                    <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
                                        {l.bio}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ---------------- FAQ ---------------- */}
                <section
                    id="faqs"
                    className="scroll-mt-24 border-t border-slate-200 bg-slate-50 py-24 lg:py-28"
                >
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Clear Answers"
                            title="Frequently Asked Questions"
                        />
                        <p className="mt-4 text-center text-slate-600">
                            Common questions from Canadian business owners
                            evaluating Invisor CPA.
                        </p>
                        <Accordion
                            type="single"
                            collapsible
                            className="mx-auto mt-14 max-w-5xl space-y-5"
                        >
                            {faqs.map((f, i) => (
                                <AccordionItem
                                    key={f.q}
                                    value={`faq-${i}`}
                                    className="rounded-2xl border border-slate-200 bg-white px-6 last:border-b sm:px-8"
                                >
                                    <AccordionTrigger className="py-7 text-lg font-semibold text-slate-950 hover:no-underline [&>svg]:size-5 [&>svg]:text-slate-400">
                                        {f.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-7 text-[1.05rem] leading-relaxed text-slate-600">
                                        {f.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* ---------------- Final CTA ---------------- */}
                <section className="py-20">
                    <div className={container}>
                        <div className="mx-auto flex max-w-[1520px] flex-col items-start justify-between gap-8 rounded-[2rem] bg-sky-700 p-8 text-white sm:p-14 lg:flex-row lg:items-center">
                            <div>
                                <h2
                                    className={`${display} text-3xl font-bold tracking-tight sm:text-4xl`}
                                >
                                    Ready for books you never have to worry
                                    about?
                                </h2>
                                <p className="mt-3 max-w-2xl text-lg text-sky-100">
                                    Book a free discovery session. A CPA will
                                    review your situation and send a fixed-fee
                                    quote within 24 hours.
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                                <a
                                    href="#consultation"
                                    className={`${display} inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 font-bold text-sky-800 transition-colors hover:bg-sky-50`}
                                >
                                    Book Free Consultation
                                    <ArrowRight className="size-4" />
                                </a>
                                <a
                                    href={PHONE_HREF}
                                    className={`${display} inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-7 py-4 font-bold text-white transition-colors hover:bg-white/10`}
                                >
                                    <Phone className="size-4" />
                                    {PHONE_DISPLAY}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ---------------- Footer ---------------- */}
            <footer className="border-t border-slate-200 bg-white">
                <div
                    className={`${container} grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]`}
                >
                    <div>
                        <Logo />
                        <p className="mt-5 max-w-md text-slate-600">
                            CPA-led bookkeeping, payroll and tax for Canadian
                            small businesses, from our offices in London and
                            Fergus, Ontario, and online coast to coast.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3 text-slate-600">
                            <li className="flex items-center gap-2.5">
                                <Phone className="size-4 text-sky-700" />
                                <a href={PHONE_HREF} className="hover:text-sky-700">
                                    {PHONE_DISPLAY}
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail className="size-4 text-sky-700" />
                                <a
                                    href="mailto:info@invisorcpa.ca"
                                    className="hover:text-sky-700"
                                >
                                    info@invisorcpa.ca
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900">
                            Explore
                        </h3>
                        <ul className="mt-4 space-y-3 text-slate-600">
                            <li>
                                <Link href="/services" className="hover:text-sky-700">
                                    All services
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-sky-700">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-sky-700">
                                    Our team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-sky-700"
                                >
                                    Privacy policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Invisor CPA. All rights
                    reserved.
                </div>
            </footer>
        </>
    );
}
