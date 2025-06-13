import { Calculator, CircleArrowRight } from 'lucide-react';
import { Button } from './ui/button';

function ServicesCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="group hover:bg-primary flex max-w-96 flex-col gap-4 rounded-2xl border px-8 py-6 shadow-md drop-shadow-lg transition-all duration-300">
            {/* Icon Box */}
            <div className="w-fit rounded-sm bg-[#E5F2F8] p-2 transition-colors group-hover:bg-white">
                <Calculator strokeWidth={1} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 transition-colors group-hover:text-white">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-sm font-light text-[#5F5F5F] transition-colors group-hover:text-white">
                    {description}
                </p>
            </div>

            {/* Button */}
            <div className="flex w-full justify-end">
                <Button className="group-hover:text-primary flex items-center gap-2 rounded-full transition-all group-hover:bg-white">
                    <span>Learn More</span>
                    <CircleArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default ServicesCard;
