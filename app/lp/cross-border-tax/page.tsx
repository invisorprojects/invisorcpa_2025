import type { Metadata } from 'next';
import Image from 'next/image';
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
    Briefcase,
    Building2,
    CalendarClock,
    Check,
    ChevronRight,
    ClipboardCheck,
    FileSearch,
    FileText,
    FlaskConical,
    Globe2,
    Home,
    Landmark,
    LockKeyhole,
    Mail,
    MapPin,
    MessageCircle,
    Network,
    PhoneCall,
    PiggyBank,
    Plane,
    Receipt,
    ScrollText,
    ShieldCheck,
    Star,
    UserCheck,
    Users,
} from 'lucide-react';
import CrossBorderLeadForm from './_components/cross-border-lead-form';
import MobileStickyBar from './_components/mobile-sticky-bar';
import ScrollLink from './_components/scroll-link';

const pageUrl = 'https://www.invisorcpa.ca/lp/cross-border-tax';
const WA_LINK =
    'https://wa.me/12262273482?text=Hi%2C%20I%27d%20like%20a%20free%20cross-border%20tax%20consultation.';

export const metadata: Metadata = {
    title: 'Cross-Border Tax, Done Right | US & Canadian Returns | Invisor',
    description:
        'One CPA and IRS Enrolled Agent team for your Canadian and US tax filings: personal and corporate returns, FBAR, T1135, treaty positions and planning. Free consultation.',
    alternates: { canonical: pageUrl },
    robots: { index: false, follow: true },
};

const audiences = [
    {
        icon: Globe2,
        title: 'US citizens and green card holders',
        body: 'living in Canada, and Canadians with US citizenship or US tax residence.',
    },
    {
        icon: Building2,
        title: 'Owners',
        body: 'with companies, partnerships or trusts in both countries.',
    },
    {
        icon: Briefcase,
        title: 'Businesses',
        body: 'with intercompany invoices, staff or contractors across the border.',
    },
    {
        icon: Home,
        title: 'Families',
        body: 'with property, registered accounts or estates on both sides of the border.',
    },
    {
        icon: ArrowLeftRight,
        title: 'People who have moved',
        body: 'between the two countries and need departure or arrival filings.',
    },
];

const services = [
    {
        icon: UserCheck,
        title: 'Residency and treaty tie-breakers',
        body: 'We work out where you are resident under Canadian and US rules, and apply the treaty tie-breaker where both countries could claim you.',
    },
    {
        icon: FileText,
        title: 'Personal and corporate returns in both countries',
        body: 'T1, T2, 1040 and 1120 returns prepared from the same set of facts, so the two sides agree.',
    },
    {
        icon: Receipt,
        title: 'Foreign tax credits and treaty positions',
        body: 'Tax paid in one country credited against tax due in the other, with treaty positions disclosed where they change the result.',
    },
    {
        icon: Landmark,
        title: 'Foreign reporting: T1135, FBAR and Form 8938',
        body: 'Canadian T1135 for foreign property, FBAR for accounts and Form 8938 under FATCA, each filed only where the threshold is met.',
    },
    {
        icon: Plane,
        title: 'Departure and change-of-residence filings',
        body: 'Final and arrival filings when you move between Canada and the US, including elections that apply to the move.',
    },
    {
        icon: PiggyBank,
        title: 'RRSPs, TFSAs, RESPs, 401(k)s and IRAs',
        body: 'Correct reporting of registered and retirement accounts on the other side of the border, including the elections that apply.',
    },
    {
        icon: ScrollText,
        title: 'Estate and gift filings',
        body: 'Estate and gift tax filings for people with assets in both countries, coordinated with your estate lawyer.',
    },
    {
        icon: Network,
        title: 'Entity setup and registrations',
        body: 'Setting up a company or branch in Canada or the US, with the tax and payroll registrations it needs.',
    },
    {
        icon: Building2,
        title: 'Foreign-owned companies and inter-company filings',
        body: 'Form 5472 and 1120 for Canadian-owned US companies, T106 and Schedule 50 for Canadian corporations with US ties.',
    },
    {
        icon: Users,
        title: 'Cross-border employment and remote workers',
        body: 'Payroll, permanent establishment reviews and tax for employees who work across the border or on assignment.',
    },
    {
        icon: FlaskConical,
        title: 'SR&ED and US R&D credits',
        body: 'Claims for the Canadian SR&ED incentive and the US federal R&D credit for qualifying work in either country.',
    },
    {
        icon: ShieldCheck,
        title: 'CRA and IRS notices',
        body: 'Responding to letters from the CRA and IRS, and acting as your authorized representative with both agencies.',
    },
];

const alsoServed = [
    { code: 'AU', name: 'Australia' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'DE', name: 'Germany' },
    { code: 'MX', name: 'Mexico' },
    { code: 'SG', name: 'Singapore' },
    { code: 'AE', name: 'UAE' },
    { code: 'PT', name: 'Portugal' },
];

const steps = [
    {
        icon: PhoneCall,
        title: 'Discovery call',
        body: 'A free call to map where you live, work, earn and hold assets.',
    },
    {
        icon: FileSearch,
        title: 'Document review',
        body: 'We review the records you already have and list what is missing.',
    },
    {
        icon: ClipboardCheck,
        title: 'Preparation',
        body: 'We prepare your returns and reports in both countries, with positions kept consistent.',
    },
    {
        icon: BadgeCheck,
        title: 'CPA or Enrolled Agent review',
        body: 'A senior reviewer checks every return before it is filed.',
    },
    {
        icon: CalendarClock,
        title: 'Ongoing planning',
        body: 'We plan next year’s filings, instalments and reporting before the deadlines.',
    },
];

const stats = [
    { value: '4.9★', label: 'Google rating, 158 reviews' },
    { value: '1,000+', label: 'clients across Canada' },
    { value: 'CPA + EA', label: 'credentials on the team' },
    { value: '2', label: 'countries, one set of facts' },
];

const faqs = [
    {
        q: 'Do I have to file in both countries?',
        a: 'Often, yes. US citizens and green card holders generally have to file a US return wherever they live, and Canadian residents file in Canada. Canadians with US rental property, US work or US companies may also have US filings. On the first call we confirm exactly which returns apply to you.',
    },
    {
        q: 'What is FBAR, and what is T1135?',
        a: 'FBAR (FinCEN Form 114) is the US report of foreign bank and financial accounts, required when the combined balance passes US$10,000 at any point in the year. T1135 is the Canadian foreign income verification statement, required when the cost of your foreign property passes C$100,000. Both carry penalties for late filing even when no tax is owed.',
    },
    {
        q: 'I have not filed for several years. Can you help?',
        a: 'Yes. If the missed US filings were non-willful, the IRS Streamlined procedures can let eligible taxpayers catch up with three years of returns and six years of FBARs, generally without the usual penalties. On the Canadian side we can look at the Voluntary Disclosures Program where it fits.',
    },
    {
        q: 'Will I be taxed twice on the same income?',
        a: 'Usually not when the returns are coordinated. The Canada–US tax treaty and foreign tax credits are designed to prevent double tax, but the order and treatment of those credits matters, which is why one team preparing both sides helps.',
    },
    {
        q: 'Do you work with my lawyer or financial adviser?',
        a: 'Yes. We regularly coordinate with estate lawyers, immigration lawyers and financial advisers so the tax positions match the legal and investment decisions being made.',
    },
    {
        q: 'How much does it cost?',
        a: 'After your free consultation you get a fixed quote for your Canadian and US filings before any work starts. The price you are quoted is the price you pay.',
    },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
    return <p className="rd-eyebrow">{children}</p>;
}

export default function CrossBorderTaxPage() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'AccountingService',
                '@id': `${pageUrl}#accountingservice`,
                name: 'Invisor CPA',
                url: 'https://www.invisorcpa.ca',
                telephone: '+1-226-227-3482',
                areaServed: { '@type': 'Country', name: 'Canada' },
            },
            {
                '@type': 'FAQPage',
                '@id': `${pageUrl}#faq`,
                mainEntity: faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
            },
        ],
    };

    return (
        <main id="top" className="cbt-page rd-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            {/* ---------------- Hero ---------------- */}
            <section className="rd-hero">
                <div className="cbt-container">
                    <nav className="rd-breadcrumb" aria-label="Breadcrumb">
                        <Home aria-hidden="true" />
                        <span>Home</span>
                        <ChevronRight aria-hidden="true" />
                        <span>Services</span>
                        <ChevronRight aria-hidden="true" />
                        <strong>Cross-border tax</strong>
                    </nav>

                    <div className="rd-hero__panel">
                        <div className="rd-hero__copy">
                            <p className="rd-hero__badge">
                                <span className="rd-flag-pair" aria-hidden="true">
                                    <Image
                                        src="/assets/flags/ca.svg"
                                        alt=""
                                        width={22}
                                        height={22}
                                    />
                                    <Image
                                        src="/assets/flags/us.svg"
                                        alt=""
                                        width={22}
                                        height={22}
                                    />
                                </span>
                                Canada · United States
                            </p>
                            <h1>
                                Cross-border tax, <mark>done right</mark>
                            </h1>
                            <p className="rd-hero__lead">
                                If you live, earn or invest in two countries, you
                                can have obligations in both. We coordinate your
                                Canadian and US tax in one team, for individuals,
                                owners and businesses, so positions stay
                                consistent across every filing.
                            </p>
                            <ul className="rd-hero__points">
                                <li>
                                    <Check aria-hidden="true" />
                                    Free first consultation
                                </li>
                                <li>
                                    <Check aria-hidden="true" />
                                    Fixed quote before work starts
                                </li>
                                <li>
                                    <Check aria-hidden="true" />
                                    CPA and IRS Enrolled Agent review
                                </li>
                            </ul>
                            <div className="rd-hero__rating">
                                <span className="rd-stars" aria-label="Five stars">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} aria-hidden="true" />
                                    ))}
                                </span>
                                <p>
                                    <strong>4.9 on Google</strong> · 158 reviews ·
                                    1,000+ clients
                                </p>
                            </div>
                        </div>

                        <div id="hero-form" className="rd-hero__form">
                            <CrossBorderLeadForm
                                formLocation="hero"
                                heading="Book your free consultation"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- Stats strip ---------------- */}
            <section className="rd-stats" aria-label="Invisor at a glance">
                <div className="cbt-container rd-stats__grid">
                    {stats.map((s) => (
                        <div key={s.label}>
                            <strong>{s.value}</strong>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- Who it is for ---------------- */}
            <section id="who-we-help" className="rd-section">
                <div className="cbt-container rd-split">
                    <div className="rd-split__intro">
                        <Eyebrow>Who it is for</Eyebrow>
                        <h2>
                            Built for people and businesses with cross-border
                            lives
                        </h2>
                        <p>
                            Whether you live, work, own a business or hold assets
                            in both Canada and the US, we help you navigate the
                            tax responsibilities that come with cross-border
                            connections.
                        </p>

                        <div className="rd-bridge" aria-hidden="true">
                            <div className="rd-bridge__country">
                                <Image
                                    src="/assets/flags/ca.svg"
                                    alt=""
                                    width={56}
                                    height={56}
                                />
                                <strong>Canada</strong>
                                <span>T1 · T2 · T1135</span>
                            </div>
                            <div className="rd-bridge__link">
                                <span />
                                <i>
                                    <ArrowLeftRight />
                                </i>
                                <span />
                            </div>
                            <div className="rd-bridge__country">
                                <Image
                                    src="/assets/flags/us.svg"
                                    alt=""
                                    width={56}
                                    height={56}
                                />
                                <strong>United States</strong>
                                <span>1040 · 1120 · FBAR</span>
                            </div>
                            <p className="rd-bridge__caption">
                                One team · one set of facts · both returns
                            </p>
                        </div>
                    </div>

                    <ul className="rd-audience">
                        {audiences.map(({ icon: Icon, title, body }) => (
                            <li key={title}>
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <p>
                                    <strong>{title}</strong> {body}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ---------------- What we do ---------------- */}
            <section id="services" className="rd-section rd-section--tint">
                <div className="cbt-container">
                    <div className="rd-heading-row">
                        <div>
                            <Eyebrow>What we do</Eyebrow>
                            <h2>
                                Complete cross-border tax support, from planning
                                to compliance
                            </h2>
                        </div>
                        <p>
                            From personal and corporate tax filings to
                            international reporting, treaty planning and business
                            structuring, we coordinate every detail across Canada
                            and the US to keep your tax obligations aligned.
                        </p>
                    </div>

                    <div className="rd-service-grid">
                        {services.map(({ icon: Icon, title, body }) => (
                            <article key={title} className="rd-service">
                                <span className="rd-icon">
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </article>
                        ))}
                        <article className="rd-service rd-service--cta">
                            <h3>Not sure what applies to you?</h3>
                            <p>
                                That is what the free consultation is for. We
                                will tell you what you need to file.
                            </p>
                            <ScrollLink
                                href="#hero-form"
                                className="rd-btn rd-btn--light"
                            >
                                Find out
                                <ArrowRight aria-hidden="true" />
                            </ScrollLink>
                        </article>
                    </div>
                </div>
            </section>

            {/* ---------------- Countries ---------------- */}
            <section className="rd-section">
                <div className="cbt-container rd-countries">
                    <div>
                        <Eyebrow>Countries</Eyebrow>
                        <h2>Cross-border tax for Canada, the US and beyond</h2>
                        <p>
                            Our core work is Canada and the United States. US
                            cross-border tax is also offered to clients with ties
                            to Australia, the UK, Germany, Mexico, Singapore, the
                            UAE and Portugal.
                        </p>
                        <p className="rd-note">
                            <MapPin aria-hidden="true" />
                            Local tax services are not offered in those
                            countries.
                        </p>
                    </div>

                    <div className="rd-countries__card">
                        <div className="rd-countries__main">
                            <div>
                                <Image
                                    src="/assets/flags/ca.svg"
                                    alt=""
                                    width={64}
                                    height={64}
                                />
                                <span>Canada</span>
                            </div>
                            <svg
                                viewBox="0 0 200 60"
                                className="rd-countries__arc"
                                aria-hidden="true"
                            >
                                <path d="M5 50 Q100 -10 195 50" />
                            </svg>
                            <div>
                                <Image
                                    src="/assets/flags/us.svg"
                                    alt=""
                                    width={64}
                                    height={64}
                                />
                                <span>United States</span>
                            </div>
                        </div>
                        <p className="rd-countries__label">
                            US cross-border tax also for
                        </p>
                        <ul className="rd-countries__list">
                            {alsoServed.map((c) => (
                                <li key={c.code} title={c.name}>
                                    <b>{c.code}</b>
                                    <span>{c.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ---------------- Process ---------------- */}
            <section id="how-it-works" className="rd-section rd-section--navy">
                <div className="cbt-container">
                    <div className="rd-heading-row rd-heading-row--inverse">
                        <div>
                            <Eyebrow>How we work</Eyebrow>
                            <h2>A clear and structured process</h2>
                        </div>
                        <p>
                            No obligation at any step. If we are not the right
                            fit, we will tell you on the first call.
                        </p>
                    </div>
                    <ol className="rd-steps">
                        {steps.map(({ icon: Icon, title, body }, index) => (
                            <li key={title}>
                                <div className="rd-steps__top">
                                    <span className="rd-icon rd-icon--inverse">
                                        <Icon aria-hidden="true" />
                                    </span>
                                    <em>0{index + 1}</em>
                                </div>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ---------------- FAQ ---------------- */}
            <section id="faq" className="rd-section">
                <div className="cbt-container rd-faq">
                    <div className="rd-faq__intro">
                        <Eyebrow>FAQ</Eyebrow>
                        <h2>Common questions</h2>
                        <p>
                            Straight answers to what people ask before they call
                            us. Anything else, ask us directly.
                        </p>
                        <div className="rd-faq__help">
                            <span className="rd-icon">
                                <MessageCircle aria-hidden="true" />
                            </span>
                            <div>
                                <strong>Still have a question?</strong>
                                <p>Talk to a cross-border specialist today.</p>
                                <a href="tel:+12262273482">Call 226-227-3482</a>
                            </div>
                        </div>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="faq-0"
                        className="rd-faq__list"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.q}
                                value={`faq-${index}`}
                            >
                                <AccordionTrigger>{faq.q}</AccordionTrigger>
                                <AccordionContent>{faq.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ---------------- Contact ---------------- */}
            <section className="rd-section rd-section--tint rd-contact-section">
                <div className="cbt-container rd-contact">
                    <div className="rd-contact__copy">
                        <Eyebrow>Contact</Eyebrow>
                        <h2>Let’s talk about your cross-border finances</h2>
                        <p>
                            Book a consultation to review your situation, the
                            countries you operate in and where your filings need
                            work. A specialist replies within one business day.
                        </p>
                        <ul className="rd-contact__list">
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
                                    <a href="tel:+12262273482">
                                        +1 226-227-3482
                                    </a>
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
                        <div className="rd-contact__actions">
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="rd-btn rd-btn--outline"
                            >
                                <MessageCircle aria-hidden="true" />
                                Message on WhatsApp
                            </a>
                            <span className="rd-secure">
                                <LockKeyhole aria-hidden="true" />
                                Secure, confidential, no obligation
                            </span>
                        </div>
                    </div>
                    <div className="rd-contact__form">
                        <CrossBorderLeadForm
                            formLocation="footer"
                            heading="Book a consultation"
                            subheading="Takes about 60 seconds. No obligation."
                        />
                    </div>
                </div>
            </section>

            <MobileStickyBar />
        </main>
    );
}
