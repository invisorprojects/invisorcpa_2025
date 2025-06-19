import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

export default function OurTools() {
    return (
        <div className="my-8 flex items-center justify-between">
            <h4 className="mx-8 text-lg font-semibold text-nowrap">
                OUR TOOLS
            </h4>
            <Marquee pauseOnHover className="[--duration:10s]">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className="relative mr-16 aspect-square h-28 w-auto"
                    >
                        <Image
                            className="absolute object-contain"
                            src={`/assets/our-tools/tool-${num}.svg`}
                            alt={`Tool ${num}`}
                            fill
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
