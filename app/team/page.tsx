import ContactUs from '@/components/sections/contact-us';
import { TeamCard } from '@/components/team-card';
import { TEAMS } from '@/constants/TEAMS';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Team',
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
                        <h3 className="text-secondary text-xl font-medium">
                            BEHIND THE TEAM
                        </h3>
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
