import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronRight,
    Clock,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Marquee } from '@/components/magicui/marquee';
import CalendlyInlineWidget from '@/components/sections/CalendlyInlineWidget';
import { getStoryblokApi } from '@/lib/storyblok';
import SiteHeader, { Logo } from './_components/site-header';
import DiscoveryForm from './_components/discovery-form';
import ReviewsCarousel from './_components/reviews-section';
import { Eyebrow, SectionHeading, Stars, container, display } from './_components/ui';
import {
    EMAIL,
    PHONE_DISPLAY,
    PHONE_HREF,
    blogs,
    clientLogos,
    cloudHubs,
    credentials,
    faqs,
    leaders,
    memberships,
    moreServices,
    offices,
    outcomes,
    plans,
    provinces,
    reasons,
    services,
    stats,
    steps,
    tools,
    trustPoints,
    widerTeam,
} from './_data/content';

type CaseStudy = {
    slug: string;
    content: { title?: string; image?: { filename?: string } };
};

/** Same three case studies the current homepage shows. Falls back to none. */
async function getCaseStudies(): Promise<CaseStudy[]> {
    try {
        const stories = (await getStoryblokApi().getAll('cdn/stories', {
            version:
                process.env.NODE_ENV === 'production' ? 'published' : 'draft',
            starts_with: 'case-studies',
            content_type: 'case_study',
            sort_by: 'first_published_at:asc',
            per_page: 3,
        })) as CaseStudy[];
        return stories
            .filter((s) => s.content?.title && s.content?.image?.filename)
            .slice(0, 3);
    } catch {
        return [];
    }
}

const primaryBtn = `${display} inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-700 font-bold text-white shadow-lg shadow-sky-900/20 transition hover:-translate-y-0.5 hover:bg-sky-800`;
const secondaryBtn = `${display} inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-800`;

export default async function LandingPageRedesignDemo() {
    const caseStudies = await getCaseStudies();

    return (
        <>
            <SiteHeader />

            <main id="top">
                {/* ================= Hero ================= */}
                <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
                    <div
                        aria-hidden="true"
                        className="rd-grid-bg pointer-events-none absolute inset-0"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-40 right-[-10%] size-[640px] rounded-full bg-sky-200/40 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1/2 -left-40 size-[420px] rounded-full bg-emerald-100/50 blur-3xl"
                    />

                    <div
                        className={`${container} relative grid gap-12 pt-12 pb-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14 lg:pt-16 lg:pb-16`}
                    >
                        <div>
                            <p className="inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm backdrop-blur sm:text-base">
                                <span className="relative flex size-2.5 shrink-0">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                                </span>
                                Local Offices in London & Centre Wellington
                                (Fergus) • Serving SMBs Across Canada
                            </p>

                            <h1
                                className={`${display} mt-8 text-[2.9rem] leading-[1.02] font-extrabold tracking-[-0.04em] text-slate-950 sm:text-6xl xl:text-[5rem]`}
                            >
                                Modern CPA Accounting, Bookkeeping & Tax for{' '}
                                <span className="bg-gradient-to-r from-sky-700 to-sky-500 bg-clip-text text-transparent">
                                    Growing Canadian Businesses
                                </span>
                            </h1>

                            <p className="mt-8 max-w-[50rem] text-lg leading-relaxed text-slate-600 sm:text-[1.4rem] sm:leading-[1.5]">
                                Take the headache out of daily bookkeeping,
                                payroll, GST/HST/PST returns, and corporate T2
                                tax filings. Led by licensed CPAs with local
                                walk-in offices in Southwestern Ontario and
                                digital cloud delivery for business owners
                                nationwide.
                            </p>

                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#consultation"
                                    className={`${primaryBtn} px-8 py-5 text-lg sm:text-xl`}
                                >
                                    Book a Free Consultation
                                    <ArrowRight className="size-5" />
                                </a>
                                <a
                                    href="#pricing"
                                    className={`${secondaryBtn} px-8 py-5 text-lg sm:text-xl`}
                                >
                                    View Fixed-Fee Pricing
                                </a>
                            </div>

                            <a
                                href="#reviews"
                                className="mt-8 inline-flex items-center gap-3 text-slate-600 hover:text-slate-900"
                            >
                                <span className="flex -space-x-2.5">
                                    {[...leaders, ...widerTeam]
                                        .slice(0, 4)
                                        .map((p) => (
                                            <Image
                                                key={p.name}
                                                src={p.photo}
                                                alt=""
                                                width={40}
                                                height={40}
                                                className="size-10 rounded-full border-2 border-white object-cover object-top"
                                            />
                                        ))}
                                </span>
                                <span className="text-sm leading-tight sm:text-base">
                                    <Stars className="text-base" />
                                    <span className="block">
                                        Trusted by{' '}
                                        <strong className="text-slate-900">
                                            1,000+
                                        </strong>{' '}
                                        Canadian clients
                                    </span>
                                </span>
                            </a>

                            <ul className="mt-10 grid gap-x-6 gap-y-3.5 border-t border-slate-200/80 pt-8 text-base text-slate-700 sm:grid-cols-2 sm:text-lg 2xl:grid-cols-[repeat(3,max-content)] 2xl:gap-x-8">
                                {trustPoints.map((t) => (
                                    <li
                                        key={t}
                                        className="flex items-center gap-3 2xl:whitespace-nowrap"
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
                            className="relative scroll-mt-32 self-start lg:sticky lg:top-32 lg:mt-20"
                        >
                            <span className="absolute -top-4 right-6 z-10 rounded-full bg-emerald-600 px-4 py-2 text-xs font-extrabold tracking-[0.06em] text-white uppercase shadow-lg shadow-emerald-900/20 sm:text-sm">
                                24-Hour Response Guarantee
                            </span>
                            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-9">
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-600 via-sky-500 to-emerald-500"
                                />
                                <h2
                                    className={`${display} text-[1.7rem] font-bold tracking-tight text-slate-950`}
                                >
                                    Request a Discovery Session
                                </h2>
                                <p className="mt-1.5 mb-7 text-slate-500">
                                    Select your business type and location to
                                    connect with the right advisor.
                                </p>
                                <DiscoveryForm />
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className={`${container} relative pb-16`}>
                        <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-4">
                            {stats.map((s, i) => (
                                <div
                                    key={s.label}
                                    className={`flex flex-col items-center px-4 py-7 text-center lg:py-10 ${i % 2 === 1 ? 'border-l border-slate-200' : ''} ${i > 1 ? 'border-t border-slate-200 lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
                                >
                                    <dt className="order-2 mt-2 text-sm font-medium text-slate-600 sm:text-base">
                                        {s.label}
                                    </dt>
                                    <dd
                                        className={`${display} order-1 text-4xl font-extrabold tracking-tight text-sky-700 sm:text-5xl`}
                                    >
                                        {s.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* ================= Memberships ================= */}
                <section
                    aria-label="Memberships and certifications"
                    className="border-y border-slate-200 bg-white py-8"
                >
                    <div
                        className={`${container} flex flex-col items-center gap-6 lg:flex-row lg:gap-10`}
                    >
                        <p className="shrink-0 text-center text-sm font-semibold tracking-[0.12em] text-slate-500 uppercase lg:text-left">
                            Proud members of
                        </p>
                        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
                            <Marquee
                                pauseOnHover
                                className="[--duration:35s] [--gap:3.5rem]"
                            >
                                {memberships.map((m) => (
                                    <Image
                                        key={m.src}
                                        src={m.src}
                                        alt={m.alt}
                                        width={200}
                                        height={80}
                                        className="h-14 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                                    />
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </section>

                {/* ================= Services ================= */}
                <section id="services" className="scroll-mt-24 py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Complete Accounting Solutions"
                            title={
                                <>
                                    CRA-Compliant Services Engineered for{' '}
                                    <br className="hidden lg:block" />
                                    Canadian Small Businesses
                                </>
                            }
                            body="Whether you operate a storefront in London or run an e-commerce brand shipping across Vancouver, Calgary, and Toronto, we tailor your books to provincial and federal rules."
                        />

                        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                            {services.map((s) => (
                                <article
                                    key={s.title}
                                    className="rd-reveal group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-900/10"
                                >
                                    <span
                                        className={`grid size-14 place-items-center rounded-2xl ring-1 ${s.tint}`}
                                    >
                                        <s.icon
                                            className="size-7"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <h3
                                        className={`${display} mt-7 text-[1.4rem] leading-snug font-bold tracking-tight text-slate-950`}
                                    >
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 leading-relaxed text-slate-600">
                                        {s.body}
                                    </p>
                                    <ul className="mt-6 space-y-2.5 text-[0.95rem] text-slate-700">
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
                                    <Link
                                        href={s.href}
                                        className="mt-auto inline-flex items-center gap-1.5 pt-7 font-semibold text-sky-700 after:absolute after:inset-0 after:rounded-3xl"
                                    >
                                        Learn more
                                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                                    </Link>
                                </article>
                            ))}
                        </div>

                        <div className="rd-reveal mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50/70 p-6 sm:p-8">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                                <p
                                    className={`${display} shrink-0 text-lg font-bold text-slate-900`}
                                >
                                    Specialized services
                                </p>
                                <ul className="flex flex-wrap gap-2.5">
                                    {moreServices.map((s) => (
                                        <li key={s.href}>
                                            <Link
                                                href={s.href}
                                                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
                                            >
                                                {s.label}
                                                <ArrowUpRight className="size-3.5 opacity-50" />
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            href="/services"
                                            className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
                                        >
                                            All services
                                            <ArrowRight className="size-3.5" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= Why Invisor ================= */}
                <section
                    id="why"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24 lg:py-28"
                >
                    <div
                        className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}
                    >
                        <div className="rd-reveal relative">
                            <div className="relative aspect-[4/3.6] overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-900/15">
                                <Image
                                    src="/assets/why-choose-us.jpg"
                                    alt="Invisor CPA accountant reviewing client books"
                                    fill
                                    sizes="(min-width: 1024px) 45vw, 100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent" />
                            </div>
                            <div className="absolute -bottom-8 left-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:left-8 sm:p-6">
                                <p
                                    className={`${display} text-4xl font-extrabold text-sky-700`}
                                >
                                    15+ yrs
                                </p>
                                <p className="mt-1 text-sm font-medium text-slate-600">
                                    of Canadian accounting experience
                                </p>
                            </div>
                            <div className="absolute -top-6 right-4 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:flex sm:right-8">
                                <ShieldCheck className="size-8 text-emerald-600" />
                                <div>
                                    <p className="font-bold text-slate-900">
                                        CRA-ready books
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        Reviewed by a CPA
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 lg:pt-0">
                            <SectionHeading
                                align="left"
                                eyebrow="Why Invisor"
                                title="Simplify Your Accounts, Maximize Your Success"
                                body="We are a team of dedicated small business accountants focused on long-term relationships. Expert accounting, tax planning and bookkeeping, delivered through efficient tech-enabled workflows, so you can focus on growing your business."
                            />
                            <div className="mt-10 grid gap-5 sm:grid-cols-2">
                                {reasons.map((r) => (
                                    <div
                                        key={r.title}
                                        className="rd-reveal rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5"
                                    >
                                        <span className="grid size-11 place-items-center rounded-xl bg-sky-700 text-white">
                                            <r.icon
                                                className="size-5"
                                                aria-hidden="true"
                                            />
                                        </span>
                                        <h3 className="mt-4 text-lg font-bold text-slate-900">
                                            {r.title}
                                        </h3>
                                        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-600">
                                            {r.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                                {outcomes.map((o) => (
                                    <li
                                        key={o.title}
                                        className="flex items-center gap-2 text-slate-700"
                                        title={o.body}
                                    >
                                        <CheckCircle2 className="size-5 text-emerald-600" />
                                        <span className="font-semibold">
                                            {o.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/about-us"
                                className="mt-8 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900"
                            >
                                More about us
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= Process ================= */}
                <section className="py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="How It Works"
                            title="From First Call to Filed in Four Simple Steps"
                            body="A clear onboarding path, so you always know what happens next and what it costs."
                        />
                        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            <span
                                aria-hidden="true"
                                className="absolute top-10 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-sky-200 via-sky-400 to-sky-200 xl:block"
                            />
                            {steps.map((s, i) => (
                                <li
                                    key={s.title}
                                    className="rd-reveal relative rounded-3xl border border-slate-200 bg-white p-8 text-center"
                                >
                                    <span className="relative mx-auto grid size-20 place-items-center rounded-full border-8 border-white bg-sky-700 text-white shadow-lg shadow-sky-900/20 ring-1 ring-sky-100">
                                        <s.icon
                                            className="size-7"
                                            aria-hidden="true"
                                        />
                                        <span className="absolute -top-2 -right-2 grid size-7 place-items-center rounded-full bg-emerald-500 text-xs font-bold text-white ring-4 ring-white">
                                            {i + 1}
                                        </span>
                                    </span>
                                    <h3
                                        className={`${display} mt-6 text-xl font-bold text-slate-950`}
                                    >
                                        {s.title}
                                    </h3>
                                    <p className="mt-2 leading-relaxed text-slate-600">
                                        {s.body}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* ================= Provinces ================= */}
                <section className="border-y border-slate-200 bg-slate-50 py-20">
                    <div
                        className={`${container} grid gap-10 lg:grid-cols-[0.9fr_2fr] lg:items-center`}
                    >
                        <div className="rd-reveal">
                            <Eyebrow>
                                Cross-Border & Interprovincial Compliance
                            </Eyebrow>
                            <h2
                                className={`${display} text-4xl leading-tight font-bold tracking-tight text-slate-950`}
                            >
                                Do You Sell Across Canadian Provinces?
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-slate-600">
                                Canadian sales tax rules vary drastically by
                                destination province. Invisor CPA manages
                                calculations and remittances for every tax
                                regime.
                            </p>
                            <Link
                                href="/services/cross-border-taxes"
                                className="mt-6 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900"
                            >
                                US–Canada cross-border tax help
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {provinces.map((p) => (
                                <div
                                    key={p.title}
                                    className="rd-reveal rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {p.title}
                                        </h3>
                                        <span className="shrink-0 rounded-full bg-sky-50 px-3 py-1 text-sm font-bold text-sky-800">
                                            {p.rate}
                                        </span>
                                    </div>
                                    <p className="mt-2 leading-relaxed text-slate-500">
                                        {p.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= Software ================= */}
                <section
                    id="software"
                    className="scroll-mt-24 bg-slate-950 py-24 text-white lg:py-28"
                >
                    <div
                        className={`${container} grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]`}
                    >
                        <div className="rd-reveal">
                            <Eyebrow className="text-sky-300">
                                Our Software Stack
                            </Eyebrow>
                            <h2
                                className={`${display} text-4xl leading-tight font-bold tracking-tight sm:text-5xl`}
                            >
                                Certified Cloud Integrations for Zero-Friction
                                Accounting
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-slate-300">
                                We leverage industry-leading accounting
                                software to deliver accurate, efficient and
                                comprehensive financial services. These tools
                                automate workflows, reduce errors and give you
                                real-time insight into your numbers.
                            </p>
                            <ul className="mt-8 grid gap-3 text-slate-200 sm:grid-cols-2">
                                {[
                                    'Live bank feeds & auto-categorization',
                                    'Receipt capture from your phone',
                                    'Direct-deposit payroll runs',
                                    'Bill pay & approvals in one place',
                                ].map((t) => (
                                    <li
                                        key={t}
                                        className="flex items-start gap-2.5"
                                    >
                                        <Check className="mt-1 size-4 shrink-0 text-emerald-400" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {tools.map((t) => (
                                <li key={t.name} className="rd-reveal">
                                    <a
                                        href={t.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${t.name} website`}
                                        className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/20"
                                    >
                                        <span className="relative h-14 w-full">
                                            <Image
                                                src={t.logo}
                                                alt={t.name}
                                                fill
                                                sizes="140px"
                                                className="object-contain"
                                            />
                                        </span>
                                        <span className="text-xs font-semibold text-slate-500 group-hover:text-sky-700">
                                            {t.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ================= Clients & case studies ================= */}
                <section className="py-24 lg:py-28">
                    <div className={container}>
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <SectionHeading
                                align="left"
                                eyebrow="Organizations We've Helped"
                                title="Trusted by Businesses Across Canada"
                                body="We've helped some of the best companies in Canada with tax planning, bookkeeping and structuring their financial back office."
                            />
                            <Link
                                href="/case-studies"
                                className={`${secondaryBtn} shrink-0 px-6 py-3.5`}
                            >
                                All case studies
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        <ul className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                            {clientLogos.map((src, i) => (
                                <li
                                    key={src}
                                    className="group flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 transition hover:border-sky-200 hover:shadow-md"
                                >
                                    <span className="relative aspect-[2/1] w-full">
                                        <Image
                                            src={src}
                                            alt={`Client logo ${i + 1}`}
                                            fill
                                            sizes="140px"
                                            className="object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0"
                                        />
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {caseStudies.length > 0 && (
                            <div className="mt-16 grid gap-6 md:grid-cols-3">
                                {caseStudies.map((cs) => (
                                    <Link
                                        key={cs.slug}
                                        href={`/case-studies/${cs.slug}`}
                                        className="rd-reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
                                    >
                                        <span className="relative block aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={cs.content.image!.filename!}
                                                alt=""
                                                fill
                                                sizes="(min-width: 768px) 33vw, 100vw"
                                                className="object-cover transition duration-500 group-hover:scale-105"
                                            />
                                            <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold tracking-wide text-sky-800 uppercase">
                                                Case Study
                                            </span>
                                        </span>
                                        <span className="block p-7">
                                            <span
                                                className={`${display} block text-xl leading-snug font-bold text-slate-950`}
                                            >
                                                {cs.content.title}
                                            </span>
                                            <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-sky-700">
                                                Read the story
                                                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                                            </span>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ================= Offices ================= */}
                <section
                    id="offices"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24 lg:py-28"
                >
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Our Operating Architecture"
                            title={
                                <>
                                    Local Roots in Southwestern Ontario,{' '}
                                    <br className="hidden lg:block" />
                                    Seamless Cloud Delivery Nationwide
                                </>
                            }
                            body="Meet with our CPAs face-to-face at our physical offices or collaborate 100% digitally through modern client portals."
                        />

                        <div className="mt-16 grid gap-8 lg:grid-cols-2">
                            {offices.map((o) => (
                                <article
                                    key={o.title}
                                    className="rd-reveal overflow-hidden rounded-3xl border border-slate-200 bg-white"
                                >
                                    <div className="relative h-52 sm:h-60">
                                        <Image
                                            src={o.image}
                                            alt=""
                                            fill
                                            sizes="(min-width: 1024px) 45vw, 100vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                                        <span className="absolute bottom-5 left-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-sky-800 shadow">
                                            <MapPin
                                                className="size-4"
                                                aria-hidden="true"
                                            />
                                            {o.badge}
                                        </span>
                                    </div>
                                    <div className="p-6 sm:p-9">
                                        <h3
                                            className={`${display} text-[1.75rem] font-bold tracking-tight text-slate-950`}
                                        >
                                            {o.title}
                                        </h3>
                                        <p className="mt-3 text-lg leading-relaxed text-slate-600">
                                            {o.body}
                                        </p>
                                        <ul className="mt-6 space-y-4 rounded-2xl bg-slate-50 p-6 text-slate-700">
                                            <li className="flex items-start gap-3">
                                                <MapPin className="mt-0.5 size-5 shrink-0 text-sky-700" />
                                                <span>
                                                    <strong className="font-semibold text-slate-900">
                                                        Address:
                                                    </strong>{' '}
                                                    <a
                                                        href={o.map}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline-offset-4 hover:text-sky-700 hover:underline"
                                                    >
                                                        {o.address}
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <Phone className="mt-0.5 size-5 shrink-0 text-sky-700" />
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
                                                <Clock className="mt-0.5 size-5 shrink-0 text-sky-700" />
                                                <span>
                                                    <strong className="font-semibold text-slate-900">
                                                        Hours:
                                                    </strong>{' '}
                                                    {o.hours}
                                                </span>
                                            </li>
                                        </ul>
                                        <a
                                            href="#book"
                                            className="mt-7 inline-flex items-center gap-1.5 text-lg font-bold text-sky-700 hover:text-sky-900"
                                        >
                                            {o.cta}
                                            <ChevronRight className="size-5" />
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Remote reach */}
                        <div className="rd-reveal relative mt-10 overflow-hidden rounded-[2rem] bg-slate-900 p-8 text-white sm:p-14">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-sky-500/20 blur-3xl"
                            />
                            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                                <div>
                                    <span className="inline-block rounded-md bg-sky-600 px-3 py-1.5 text-sm font-bold">
                                        100% Virtual Back Office
                                    </span>
                                    <h3
                                        className={`${display} mt-5 text-3xl font-bold tracking-tight sm:text-[2.6rem] sm:leading-tight`}
                                    >
                                        Coast-to-Coast Cloud Accounting Hubs
                                    </h3>
                                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
                                        No matter where you are registered in
                                        Canada, our paperless infrastructure
                                        handles everything from monthly
                                        bookkeeping to corporate filings
                                        without you ever having to visit an
                                        office.
                                    </p>
                                    <a
                                        href="#consultation"
                                        className={`${display} mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-sky-50`}
                                    >
                                        Start Remotely
                                        <ArrowRight className="size-4" />
                                    </a>
                                </div>
                                <ul className="grid grid-cols-2 gap-3">
                                    {cloudHubs.map((c) => (
                                        <li
                                            key={c}
                                            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-slate-100"
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

                {/* ================= Pricing ================= */}
                <section id="pricing" className="scroll-mt-24 py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Transparent Monthly Investment"
                            title="No Hourly Billing. No Surprise Fees."
                            body="Fixed-price accounting plans built specifically for Canadian corporations, sole proprietors, and fast-growing startups."
                        />

                        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3">
                            {plans.map((p) => (
                                <article
                                    key={p.title}
                                    className={`rd-reveal relative flex flex-col rounded-3xl p-8 sm:p-10 ${
                                        p.featured
                                            ? 'bg-gradient-to-b from-sky-700 to-sky-900 text-white shadow-2xl shadow-sky-900/30 lg:-my-4 lg:py-14'
                                            : 'border border-slate-200 bg-white'
                                    }`}
                                >
                                    {p.featured && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-5 py-2 text-xs font-extrabold tracking-[0.06em] whitespace-nowrap text-white uppercase shadow-lg">
                                            Most Popular for SMBs
                                        </span>
                                    )}
                                    <p
                                        className={`text-sm font-bold tracking-[0.08em] uppercase ${p.featured ? 'text-sky-200' : 'text-slate-500'}`}
                                    >
                                        {p.eyebrow}
                                    </p>
                                    <h3
                                        className={`${display} mt-2 text-[1.75rem] font-bold tracking-tight ${p.featured ? 'text-white' : 'text-slate-950'}`}
                                    >
                                        {p.title}
                                    </h3>
                                    <p
                                        className={`mt-3 leading-relaxed ${p.featured ? 'text-sky-100' : 'text-slate-500'}`}
                                    >
                                        {p.body}
                                    </p>
                                    <p
                                        className={`mt-7 flex items-baseline gap-2 border-b pb-7 ${p.featured ? 'border-white/15' : 'border-slate-100'}`}
                                    >
                                        <span
                                            className={`${display} text-5xl font-extrabold tracking-tight`}
                                        >
                                            {p.price}
                                        </span>
                                        <span
                                            className={`text-lg ${p.featured ? 'text-sky-100' : 'text-slate-500'}`}
                                        >
                                            / {p.period}
                                        </span>
                                    </p>
                                    <ul
                                        className={`mt-7 space-y-4 ${p.featured ? 'text-sky-50' : 'text-slate-700'}`}
                                    >
                                        {p.features.map((f) => (
                                            <li
                                                key={f}
                                                className={`flex items-start gap-3 ${f.endsWith('plus:') ? 'font-semibold' : ''}`}
                                            >
                                                <Check
                                                    className={`mt-1 size-4 shrink-0 ${p.featured ? 'text-emerald-300' : 'text-emerald-600'}`}
                                                    aria-hidden="true"
                                                />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto pt-10">
                                        <a
                                            href="#consultation"
                                            className={`${display} flex justify-center rounded-xl px-6 py-4 font-bold transition ${
                                                p.featured
                                                    ? 'bg-white text-sky-800 hover:bg-sky-50'
                                                    : 'border border-slate-300 text-slate-800 hover:border-sky-600 hover:text-sky-800'
                                            }`}
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <p className="mt-12 text-center text-slate-600">
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

                {/* ================= Reviews ================= */}
                <section
                    id="reviews"
                    className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24 lg:py-28"
                >
                    <div className={container}>
                        <SectionHeading
                            eyebrow="Client Reviews"
                            title="What Canadian Business Owners Say About Us"
                            className="mb-14"
                        />
                        <ReviewsCarousel />
                    </div>
                </section>

                {/* ================= Leadership ================= */}
                <section className="py-24 lg:py-28">
                    <div className={container}>
                        <SectionHeading
                            eyebrow="E-E-A-T Leadership"
                            title="Meet Your Dedicated Canadian Accounting Leaders"
                            body="Work with experienced CPAs and financial transformation experts dedicated to the success of Canadian entrepreneurs."
                        />
                        <div className="mt-16 grid gap-8 md:grid-cols-3">
                            {leaders.map((l) => (
                                <article
                                    key={l.name}
                                    className="rd-reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:shadow-2xl hover:shadow-slate-900/10"
                                >
                                    <div className="relative aspect-[4/3.4] overflow-hidden bg-gradient-to-b from-sky-50 to-slate-100">
                                        <Image
                                            src={l.photo}
                                            alt={l.name}
                                            fill
                                            sizes="(min-width: 768px) 30vw, 100vw"
                                            className="object-cover object-top transition duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-7 text-center">
                                        <h3
                                            className={`${display} text-2xl font-bold tracking-tight text-slate-950`}
                                        >
                                            {l.name}
                                        </h3>
                                        <p className="mt-1 font-semibold text-sky-700">
                                            {l.credentials}
                                        </p>
                                        <p className="mt-4 leading-relaxed text-slate-600">
                                            {l.bio}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="rd-reveal mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:p-8">
                            <div className="flex items-center gap-4">
                                <span className="flex -space-x-3">
                                    {widerTeam.map((m) => (
                                        <Image
                                            key={m.name}
                                            src={m.photo}
                                            alt={m.name}
                                            width={56}
                                            height={56}
                                            className="size-14 rounded-full border-4 border-slate-50 object-cover object-top"
                                        />
                                    ))}
                                    <span className="grid size-14 place-items-center rounded-full border-4 border-slate-50 bg-sky-700 text-sm font-bold text-white">
                                        20+
                                    </span>
                                </span>
                                <p className="text-slate-700">
                                    <strong className="block text-slate-900">
                                        Backed by 20+ professionals
                                    </strong>
                                    Bookkeepers, payroll specialists and tax
                                    preparers.
                                </p>
                            </div>
                            <Link
                                href="/team"
                                className={`${secondaryBtn} px-6 py-3.5`}
                            >
                                Meet the full team
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>

                        <div className="mt-14 text-center">
                            <p className="text-sm font-semibold tracking-[0.12em] text-slate-500 uppercase">
                                Certifications & credentials
                            </p>
                            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                                {credentials.map((c) => (
                                    <li key={c.src}>
                                        <Image
                                            src={c.src}
                                            alt={c.alt}
                                            width={160}
                                            height={160}
                                            className="h-20 w-auto object-contain sm:h-24"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ================= Blogs ================= */}
                <section className="border-y border-slate-200 bg-slate-50 py-24 lg:py-28">
                    <div className={container}>
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <SectionHeading
                                align="left"
                                eyebrow="Knowledge Hub"
                                title="Insights for Canadian Business Owners"
                                body="Practical articles to help you stay informed and make better financial decisions."
                            />
                            <Link
                                href="/blogs"
                                className={`${secondaryBtn} shrink-0 px-6 py-3.5`}
                            >
                                See all articles
                                <ArrowRight className="size-4" />
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {blogs.map((b) => (
                                <Link
                                    key={b.href}
                                    href={b.href}
                                    className="rd-reveal group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
                                >
                                    <span className="relative block aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={b.image}
                                            alt=""
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </span>
                                    <span className="flex flex-1 flex-col p-7">
                                        <span className="text-xs font-bold tracking-[0.1em] text-sky-700 uppercase">
                                            {b.tag}
                                        </span>
                                        <span
                                            className={`${display} mt-2 text-xl leading-snug font-bold text-slate-950 group-hover:text-sky-800`}
                                        >
                                            {b.title}
                                        </span>
                                        <span className="mt-3 leading-relaxed text-slate-600">
                                            {b.excerpt}
                                        </span>
                                        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-semibold text-sky-700">
                                            Read article
                                            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= FAQ ================= */}
                <section id="faqs" className="scroll-mt-24 py-24 lg:py-28">
                    <div
                        className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16`}
                    >
                        <div className="lg:sticky lg:top-32 lg:self-start">
                            <SectionHeading
                                align="left"
                                eyebrow="Clear Answers"
                                title="Frequently Asked Questions"
                                body="Common questions from Canadian business owners evaluating Invisor CPA."
                            />
                            <div className="mt-8 rounded-3xl bg-slate-900 p-7 text-white">
                                <p className={`${display} text-xl font-bold`}>
                                    Still have questions?
                                </p>
                                <p className="mt-2 text-slate-300">
                                    Talk to a CPA, no obligation.
                                </p>
                                <div className="mt-5 space-y-3">
                                    <a
                                        href={PHONE_HREF}
                                        className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"
                                    >
                                        <Phone className="size-5 text-sky-300" />
                                        {PHONE_DISPLAY}
                                    </a>
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10"
                                    >
                                        <Mail className="size-5 text-sky-300" />
                                        {EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="faq-0"
                            className="space-y-4"
                        >
                            {faqs.map((f, i) => (
                                <AccordionItem
                                    key={f.q}
                                    value={`faq-${i}`}
                                    className="rounded-2xl border border-slate-200 bg-white px-6 transition last:border-b data-[state=open]:border-sky-200 data-[state=open]:bg-sky-50/40 data-[state=open]:shadow-lg data-[state=open]:shadow-sky-900/5 sm:px-8"
                                >
                                    <AccordionTrigger className="py-6 text-lg font-semibold text-slate-950 hover:no-underline [&>svg]:size-5 [&>svg]:text-sky-700">
                                        {f.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-6 text-[1.05rem] leading-relaxed text-slate-600">
                                        {f.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* ================= Book a time ================= */}
                <section
                    id="book"
                    className="scroll-mt-24 bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 py-24 text-white lg:py-28"
                >
                    <div
                        className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center`}
                    >
                        <div className="rd-reveal">
                            <Eyebrow className="text-sky-200">
                                Book a Time
                            </Eyebrow>
                            <h2
                                className={`${display} text-4xl leading-tight font-bold tracking-tight sm:text-5xl`}
                            >
                                Ready for books you never have to worry about?
                            </h2>
                            <p className="mt-5 text-lg leading-relaxed text-sky-100">
                                Pick a time that suits you for a free
                                consultation. A CPA will review your situation
                                and send a fixed-fee quote, with no obligation.
                            </p>
                            <ul className="mt-8 space-y-3 text-sky-50">
                                {[
                                    '20-minute call by phone or video',
                                    'Fixed-fee quote, no hourly billing',
                                    'In-person meetings in London or Fergus',
                                ].map((t) => (
                                    <li
                                        key={t}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2 className="size-5 text-emerald-300" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href={PHONE_HREF}
                                    className={`${display} inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-sky-800 transition hover:bg-sky-50`}
                                >
                                    <Phone className="size-4" />
                                    Call {PHONE_DISPLAY}
                                </a>
                                <a
                                    href="#consultation"
                                    className={`${display} inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10`}
                                >
                                    Send a request instead
                                </a>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-3xl bg-white p-2 shadow-2xl shadow-slate-950/40">
                            <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4 text-slate-700">
                                <CalendarDays className="size-5 text-sky-700" />
                                <span className="font-semibold">
                                    Schedule your free consultation
                                </span>
                            </div>
                            <CalendlyInlineWidget />
                        </div>
                    </div>
                </section>
            </main>

            {/* ================= Footer ================= */}
            <footer className="bg-slate-950 pb-24 text-slate-400 md:pb-0">
                <div
                    className={`${container} grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]`}
                >
                    <div>
                        <div className="inline-block rounded-2xl bg-white px-4 py-3">
                            <Logo />
                        </div>
                        <p className="mt-6 max-w-sm leading-relaxed">
                            CPA-led bookkeeping, payroll and tax for Canadian
                            small businesses, from our offices in London and
                            Fergus, Ontario, and online coast to coast.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Services</h3>
                        <ul className="mt-5 space-y-3">
                            {[
                                ['Bookkeeping', services[0].href],
                                ['Corporate Tax (T2)', services[1].href],
                                ['Payroll', services[2].href],
                                ['Sales Tax (HST/GST/PST)', services[3].href],
                                ['Personal Tax', '/services/personal-tax-returns'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href} className="hover:text-white">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="hover:text-white">
                                    All services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Company</h3>
                        <ul className="mt-5 space-y-3">
                            {[
                                ['About us', '/about-us'],
                                ['Our team', '/team'],
                                ['Case studies', '/case-studies'],
                                ['Pricing', '/pricing'],
                                ['Blog', '/blogs'],
                                ['Privacy policy', '/privacy-policy'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href} className="hover:text-white">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">Contact</h3>
                        <ul className="mt-5 space-y-4">
                            {offices.map((o) => (
                                <li key={o.address} className="flex gap-3">
                                    <MapPin className="mt-0.5 size-4 shrink-0 text-sky-400" />
                                    {o.address}
                                </li>
                            ))}
                            <li className="flex items-center gap-3">
                                <Phone className="size-4 text-sky-400" />
                                <a href={PHONE_HREF} className="hover:text-white">
                                    {PHONE_DISPLAY}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="size-4 text-sky-400" />
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="hover:text-white"
                                >
                                    {EMAIL}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10">
                    <div
                        className={`${container} flex flex-col gap-2 py-6 text-sm sm:flex-row sm:justify-between`}
                    >
                        <p>
                            &copy; {new Date().getFullYear()} Invisor CPA. All
                            rights reserved.
                        </p>
                        <p>Chartered Professional Accountants · Ontario, Canada</p>
                    </div>
                </div>
            </footer>

            {/* Mobile sticky CTA */}
            <div className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
                <a
                    href={PHONE_HREF}
                    aria-label={`Call ${PHONE_DISPLAY}`}
                    className="grid size-12 shrink-0 place-items-center rounded-xl border border-slate-200 text-sky-700"
                >
                    <Phone className="size-5" />
                </a>
                <a
                    href="#consultation"
                    className={`${display} flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-700 font-bold text-white`}
                >
                    Book Free Consultation
                    <ArrowRight className="size-4" />
                </a>
            </div>
        </>
    );
}
