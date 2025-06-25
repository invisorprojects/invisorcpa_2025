import { Calculator, CircleArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { SERVICES } from '@/constants/SERVICES';

export function ServicesCard({
    service,
}: {
    service: (typeof SERVICES)[number];
}) {
    return (
        <div className="group hover:bg-primary flex max-w-96 flex-col gap-4 rounded-2xl border px-8 py-6 shadow-md drop-shadow-lg transition-all duration-300">
            {/* Icon Box */}
            <div className="w-fit rounded-sm bg-[#E5F2F8] p-2 transition-colors group-hover:bg-white">
                <Calculator strokeWidth={1} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 transition-colors group-hover:text-white">
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-sm font-light text-[#5F5F5F] transition-colors group-hover:text-white">
                    {service.description}
                </p>
            </div>

            {/* Button */}
            <div className="flex h-full w-full items-end justify-end">
                <Link href={`/services/${service.slug}`}>
                    <Button className="group-hover:text-primary hover:text-primary flex items-center gap-2 rounded-full transition-all group-hover:bg-white hover:bg-white">
                        <span>Learn More</span>
                        <CircleArrowRight className="h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
