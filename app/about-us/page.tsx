import { BehindTheTeam } from '@/components/behind-the-team';
import ContactUs from '@/components/contact-us';
import Faq from '@/components/faq-section';
import { OrganizationsSection } from '@/components/organizations-section';
import OurTools from '@/components/our-tools';
import { TestimonialsSection } from '@/components/testimonials-section';
import TrustedPartners from '@/components/trusted-partners';
import { WhyChooseUs } from '@/components/why-choose-us-section';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Pricing',
};

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
                    src="/assets/banners/banner-2.jpg"
                    alt="Services"
                    width={4096}
                    height={1800}
                    className="rounded-4xl object-contain shadow-md"
                />
                {/* Counts Section */}
            </section>
            {/* Business Facts */}
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
                            src="/assets/our-mission.png" // Replace with your image path
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
                                    experience that evolves with our clients'
                                    needs.
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
                                    is to ensure our clients’ financial peace of
                                    mind and success at every stage of their
                                    journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <OurTools />
            {/* Our Process */}
            <OrganizationsSection />
            <BehindTheTeam />
            <TestimonialsSection />
            <Faq />
            <ContactUs />
        </main>
    );
}
