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
        <div className="group relative h-[300px] w-[250px] overflow-hidden rounded-lg bg-[#E5F2F8] shadow-md">
            <Image
                src={path}
                alt={`${name} - ${qualification} at Invisor CPA, Canadian tax accountant and tax services expert`}
                fill
                className="object-cover transition-all duration-300 group-hover:grayscale"
            />

            {/* Overlay Card */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="w-full bg-white p-4 text-center shadow-md">
                    <h3 className="font-bold text-black">{name}</h3>
                    <p className="text-sm text-gray-700">{qualification}</p>
                </div>
            </div>
        </div>
    );
}
