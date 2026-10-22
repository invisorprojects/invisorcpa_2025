import Image from 'next/image';
import Link from 'next/link';

export interface TeamCardProps {
    name: string;
    qualification?: string;
    bio?: string;
    path: string;
    link?: string;
    linkText?: string;
}

export function TeamCard({
    name,
    qualification,
    bio,
    path,
    link,
    linkText = 'Profile Link',
}: TeamCardProps) {
    const displayText = bio || qualification;

    return (
        <div className="group relative h-[340px] w-[260px] overflow-hidden rounded-[24px] bg-[#E5F2F8] shadow-md">
            <Image
                src={path}
                alt={`${name}${qualification ? ` - ${qualification}` : ''} at Invisor CPA, Canadian tax accountant and tax services expert`}
                fill
                sizes="260px"
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-[0.2]"
            />

            <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur-sm transition-all duration-200 group-hover:translate-y-4 group-hover:opacity-0 group-hover:invisible">
                <h3 className="text-base font-semibold text-slate-900">
                    {name}
                </h3>
                {qualification && (
                    <p className="mt-1 line-clamp-2 text-xs font-medium text-slate-600">
                        {qualification}
                    </p>
                )}
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#071a23]/98 via-[#071a23]/90 to-[#071a23]/40 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex h-full translate-y-4 flex-col justify-end p-5 text-white transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-[11px] font-semibold tracking-[0.32em] text-white/65 uppercase">
                        Team
                    </p>
                    <h3 className="mt-1 text-xl leading-tight font-semibold">
                        {name}
                    </h3>
                    {bio && qualification && (
                        <p className="mt-0.5 text-xs font-medium text-white/75">
                            {qualification}
                        </p>
                    )}
                    <div className="my-2.5 h-px w-16 bg-white/30" />
                    {displayText && (
                        <p
                            className={`overflow-y-auto pr-1 text-xs leading-relaxed text-white/90 ${
                                link ? 'max-h-[125px]' : 'max-h-[165px]'
                            }`}
                        >
                            {displayText}
                        </p>
                    )}
                    {link && (
                        <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex h-8 w-fit shrink-0 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-[#071a23] shadow-md transition-colors hover:bg-sky-50"
                        >
                            {linkText}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

