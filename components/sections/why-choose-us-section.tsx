import Image from 'next/image';

export function WhyChooseUs() {
    return (
        <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="mb-20 flex w-full flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-2">
                    <h3 className="text-secondary text-xl font-medium uppercase">
                        Why Choose Us
                    </h3>
                    <h2 className="text-primary text-4xl font-bold md:text-5xl">
                        Your Trusted Accounting Partner
                    </h2>
                </div>
                <div className="flex max-w-lg flex-col items-start gap-4">
                    <p className="text-[#686666]">
                        We understand that finding the right Accounting partner
                        is essential. With our deep expertise in accounting,
                        bookkeeping, and taxation, we guide you toward success.
                    </p>
                </div>
            </div>
            {/* Image and Text Section */}
            <div className="flex w-full flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
                {/* Text Content */}
                <div className="space-y-6 md:w-1/2">
                    {whyChooseUs.map((item, index) => (
                        <WhyChooseUsCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))}
                </div>
                {/* Image */}
                <div className="flex justify-center md:w-1/2 md:justify-end">
                    <Image
                        src="/assets/why-choose-us.webp" // Replace with your image path
                        alt="Accounting Team"
                        width={1777}
                        height={1999}
                        className="border-primary h-auto w-full max-w-lg rounded-sm rounded-tl-[6.25rem] rounded-br-[6.25rem] border-t-8 border-r-8 object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

import { BrainCircuit, Handshake, HandHelping, UserLock } from 'lucide-react';
const whyChooseUs = [
    {
        title: 'Innovative Approaches',
        description:
            'Leveraging the latest technologies, we provide efficient solutions tailored to your needs.',
        icon: 'BrainCircuit',
    },
    {
        title: 'Client-Focused Service',
        description:
            'Our commitment is to put your needs first, offering customized strategies for your unique goals.',
        icon: 'Handshake',
    },
    {
        title: 'Ongoing Support',
        description:
            'Our team is always available, offering reliable support whenever you need it.',
        icon: 'HandHelping',
    },
    {
        title: 'Personalized Solutions',
        description:
            'We tailor our services to match your specific financial objectives, ensuring the best results for your business.',
        icon: 'UserLock',
    },
];

const iconMap = {
    BrainCircuit,
    Handshake,
    HandHelping,
    UserLock,
};

function WhyChooseUsCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    const IconComponent = iconMap[icon as keyof typeof iconMap];

    return (
        <div className="group flex items-start justify-start gap-4 rounded-lg bg-gray-100 p-6 transition-all duration-500 group-hover:bg-sky-100 hover:bg-sky-100">
            <div className="flex items-center justify-center rounded-sm bg-sky-50 p-2 shadow-md transition-all duration-500 group-hover:bg-gray-100">
                <IconComponent className="h-6 w-6 text-[#1E1E5A]" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-black">{title}</h3>
                <p className="mt-1 max-w-lg">{description}</p>
            </div>
        </div>
    );
}
