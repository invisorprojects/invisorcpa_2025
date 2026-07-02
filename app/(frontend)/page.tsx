import Image from 'next/image';
import { Metadata } from 'next';
import TrustedPartners from '@/components/sections/trusted-partners';
import { Button } from '@/components/ui/button';
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';
import HomeHero from '@/components/sections/home-hero';
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
        sort_by: 'first_published_at:asc',
        per_page: 3,
    });

    // const { data } = await storyblokApi.get('cdn/stories', {
    //     version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    //     starts_with: 'blogs/',
    //     content_type: 'blog',
    //     sort_by: 'first_published_at:desc',
    //     per_page: 3,
    //     page: 1,
    // });
    // const blogs = data.stories;
    // console.log('blogs::', blogs);
    return (
        <main className="">
            <section className="flex flex-col gap-4 p-4 sm:p-8 md:p-12 lg:p-16  xl:p-18">
                <HomeHero />
                <div className="w-full">
                    <TrustedPartners />
                </div>
            </section>

            <section className="bg-[#F4FAFD] px-4 py-14 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                    <div className="flex flex-col justify-between gap-8 rounded-2xl border border-[#DCEAF1] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                        <div className="flex max-w-3xl flex-col gap-5">
                            <span className="text-secondary text-sm font-semibold tracking-widest uppercase">
                                Financial Operations
                            </span>
                            <h2 className="text-3xl leading-tight font-bold text-[#103D56] sm:text-4xl lg:text-5xl">
                                Simplify Your Accounts, Maximize Your Success!
                            </h2>
                            <p className="text-base leading-8 text-[#4E4E5A] sm:text-lg">
                                Whether you&#39;re managing accounting or
                                navigating taxes, our dedicated team is here to
                                support you. We provide expert accounting, tax
                                planning, and bookkeeping services with
                                efficient, tech-enabled workflows so you can
                                focus on growing your business.
                            </p>
                        </div>

                        <div className="grid gap-4 border-t border-[#DCEAF1] pt-6 sm:grid-cols-3">
                            <div className="rounded-lg bg-[#E5F2F8] p-4">
                                <p className="text-sm font-semibold text-[#103D56]">
                                    Accurate Books
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#4E4E5A]">
                                    Clean records and reliable monthly reporting.
                                </p>
                            </div>
                            <div className="rounded-lg bg-[#EFF0F4] p-4">
                                <p className="text-sm font-semibold text-[#103D56]">
                                    Tax Ready
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#4E4E5A]">
                                    Organized support for CRA compliance.
                                </p>
                            </div>
                            <div className="rounded-lg bg-[#F7FCFF] p-4">
                                <p className="text-sm font-semibold text-[#103D56]">
                                    Less Admin
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#4E4E5A]">
                                    Streamlined workflows for busy owners.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="rounded-2xl border border-[#DCEAF1] bg-white p-6 shadow-sm sm:p-8">
                            <p className="text-sm font-semibold text-secondary uppercase">
                                Trusted Nationwide
                            </p>
                            <h3 className="mt-4 text-3xl leading-tight font-bold text-[#103D56] sm:text-4xl">
                                Canada&#39;s leading bookkeeping service
                                providers
                            </h3>
                            <p className="mt-4 text-base leading-7 text-[#4E4E5A]">
                                At Invisor, we handle your bookkeeping with
                                precision, so you can focus on growing your
                                business.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-[#E5F2F8] p-6">
                                <p className="text-4xl font-extrabold text-[#103D56]">
                                    1K+
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#4E4E5A]">
                                    clients supported across Canada
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[#EFF0F4] p-6">
                                <p className="text-4xl font-extrabold text-[#103D56]">
                                    15+
                                </p>
                                <p className="mt-2 text-sm leading-6 text-[#4E4E5A]">
                                    years of accounting experience
                                </p>
                            </div>
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
                                    src={"/assets/banners/banner-3.webp"} // replace with your actual image path
                    alt={`7 Essential Reasons to Work With a Small Business Tax Accountant - Tax services blog post by Invisor CPA, Canadian tax accountants`}

                                    width={2048}
                                    height={1366}
                                    className="h-full w-auto rounded-lg object-cover"
                                />
                            </div>

                            {/* Right: Content */}
                            <Link href={`/blogs/small-business-tax-accountant`}>
                                <div className="flex w-full flex-col gap-2 p-2">
                                    <h3 className="text-primary text-base font-medium">
                                       7 Essential Reasons to Work With a Small Business
                            Tax Accountant
                                    </h3>
                                    <p className="text-xs leading-relaxed text-gray-500">
                                       For entrepreneurs, managing taxes is one of the biggest responsibilities. While many owners attempt to handle it alone, a small business tax accountant ensures compliance, efficiency, and valuable savings. Their guidance helps simplify financial obligations while freeing time to focus on growth.
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
                            <div
                                className="flex flex-col items-center gap-4 p-1 md:flex-row"
                            >
                                {/* Left: Image */}
                                <div className="w-full overflow-hidden rounded-lg md:w-1/3">
                                    <Image
                                                          src={'/assets/blogs/blog-cover-3.webp'}
                    alt={`What Canadian Business Owners Should Track Monthly - Monthly financial tracking blog post by Invisor CPA, Canadian accountants`}

                                        width={2048}
                                        height={1366}
                                        className="h-50 w-full rounded-lg object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="flex w-full flex-col gap-2 p-2 md:w-2/3">
                                    <Link href={`/blogs/monthly-tracking-canadian-business-owners`}>
                                        <h3 className="text-primary text-base font-medium">
                            What Canadian Business Owners Should Track Monthly

                                        </h3>
                                        <p className="text-xs leading-relaxed text-gray-500">
                                        Many Canadian business owners focus on sales but overlook the financial details that actually determine profitability, cash flow, and CRA compliance.
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
                                <div
                                className="flex flex-col items-center gap-4 p-1 md:flex-row"
                            >
                                {/* Left: Image */}
                                <div className="w-full overflow-hidden rounded-lg md:w-1/3">
                                    <Image
                                                          src={'/assets/why-choose-us.jpg'}
                    alt={`What Canadian Business Owners Should Track Monthly - Monthly financial tracking blog post by Invisor CPA, Canadian accountants`}

                                        width={2048}
                                        height={1366}
                                        className="h-50 w-full rounded-lg object-cover"
                                    />
                                </div>

                                {/* Right: Content */}
                                <div className="flex w-full flex-col gap-2 p-2 md:w-2/3">
                                    <Link href={`/blogs/tax-id-number-canada`}>
                                        <h3 className="text-primary text-base font-medium">
                            Tax ID Number in Canada: SIN, BN, ITN & GST/HST Explained

                                        </h3>
                                        <p className="text-xs leading-relaxed text-gray-500">
Canada does not issue one universal tax identification number. Instead, your Canadian tax ID depends on who you are and what you need to do.                                        </p>
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
                    </div>
                </div>
            </section>

            <Faq />
            <GoogleReviewsCarousel />
            <ContactUs />
        </main>
    );
}
