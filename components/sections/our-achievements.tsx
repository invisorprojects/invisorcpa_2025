import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

export default function OurAchievements() {
    return (
        <div className="my-8 flex items-center justify-between">
            <h3 className="mx-8 text-lg font-semibold text-nowrap uppercase">
                Our Achievements
            </h3>
            <Marquee pauseOnHover className="[--duration:10s]">
                {[1, 2, 3, 4, 5].map((num) => (
                    <div
                        key={num}
                        className="relative mr-16 aspect-square h-20 w-auto"
                    >
                        <Image
                            className="absolute object-contain"
                            key={num}
                            src={`/assets/our-achievements/achievement-${num}.png`}
                            alt={`Company Logo ${num}`}
                            fill
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
