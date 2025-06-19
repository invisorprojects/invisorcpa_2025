import { CircleArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export function OrganizationsSection() {
    return (
        <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
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

                    <Button className="flex items-center gap-2 rounded-full">
                        <span className="mx-4 text-sm font-medium">
                            View Case Studies
                        </span>
                        <CircleArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <CompanyLogos />
        </section>
    );
}

const CompanyLogos = () => {
    return (
        <div
            data-aos="fade-up"
            className="grid h-full w-full grid-cols-4 place-items-center gap-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6"
        >
            {[
                1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3,
                4, 5, 6,
            ].map((num, index) => (
                <Image
                    key={index}
                    className="h-16 w-auto"
                    src={`/assets/company-logos/logo-${num}.webp`}
                    alt={`Company Logo ${num}`}
                    width={160}
                    height={100}
                />
            ))}
        </div>
    );
};
