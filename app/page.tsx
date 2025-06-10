import Image from 'next/image';
import TrustedPartners from '@/components/trusted-partners';

export default function Home() {
    return (
        <main className="px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24">
            <section className="flex flex-col justify-between gap-4">
                <div className="mt-4">
                    <h1 className="text-4xl font-bold md:text-5xl 2xl:text-6xl">
                        Trust Us to Handle What Counts with Financial Support
                        You Can Rely On
                    </h1>
                    <p className="text-lg">
                        We simplify your bookkeeping and financial processes so
                        you can focus on growing your business with confidence
                        and clarity.
                    </p>
                </div>
                <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
                    <StatsGrid />
                    <div className="relative h-fit w-fit bg-blue-50">
                        <div className="absolute top-0 left-0 h-1/4 w-full bg-white"></div>
                        <Image
                            className="relative"
                            src="/assets/laptop-lady.webp"
                            alt="Hero"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <TrustedPartners />
            </section>
        </main>
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
