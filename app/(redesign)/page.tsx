import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    ArrowLeftRight,
    ArrowRight,
    BadgeCheck,
    Boxes,
    Building2,
    Calculator,
    Check,
    ClipboardList,
    Cog,
    Compass,
    FileSpreadsheet,
    FileText,
    Globe2,
    Handshake,
    Landmark,
    Layers,
    LineChart,
    Mail,
    MapPin,
    Network,
    PhoneCall,
    Play,
    Receipt,
    RefreshCcw,
    Scale,
    ShieldCheck,
    Ship,
    Sparkles,
    Star,
    TrendingUp,
    UserCheck,
    Users,
    Wallet,
    Workflow,
} from 'lucide-react';
import { IndustryTabs } from '@/components/redesign/industry-tabs';

export const metadata: Metadata = {
    title: 'Invisor | Accounting, Tax and Payroll Across Canada and the US',
    description:
        'Invisor runs tax, payroll, accounting and finance operations for businesses and people who work across Canada and the United States. Trusted by 1,000+ clients.',
    alternates: { canonical: 'https://www.invisorcpa.ca' },
    openGraph: {
        title: 'Invisor | Accounting, Tax and Payroll Across Canada and the US',
        description:
            'Tax, payroll, accounting and finance operations for businesses working across Canada and the US.',
        url: 'https://www.invisorcpa.ca',
        siteName: 'Invisor CPA',
        images: [{ url: '/invisorcpa-logo.png', width: 1200, height: 630 }],
        locale: 'en_CA',
        type: 'website',
    },
    other: { 'msvalidate.01': '38DA8FFFF9D52A1C9236A51CEFEE7542' },
};

const stats = [
    { icon: Users, value: '1,000+', label: 'Clients served across Canada' },
    { icon: BadgeCheck, value: '15+', label: 'Years of experience' },
    { icon: UserCheck, value: '20+', label: 'Accounting and tax professionals' },
    { icon: Star, value: '4.9', label: 'Google rating from 158 reviews' },
];

const countries = [
    {
        flag: '/assets/flags/ca.svg',
        name: 'Canada',
        body: 'Accounting, payroll, tax and employment for Canadian entities and individuals.',
        items: [
            'Corporate (T2) and personal (T1) returns',
            'Payroll, source deductions and T4s',
            'GST/HST and provincial sales tax',
        ],
        href: '/services',
    },
    {
        flag: '/assets/flags/us.svg',
        name: 'United States',
        body: 'Accounting, payroll and tax for US entities and individuals with Canadian ties.',
        items: [
            'Individual (1040) and business (1120) returns',
            'FBAR, FATCA and foreign reporting',
            'US entity setup and state registrations',
        ],
        href: '/services/cross-border-taxes',
    },
];

const crossBorderPoints = [
    'Residency and treaty tie-breakers',
    'Returns in both countries from one set of facts',
    'Foreign tax credits and treaty positions',
    'T1135, FBAR and Form 8938 reporting',
];

const workforce = [
    {
        icon: Wallet,
        title: 'Payroll in both countries',
        body: 'Payroll for staff in Canada and the US, with source deductions, year-end slips and benefit administration.',
    },
    {
        icon: Handshake,
        title: 'Employer of record',
        body: 'Hire people in Canada without setting up a local entity. We handle the contract, payroll and compliance.',
    },
    {
        icon: Scale,
        title: 'Worker classification',
        body: 'Reviews of employees and contractors, so you know who is which in each country before the CRA or IRS asks.',
    },
    {
        icon: RefreshCcw,
        title: 'Payroll corrections',
        body: 'Cleaning up past payroll errors, amending slips and voluntary disclosures where they are the right route.',
    },
];

const leadership = [
    {
        icon: Compass,
        title: 'Fractional CFO',
        body: 'Part-time CFO leadership: cash flow, forecasting, board and lender reporting, and finance strategy.',
    },
    {
        icon: LineChart,
        title: 'Management reporting and KPIs',
        body: 'Budgets, forecasts, monthly management packs and KPI dashboards consistent across entities.',
    },
    {
        icon: Globe2,
        title: 'Market-entry planning',
        body: 'Entity choice, tax and cost modelling, and a plan before you hire or sell in a new country.',
    },
    {
        icon: Network,
        title: 'Cross-border deal support',
        body: 'Financial due diligence and post-deal accounting integration for acquisitions and investments.',
    },
];

const operations = [
    { icon: Receipt, title: 'Order to cash', body: 'Invoicing, collections, cash application and customer reconciliations.' },
    { icon: FileSpreadsheet, title: 'Procure to pay', body: 'Vendor onboarding, purchase orders, accounts payable and payment runs.' },
    { icon: ClipboardList, title: 'Record to report', body: 'Month-end close, accruals, reconciliations and financial statements.' },
    { icon: ArrowLeftRight, title: 'Intercompany accounting', body: 'Intercompany invoicing, settlements, eliminations and transfer-pricing support.' },
    { icon: Ship, title: 'Import and export accounting', body: 'Landed cost, duties and foreign currency, reconciled with customs records.' },
    { icon: Calculator, title: 'Sales tax', body: 'GST/HST, PST and US sales tax registrations, filings and reconciliations.' },
    { icon: Users, title: 'Outsourced accounting', body: 'A full accounting team or support for your in-house team, on a predictable fee.' },
    { icon: Layers, title: 'Shared services design', body: 'One finance function serving several entities: process, roles and controls.' },
    { icon: Landmark, title: 'Corporate compliance', body: 'Annual returns, minute books support and filings so entities stay in good standing.' },
];

const zohoServices = [
    {
        title: 'Zoho Books setup and migration',
        body: 'Moving from QuickBooks, Xero or spreadsheets into Zoho Books with clean history and opening balances.',
    },
    {
        title: 'Zoho One implementation',
        body: 'Books, CRM, Inventory, Payroll and Analytics set up to work together, with the right access for each team.',
    },
    {
        title: 'Zoho CRM and Desk',
        body: 'Pipelines, customer records and support desks connected to your billing and accounting.',
    },
    {
        title: 'Reporting and automation',
        body: 'Zoho Analytics dashboards, approval workflows and integrations that remove manual entry.',
    },
];

const steps = [
    { icon: Compass, label: 'Step 1', title: 'Map', body: 'Entities, countries, systems and filing deadlines, in one picture.' },
    { icon: Cog, label: 'Step 2', title: 'Set up', body: 'Chart of accounts, payroll, registrations and reporting packs.' },
    { icon: Play, label: 'Step 3', title: 'Run', body: 'Monthly close, filings, payroll and management reporting on a schedule.' },
    { icon: TrendingUp, label: 'Step 4', title: 'Improve', body: 'Automation and planning reviewed with you on a regular cycle.' },
];

const reasons = [
    { icon: Boxes, title: 'One operating model', body: 'The same processes and chart of accounts across entities, adapted to each country’s rules.' },
    { icon: ShieldCheck, title: 'Local compliance, one view', body: 'Returns and payroll filed where they are due, with one reporting view for leadership.' },
    { icon: ArrowLeftRight, title: 'Intercompany discipline', body: 'Intercompany balances that agree, settle on time and hold up to review.' },
    { icon: Sparkles, title: 'Senior review', body: 'Every return is reviewed by a CPA or IRS Enrolled Agent before it is filed.' },
];

const faqs = [
    {
        q: 'Which countries do you cover?',
        a: 'Our core work is Canada and the United States. We prepare Canadian and US returns, payroll and accounting, and coordinate them so both sides agree.',
    },
    {
        q: 'Can you work alongside our in-house team?',
        a: 'Yes. Many clients keep an in-house bookkeeper or controller and use us for tax, payroll, month-end close or CFO-level support.',
    },
    {
        q: 'Do you implement Zoho?',
        a: 'Yes. We set up and migrate Zoho Books, Zoho One, CRM and Analytics, and we can run the accounting on Zoho once it is live.',
    },
    {
        q: 'How does employer of record work?',
        a: 'We become the legal employer for your staff in Canada. You direct their work; we handle the employment contract, payroll, deductions and filings.',
    },
    {
        q: 'Can you help a business expanding into the US or Canada?',
        a: 'Yes. We help with entity choice, registrations, payroll setup and the tax filings that come with selling or hiring in a new country.',
    },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
    return <p className="rd-eyebrow">{children}</p>;
}

export default function HomePage() {
    return (
        <main className="rd-main">
            {/* ---------------- Hero ---------------- */}
            <section className="rd-hero-home">
                <div className="rd-wrap rd-hero-home__grid">
                    <div className="rd-hero-home__copy">
                        <Eyebrow>Cross-border tax, payroll and finance</Eyebrow>
                        <h1>
                            Run your finances across <mark>Canada</mark> and the{' '}
                            <mark>US</mark> as one function
                        </h1>
                        <p className="rd-lead">
                            Invisor coordinates tax, payroll, employment and
                            finance operations for businesses and individuals
                            who work across borders, with the local expertise
                            each country needs.
                        </p>
                        <div className="rd-actions">
                            <Link href="/contact-us" className="rd-btn rd-btn--primary">
                                Book a consultation
                                <ArrowRight aria-hidden="true" />
                            </Link>
                            <Link href="/services" className="rd-btn rd-btn--ghost">
                                Explore our services
                            </Link>
                        </div>
                        <div className="rd-hero-home__rating">
                            <span className="rd-stars" aria-label="Five stars">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} aria-hidden="true" />
                                ))}
                            </span>
                            <p>
                                <strong>4.9 on Google</strong> · trusted by
                                1,000+ clients
                            </p>
                        </div>
                    </div>

                    <div className="rd-hero-home__visual" aria-hidden="true">
                        <div className="rd-orbit" />
                        <div className="rd-orbit rd-orbit--inner" />
                        {countries.map((c, i) => (
                            <div
                                key={c.name}
                                className={`rd-hero-card rd-hero-card--${i === 0 ? 'ca' : 'us'}`}
                            >
                                <Image src={c.flag} alt="" width={44} height={44} />
                                <div>
                                    <strong>{c.name}</strong>
                                    <span>
                                        {i === 0
                                            ? 'T2 · Payroll · GST/HST'
                                            : '1040 · 1120 · FBAR'}
                                    </span>
                                </div>
                            </div>
                        ))}
                        <div className="rd-hero-hub">
                            <ArrowLeftRight />
                            <span>One team</span>
                        </div>
                        <div className="rd-chip rd-chip--a">
                            <Check /> Month-end closed
                        </div>
                        <div className="rd-chip rd-chip--b">
                            <Check /> Payroll run · 2 countries
                        </div>
                        <div className="rd-chip rd-chip--c">
                            <Check /> Returns filed on time
                        </div>
                    </div>
                </div>

                <div className="rd-wrap">
                    <div className="rd-statbar">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div key={label}>
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <p>
                                    <strong>{value}</strong>
                                    <span>{label}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Where we work ---------------- */}
            <section className="rd-sec rd-sec--tint">
                <div className="rd-wrap rd-two">
                    <div>
                        <Eyebrow>Where we work</Eyebrow>
                        <h2>Supporting your business across two countries</h2>
                        <p>
                            We provide accounting, tax, payroll and employment
                            services for people and businesses across Canada and
                            the United States, with local expertise on each side
                            and coordinated cross-border support.
                        </p>
                        <ul className="rd-mini-features">
                            <li>
                                <ArrowLeftRight aria-hidden="true" />
                                Cross-border support
                            </li>
                            <li>
                                <MapPin aria-hidden="true" />
                                Local expertise
                            </li>
                            <li>
                                <Workflow aria-hidden="true" />
                                Coordinated service delivery
                            </li>
                        </ul>
                    </div>
                    <div className="rd-country-cards">
                        {countries.map((c) => (
                            <article key={c.name} className="rd-card rd-country-card">
                                <Image src={c.flag} alt="" width={40} height={40} />
                                <h3>{c.name}</h3>
                                <p>{c.body}</p>
                                <ul>
                                    {c.items.map((item) => (
                                        <li key={item}>
                                            <Check aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href={c.href} className="rd-link">
                                    Learn more <ArrowRight aria-hidden="true" />
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Core service: cross-border tax ---------------- */}
            <section className="rd-sec">
                <div className="rd-wrap rd-two rd-two--media">
                    <div className="rd-feature-visual" aria-hidden="true">
                        <div className="rd-feature-visual__doc rd-feature-visual__doc--back">
                            <small>Canada</small>
                            <strong>T1 / T2</strong>
                            <i /><i /><i />
                        </div>
                        <div className="rd-feature-visual__doc">
                            <small>United States</small>
                            <strong>1040 / 1120</strong>
                            <i /><i /><i />
                        </div>
                        <div className="rd-feature-visual__stamp">
                            <BadgeCheck />
                            Filed together
                        </div>
                        <p className="rd-feature-visual__tag">
                            Helping businesses grow beyond borders
                        </p>
                    </div>
                    <div>
                        <Eyebrow>Our core service</Eyebrow>
                        <h2>Cross-border tax, done right</h2>
                        <p>
                            If you live, earn or invest in two countries, you can
                            have obligations in both. We coordinate Canadian and
                            US tax in one team, for individuals, owners and
                            businesses, so positions stay consistent across
                            every filing.
                        </p>
                        <ul className="rd-check-grid">
                            {crossBorderPoints.map((point) => (
                                <li key={point}>
                                    <span className="rd-icon rd-icon--sm">
                                        <FileText aria-hidden="true" />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <Link href="/lp/cross-border-tax" className="rd-btn rd-btn--primary">
                            Learn more
                            <ArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------------- Industries ---------------- */}
            <section className="rd-sec rd-sec--tint">
                <div className="rd-wrap">
                    <div className="rd-head">
                        <div>
                            <Eyebrow>Industries</Eyebrow>
                            <h2>Industry experience for businesses across borders</h2>
                        </div>
                        <p>
                            Each industry has its own rules. Pick yours to see
                            the detail we handle for businesses that operate in
                            Canada, the US or both.
                        </p>
                    </div>
                    <IndustryTabs />
                    <div className="rd-banner">
                        <span className="rd-icon rd-icon--inverse">
                            <Building2 aria-hidden="true" />
                        </span>
                        <div>
                            <strong>Your industry is not listed?</strong>
                            <p>
                                Tell us what your business does and we will
                                confirm what we can cover.
                            </p>
                        </div>
                        <Link href="/contact-us" className="rd-btn rd-btn--light">
                            Get in touch
                            <ArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------------- Workforce ---------------- */}
            <section className="rd-sec">
                <div className="rd-wrap">
                    <div className="rd-head">
                        <div>
                            <Eyebrow>Workforce</Eyebrow>
                            <h2>Hire and pay people across borders</h2>
                        </div>
                        <p>
                            Hire in the countries you need, with or without a
                            local entity. We handle the payroll and employment
                            side so you can focus on the work.
                        </p>
                    </div>
                    <div className="rd-grid rd-grid--4">
                        {workforce.map(({ icon: Icon, title, body }) => (
                            <article key={title} className="rd-card rd-card--wave">
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Finance leadership ---------------- */}
            <section className="rd-sec rd-sec--tint rd-leadership">
                <div className="rd-wrap rd-two rd-two--media">
                    <div>
                        <Eyebrow>Finance leadership</Eyebrow>
                        <h2>Senior finance support when you need it</h2>
                        <p>
                            Part-time leadership, management reporting and
                            support for expansion and transactions, without a
                            full-time hire.
                        </p>
                        <div className="rd-leadership__photo">
                            <Image
                                src="/assets/our-process.webp"
                                alt="Finance professional reviewing reports"
                                fill
                                sizes="(max-width: 900px) 90vw, 40vw"
                            />
                        </div>
                    </div>
                    <ol className="rd-timeline">
                        {leadership.map(({ icon: Icon, title, body }) => (
                            <li key={title}>
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <div>
                                    <h3>{title}</h3>
                                    <p>{body}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- Finance operations ---------------- */}
            <section className="rd-sec">
                <div className="rd-wrap">
                    <div className="rd-head">
                        <div>
                            <Eyebrow>Finance operations</Eyebrow>
                            <h2>Finance operations for multi-entity groups</h2>
                        </div>
                        <p>
                            Standard processes across entities, with local
                            compliance built in and one set of books that
                            reconciles.
                        </p>
                    </div>
                    <div className="rd-grid rd-grid--3">
                        {operations.map(({ icon: Icon, title, body }, i) => (
                            <article key={title} className="rd-card rd-card--row">
                                <span className="rd-num">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3>
                                        <Icon aria-hidden="true" />
                                        {title}
                                    </h3>
                                    <p>{body}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- Systems + Zoho ---------------- */}
            <section className="rd-sec rd-sec--navy">
                <div className="rd-wrap">
                    <div className="rd-head rd-head--inverse">
                        <div>
                            <Eyebrow>Technology and Zoho</Eyebrow>
                            <h2>Systems that match how your group works</h2>
                        </div>
                        <p>
                            We set up the tools, move the data and rebuild the
                            process around them, in Canada and the US.
                        </p>
                    </div>
                    <div className="rd-zoho">
                        <div className="rd-zoho__stat">
                            <strong>Zoho, QuickBooks and Xero</strong>
                            <p>
                                New setups, migrations from older systems and
                                day-to-day accounting on the platform you use.
                            </p>
                            <div className="rd-zoho__logos">
                                <Image src="/assets/tools/quickbooks.webp" alt="QuickBooks" width={120} height={40} />
                                <Image src="/assets/tools/xero.svg" alt="Xero" width={40} height={40} />
                                <span>Zoho</span>
                            </div>
                        </div>
                        <div className="rd-zoho__grid">
                            {zohoServices.map((s) => (
                                <article key={s.title}>
                                    <h3>{s.title}</h3>
                                    <p>{s.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                    <p className="rd-fineprint">
                        Apps and features depend on your Zoho plan and country.
                        We confirm licensing and availability before we design
                        the rollout.
                    </p>
                </div>
            </section>

            {/* ---------------- Process ---------------- */}
            <section className="rd-sec rd-sec--tint">
                <div className="rd-wrap">
                    <div className="rd-head">
                        <div>
                            <Eyebrow>How we work</Eyebrow>
                            <h2>From structure to steady operations</h2>
                        </div>
                        <p>
                            We start with how your group is built, then set up
                            the finance operation to match.
                        </p>
                    </div>
                    <ol className="rd-steps-home">
                        {steps.map(({ icon: Icon, label, title, body }) => (
                            <li key={title} className="rd-card">
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <small>{label}</small>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- Why Invisor ---------------- */}
            <section className="rd-sec">
                <div className="rd-wrap rd-why">
                    <div className="rd-why__intro">
                        <Eyebrow>Why Invisor</Eyebrow>
                        <h2>Built for groups that work across borders</h2>
                        <p>
                            We help multi-entity businesses manage finance
                            across countries through consistent processes,
                            disciplined reporting and local compliance, giving
                            leadership a clear view of the whole group.
                        </p>
                    </div>
                    <div className="rd-why__grid">
                        {reasons.map(({ icon: Icon, title, body }) => (
                            <article key={title} className="rd-card">
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------------- About ---------------- */}
            <section className="rd-sec rd-sec--tint">
                <div className="rd-wrap rd-two rd-two--media">
                    <div>
                        <Eyebrow>About</Eyebrow>
                        <h2>A Canadian firm with cross-border depth</h2>
                        <p>
                            Invisor is an Ontario accounting firm with offices in
                            London and Fergus, serving 1,000+ clients across
                            Canada. Our team includes CPAs and an IRS Enrolled
                            Agent, so Canadian and US work is prepared under one
                            roof.
                        </p>
                        <div className="rd-quote">
                            <span className="rd-icon">
                                <Workflow aria-hidden="true" />
                            </span>
                            <p>
                                Our work sits between two tax systems, so we
                                build processes{' '}
                                <strong>that keep both sides consistent.</strong>
                            </p>
                        </div>
                        <ul className="rd-mini-features">
                            <li>
                                <Calculator aria-hidden="true" /> Accounting
                            </li>
                            <li>
                                <Receipt aria-hidden="true" /> Tax
                            </li>
                            <li>
                                <Wallet aria-hidden="true" /> Payroll
                            </li>
                        </ul>
                        <Link href="/about-us" className="rd-btn rd-btn--ghost">
                            More about us
                            <ArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                    <div className="rd-about-visual">
                        <div className="rd-about-visual__photo">
                            <Image
                                src="/assets/section-2-1.webp"
                                alt="The Invisor team in a client meeting"
                                fill
                                sizes="(max-width: 900px) 90vw, 45vw"
                            />
                        </div>
                        <div className="rd-about-visual__flags" aria-hidden="true">
                            <Image src="/assets/flags/ca.svg" alt="" width={52} height={52} />
                            <Image src="/assets/flags/us.svg" alt="" width={52} height={52} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- FAQ ---------------- */}
            <section className="rd-sec">
                <div className="rd-wrap rd-faq-home">
                    <div>
                        <Eyebrow>FAQ</Eyebrow>
                        <h2>Common questions</h2>
                        <p>
                            Short answers to what businesses ask us first. For
                            anything else, book a call.
                        </p>
                        <div className="rd-faq-home__badge" aria-hidden="true">
                            <span>?</span>
                            <strong>FAQ</strong>
                        </div>
                    </div>
                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="faq-0"
                            className="rd-accordion"
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem key={faq.q} value={`faq-${index}`}>
                                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                                    <AccordionContent>{faq.a}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* ---------------- Contact ---------------- */}
            <section className="rd-sec rd-sec--tint">
                <div className="rd-wrap rd-contact-home">
                    <div>
                        <Eyebrow>Contact</Eyebrow>
                        <h2>Let’s talk about your cross-border finances</h2>
                        <p>
                            Book a consultation to review your structure, the
                            countries you operate in and where your finance
                            process needs work.
                        </p>
                        <Link href="/contact-us" className="rd-btn rd-btn--primary">
                            Book a consultation
                            <ArrowRight aria-hidden="true" />
                        </Link>
                    </div>
                    <ul className="rd-card rd-contact-home__list">
                        <li>
                            <span className="rd-icon">
                                <Mail aria-hidden="true" />
                            </span>
                            <div>
                                <small>Email</small>
                                <a href="mailto:connect@invisorcpa.ca">
                                    connect@invisorcpa.ca
                                </a>
                            </div>
                        </li>
                        <li>
                            <span className="rd-icon">
                                <PhoneCall aria-hidden="true" />
                            </span>
                            <div>
                                <small>Phone</small>
                                <a href="tel:+12262273482">+1 226-227-3482</a>
                            </div>
                        </li>
                        <li>
                            <span className="rd-icon">
                                <MapPin aria-hidden="true" />
                            </span>
                            <div>
                                <small>Offices</small>
                                <span>London and Fergus, Ontario</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
