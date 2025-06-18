import { CircleArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import teams from '@/constants/teams';
import { TeamCard } from '@/app/team/page';

export function BehindTheTeam() {
    return (
        <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="mb-8 text-center">
                <h6 className="text-secondary mb-4 text-xl font-semibold tracking-widest uppercase">
                    BEHIND THE TEAM{' '}
                </h6>

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
                        {teams.slice(0, 4).map((team, index) => (
                            <TeamCard
                                key={index}
                                name={team.name}
                                qualification={team.qualification}
                                path={index}
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
                            <span className="text-primary">Expolre Team</span>
                            <CircleArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
