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
        <div className="group relative h-[400px] w-[300px] overflow-hidden rounded-lg bg-[#E5F2F8] shadow-md">
            <Image src={path} alt={name} fill className="object-cover" />

            {/* Overlay Card */}
            <div className="absolute inset-0 flex items-end justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full bg-white p-4 text-center shadow-md">
                    <h4 className="font-bold text-black">{name}</h4>
                    <p className="text-sm text-gray-700">{qualification}</p>
                </div>
            </div>
        </div>
    );
}
