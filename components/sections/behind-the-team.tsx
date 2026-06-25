import { CircleArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { TeamCard } from '../team-card';
import { TEAMS } from '@/constants/TEAMS';
import Image from 'next/image';

export function BehindTheTeam() {
    return (
        <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="mb-8 text-center">
                <h3 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                    BEHIND THE TEAM{' '}
                </h3>

                <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                    Dynamic Team of Accounting
                    <br className="hidden sm:block" />
                    Specialists
                </h2>

                <p className="text-primary mx-auto max-w-xl font-bold">
                    Our team’s dedication and expertise drive every project
                    <br className="hidden sm:block" />
                    forward, delivering excellence in every accounting solution.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex w-full flex-col gap-4 md:flex-row">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

                        {TEAMS.slice(1, 4).map((team, index) => (
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
                            <span className="text-primary">Explore Team</span>
                            <CircleArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
