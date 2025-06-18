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
