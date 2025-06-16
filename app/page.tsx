import Image from 'next/image';
import TrustedPartners from '@/components/trusted-partners';
import { Button } from '@/components/ui/button';
import { ScheduleMeeting } from '@/components/ScheduleMeeting';
import { CircleArrowRight, Quote } from 'lucide-react';
import ServicesCard from '@/components/ServicesCard';
import services from '@/constants/services';
import Link from 'next/link';
import ContactUs from '@/components/contact-us';
import Faq from '@/components/Faq';

export default function Home() {
    return (
        <main className="">
            <section className="flex flex-col gap-4 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="flex h-full flex-col items-end justify-between gap-4 sm:flex-row">
                    <div className="flex flex-col items-start justify-between gap-8 sm:w-2/3">
                        <div className="flex flex-col items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold sm:text-5xl">
                                Trust Us to Handle What Counts with Financial
                                Support You Can Rely On
                            </h1>
                            <p className="max-w-xl text-lg">
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
                            <h4 className="text-xl font-bold">
                                Canada’s Leading Bookkeeping Service providers –
                                Trusted by Over 1,000 Clients Nationwide
                            </h4>
                            <p>
                                At Invisor, we handle your bookkeeping with
                                precision, so you can focus on growing your
                                business.
                            </p>
                            <Button className="rounded-full"></Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center bg-[#EFF0F4] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24">
                {/* <ScheduleMeeting /> */}
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-sm">
                        <h2 className="text-primary text-4xl font-bold">
                            Organizations we've helped
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Reach out knowing we've helped some of the best
                            companies in Canada with tax planning, bookkeeping
                            and structuring their
                        </p>

                        <Button className="flex items-center gap-2 rounded-full">
                            <span className="">View Case Studies</span>
                            <CircleArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <CompanyLogos />
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-sm">
                        <h3 className="text-secondary text-xl font-medium">
                            TESTIMONIALS
                        </h3>
                        <h2 className="text-primary text-4xl font-bold">
                            Hear from our clients{' '}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Discover how we have helped our clients achieve
                            financial stability and reach their goals.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <TestmonialCard
                            key={index}
                            title={t.title}
                            message={t.message}
                            name={t.name}
                        />
                    ))}
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

                    <p className="text-muted-foreground mx-auto max-w-xl text-base font-medium">
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
                                className="border-primary flex items-center gap-2 rounded-full"
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

            <Faq />
            <ContactUs />
        </main>
    );
}

const testimonials = [
    {
        title: 'Made Business Operations Smoother',
        message:
            'The accounting and tax services have streamlined my business operations, allowing me to focus on what matters most. The team always provides clear and effective solutions.',
        name: 'Liam Carter Johnson',
    },
    {
        title: 'Gave Us Guidance to Grow',
        message:
            'As a startup, we needed expert guidance with tax planning and bookkeeping. The team’s advice has been crucial in helping us grow confidently',
        name: 'Avery Grace Bennett',
    },
    {
        title: 'Made Payroll Effortless for Us',
        message:
            'Payroll management has never been easier. We can now focus on scaling our business while they handle all payroll complexities.',
        name: 'Ethan James Mackenzie',
    },
    {
        title: 'Simplified Financial Reporting for Us',
        message:
            'Financial reporting and tax filing were handled smoothly, giving us peace of mind and enabling better business decisions.',
        name: 'Mason Christopher Bell',
    },
    {
        title: 'Made Business Operations Smoother',
        message:
            'The accounting and tax services have streamlined my business operations, allowing me to focus on what matters most. The team always provides clear and effective solutions.',
        name: 'Liam Carter Johnson',
    },
    {
        title: 'Made Business Operations Smoother',
        message:
            'The accounting and tax services have streamlined my business operations, allowing me to focus on what matters most. The team always provides clear and effective solutions.',
        name: 'Liam Carter Johnson',
    },
];

function TestmonialCard({
    title,
    message,
    name,
}: {
    title: string;
    message: string;
    name: string;
}) {
    return (
        <div className="flex max-w-96 flex-col gap-4 rounded-md bg-[#E5F2F8] px-8 py-6">
            <Quote fill="#1B1E65" />
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-sm text-[#5F5F5F]">{message}</p>
            <h6 className="font-medium">{name}</h6>
        </div>
    );
}

function StatsGrid() {
    return (
        <div className="flex h-80 max-w-xl gap-4">
            <div className="flex h-full w-1/2 flex-col gap-4">
                <div className="flex h-1/2 w-full flex-col justify-center rounded-lg bg-gradient-to-br from-green-100 to-blue-100 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold">20+</h2>
                    <p className="mt-1 text-gray-700">Professional Experts</p>
                </div>
                <div className="flex h-1/2 w-full flex-col justify-center rounded-lg bg-gray-100 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold">20+</h2>
                    <p className="mt-1 text-gray-700">
                        Year of Affiliate Experience
                    </p>
                </div>
            </div>

            <div className="flex h-full w-1/2 flex-col gap-4">
                <div className="flex h-1/3 flex-col justify-center rounded-lg border border-gray-200 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold">15+</h2>
                    <p className="mt-1 text-gray-700">Years Experience</p>
                </div>

                <div className="flex h-2/3 flex-col justify-center rounded-lg bg-blue-100 p-6 text-[#11135f]">
                    <h2 className="text-3xl font-bold">1k+</h2>
                    <p className="mt-1 text-gray-700">
                        Canada's trusted accounting experts, proudly serving
                        1000+ clients nationwide
                    </p>
                </div>
            </div>
        </div>
    );
}

const CompanyLogos = () => {
    return (
        <div
            data-aos="fade-up"
            className="grid h-full w-full grid-cols-4 place-items-center gap-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6"
        >
            {[
                1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3,
                4, 5, 6,
            ].map((num, index) => (
                <Image
                    key={index}
                    className="h-16 w-auto"
                    src={`/assets/company-logos/logo-${num}.webp`}
                    alt={`Company Logo ${num}`}
                    width={160}
                    height={100}
                />
            ))}
        </div>
    );
};
