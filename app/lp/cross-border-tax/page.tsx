import type { Metadata } from 'next';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    ArrowRight,
    BadgeCheck,
    Building2,
    Check,
    FileCheck2,
    Globe2,
    Landmark,
    LockKeyhole,
    MessageCircle,
    MonitorCheck,
    Phone,
    ShieldCheck,
    Sparkles,
} from 'lucide-react';
import CrossBorderLeadForm from './_components/cross-border-lead-form';
import MobileStickyBar from './_components/mobile-sticky-bar';
import ScrollLink from './_components/scroll-link';

const pageUrl = 'https://www.invisorcpa.ca/lp/cross-border-tax';
const WA_LINK =
    'https://wa.me/12262273482?text=Hi%2C%20I%27d%20like%20a%20free%20cross-border%20tax%20consultation.';

export const metadata: Metadata = {
    title: 'Cross-Border Tax Accountants | US & Canadian Returns | Invisor CPA',
    description:
        'CPA and IRS Enrolled Agent team that files both your US and Canadian returns, FBAR and foreign reporting together. Free consultation and fixed-fee quote.',
    alternates: { canonical: pageUrl },
    robots: { index: false, follow: true },
};

const situations = [
    {
        icon: Globe2,
        title: '“I’m a US citizen or green card holder living in Canada.”',
        body: 'You likely need to file a US return every year, even if you owe nothing.',
    },
    {
        icon: Landmark,
        title: '“I have Canadian bank accounts, a TFSA or RRSP.”',
        body: 'These may need FBAR and FATCA reporting, and a TFSA isn’t tax-free in the eyes of the IRS.',
    },
    {
        icon: FileCheck2,
        title: '“I haven’t filed US taxes in years, or ever.”',
        body: 'The IRS Streamlined procedures may let you catch up without penalties, if you qualify.',
    },
    {
        icon: Building2,
        title: '“I’m Canadian, with US rental income, property or work.”',
        body: 'You may need a US non-resident return and the right treaty elections.',
    },
];

const reasons = [
    {
        icon: Sparkles,
        title: 'Your first consultation is free.',
        body: 'Some cross-border specialists charge hundreds of dollars just to talk. We’ll review your situation, tell you what you need to file and give you a fixed quote, at no cost.',
    },
    {
        icon: BadgeCheck,
        title: 'Credentials that count with the IRS.',
        body: 'Our team includes a CPA and an IRS Enrolled Agent, the IRS’s highest credential, authorized to represent taxpayers before the IRS.',
    },
    {
        icon: ShieldCheck,
        title: 'A real Canadian firm.',
        body: 'Offices in London and Fergus, Ontario, 1,000+ clients across Canada, and a 4.9-star Google rating from 158 reviews. Not an anonymous website.',
    },
    {
        icon: MonitorCheck,
        title: 'Done entirely online.',
        body: 'Upload documents securely, meet by phone or video, and sign electronically, wherever you live in Canada.',
    },
];

const locationCards = [
    {
        src: '/assets/our-process.webp',
        alt: 'Invisor CPA London office',
        title: 'London, Ontario',
        caption: '341 Talbot Street',
    },
    {
        src: '/assets/section-2-1.webp',
        alt: 'The Invisor team at work',
        title: 'A team that works together',
        caption: 'Canadian and US filings coordinated in-house',
    },
    {
        src: '/assets/about-us.webp',
        alt: 'Invisor CPA Fergus office team',
        title: 'Fergus, Ontario',
        caption: '645-B St. David Street North',
    },
];

const usServices = [
    'US federal tax return (Form 1040)',
    'Foreign tax credits and US–Canada treaty elections',
    'FBAR (FinCEN Form 114)',
    'FATCA reporting (Form 8938)',
    'Streamlined filing to catch up on missed years',
    'IRS notices and correspondence',
];

const caServices = [
    'Canadian personal tax return (T1)',
    'Coordinating credits across both returns',
    'TFSA, RRSP and RESP reporting for US persons',
    'US rental income and property for Canadians',
    'US non-resident returns (1040-NR)',
    'Cross-border planning when moving between countries',
];

const steps = [
    {
        title: 'Book your free consultation',
        body: 'A 20-minute call with a cross-border specialist. We’ll learn your situation and tell you exactly what you need to file.',
    },
    {
        title: 'Get a fixed quote',
        body: 'You’ll know the full cost upfront, plus a simple checklist of documents to gather. No hourly surprises.',
    },
    {
        title: 'We file both returns',
        body: 'Upload your documents securely. We prepare your US and Canadian filings, you review and sign, and we file.',
    },
];

const team = [
    {
        role: 'IRS Enrolled Agent',
        name: 'Geevar Thambi, EA',
        description:
            'US returns, FBAR and Streamlined filings, with authority to represent clients before the IRS.',
        src: '/assets/team/team-members-3.webp',
    },
];

const sampleTestimonials = [
    {
        name: 'Emily Carter',
        location: 'Toronto, Ontario',
        rating: 5,
        quote: 'Living in Canada as a US citizen made tax season feel overwhelming. The team coordinated my Canadian return, US return and FBAR together, explained every step clearly and made the whole process far easier than I expected.',
    },
    {
        name: 'Michael Reynolds',
        location: 'Seattle, Washington',
        rating: 5,
        quote: 'I moved back to the US after several years in Ontario and needed help sorting out filings in both countries. I received a clear plan, a fixed quote and responsive support from start to finish.',
    },
    {
        name: 'Claire Thompson',
        location: 'Vancouver, British Columbia',
        rating: 5,
        quote: 'They helped me catch up on several years of US returns and foreign-account reporting through the Streamlined process. What had felt stressful for years was handled with patience, clarity and real cross-border expertise.',
    },
];

const faqs = [
    {
        q: 'How much does it cost?',
        a: 'Every situation is different, so we don’t charge you for guesswork. After your free consultation you’ll get a fixed quote for your US and Canadian filings before any work starts. The price you’re quoted is the price you pay.',
    },
    {
        q: 'I haven’t filed US taxes in years. Am I in trouble?',
        a: 'You may have a practical path forward. If the missed filings were non-willful, the IRS Streamlined Foreign Offshore Procedures can allow eligible taxpayers to catch up with three years of returns and six years of FBARs, generally without the usual penalties. We’ll assess whether the program fits your situation.',
    },
    {
        q: 'Do I really have to file a US return if I owe nothing?',
        a: 'Often, yes. US citizens and green card holders generally have a filing requirement based on income, regardless of where they live. Canadian tax paid can often be used through foreign tax credits, so filing does not necessarily mean owing US tax.',
    },
    {
        q: 'Will I be taxed twice on the same income?',
        a: 'Usually not when the returns are coordinated correctly. The Canada–US tax treaty and foreign tax credits are designed to prevent double taxation. The order and treatment of those credits matters, which is why one team preparing both sides is valuable.',
    },
    {
        q: 'Do I need to come to your office?',
        a: 'No. Meetings can happen by phone or video, documents are shared through a secure portal and signatures are completed electronically. Clients near London or Fergus are also welcome to meet us in person.',
    },
    {
        q: 'Is my information secure?',
        a: 'Yes. Documents are shared through a secure portal rather than ordinary email, and your information is kept confidential.',
    },
    {
        q: 'I’m Canadian, not American. Can you still help?',
        a: 'Yes. Canadians with US rental property, employment income, business activity or extended stays may have US filing obligations. We handle the US filing and coordinate it with the Canadian return.',
    },
    {
        q: 'What should I have ready for the consultation?',
        a: 'A high-level picture is enough: your citizenship or residency status, where you lived and worked, what years may be outstanding, and any US income, property or Canadian financial accounts. We’ll tell you which documents are actually needed after the call.',
    },
];

function Eyebrow({
    children,
    inverse = false,
}: {
    children: React.ReactNode;
    inverse?: boolean;
}) {
    return (
        <p className={`cbt-eyebrow${inverse ? ' cbt-eyebrow--inverse' : ''}`}>
            {children}
        </p>
    );
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
        <main className="cbt-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <section className="cbt-hero">
                <div className="cbt-container cbt-hero__grid">
                    <div className="cbt-hero__copy">
                        <p className="cbt-hero__badge">
                            <ShieldCheck aria-hidden="true" />
                            Cross-border tax specialists · Serving all of Canada
                        </p>
                        <h1>
                            Cross-Border Tax Accountants Who File Both Your{' '}
                            <span>US and Canadian</span> Returns
                        </h1>
                        <p className="cbt-hero__lead">
                            Our CPA and IRS Enrolled Agent team prepares your US
                            return, Canadian return, FBAR and foreign reporting
                            together, so your credits line up across both countries
                            and nothing gets missed.
                        </p>
                        <div className="cbt-pills" aria-label="Service benefits">
                            <span>
                                <Check aria-hidden="true" />
                                Free consultation
                            </span>
                            <span>
                                <Check aria-hidden="true" />
                                Fixed-fee quote upfront
                            </span>
                            <span>
                                <Check aria-hidden="true" />
                                100% online, anywhere in Canada
                            </span>
                        </div>
                        <div className="cbt-hero__rating">
                            <span className='' aria-label="Five stars">★★★★★</span>
                            <div>
                                <strong>4.9 on Google</strong>
                                <small>
                                    158 reviews · 1,000+ clients across Canada
                                </small>
                            </div>
                        </div>
                    </div>

                    <div id="hero-form" className="cbt-hero__form">
                        <CrossBorderLeadForm formLocation="hero" />
                    </div>
                </div>
            </section>

            <section className="cbt-statbar" aria-label="Invisor at a glance">
                <div className="cbt-container cbt-statbar__grid">
                    <div>
                        <strong>4.9 on Google</strong>
                        <span>158 reviews</span>
                    </div>
                    <div>
                        <strong>1,000+ clients</strong>
                        <span>across Canada</span>
                    </div>
                    <div>
                        <strong>CPA + IRS EA</strong>
                        <span>on the team</span>
                    </div>
                    <div>
                        <strong>London &amp; Fergus</strong>
                        <span>offices in Ontario</span>
                    </div>
                </div>
            </section>

            <section id="who-we-help" className="cbt-section cbt-section--intro">
                <div className="cbt-container">
                    <div className="cbt-section-heading cbt-section-heading--wide">
                        <Eyebrow>Is this you?</Eyebrow>
                        <h2>
                            Two countries. Two tax systems. One set of forms most
                            accountants rarely see.
                        </h2>
                        <p>
                            The US taxes its citizens wherever they live, and Canada
                            taxes its residents. If you’re caught between the two, you
                            probably have filing obligations you’ve been told
                            different things about. Do any of these sound familiar?
                        </p>
                    </div>
                    <div className="cbt-situation-grid">
                        {situations.map(({ icon: Icon, title, body }) => (
                            <article className="cbt-situation" key={title}>
                                <span className="cbt-iconbox">
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cbt-section cbt-section--good-news">
                <div className="cbt-container cbt-good-news">
                    <div
                        className="cbt-tax-visual"
                        aria-label="US and Canadian tax returns prepared together"
                    >
                        <div className="cbt-tax-sheet cbt-tax-sheet--back">
                            <span>CANADA</span>
                            <strong>T1</strong>
                            <small>Personal income tax return</small>
                        </div>
                        <div className="cbt-tax-sheet cbt-tax-sheet--front">
                            <span>UNITED STATES</span>
                            <strong>1040</strong>
                            <small>Individual income tax return</small>
                            <div
                                className="cbt-tax-sheet__lines"
                                aria-hidden="true"
                            >
                                <i />
                                <i />
                                <i />
                            </div>
                        </div>
                        <div className="cbt-tax-check">
                            <FileCheck2 aria-hidden="true" />
                            <span>Prepared together</span>
                        </div>
                    </div>
                    <div className="cbt-good-news__copy">
                        <Eyebrow>The good news</Eyebrow>
                        <h2>
                            One team. Both returns. Nothing falls through the gap.
                        </h2>
                        <p>
                            Many Americans in Canada owe little or nothing to the IRS
                            once their Canadian taxes are credited. The risk is in
                            not filing correctly, because some reporting penalties
                            apply even when no tax is owed.
                        </p>
                        <p>
                            Many US expat firms prepare only the US side and send you
                            elsewhere for Canada. We prepare both in-house, so your
                            income, credits and deadlines line up.
                        </p>
                        <ScrollLink
                            href="#hero-form"
                            className="cbt-button cbt-button--primary"
                        >
                            Book my free consultation
                            <ArrowRight aria-hidden="true" />
                        </ScrollLink>
                    </div>
                </div>
            </section>

            <section className="cbt-section cbt-section--why">
                <div className="cbt-container">
                    <div className="cbt-section-heading">
                        <Eyebrow>Why Invisor</Eyebrow>
                        <h2>Why cross-border clients choose us</h2>
                    </div>
                    <div className="cbt-reasons-grid">
                        {reasons.map(({ icon: Icon, title, body }) => (
                            <article key={title}>
                                <span className="cbt-iconbox">
                                    <Icon aria-hidden="true" />
                                </span>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </article>
                        ))}
                    </div>
                    <div className="cbt-location-grid">
                        {locationCards.map((card) => (
                            <article key={card.title} className="cbt-location-card">
                                <div className="cbt-location-card__image">
                                    <Image
                                        src={card.src}
                                        alt={card.alt}
                                        fill
                                        sizes="(max-width: 760px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.caption}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="cbt-section cbt-section--services">
                <div className="cbt-container">
                    <div className="cbt-section-heading">
                        <Eyebrow>What we handle</Eyebrow>
                        <h2>
                            Everything a Canada–US filer needs, in one place
                        </h2>
                    </div>
                    <div className="cbt-services-grid">
                        <article className="cbt-service-panel">
                            <header>
                                <span>US</span>
                                <h3>United States</h3>
                            </header>
                            <ul>
                                {usServices.map((service) => (
                                    <li key={service}>
                                        <Check aria-hidden="true" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article className="cbt-service-panel cbt-service-panel--accent">
                            <header>
                                <span>CA</span>
                                <h3>Canada and cross-border</h3>
                            </header>
                            <ul>
                                {caServices.map((service) => (
                                    <li key={service}>
                                        <Check aria-hidden="true" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                    <div className="cbt-services-cta">
                        <p>
                            Not sure what applies to you? That’s what the free
                            consultation is for.
                        </p>
                        <ScrollLink
                            href="#hero-form"
                            className="cbt-button cbt-button--primary"
                        >
                            Find out what I need to file
                            <ArrowRight aria-hidden="true" />
                        </ScrollLink>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="cbt-section cbt-process">
                <div className="cbt-container">
                    <div className="cbt-section-heading cbt-section-heading--inverse">
                        <Eyebrow inverse>How it works</Eyebrow>
                        <h2>Getting compliant is simpler than you think</h2>
                    </div>
                    <ol className="cbt-steps">
                        {steps.map((step, index) => (
                            <li key={step.title}>
                                <span className="cbt-step-number">
                                    0{index + 1}
                                </span>
                                <h3>{step.title}</h3>
                                <p>{step.body}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="cbt-process__footer">
                        <p>
                            No obligation at any step. If we’re not the right fit,
                            we’ll tell you.
                        </p>
                        <ScrollLink
                            href="#hero-form"
                            className="cbt-button cbt-button--light"
                        >
                            Start with a free consultation
                            <ArrowRight aria-hidden="true" />
                        </ScrollLink>
                    </div>
                </div>
            </section>

            <section className="cbt-section cbt-team-section">
                <div className="cbt-container">
                    <div className="cbt-section-heading">
                        <Eyebrow>Your specialist</Eyebrow>
                        <h2>Meet your cross-border tax specialist</h2>
                        <p>
                            Geevar leads your US filings, FBAR and Streamlined
                            cases, working in-house alongside our CPA and
                            Canadian tax team so both returns are prepared under
                            one roof.
                        </p>
                    </div>
                    <div className="cbt-team-grid">
                        {team.map((member) => (
                            <article key={member.name} className="cbt-team-card">
                                <div className="cbt-team-card__image">
                                    <Image
                                        src={member.src}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 700px) 34vw, 180px"
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <span>{member.role}</span>
                                    <h3>{member.name}</h3>
                                    <p>{member.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="reviews" className="cbt-section cbt-reviews-section">
                <div className="cbt-container cbt-reviews-layout">
                    <aside className="cbt-review-score">
                        <strong>4.9</strong>
                        <span aria-label="Five stars">★★★★★</span>
                        <p>From 158 Google reviews of our London office</p>
                        <a
                            href="https://www.google.com/search?q=Invisor+CPA+London+reviews"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Read all reviews on Google
                            <ArrowRight aria-hidden="true" />
                        </a>
                    </aside>
                    <div className="cbt-review-content">
                        <div className="cbt-review-grid">
                            {sampleTestimonials.map((testimonial) => (
                                <article
                                    key={testimonial.name}
                                    className="cbt-review-card"
                                >
                                    <div
                                        className="cbt-review-card__stars"
                                        aria-label={`${testimonial.rating} out of 5 stars`}
                                    >
                                        {'★'.repeat(testimonial.rating)}
                                    </div>
                                    <blockquote>“{testimonial.quote}”</blockquote>
                                    <footer>
                                        <strong>{testimonial.name}</strong>
                                        <span>{testimonial.location}</span>
                                    </footer>
                                </article>
                            ))}
                        </div>
                        <p className="cbt-review-disclosure">
                            Sample testimonial content for design preview. Replace
                            with verified client reviews before publishing.
                        </p>
                    </div>
                </div>
            </section>

            <section id="faq" className="cbt-section cbt-faq-section">
                <div className="cbt-container cbt-faq-wrap">
                    <div className="cbt-section-heading cbt-section-heading--center">
                        <Eyebrow>FAQ</Eyebrow>
                        <h2>Questions people ask before they call us</h2>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="faq-0"
                        className="cbt-faq-list"
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

            <section className="cbt-final-cta">
                <div className="cbt-container cbt-final-cta__grid">
                    <div className="cbt-final-cta__copy">
                        <Eyebrow inverse>Start here</Eyebrow>
                        <h2>
                            Get your cross-border taxes handled, starting with a
                            free consultation
                        </h2>
                        <p>
                            Tell us your situation in about 60 seconds. A
                            cross-border specialist will reply within 1 business
                            day with what you need to file and a fixed quote.
                        </p>
                        <strong>Prefer to talk now?</strong>
                        <div className="cbt-final-cta__actions">
                            <a
                                href="tel:+12262273482"
                                className="cbt-button cbt-button--light"
                            >
                                <Phone aria-hidden="true" />
                                Call 226-227-3482
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="cbt-button cbt-button--outline-light"
                            >
                                <MessageCircle aria-hidden="true" />
                                Message on WhatsApp
                            </a>
                        </div>
                        <div className="cbt-final-cta__trust">
                            <LockKeyhole aria-hidden="true" />
                            Secure, confidential and no obligation
                        </div>
                    </div>
                    <div className="cbt-final-cta__form">
                        <CrossBorderLeadForm
                            formLocation="footer"
                            heading="Book your free cross-border consultation"
                            subheading="Takes about 60 seconds. No obligation."
                        />
                    </div>
                </div>
            </section>

            <MobileStickyBar />
        </main>
    );
}
