import Image from 'next/image';
import TrustedPartners from '@/components/trusted-partners';
import { Button } from '@/components/ui/button';
import { ScheduleMeeting } from '@/components/ScheduleMeeting';
import { BrainCog, CircleArrowRight, Quote } from 'lucide-react';
import ServicesCard from '@/components/ServicesCard';
import services from '@/constants/services';
import Link from 'next/link';
import ContactUs from '@/components/contact-us';
import Faq from '@/components/faq-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { OrganizationsSection } from '@/components/organizations-section';

export default function Home() {
    return (
        <main className="">
            <section className="flex flex-col gap-4 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="flex h-full flex-col items-end justify-between sm:flex-row">
                    <div className="flex flex-col items-start justify-between gap-8 sm:w-2/3">
                        <div className="flex flex-col items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold sm:text-5xl">
                                Trust Us to Handle What Counts with Financial
                                Support You Can Rely On
                            </h1>
                            <p className="max-w-2xl text-lg">
                                We simplify your bookkeeping and financial
                                processes so you can focus on growing your
                                business with confidence and clarity.
                            </p>
                        </div>
                        <StatsGrid />
                    </div>

                    <div className="w-full sm:w-1/3">
                        <div className="relative h-fit w-fit bg-blue-50">
                            <div className="absolute top-0 left-0 h-1/4 w-full bg-white"></div>
                            <div className="absolute top-36 -left-24 max-w-52 rounded-2xl border bg-white p-4 shadow-md drop-shadow-lg">
                                <h6 className="text-base font-bold">
                                    Canada’s Trusted Bookkeeping & Accounting
                                    Experts
                                </h6>
                            </div>
                            <Image
                                className="relative"
                                src="/assets/laptop-lady.webp"
                                alt="Hero"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <TrustedPartners />
                </div>
            </section>

            <section className="flex flex-col items-center justify-between bg-[#EFF0F4] p-4 px-2 sm:flex-row sm:p-8 sm:px-4 md:p-12 md:px-8 lg:p-16 lg:px-12 xl:p-24 xl:px-24">
                <div className="p-4 sm:w-1/2">
                    <Image
                        className="h-auto w-full rounded-3xl"
                        src="/assets/section-2-1.webp"
                        alt="Hero"
                        width={1199}
                        height={899}
                    />
                </div>
                <div className="flex flex-col items-center justify-between p-4 sm:w-1/2">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-4xl font-bold">
                            Simplify Your Accounts, Maximize Your Success!
                        </h3>
                        <p>
                            Whether you’re managing accounting or navigating
                            taxes, our dedicated team is here to support you. We
                            provide expert accounting, tax planning, and
                            bookkeeping services to simplify your accounting
                            journey with efficient, tech-driven solutions. We
                            take the stress out of financial management so you
                            can focus on what matters most—growing your
                            business. With personalized support and smart
                            automation, we ensure accuracy, compliance, and
                            peace of mind at every step.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Image
                            className="rounded-3xl"
                            src="/assets/section-2-2.webp"
                            alt="Hero"
                            width={300}
                            height={300}
                        />
                        <div className="flex flex-col items-start justify-between gap-4 py-4">
                            <h4 className="text-primary text-xl font-bold">
                                Canada&apos;s Leading Bookkeeping Service
                                providers - Trusted by Over 1,000 Clients
                                Nationwide
                            </h4>
                            <p>
                                At Invisor, we handle your bookkeeping with
                                precision, so you can focus on growing your
                                business.
                            </p>
                            <Button className="rounded-full">Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>

            <ScheduleMeeting />

            <OrganizationsSection />
            <section className="flex flex-col items-center justify-between bg-[#E5F2F8] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            About Us
                        </h3>
                        <h2 className="text-primary text-4xl font-bold md:text-5xl">
                            Your Partner in Accounting Success
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Our expert team is committed to delivering
                            personalized accounting and tax services to help you
                            achieve stability and growth.
                        </p>
                        <Link href="/about-us">
                            <Button className="flex items-center gap-2 rounded-full bg-[#1E1E5A] px-6 py-4 text-white hover:bg-[#131346]">
                                <span className="font-bold">More About Us</span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Image and Text Section */}
                <div className="flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Image */}
                    <div className="md:w-1/2">
                        <Image
                            src="/assets/about-us.jpg" // Replace with your image path
                            alt="Accounting Team"
                            width={2048}
                            height={1169}
                            className="h-auto w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 md:w-1/2">
                        <h3 className="text-primary text-3xl font-bold md:text-3xl">
                            Our Journey in Accounting Services
                        </h3>
                        <p className="max-w-xl leading-relaxed">
                            We are a team of dedicated professionals committed
                            to delivering exceptional financial services. With
                            years of expertise in accounting, tax filing, and
                            consulting, we focus on building long-term
                            relationships with clients, helping them achieve
                            financial clarity and growth.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 pt-4 text-start">
                            <div>
                                <h4 className="text-primary text-3xl font-bold md:text-4xl">
                                    20+
                                </h4>
                                <p className="mt-2 text-lg">
                                    Professional Experts
                                </p>
                            </div>
                            <div>
                                <h4 className="text-primary text-3xl font-bold md:text-4xl">
                                    15+
                                </h4>
                                <p className="mt-2 text-lg">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-primary text-3xl font-bold md:text-4xl">
                                    1K+
                                </h4>
                                <p className="mt-2 text-lg">
                                    Satisfied Clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl space-y-2">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            Why Choose Us
                        </h3>
                        <h2 className="text-primary text-4xl font-bold md:text-5xl">
                            Your Trusted Accounting Partner
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We understand that finding the right Accounting
                            partner is essential. With our deep expertise in
                            accounting, bookkeeping, and taxation, we guide you
                            toward success.
                        </p>
                    </div>
                </div>
                {/* Image and Text Section */}
                <div className="flex w-full flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Text Content */}
                    <div className="space-y-6 md:w-1/2">
                        {whyChooseUs.map((item, index) => (
                            <WhyChooseUsCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))}
                    </div>
                    {/* Image */}
                    <div className="flex justify-center md:w-1/2 md:justify-end">
                        <Image
                            src="/assets/why-choose-us.jpg" // Replace with your image path
                            alt="Accounting Team"
                            width={1777}
                            height={1999}
                            className="border-primary h-auto w-full max-w-lg rounded-sm rounded-tl-[6.25rem] rounded-br-[6.25rem] border-t-8 border-r-8 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-8 text-center">
                    <h6 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                        Our Services
                    </h6>

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
                        {services.slice(0, 6).map((service, index) => (
                            <ServicesCard
                                key={index}
                                title={service.title}
                                description={service.description}
                            />
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

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-8 text-center">
                    <h6 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                        CASE STUDIES
                    </h6>

                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Client Success Stories: Real
                        <br className="hidden sm:block" />
                        Results, Real Impact
                    </h2>

                    <p className="text-primary mx-auto max-w-xl font-bold">
                        Discover how we’ve helped businesses overcome challenges
                        and
                        <br className="hidden sm:block" />
                        achieve their financial goals with tailored solutions.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex w-full flex-col gap-4 md:flex-row">
                        <div className="flex max-w-sm flex-col overflow-hidden rounded-xl bg-gray-100 hover:bg-sky-50">
                            <Image
                                src="/assets/case-studies/case-study-1.jpg" // Replace with your image path
                                alt="Case Study"
                                width={2048}
                                height={1152}
                                className="h-64 w-full object-cover"
                            />
                            <div className="flex flex-col gap-6 p-8">
                                <h3 className="text-primary text-lg font-bold">
                                    Optimizing Financial Management for
                                    E-Commerce Growth and Efficiency
                                </h3>
                                <Link href="/case-studies/1">
                                    <Button
                                        variant="ghost"
                                        className="text-primary flex items-center gap-2 px-0 text-sm font-bold hover:bg-sky-50 hover:underline"
                                    >
                                        View Case Study
                                        <CircleArrowRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex max-w-sm flex-col overflow-hidden rounded-xl bg-gray-100 hover:bg-sky-50">
                            <Image
                                src="/assets/case-studies/case-study-2.jpg" // Replace with your image path
                                alt="Case Study"
                                width={2048}
                                height={1152}
                                className="h-64 w-full object-cover"
                            />
                            <div className="flex flex-col gap-6 p-8">
                                <h3 className="text-primary text-lg font-bold">
                                    Streamlining Financial Operations for an
                                    Audiology Service Provider
                                </h3>
                                <Link href="/case-studies/2">
                                    <Button
                                        variant="ghost"
                                        className="text-primary flex items-center gap-2 px-0 text-sm font-bold hover:bg-sky-50 hover:underline"
                                    >
                                        View Case Study
                                        <CircleArrowRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex max-w-sm flex-col overflow-hidden rounded-xl bg-gray-100 hover:bg-sky-50">
                            <Image
                                src="/assets/case-studies/case-study-3.jpg" // Replace with your image path
                                alt="Case Study"
                                width={2048}
                                height={1152}
                                className="h-64 w-full object-cover"
                            />
                            <div className="flex flex-col gap-6 p-8">
                                <h3 className="text-primary text-lg font-bold">
                                    Optimizing Financial Management for IT
                                    Solutions Provider
                                </h3>
                                <Link href="/case-studies/2">
                                    <Button
                                        variant="ghost"
                                        className="text-primary flex items-center gap-2 px-0 text-sm font-bold hover:bg-sky-50 hover:underline"
                                    >
                                        View Case Study
                                        <CircleArrowRight className="h-5 w-5" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
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

            <TestimonialsSection />

            <Faq />

            <ContactUs />
        </main>
    );
}

const whyChooseUs = [
    {
        title: 'Innovative Approaches',
        description:
            'Leveraging the latest technologies, we provide efficient solutions tailored to your needs.',
        icon: 'BrainCircuit',
    },
    {
        title: 'Client-Focused Service',
        description:
            'Our commitment is to put your needs first, offering customized strategies for your unique goals.',
        icon: 'Handshake',
    },
    {
        title: 'Ongoing Support',
        description:
            'Our team is always available, offering reliable support whenever you need it.',
        icon: 'HandHelping',
    },
    {
        title: 'Personalized Solutions',
        description:
            'We tailor our services to match your specific financial objectives, ensuring the best results for your business.',
        icon: 'UserLock',
    },
];

import { BrainCircuit, Handshake, HandHelping, UserLock } from 'lucide-react';

const iconMap = {
    BrainCircuit,
    Handshake,
    HandHelping,
    UserLock,
};

function WhyChooseUsCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    const IconComponent = iconMap[icon as keyof typeof iconMap];

    return (
        <div className="group flex items-start justify-center gap-4 rounded-lg bg-gray-100 p-6 transition-all duration-500 group-hover:bg-sky-100 hover:bg-sky-100">
            <div className="flex items-center justify-center rounded-sm bg-sky-50 p-2 shadow-md transition-all duration-500 group-hover:bg-gray-100">
                <IconComponent className="h-6 w-6 text-[#1E1E5A]" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-black">{title}</h4>
                <p className="mt-1">{description}</p>
            </div>
        </div>
    );
}

function StatsGrid() {
    return (
        <div className="flex h-80 max-w-xl gap-4">
            <div className="flex h-full w-1/2 flex-col gap-4">
                <div className="flex h-1/2 w-full flex-col justify-center rounded-lg bg-gradient-to-br from-green-100 to-blue-100 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold sm:text-4xl">20+</h2>
                    <p className="mt-1 text-gray-700">Professional Experts</p>
                </div>
                <div className="flex h-1/2 w-full flex-col justify-center rounded-lg bg-gray-100 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold sm:text-4xl">20+</h2>
                    <p className="mt-1 text-gray-700">
                        Year of Affiliate Experience
                    </p>
                </div>
            </div>

            <div className="flex h-full w-1/2 flex-col gap-4">
                <div className="flex h-1/3 flex-col justify-center rounded-lg border border-gray-200 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold sm:text-4xl">15+</h2>
                    <p className="mt-1 text-gray-700">Years Experience</p>
                </div>

                <div className="flex h-2/3 flex-col justify-center rounded-lg bg-blue-100 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold sm:text-4xl">1k+</h2>
                    <p className="mt-1 text-gray-700">
                        Canada's trusted accounting experts, proudly serving
                        1000+ clients nationwide
                    </p>
                </div>
            </div>
        </div>
    );
}
