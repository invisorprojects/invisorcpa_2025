import { BehindTheTeam } from '@/components/sections/behind-the-team';
import ContactUs from '@/components/sections/contact-us';
import Faq from '@/components/sections/faq-section';
import { OrganizationsSection } from '@/components/sections/organizations-section';
import OurTools from '@/components/sections/our-tools';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import TrustedPartners from '@/components/sections/trusted-partners';
import { WhyChooseUs } from '@/components/sections/why-choose-us-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { UserSearch, ChartLine, HandCoins } from 'lucide-react';
import { NumberTicker } from '@/components/magicui/number-ticker';

export const metadata: Metadata = {
    title: 'About Invisor CPA | Canadian Tax Accountants | Tax Services Canada',
    description:
        'Learn about Invisor CPA, your trusted Canadian tax accountants. Professional tax services Canada with 20+ years experience. Expert personal tax accountant and business tax preparation services.',
    keywords: [
        'About Invisor CPA',
        'Canadian tax accountants',
        'Tax services Canada',
        'Professional tax accountant',
        'Tax preparation services Canada',
        'Personal tax accountant Canada',
        'Business tax preparation',
        'CRA tax help',
        'Canadian tax expert',
        'Tax filing services Canada',
        'Tax consultant Canada',
        'Tax planning Canada',
        'Tax compliance Canada',
        'Best tax service Canada',
    ],
    openGraph: {
        title: 'About Invisor CPA | Canadian Tax Accountants | Tax Services Canada',
        description:
            'Learn about Invisor CPA, your trusted Canadian tax accountants. Professional tax services Canada with 20+ years experience.',
        url: 'https://www.invisorcpa.ca/about-us',
        siteName: 'Invisor CPA',
        images: [
            {
                url: '/assets/banners/banner-2.webp',
                width: 1200,
                height: 630,
                alt: 'About Invisor CPA - Canadian Tax Accountants',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Invisor CPA | Canadian Tax Accountants | Tax Services Canada',
        description:
            'Learn about Invisor CPA, your trusted Canadian tax accountants. Professional tax services Canada with 20+ years experience.',
        images: ['/assets/banners/banner-2.webp'],
    },
    alternates: {
        canonical: 'https://www.invisorcpa.ca/about-us',
    },
};
const stats = [
    { value: 20, label: 'Professional Experts' },
    { value: 15, label: 'Years Experience' },
    { value: 1, label: 'Satisfied Clients' },
    { value: 20, label: 'Year of Affiliate Experience' },
];

const timeline = [
    {
        year: '1972',
        title: 'Founding of the Company',
        description:
            'Robert W. Anderson & Associates was founded by Robert Anderson, establishing a strong foundation of excellence in financial services.',
    },
    {
        year: '2011',
        title: 'A New Chapter',
        description:
            "Leadership transitioned to Robyn Anderson-Garlough following Robert Anderson's passing, ensuring continuity and growth.",
    },
    {
        year: '2016',
        title: 'Expanding Services',
        description:
            'The firm merged with Business Facts Ltd., broadening its offerings in bookkeeping and tax preparation for Central Wellington County and surrounding areas.',
    },
    {
        year: '2024',
        title: 'Growing Together',
        description:
            'Invisor proudly acquired Business Facts Ltd and rebranded our trade name as Invisor Business Facts Ltd, uniting legacies and expanding our ability to serve clients with innovation and expertise.',
    },
];

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            About us
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Our Journey in Accounting Excellence
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We are a team of dedicated professionals committed
                            to delivering exceptional financial services. With
                            years of expertise in accounting, tax filing, and
                            consulting, we focus on building long-term
                            relationships with clients, helping them achieve
                            financial clarity and growth.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-2.webp"
                    alt="Services"
                    width={4096}
                    height={1800}
                    className="rounded-4xl object-contain shadow-md"
                />
                <section className="w-full px-4 pt-12">
                    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {stats.map((item, index) => (
                            <div key={index}>
                                <NumberTicker
                                    value={item.value}
                                    className="text-4xl font-extrabold text-[#1B1E65] sm:text-5xl"
                                />
                                <span className="text-4xl font-extrabold text-[#1B1E65] sm:text-5xl">
                                    {item.label === 'Satisfied Clients'
                                        ? 'K'
                                        : ''}
                                    +
                                </span>
                                <p className="mt-2 text-base text-black">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Counts Section */}
            </section>
            {/* Business Facts */}

            <section className="mb-16 flex flex-col items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="mb-8 text-center">
                    <h3 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                        Business Facts{' '}
                    </h3>

                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        A New Chapter in Our Story
                    </h2>

                    <p className="text-primary mx-auto max-w-4xl font-bold">
                        With the acquisition of Business Facts Ltd., we honor
                        their legacy of excellence while expanding our services.
                        Together, we&#39;re committed to empowering our clients
                        with innovative and reliable financial solutions.
                    </p>
                </div>
                <div className="relative mx-auto mt-16 w-full max-w-5xl">
                    {/* Center Line (Desktop) */}
                    <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-200 to-transparent md:block" />

                    {/* Left Line (Mobile) */}
                    <div className="absolute top-0 left-8 block h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent md:hidden" />

                    <div className="space-y-12 md:space-y-24">
                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-center justify-between md:flex-row ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Spacer / Empty Side */}
                                <div className="hidden w-5/12 md:block" />

                                {/* Center Point */}
                                <div className="bg-secondary absolute left-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white shadow-lg md:relative md:left-auto md:translate-x-0">
                                    <div className="h-3 w-3 rounded-full bg-white" />
                                </div>

                                {/* Content Card */}
                                <div className="w-full pl-20 md:w-5/12 md:pl-0">
                                    <div className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        {/* Year Badge */}
                                        <span className="text-secondary group-hover:bg-secondary absolute -top-4 left-6 inline-block rounded-full bg-[#EFF0F4] px-4 py-1 text-sm font-bold shadow-sm transition-colors duration-300 group-hover:text-white">
                                            {item.year}
                                        </span>
                                        <h3 className="text-primary mt-4 text-xl font-bold md:text-2xl">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TrustedPartners />
            {/* Our Mission */}
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            Our Mission
                        </h3>
                        <h2 className="text-primary text-4xl font-bold md:text-5xl">
                            Our Commitment to Your Financial Well-Being
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We aim to simplify finance through accurate,
                            reliable accounting solutions that drive growth. Our
                            vision is to be a trusted partner, delivering expert
                            support with integrity and innovation.
                        </p>
                    </div>
                </div>
                {/* Image and Text Section */}
                <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Image */}
                    <div className="flex justify-center md:w-1/2">
                        <Image
                            src="/assets/our-mission.webp" // Replace with your image path
                            alt="Our Mission"
                            width={600}
                            height={600}
                            className="rounded-2xl"
                        />
                    </div>
                    {/* Text Content */}

                    <div className="space-y-6 md:w-1/2">
                        <div className="mx-auto max-w-4xl space-y-10 px-4 py-12 text-[#1B1E1E]">
                            {/* Mission */}
                            <div>
                                <h2 className="mb-2 text-2xl font-bold">
                                    Our Mission
                                </h2>
                                <p className="text-base leading-relaxed">
                                    At Invisor, our mission is to provide
                                    exceptional financial guidance through
                                    innovative solutions and personalized
                                    service. We aim to empower individuals and
                                    businesses to navigate their financial
                                    challenges with confidence and clarity.
                                </p>
                            </div>

                            {/* Vision */}
                            <div>
                                <h2 className="mb-2 text-2xl font-bold">
                                    Our Vision
                                </h2>
                                <p className="text-base leading-relaxed">
                                    We envision becoming the leading accounting
                                    partner for businesses and individuals,
                                    offering strategies that not only address
                                    present needs but also anticipate future
                                    growth. By embracing technology and industry
                                    best practices, we aim to provide a
                                    seamless, forward-thinking financial
                                    experience that evolves with our
                                    clients&#39; needs.
                                </p>
                            </div>

                            {/* Goal */}
                            <div>
                                <h2 className="mb-2 text-2xl font-bold">
                                    Our Goal
                                </h2>
                                <p className="text-base leading-relaxed">
                                    Our goal is to foster lasting, trust-based
                                    relationships with each client. We strive to
                                    understand the unique challenges of every
                                    business and individual, crafting solutions
                                    that deliver both immediate results and
                                    sustainable long-term growth. Our commitment
                                    is to ensure our clients&#39; financial
                                    peace of mind and success at every stage of
                                    their journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <OurTools />
            {/* Our Process */}
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="h-full w-full rounded-xl bg-[#EFF0F4] px-8 py-16">
                    {/* Heading Section */}
                    <div className="mx-auto mb-20 flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-4">
                            <p className="text-secondary text-base font-semibold uppercase md:text-xl">
                                Our Process
                            </p>
                            <h2 className="text-primary text-3xl leading-snug font-bold md:text-4xl">
                                Your Path to Accounting{' '}
                                <br className="hidden md:block" />
                                Success
                            </h2>
                        </div>
                        <p className="max-w-xl text-base text-gray-600">
                            We guide you through every step of the process,
                            ensuring you&#39;re informed and involved at all
                            times.
                        </p>
                    </div>

                    {/* Steps Grid */}
                    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
                        {/* Step 1 */}
                        <div className="text-primary flex flex-col items-start gap-3">
                            <UserSearch className="h-12 w-12" />
                            <h3 className="text-lg font-semibold md:text-xl">
                                Discovery and Consultation
                            </h3>
                            <p className="text-sm text-gray-600">
                                We start by understanding your unique accounting
                                situation, needs, and goals.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-primary flex flex-col items-start gap-3">
                            <ChartLine className="h-12 w-12" />
                            <h3 className="text-lg font-semibold md:text-xl">
                                Strategy Development
                            </h3>
                            <p className="text-sm text-gray-600">
                                We craft a personalized plan with clear steps to
                                achieve your accounting objectives.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-primary flex flex-col items-start gap-3">
                            <HandCoins className="h-12 w-12" />
                            <h3 className="text-lg font-semibold md:text-xl">
                                Execution and Support
                            </h3>
                            <p className="text-sm text-gray-600">
                                We implement the strategy and provide continuous
                                support, making adjustments as needed to ensure
                                ongoing success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <OrganizationsSection />
            <BehindTheTeam />
            <TestimonialsSection />
            <Faq />
            <ContactUs />
        </main>
    );
}
