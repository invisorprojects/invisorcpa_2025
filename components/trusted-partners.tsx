import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

export default function TrustedPartners() {
    return (
        <div className="my-8 flex items-center justify-between">
            <h4 className="mx-8 text-lg font-semibold text-nowrap">
                TRUSTED BY
            </h4>
            <Marquee pauseOnHover className="gap-8 [--duration:10s]">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <Image
                        className="mr-16 h-16 w-auto"
                        key={num}
                        src={`/assets/company-logos/logo-${num}.webp`}
                        alt={`Company Logo ${num}`}
                        width={160}
                        height={100}
                    />
                ))}
            </Marquee>
        </div>
    );
}
