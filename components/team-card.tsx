import Image from 'next/image';

export function TeamCard({
    name,
    qualification,
    path,
}: {
    name: string;
    qualification: string;
    path: string;
}) {
    return (
        <div className="group relative h-[340px] w-[260px] overflow-hidden rounded-[24px] bg-[#E5F2F8] shadow-md">
            <Image
                src={path}
                alt={`${name} - ${qualification} at Invisor CPA, Canadian tax accountant and tax services expert`}
                fill
                sizes="260px"
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-[0.2]"
            />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 px-4 py-3 text-center shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0">
                <h3 className="text-base font-semibold text-slate-900">{name}</h3>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a23]/95 via-[#071a23]/82 to-[#071a23]/28 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex h-full translate-y-6 flex-col justify-end p-5 text-white transition-transform duration-300 group-hover:translate-y-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/65">
                        Team
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight">{name}</h3>
                    <div className="mt-4 h-px w-16 bg-white/30" />
                    <p className="mt-4 max-h-[170px] overflow-y-auto pr-2 text-sm leading-6 text-white/86">
                        {qualification}
                    </p>
                </div>
            </div>
        </div>
    );
}
