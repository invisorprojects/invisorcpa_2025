import Image from 'next/image';
import { Metadata } from 'next';
import TrustedPartners from '@/components/sections/trusted-partners';
import { Button } from '@/components/ui/button';
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';
import ContactUs from '@/components/sections/contact-us';
import Faq from '@/components/sections/faq-section';
import OurTools from '@/components/sections/our-tools';
import OurAchievements from '@/components/sections/our-achievements';
import { OrganizationsSection } from '@/components/sections/organizations-section';
import { BehindTheTeam } from '@/components/sections/behind-the-team';
import { WhyChooseUs } from '@/components/sections/why-choose-us-section';
import { SERVICES } from '@/constants/SERVICES';
import { ServicesCard } from '@/components/service-card';
import { CaseStudyCard } from '@/components/case-study-card';
import { getStoryblokApi } from '@/lib/storyblok';
import { NumberTicker } from '@/components/magicui/number-ticker';
import CountUp from '@/components/react-bits/count-up';
import PricingSection from '@/components/PricingSection';
import CalendlyInlineWidget from '@/components/sections/CalendlyInlineWidget';
import GoogleReviewsCarousel from '@/components/sections/GoogleReviewsCarousel';

export const metadata: Metadata = {
    title: 'Accountant For Small Business - Tax Services London Ontario',
    description:
        'Professional tax filing services in Canada. Expert accountant for small businesses in London, Ontario, . Trusted by 1000+ clients nationwide.',
    keywords: [
        'Tax filing Canada',
        'Tax services Canada',
        'Tax preparation services Canada',
        'Personal tax accountant Canada',
        'CRA tax help',
        'Best tax service Canada',
        'Canadian tax accountant',
        'Tax preparation Canada',
        'Personal tax returns Canada',
        'Business tax services Canada',
        'CRA tax filing',
        'Tax consultant Canada',
        'Tax planning Canada',
        'Tax compliance Canada',
        'Canadian tax expert',
        'Tax preparation services',
        'Personal tax filing',
        'Business tax preparation',
        'Tax return services',
        'Tax accountant near me',
    ],
    openGraph: {
        title: 'Accountant For Small Business - Tax Services London Ontario',
        description:
            'Professional tax filing services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services. Trusted by 1000+ clients nationwide.',
        url: 'https://www.invisorcpa.ca',
        siteName: 'Invisor CPA',
        images: [
            {
                url: '/invisorcpa-logo.png',
                width: 1200,
                height: 630,
                alt: 'Invisor CPA - Tax Services Canada',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Accountant For Small Business - Tax Services London Ontario',
        description:
            'Professional tax filing services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services.',
        images: ['/invisorcpa-logo.png'],
    },
    alternates: {
        canonical: 'https://www.invisorcpa.ca',
    },

    other: {
        'msvalidate.01': '38DA8FFFF9D52A1C9236A51CEFEE7542',
    },
};

export default async function Home() {
    const storyblokApi = getStoryblokApi();
    const caseStudies = await storyblokApi.getAll('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'case-studies',
        content_type: 'case_study',
        sort_by: 'first_published_at:desc',
        per_page: 3,
    });

    const { data } = await storyblokApi.get('cdn/stories', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        starts_with: 'blogs/',
        content_type: 'blog',
        sort_by: 'first_published_at:desc',
        per_page: 3,
        page: 1,
    });
    const blogs = data.stories;
    // console.log('blogs::', blogs);
    return (
        <main className="">
            <section className="flex flex-col gap-4 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="flex h-full flex-col items-end justify-between sm:flex-row">
                    <div className="flex flex-col items-start justify-between gap-8 sm:w-2/3">
                        <div className="flex flex-col items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold sm:text-5xl">
                                Accounting Service for Small Businesses
                            </h1>
                            <p className="max-w-2xl text-lg">
                                Our small business tax accountant simplifies
                                your bookkeeping and financial processes so you
                                can focus on growing your business with
                                confidence and clarity.
                            </p>
                        </div>
                        <StatsGrid />
                    </div>

                    <div className="w-full sm:w-1/3">
                        <div className="relative h-fit w-fit bg-blue-50">
                            <div className="absolute top-0 left-0 h-1/4 w-full bg-white"></div>
                            <div className="absolute top-13 -left-32 hidden max-w-52 rounded-2xl border bg-white p-4 shadow-md drop-shadow-lg sm:block">
                                <p className="text-base font-bold">
                                    Canada&#39;s Trusted Bookkeeping &
                                    Accounting Experts
                                </p>
                            </div>
                            <Image
                                className="relative"
                                src="/assets/hero.png"
                                alt="Professional tax accountant working on tax returns in Canada"
                                priority={true}
                                width={4000}
                                height={3000}
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <TrustedPartners />
                </div>
            </section>

            <section className="bg-[#EFF0F4] px-4 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="flex flex-col justify-between gap-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                        <div className="flex max-w-3xl flex-col gap-5">
                            <h2 className="text-primary text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                                Simplify Your Accounts, Maximize Your Success!
                            </h2>
                            <p className="text-base leading-8 text-[#4E4E5A] sm:text-lg">
                                Whether you&#39;re managing accounting or
                                navigating taxes, our dedicated team is here to
                                support you. We provide expert accounting, tax
                                planning, and bookkeeping services to simplify
                                your accounting journey with efficient,
                                tech-driven solutions. We take the stress out of
                                financial management so you can focus on what
                                matters most—growing your business. With
                                personalized support and smart automation, we
                                ensure accuracy, compliance, and peace of mind
                                at every step.
                            </p>
                        </div>
                        <div
                            aria-hidden="true"
                            className="grid grid-cols-3 gap-3 border-t border-[#E1E4EC] pt-6"
                        >
                            <div className="h-2 rounded-full bg-primary"></div>
                            <div className="h-2 rounded-full bg-secondary"></div>
                            <div className="h-2 rounded-full bg-[#9BC8DA]"></div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl h-80 bg-[#113598] p-6 text-white sm:p-8 lg:p-10">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 right-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full border border-white/20"
                        ></div>
                        <div
                            aria-hidden="true"
                            className="absolute bottom-0 left-0 h-36 w-36 -translate-x-12 translate-y-12 rounded-full bg-white/10"
                        ></div>
                        
                        
                        <div className="relative flex flex-col justify-end gap-5">
                            <h3 className="text-2xl leading-snug font-bold sm:text-3xl">
                                Canada&#39;s Leading Bookkeeping Service
                                providers - Trusted by Over 1,000 Clients
                                Nationwide
                            </h3>
                            <p className="max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                                At Invisor, we handle your bookkeeping with
                                precision, so you can focus on growing your
                                business.
                            </p>
                            {/* <Image
                            src="/assets/book-pen.png"
                            alt="Calculator"
                            width={1920}
                            height={1920}
                            className="relative mx-auto mb-8 h-24 w-24 rounded-2xl sm:h-32 sm:w-32 lg:h-44 lg:w-auto"
                        /> */}
                            {/* <Button className="rounded-full">Learn More</Button> */}
                        </div>
                    </div>
                </div>
            </section>
            <CalendlyInlineWidget />

            <OrganizationsSection />
            <section className="bg-[#E5F2F8] px-4 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end md:justify-between">
                        <div className="max-w-2xl space-y-2">
                            <h3 className="text-secondary text-xl font-medium uppercase">
                                About Us
                            </h3>
                            <h2 className="text-primary text-4xl font-bold md:text-5xl">
                                Your Partner in Accounting Success
                            </h2>
                        </div>
                        <div className="flex max-w-lg flex-col items-start gap-4 md:justify-self-end">
                            <p className="text-[#686666]">
                                Our expert team is committed to delivering
                                personalized accounting and tax services in
                                London, Ontario to help you achieve stability
                                and growth.
                            </p>
                            <Link href="/about-us">
                                <Button className="flex items-center gap-2 rounded-full bg-[#1E1E5A] px-6 py-4 text-white hover:bg-[#131346]">
                                    <span className="font-bold">
                                        More About Us
                                    </span>
                                    <CircleArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10">
                        <div className="flex flex-col justify-center gap-5">
                            <h3 className="text-primary text-3xl leading-tight font-bold md:text-4xl">
                                Our Journey in Tax Preparation Services Canada
                            </h3>
                            <p className="max-w-xl leading-relaxed text-[#50505A]">
                                We are a team of dedicated small business
                                accountants committed to delivering exceptional
                                financial services. With years of expertise in
                                accounting, tax filing, and consulting, we focus
                                on building long-term relationships with
                                clients, helping them achieve financial clarity
                                and growth.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 justify-center items-center ">
                            <div className="rounded-xl border border-[#DCEAF1] bg-[#F7FCFF] p-5 h-40">
                                <NumberTicker
                                    value={20}
                                    className="text-primary text-3xl font-extrabold md:text-4xl"
                                />
                                <span className="text-primary text-3xl font-extrabold md:text-4xl">
                                    +
                                </span>

                                <p className="mt-3 text-base font-medium text-[#4E4E5A] sm:text-lg">
                                    Professional Experts
                                </p>
                            </div>
                            <div className="rounded-xl border border-[#DCEAF1] bg-[#F7FCFF] p-5 h-40">
                                <NumberTicker
                                    value={15}
                                    className="text-primary text-3xl font-extrabold md:text-4xl"
                                />
                                <span className="text-primary text-3xl font-extrabold md:text-4xl">
                                    +
                                </span>
                                <p className="mt-3 text-base font-medium text-[#4E4E5A] sm:text-lg">
                                    Years Experience
                                </p>
                            </div>
                            <div className="rounded-xl border border-[#DCEAF1] bg-[#F7FCFF] p-5 h-40">
                                <NumberTicker
                                    value={1}
                                    className="text-primary text-3xl font-extrabold md:text-4xl"
                                />
                                <span className="text-primary text-3xl font-extrabold md:text-4xl">
                                    K
                                </span>
                                <span className="text-primary text-3xl font-extrabold md:text-4xl">
                                    +
                                </span>
                                <p className="mt-3 text-base font-medium text-[#4E4E5A] sm:text-lg">
                                    Satisfied Clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs />

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-8 text-center">
                    <h3 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                        Our Services
                    </h3>

                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Innovative Accounting <br className="hidden sm:block" />
                        Solutions for Your Business
                    </h2>

                    <p className="text-primary mx-auto max-w-xl font-bold">
                        We provide expert accounting and tax services
                        <br className="hidden sm:block" />
                        with a focus on accuracy and efficiency.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {SERVICES.slice(0, 6).map((service, index) => (
                            <ServicesCard key={index} service={service} />
                        ))}
                    </div>
                    <div className="flex w-full justify-end py-8">
                        <Link href="/services">
                            <Button
                                variant={'outline'}
                                className="border-primary flex items-center gap-2 rounded-full hover:bg-sky-50 hover:underline"
                            >
                                <span className="text-primary">
                                    More Services
                                </span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <OurTools />

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-8 text-center">
                    <h3 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                        CASE STUDIES
                    </h3>

                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Client Success Stories: Real
                        <br className="hidden sm:block" />
                        Results, Real Impact
                    </h2>

                    <p className="text-primary mx-auto max-w-xl font-bold">
                        Discover how we&#39;ve helped businesses overcome
                        challenges and
                        <br className="hidden sm:block" />
                        achieve their financial goals with tailored solutions.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-stretch">
                        {caseStudies.map((study) => (
                            <CaseStudyCard
                                key={study.slug}
                                content={study.content}
                                slug={study.slug}
                            />
                        ))}
                    </div>

                    <div className="flex w-full justify-end py-8">
                        <Link href="/case-studies">
                            <Button
                                variant={'outline'}
                                className="border-primary flex items-center gap-2 rounded-full hover:bg-sky-50 hover:underline"
                            >
                                <span className="text-primary">
                                    All Case Studies
                                </span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-8 lg:p-12 xl:p-16">
                <div className="mb-10 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            PRICING PLANS{' '}
                        </h3>
                        <h2 className="text-primary text-4xl font-bold md:text-5xl">
                            Tailored Solutions to Fit Financial Needs.{' '}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Pricing options are designed with flexibility in
                            mind, allowing you to choose the plan that best fits
                            your needs.
                        </p>
                    </div>
                </div>
                <PricingSection />
            </section>

            <BehindTheTeam />

            {/* <TestimonialsSection /> */}

            <OurAchievements />

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            Blogs
                        </h3>
                        <h2 className="text-primary text-4xl font-bold md:text-5xl">
                            Explore Our Knowledge Hub
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Dive into our collection of insightful articles,
                            designed to help you stay informed and make informed
                            financial decisions.
                        </p>
                        <Link href="/blogs">
                            <Button className="bg-primary flex items-center gap-2 rounded-full px-6 py-4 text-white">
                                <span className="font-bold">
                                    See More Blogs
                                </span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Image and Text Section */}
                <div className="flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-between">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <div className="flex flex-col items-center gap-4 p-2">
                            {/* Left: Image */}
                            <div className="w-full overflow-hidden rounded-lg">
                                <Image
                                    src={blogs[0].content.image.filename} // replace with your actual image path
                                    alt="Outsourcing bookkeeping"
                                    width={2048}
                                    height={1366}
                                    className="h-full w-auto rounded-lg object-cover"
                                />
                            </div>

                            {/* Right: Content */}
                            <Link href={`/blogs/${blogs[0].slug}`}>
                                <div className="flex w-full flex-col gap-2 p-2">
                                    <h3 className="text-primary text-base font-medium">
                                        {blogs[0].content.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed text-gray-500">
                                        {blogs[0].content.description}
                                    </p>
                                    <div>
                                        <Button
                                            variant={'outline'}
                                            className="text-primary border-primary hover:bg-primary flex items-center gap-4 rounded-full hover:text-white"
                                        >
                                            <span className="">Read More</span>
                                            <CircleArrowRight className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 md:w-1/2">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {blogs.slice(1).map((blog: any, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-4 p-1 md:flex-row"
                            >
                                {/* Left: Image */}
                                <div className="w-full overflow-hidden rounded-lg md:w-1/3">
                                    <Image
                                        src={blog.content.image.filename}
                                        alt="Outsourcing bookkeeping"
                                        width={2048}
                                        height={1366}
                                        className="h-full w-full rounded-lg object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="flex w-full flex-col gap-2 p-2 md:w-2/3">
                                    <Link href={`/blogs/${blog.slug}`}>
                                        <h3 className="text-primary text-base font-medium">
                                            {blog.content.title}
                                        </h3>
                                        <p className="text-xs leading-relaxed text-gray-500">
                                            {blog.content.description}
                                        </p>
                                        <div>
                                            <Button
                                                variant={'outline'}
                                                className="text-primary border-primary hover:bg-primary flex items-center gap-4 rounded-full hover:text-white"
                                            >
                                                <span className="">
                                                    Read More
                                                </span>
                                                <CircleArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Faq />
            <GoogleReviewsCarousel />
            <ContactUs />
        </main>
    );
}

function StatsGrid() {
    return (
        <div className="flex h-80 max-w-xl gap-4">
            <div className="flex h-full w-1/2 flex-col gap-4">
                <div className="flex h-1/2 w-full flex-col justify-center rounded-lg bg-gradient-to-br from-green-100 to-blue-100 p-6 text-[#11135f]">
                    <div className="flex items-center">
                        <CountUp
                            from={0}
                            to={20}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-3xl font-[900] sm:text-4xl"
                        />
                        <span className="text-3xl font-[900]">+</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 sm:text-base">
                        Professional Experts
                    </p>
                </div>
                <div className="flex h-1/2 w-full flex-col justify-center rounded-lg bg-gray-100 p-6 text-[#11135f]">
                    <div className="flex items-center">
                        <CountUp
                            from={0}
                            to={20}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-3xl font-[900] sm:text-4xl"
                        />
                        <span className="text-3xl font-[900]">+</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 sm:text-base">
                        Year of Affiliate Experience
                    </p>
                </div>
            </div>

            <div className="flex h-full w-1/2 flex-col gap-4">
                <div className="flex h-1/3 flex-col justify-center rounded-lg border border-gray-200 p-6 text-[#11135f]">
                    <div className="flex items-center">
                        <CountUp
                            from={0}
                            to={15}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-3xl font-[900] sm:text-4xl"
                        />
                        <span className="text-3xl font-[900]">+</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 sm:text-base">
                        Years Experience
                    </p>
                </div>

                <div className="flex h-2/3 flex-col justify-center rounded-lg bg-blue-100 p-6 text-[#11135f]">
                    <div className="flex items-center">
                        <CountUp
                            from={0}
                            to={1}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-3xl font-[900] sm:text-4xl"
                        />
                        <span className="text-3xl font-[900] sm:text-4xl">
                            K
                        </span>
                        <span className="text-3xl font-[900] sm:text-4xl">
                            +
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-700 sm:text-base">
                        Canada&#39;s trusted accounting experts, proudly serving
                        1000+ clients nationwide
                    </p>
                </div>
            </div>
        </div>
    );
}
