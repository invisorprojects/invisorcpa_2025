import { CircleArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function OrganizationsSection() {
    const logos = Array.from(
        { length: 86 },
        (_, i) => `/assets/customer-logos/${i + 1}.webp`
    );

    const smallLogos = Array.from(
        { length: 18 },
        (_, i) => `/assets/customer-logos/small-logo-${i + 1}.webp`
    );
    return (
        <section className="flex flex-col items-center justify-between bg-gradient-to-b from-[#EFF0F4] to-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                <div className="max-w-sm">
                    <h2 className="text-primary text-4xl font-bold">
                        Organizations we&#39;ve helped
                    </h2>
                </div>
                <div className="flex max-w-lg flex-col items-start gap-4">
                    <p className="text-[#686666]">
                        Reach out knowing we&#39;ve helped some of the best
                        companies in Canada with tax planning, bookkeeping and
                        structuring their financial back office.
                    </p>
                    <Link href="/case-studies">
                        <Button className="flex items-center gap-2 rounded-full">
                            <span className="mx-4 text-sm font-medium">
                                View Case Studies
                            </span>
                            <CircleArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                {logos.map((src, index) => (
                    <div
                        key={index}
                        className="group flex items-center justify-center rounded-xl border border-[#1E1E5A]/10 bg-white p-3 shadow-sm transition-all duration-200 outline-none hover:-translate-y-1 hover:bg-[#E5F2F8] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#1E1E5A] md:p-4"
                        tabIndex={0}
                    >
                        <div className="relative aspect-[2/1] w-24 sm:w-28 md:w-32">
                            <Image
                                src={src}
                                alt={`Company Logo ${index + 1}`}
                                fill
                                className="object-contain opacity-80 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 160px"
                            />
                        </div>
                    </div>
                ))}
                {smallLogos.map((src, index) => (
                    <div
                        key={index}
                        className="group flex items-center justify-center rounded-xl border border-[#1E1E5A]/10 bg-white p-3 shadow-sm transition-all duration-200 outline-none hover:-translate-y-1 hover:bg-[#E5F2F8] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#1E1E5A] md:p-4"
                        tabIndex={0}
                    >
                        <div className="relative aspect-[2/1] w-32 sm:w-40 md:w-48">
                            <Image
                                src={src}
                                alt={`Company Logo ${index + 1}`}
                                fill
                                className="scale-150 object-contain opacity-80 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
                                sizes="(max-width: 640px) 60vw, (max-width: 768px) 40vw, 200px"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
