import type { Metadata } from 'next';
import Image from 'next/image';
import ContactUs from '@/components/sections/contact-us';
import { TEAMS } from '@/constants/TEAMS';
import { TeamCard } from '@/components/team-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Cross-Border Tax Services Canada-US | Invisor CPA',
    description:
        'Expert cross-border tax services for Canada-US individuals and businesses. IRS streamlined filing, FBAR & FATCA, US estate/gift tax, and ongoing compliance by Invisor CPA.',
    keywords: [
        'Cross-border tax services',
        'Canada US tax',
        'IRS Streamlined Filing',
        'FBAR',
        'FATCA',
        'US estate tax',
        'US gift tax',
        'International tax compliance',
        'Canadian American tax',
        'Cross-border accountant',
    ],
    openGraph: {
        title: 'Cross-Border Tax Services Canada-US | Invisor CPA',
        description:
            'Invisor CPA helps individuals and businesses navigate Canada-US tax compliance: Streamlined Filing, FBAR/FATCA, estate & gift, and strategic advisory.',
        url: 'https://invisorcpa.ca/cross-border-taxes',
        siteName: 'Invisor CPA',
        images: [
            {
                url: '/assets/banners/banner-11.jpg',
                width: 1200,
                height: 630,
                alt: 'Cross-Border Tax Services by Invisor',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cross-Border Tax Services Canada-US | Invisor CPA',
        description:
            'Navigate Canada-US taxes with confidence: Streamlined Filing, FBAR/FATCA, estate & gift, and ongoing compliance.',
        images: ['/assets/banners/banner-11.jpg'],
    },
    alternates: {
        canonical: 'https://invisorcpa.ca/cross-border-taxes',
    },
};

export default function Page() {
    return (
        <main>
            {/* Hero / Intro */}
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium uppercase">
                            Cross-Border Taxes
                        </h3>
                        <h1 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Cross-Border Tax Services by Invisor
                        </h1>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Invisor is a trusted leader in international tax
                            solutions, offering expert cross-border tax services
                            for individuals and businesses navigating the
                            complexities of the Canada-US tax landscape. With a
                            team of highly qualified professionals, Invisor
                            helps clients ensure compliance, minimize
                            liabilities, and confidently handle all aspects of
                            cross-border taxation.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-11.jpg"
                    alt="Cross-Border Tax Services by Invisor"
                    width={4096}
                    height={1632}
                    className="h-[500px] rounded-4xl object-cover shadow-md"
                />
            </section>

            {/* Why Choose Invisor */}
            <section className="flex flex-col items-center justify-between gap-6 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Why Choose Invisor for Cross-Border Taxation?
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed font-medium sm:text-lg">
                        Canadians working, residing, or investing in the US and
                        Americans with ties to Canada face unique tax
                        challenges. Invisor specializes in cross-border tax
                        compliance, providing comprehensive support to address
                        double taxation, reporting obligations, and optimal tax
                        strategies.
                    </p>
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Streamlined Compliance
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Streamline filing requirements in both Canada and
                            the US, reducing stress and potential penalties.
                        </p>
                    </div>
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Mitigate Exposure
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Mitigate tax exposure through tailored strategies
                            that protect interests domestically and abroad.
                        </p>
                    </div>
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Regulatory Confidence
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Navigate evolving regulations with up-to-date
                            guidance for individuals, corporations, and passive
                            investments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Our Cross-Border Tax Services
                    </h2>
                </div>
                <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-[#EFF0F4] p-6">
                        <h3 className="text-xl font-bold">
                            IRS Streamlined Filing Assistance
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">
                            Many dual citizens and green card holders are
                            unaware of their US tax filing obligations. Invisor
                            assists clients with IRS Streamlined Filing
                            programs, helping them become compliant without
                            unnecessary penalties.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#EFF0F4] p-6">
                        <h3 className="text-xl font-bold">
                            Foreign Asset Reporting (FBAR & FATCA)
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">
                            Complying with both IRS and CRA rules can be
                            overwhelming. Invisor identifies all necessary
                            reporting needs including foreign accounts,
                            brokerage, retirement, and mutual funds to ensure
                            complete compliance on both sides of the border.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#EFF0F4] p-6">
                        <h3 className="text-xl font-bold">
                            US Estate and Gift Tax Consulting
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">
                            Owning property or earning income in the US can
                            trigger complex estate and gift tax consequences.
                            Invisor advises on structuring assets and
                            transactions to reduce exposure and ensure proper
                            reporting based on residency or domicile status.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#EFF0F4] p-6">
                        <h3 className="text-xl font-bold">
                            Strategic Tax Advisory
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">
                            From corporate restructuring to estate planning and
                            cross-border compliance, our specialists provide
                            end-to-end tax consulting designed for today’s
                            global citizens and businesses.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-[#EFF0F4] p-6 md:col-span-2">
                        <h3 className="text-xl font-bold">
                            Ongoing Compliance and Planning
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed">
                            We support both individuals and businesses in
                            maintaining full tax compliance, preparing personal
                            or corporate returns, managing trusts and estates,
                            and handling appeals or objections with tax
                            authorities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Invisor */}
            <section className="flex flex-col items-center justify-between gap-6 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Why Invisor?
                    </h2>
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Expert Navigation
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Our team guides clients through complex
                            international tax scenarios, delivering clear and
                            actionable advice that saves time and money.
                        </p>
                    </div>
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Accuracy and Peace of Mind
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Avoid costly mistakes by relying on Invisor’s
                            professionals to prevent errors and protect
                            financial interests.
                        </p>
                    </div>
                    <div className="rounded-2xl border bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold">
                            Trusted Partner
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-700">
                            Gain more than just tax services—gain a long-term
                            partner from business growth to major life
                            milestones.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mx-auto mb-8 max-w-4xl text-center">
                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Meet the Invisor Team
                    </h2>
                    <p className="text-base leading-relaxed">
                        Our distinguished team includes experienced CPAs, tax
                        advisors, and financial consultants dedicated to
                        cross-border tax excellence. Contact Invisor today to
                        schedule a consultation and discover tailored solutions
                        for all international tax needs.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex w-full flex-col gap-4 md:flex-row">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {TEAMS.slice(0, 4).map((team, index) => (
                                <TeamCard
                                    key={index}
                                    name={team.name}
                                    qualification={team.qualification}
                                    path={team.path}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex w-full justify-end py-8">
                        <Link href="/team">
                            <Button
                                variant={'outline'}
                                className="border-primary flex items-center gap-2 rounded-full hover:bg-sky-50 hover:underline"
                            >
                                <span className="text-primary">
                                    Explore Team
                                </span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
