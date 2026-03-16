import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const pageUrl =
    'https://www.invisorcpa.ca/services/company-incorporation-service-canada';

const includedServices = [
    {
        title: 'Name search and reservation',
        description:
            'We conduct a NUANS search (federal) or provincial name search to make sure your chosen business name is available and properly protected.',
    },
    {
        title: 'Articles of Incorporation',
        description:
            'We prepare and file your Articles with the correct jurisdiction, including any required share structure and business restrictions.',
    },
    {
        title: 'Corporate minute book setup',
        description:
            'Every incorporated company in Canada must maintain a minute book. We set yours up correctly so you are audit-ready from day one.',
    },
    {
        title: 'CRA Business Number registration',
        description:
            'We register your corporation for a Business Number (BN) and set up the appropriate CRA accounts, including HST/GST, corporate income tax, and payroll if applicable.',
    },
    {
        title: 'Post-incorporation tax planning',
        description:
            "Once you're incorporated, there are smart moves you can make right away. We make sure you know what they are.",
    },
];

const federalProvincialCards = [
    {
        title: 'Federal Incorporation',
        description: [
            'Incorporating federally under the Canada Business Corporations Act (CBCA) gives your business name protection across every province and territory in the country. You can operate anywhere in Canada under a single registration, and your corporation is recognized internationally as a Canadian company. The federal filing fee starts at $200 online, and annual returns cost as little as $12 - making it more affordable to maintain than many people expect.',
            "The catch? You'll still need an extra-provincial registration in whichever province you physically operate in, and certain regulated professions (such as CPAs, lawyers, and physicians) typically must incorporate provincially under their governing body's rules.",
        ],
    },
    {
        title: 'Provincial Incorporation',
        description: [
            'Provincial incorporation is generally faster and works well if your business operates in a single province with no near-term plans to expand. For example, incorporating in Ontario costs $300 and is often processed same-day. Your corporate name is protected within that province, your compliance obligations stay local, and there is no residency requirement for directors in provinces like British Columbia.',
            "The limitation is reach. If you later expand into another province, you'll need to register there too - which adds both cost and administrative work down the road.",
        ],
    },
    {
        title: 'So Which Should You Choose?',
        description: [
            "There is no universal answer. It depends on where you operate, whether you're in a regulated profession, and how ambitious your growth plans are. That's exactly why working with a CPA who understands both paths is worth it.",
            'We help you choose the right structure - not the most expensive one, not the most complicated one - the right one for your specific situation.',
        ],
    },
];

const trustPoints = [
    'We serve 1,000+ clients across Canada and are proud members of the Canadian Income Tax EFILE Association.',
    "Our team combines CPA expertise with technology-driven processes, so your incorporation doesn't sit in a pile waiting to be processed.",
    "We do not disappear after the filing - we can support your first corporate tax return, HST filing, bookkeeping, and ongoing compliance.",
    'If your current structure has not been reviewed in years, we can help assess whether it still makes sense for your business today.',
];

const faqs = [
    {
        question: 'How much does it cost to incorporate a company in Canada?',
        answer:
            'The government filing fee for federal incorporation starts at $200 online. Provincial fees vary - Ontario charges $300, while other provinces like British Columbia charge $350. On top of government fees, professional fees for a CPA or lawyer to prepare and file your Articles of Incorporation and set up your minute book typically range from a few hundred to over a thousand dollars depending on complexity. At Invisor CPA, we offer transparent, flat-rate pricing with no surprises.',
    },
    {
        question: 'How long does incorporation take in Canada?',
        answer:
            'Federal incorporations processed online through Corporations Canada typically take 1-5 business days. Many provincial incorporations, including Ontario, can be completed same-day. The full setup, including CRA registrations and minute book preparation, generally takes 1-2 weeks in total.',
    },
    {
        question: 'Should I incorporate federally or provincially?',
        answer:
            'If you plan to operate only in one province and have no immediate plans to expand, provincial incorporation is usually simpler and often faster. If you want nationwide name protection, plan to operate across multiple provinces, or want the credibility of a federal registration, federal incorporation is worth the extra steps. We help you make this call during your consultation because it is one of the most common questions we hear.',
    },
    {
        question: 'Do I need a lawyer to incorporate in Canada?',
        answer:
            'You do not legally need a lawyer. However, mistakes in your Articles of Incorporation - incorrect share structures, missing business restrictions for professional corporations, or wrong director information - can be costly to fix after the fact. A CPA who specializes in incorporation helps ensure your structure is not just legally filed but tax-optimized from the start.',
    },
    {
        question: 'What is a minute book and do I really need one?',
        answer:
            'Yes. Every Canadian corporation is legally required to maintain a corporate minute book. It holds your Articles of Incorporation, share register, director and officer information, and records of corporate resolutions. If you are ever audited, approached for financing, or plan to sell the business, an incomplete minute book creates serious problems. We set yours up correctly and keep it organized.',
    },
    {
        question: 'Can a non-Canadian resident incorporate a company in Canada?',
        answer:
            'Yes, with some conditions. Federal corporations require that at least 25% of directors be Canadian residents. Some provinces, like British Columbia and Nova Scotia, have no residency requirements at all, which can be an advantage for non-residents looking to incorporate in Canada. We can walk you through the most practical option for your situation.',
    },
    {
        question:
            "What's the difference between a regular corporation and a professional corporation?",
        answer:
            "A regular corporation can carry on most types of business. A professional corporation is restricted to providing the specific professional services of the licensed individual who owns it - a dentist's professional corporation can offer dental services, but not general retail, for example. Professional corporations are governed by both provincial corporate law and the rules of the relevant regulatory body. They carry tax advantages, but they also carry stricter rules around share ownership and naming.",
    },
    {
        question: 'What happens after I incorporate?',
        answer:
            'Right after incorporation, you will need to register with the CRA for a Business Number, set up your HST/GST account if your revenue will exceed $30,000, open a separate corporate bank account, file your first annual return with Corporations Canada or your province, and maintain your corporate minute book going forward. We handle all of this as part of our service, so you do not need to coordinate between multiple professionals to get it done.',
    },
];

export const metadata: Metadata = {
    title: 'Company Incorporation Service Canada | Invisor CPA',
    description:
        'Looking for a trusted company incorporation service in Canada? Invisor CPA helps you incorporate federally or provincially - fast, affordable, and stress-free. Book your free consultation today.',
    keywords: [
        'company incorporation service Canada',
        'incorporate a company in Canada',
        'federal incorporation Canada',
        'provincial incorporation Canada',
        'professional corporation Canada',
        'CPA incorporation services Canada',
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: 'Company Incorporation Service Canada | Invisor CPA',
        description:
            'Looking for a trusted company incorporation service in Canada? Invisor CPA helps you incorporate federally or provincially - fast, affordable, and stress-free.',
        url: pageUrl,
        siteName: 'Invisor CPA',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: '/assets/banners/banner-6.webp',
                width: 1200,
                height: 630,
                alt: 'CPA accountant helping client with business incorporation in Canada',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Company Incorporation Service Canada | Invisor CPA',
        description:
            'Looking for a trusted company incorporation service in Canada? Invisor CPA helps you incorporate federally or provincially - fast, affordable, and stress-free.',
        images: ['/assets/banners/banner-6.webp'],
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
                    '@type': 'Country',
                    name: 'Canada',
                },
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'CA',
                },
                sameAs: ['https://www.invisorcpa.ca'],
            },
            {
                '@type': 'Service',
                '@id': `${pageUrl}#service`,
                name: 'Company Incorporation Service in Canada',
                serviceType: 'Business incorporation service',
                provider: {
                    '@id': `${pageUrl}#localbusiness`,
                },
                areaServed: {
                    '@type': 'Country',
                    name: 'Canada',
                },
                description:
                    'Company incorporation service in Canada for federal and provincial incorporations, CRA registrations, minute books, and post-incorporation tax planning.',
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
                            Canada Incorporation
                        </p>
                        <h1 className="text-primary text-4xl font-bold sm:text-5xl lg:text-5xl">
                            Company Incorporation Service in Canada -
                            <br />
                            <span className='text-4xl'>
                                Done Right, From Day One
                            </span>
                        </h1>
                        <div className="space-y-4 text-base leading-8 text-[#4F5565] sm:text-lg">
                            <p>
                                Starting a corporation is one of the best
                                decisions you&apos;ll make as a business owner
                                - but the paperwork, the rules, and the choices
                                between federal and provincial registration can
                                slow you down before you even get going.
                            </p>
                            <p>
                                At Invisor CPA, our company incorporation
                                service in Canada takes the guesswork out of the
                                process entirely. We walk you through every
                                step, handle the filings, and make sure your
                                business is structured correctly from the start
                                so you&apos;re protected, tax-ready, and set up
                                to grow.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/contact-us">
                                    Book a Free Consultation
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
                            src="/assets/banners/banner-6.webp"
                            alt="CPA accountant helping client with business incorporation in Canada"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full rounded-[1.5rem] object-cover"
                        />
                        <div className="grid gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl bg-white p-4">
                                <p className="text-primary text-xl font-bold">
                                    Protected
                                </p>
                                <p className="mt-2 text-sm text-[#596172]">
                                    Start with a proper structure and limited
                                    liability in place.
                                </p>
                            </div>
                            <div className="rounded-3xl bg-white p-4">
                                <p className="text-primary text-xl font-bold">
                                    Tax-Ready
                                </p>
                                <p className="mt-2 text-sm text-[#596172]">
                                    CRA registrations and tax planning handled
                                    from the outset.
                                </p>
                            </div>
                            <div className="rounded-3xl bg-white p-4">
                                <p className="text-primary text-xl font-bold">
                                    Guided
                                </p>
                                <p className="mt-2 text-sm text-[#596172]">
                                    Federal and provincial options explained for
                                    your situation.
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
                            Why Incorporate Your Business in Canada?
                        </h2>
                        <p className="mt-5 text-base leading-8 text-[#4F5565]">
                            A lot of business owners start out as sole
                            proprietors. It&apos;s easy, it&apos;s fast, and it
                            costs nothing to set up. But here&apos;s the problem:
                            if your business runs into a lawsuit, accumulates
                            debt, or faces a CRA audit, you&apos;re personally
                            on the hook. Your savings, your car, your home - all
                            of it is exposed.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Incorporating changes that. Once your business is a
                            registered corporation, it becomes its own legal
                            entity, separate from you. That separation gives you
                            something no sole proprietorship ever can: limited
                            liability protection.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Beyond that, corporations in Canada are taxed at a
                            lower rate than individuals. The federal small
                            business tax rate sits at 9%, compared to personal
                            rates that can climb well past 45% depending on your
                            province and income level. That gap adds up quickly.
                            Incorporating also opens the door to income
                            splitting with family members, tax deferrals, and
                            reinvestment strategies that simply are not
                            available when you operate as a person, not a
                            business.
                        </p>
                    </div>
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                        <ul className="space-y-4">
                            {[
                                'Limited liability protection between you and business risks',
                                'Access to lower corporate tax rates and deferral opportunities',
                                'Stronger credibility with banks, investors, and partners',
                                'A cleaner structure for hiring, payroll, and future growth',
                                'A better base for succession planning and reinvestment',
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
                        Federal vs. Provincial Incorporation - Which One Is
                        Right for You?
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#4F5565]">
                        This is the question most business owners struggle with,
                        and it is an important one.
                    </p>
                </div>
                <div className="grid gap-5 lg:grid-cols-3">
                    {federalProvincialCards.map((card) => (
                        <article
                            key={card.title}
                            className="rounded-[1.75rem] border border-[#DCE6F2] bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-primary text-xl font-semibold">
                                {card.title}
                            </h3>
                            <div className="mt-4 space-y-4 text-sm leading-7 text-[#596172] sm:text-base">
                                {card.description.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-[#E9F6FB] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="space-y-5">
                        <Image
                            src="/assets/banners/banner-4.webp"
                            alt="CPA accountant helping client with business incorporation in Canada"
                            width={1600}
                            height={1100}
                            className="h-[360px] w-full rounded-[2rem] object-cover"
                        />
                        <div className="rounded-[1.5rem] bg-white p-5">
                            <h3 className="text-primary text-lg font-semibold">
                                Built Around Your Structure
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#596172]">
                                Our incorporation service is tailored to your
                                business type, province, and goals instead of
                                forcing you into a generic package.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            What&apos;s Included in Invisor CPA&apos;s
                            Incorporation Service
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Our incorporation service is not a one-size-fits-all
                            package. We tailor it to your business type, your
                            province, and your goals. Here&apos;s what we take
                            care of:
                        </p>
                        <div className="mt-6 space-y-4">
                            {includedServices.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-3 rounded-3xl bg-white p-4 text-sm text-[#263143] shadow-sm sm:text-base"
                                >
                                    <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                    <p>
                                        <span className="font-semibold">
                                            {item.title}
                                        </span>{' '}
                                        - {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="rounded-[2rem] bg-[#FFF7ED] p-6">
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Professional Corporations - For Regulated
                            Professionals
                        </h2>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            If you&apos;re a physician, dentist, pharmacist,
                            lawyer, or CPA, you may be eligible to incorporate a
                            Professional Corporation (PC), and the tax
                            advantages can be significant.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            Professional corporations allow you to defer income,
                            split dividends with family members within CRA
                            guidelines, and retain earnings at the lower
                            corporate tax rate.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            The process is more involved than a standard
                            incorporation. Your governing body, whether
                            that&apos;s CPA Ontario, the Law Society, or your
                            provincial College, has naming rules, ownership
                            restrictions, and ongoing compliance requirements.
                            Directors and shareholders typically must be
                            licensed members of the profession.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            We&apos;ve helped professionals across Canada set up
                            compliant Professional Corporations and avoid costly
                            mistakes that happen when people try to navigate
                            this process alone. If you&apos;re in a regulated
                            profession and you&apos;ve been thinking about
                            incorporating, the conversation you have with us
                            before you file could save you significant time and
                            money.
                        </p>
                    </div>
                    <div className="rounded-[2rem] bg-[#EDF7F2] p-6">
                        <h3 className="text-primary text-2xl font-bold sm:text-3xl">
                            Common PC Considerations
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {[
                                'Naming rules set by the relevant regulatory body',
                                'Ownership and share restrictions for licensed members',
                                'Additional approvals before or after filing',
                                'Ongoing compliance requirements beyond standard corporations',
                                'Tax planning opportunities that should be set up correctly from the start',
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

            <section className="bg-[#F8FAFC] px-4 py-12 sm:px-8 lg:px-16 xl:px-24">
                <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                    <div>
                        <h2 className="text-primary text-3xl font-bold sm:text-4xl">
                            Why Business Owners Across Canada Trust Invisor CPA
                        </h2>
                        <p className="mt-5 text-base leading-8 text-[#4F5565]">
                            More importantly, we do not disappear after the
                            filing. A lot of incorporation services hand you
                            documents and walk away. We stay involved. We handle
                            your first corporate tax return, your HST filing,
                            your ongoing bookkeeping if you need it, or we point
                            you in the right direction if you do not. Either
                            way, you are not figuring this out alone.
                        </p>
                        <p className="mt-4 text-base leading-8 text-[#4F5565]">
                            If your current accountant incorporated your
                            business but never revisited your structure, it
                            might be worth a second look. Tax laws change. Your
                            business changes. The structure that made sense two
                            years ago may not be the most efficient one today.
                        </p>
                        <div className="mt-8">
                            <Button asChild size="lg" className="rounded-full">
                                <Link href="/contact-us">
                                    Book a Free Consultation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-5">
                        {trustPoints.map((point) => (
                            <div
                                key={point}
                                className="rounded-[1.5rem] bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                    <p className="text-sm leading-7 text-[#596172] sm:text-base">
                                        {point}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                            Frequently Asked Questions About Company
                            Incorporation in Canada
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/80">
                            These are the questions we hear most often from
                            business owners comparing federal and provincial
                            incorporation, timing, pricing, and next steps after
                            filing.
                        </p>
                        <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                            <p className="text-sm leading-7 text-white/80">
                                Need an answer specific to your situation?
                                Schedule a consultation and we will review your
                                incorporation path, CRA setup needs, and tax
                                implications directly.
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
                            Ready to Incorporate? Let&apos;s Talk.
                        </h2>
                        <p className="mt-5 text-base leading-8 text-white/85 sm:text-lg">
                            Starting your corporation correctly takes maybe an
                            hour of your time when you work with the right team.
                            Getting it wrong costs a lot more - in tax dollars,
                            in legal fees, and in time spent fixing structural
                            problems down the road.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-full bg-white text-[#0E172A] hover:bg-white/90"
                            >
                                <Link href="/contact-us">
                                    Book a Free Consultation
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
