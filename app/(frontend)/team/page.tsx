import ContactUs from '@/components/sections/contact-us';
import { TeamCard } from '@/components/team-card';
import { TEAMS } from '@/constants/TEAMS';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Meet the InvisorCPA Team | Expert CPAs & Accountants',
    description:
        'Get to know the experienced CPAs and accountants behind InvisorCPA. Our team is committed to delivering exceptional accounting and bookkeeping services across Canada.',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/team',
    },
};

export default function Team() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h1 className="text-secondary text-xl font-medium">
                            BEHIND THE TEAM
                        </h1>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Meet the Professionals
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            Our team members bring a wealth of experience and
                            expertise, delivering the highest standard of
                            financial advice.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-5.webp"
                    alt="Services"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                         <div className="group relative h-[340px] w-[260px] overflow-hidden rounded-[24px] bg-[#E5F2F8] shadow-md">
                            <Image
                                src="/assets/team/team-members-3.webp"
                                alt="Geevar Thambi - MBA, CMA, CSCA, CPB, EA at Invisor CPA, Canadian tax accountant and tax services expert"
                                fill
                                sizes="260px"
                                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-[0.2]"
                            />

                            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0">
                                <h3 className="text-base font-semibold text-slate-900">
                                    Geevar Thambi
                                </h3>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071a23]/95 via-[#071a23]/82 to-[#071a23]/28 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                <div className="flex h-full translate-y-6 flex-col justify-end p-5 text-white transition-transform duration-300 group-hover:translate-y-0">
                                    <p className="text-[11px] font-semibold tracking-[0.32em] text-white/65 uppercase">
                                        Team
                                    </p>
                                    <h3 className="mt-2 text-xl leading-tight font-semibold">
                                        Geevar Thambi
                                    </h3>
                                    <div className="mt-4 h-px w-16 bg-white/30" />
                                    <p className="mt-4 max-h-[170px] overflow-y-auto pr-2 text-sm leading-6 text-white/86">
                                        MBA, CMA, CSCA, CPB, EA
                                    </p>
                                    <Link
                                        href="https://calendly.com/geevar-invisorstaffing/tax-consultation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex h-8 w-fit items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-[#071a23] transition-colors hover:bg-sky-50"
                                    >
                                        Book a Call
                                    </Link>
                                </div>
                            </div>
                        </div>

                    {TEAMS.map((team, index) => (
                        <TeamCard
                            key={index}
                            name={team.name}
                            qualification={team.qualification}
                            path={team.path}
                        />
                    ))}
                </div>
            </section>
            <ContactUs />
        </main>
    );
}
