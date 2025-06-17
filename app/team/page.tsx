import ContactUs from '@/components/contact-us';
import services from '@/constants/services';
import teams from '@/constants/teams';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Team',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            BEHIND THE TEAM
                        </h3>
                        <h2 className="text-primary text-4xl font-bold sm:text-5xl">
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
                    src="/assets/banners/banner-5.jpg"
                    alt="Services"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>

            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teams.map((team, index) => (
                        <TeamCard
                            key={index}
                            name={team.name}
                            qualification={team.qualification}
                            path={index}
                        />
                    ))}
                </div>
            </section>
            <ContactUs />
        </main>
    );
}

export function TeamCard({
    name,
    qualification,
    path,
}: {
    name: string;
    qualification: string;
    path: number;
}) {
    return (
        <div className="group relative w-[300px] overflow-hidden rounded-lg bg-[#E5F2F8] shadow-md">
            <Image
                src={`/assets/team/team-member-1.png`}
                alt={name}
                width={300}
                height={400}
                className="object-cover"
            />

            {/* Overlay Card */}
            <div className="absolute inset-0 flex items-end justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full bg-white p-4 text-center shadow-md">
                    <h4 className="font-bold text-black">{name}</h4>
                    <p className="text-sm text-gray-700">{qualification}</p>
                </div>
            </div>
        </div>
    );
}
