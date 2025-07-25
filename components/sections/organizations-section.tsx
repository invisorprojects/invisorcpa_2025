import { CircleArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export function OrganizationsSection() {
    const logos = Array.from(
        { length: 64 },
        (_, i) => `/assets/customer-logos/${i + 1}.png`
    );
    return (
        <section className="flex flex-col items-center justify-between bg-[#EFF0F4] p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
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
            <div className="grid grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
                {logos.map((src, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center p-4"
                    >
                        <img
                            src={src}
                            alt={`Company Logo ${index + 1}`}
                            className="max-h-14 w-auto object-contain transition-all duration-300 hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
