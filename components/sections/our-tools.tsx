import Image from 'next/image';

type Tool = {
    name: string;
    logo: string; // public path under /assets/tools or /assets/our-tools
    url: string;
};

const TOOLS: Tool[] = [
    {
        name: 'QuickBooks Online',
        logo: '/assets/tools/quickbooks.webp',
        url: 'https://quickbooks.intuit.com',
    },
    {
        name: 'Xero',
        logo: '/assets/tools/xero.svg',
        url: 'https://www.xero.com',
    },
    { name: 'Dext', logo: '/assets/tools/dext.webp', url: 'https://dext.com' },
    {
        name: 'Wagepoint',
        logo: '/assets/tools/wagepoint.webp',
        url: 'https://wagepoint.com',
    },
    {
        name: 'Plooto',
        logo: '/assets/tools/plooto.webp',
        url: 'https://plooto.com',
    },
    {
        name: 'Float',
        logo: '/assets/tools/float.webp',
        url: 'https://www.floatcard.com',
    },
    {
        name: 'Venn',
        logo: '/assets/tools/venn.webp',
        url: 'https://www.vennbank.com',
    },
    {
        name: 'Humi',
        logo: '/assets/tools/humi.webp',
        url: 'https://www.humi.ca',
    },
];

export default function OurTools() {
    return (
        <section className="mx-auto flex flex-col items-start justify-between gap-6 p-4 sm:flex-row sm:items-center sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="max-w-lg px-4 py-12 sm:w-1/2">
                <h3 className="text-secondary mb-2 text-lg font-semibold tracking-wide uppercase">
                    Our Tools
                </h3>

                <h2 className="text-primary sm:text- mb-4 text-3xl leading-snug font-bold">
                    Professional Accounting
                    <br />
                    Software Solutions For Small Businesses
                </h2>

                <p className="text-primary text-base leading-relaxed font-medium sm:text-lg">
                    We leverage industry-leading accounting software to deliver
                    accurate, efficient, and comprehensive financial services.
                    These tools help us automate workflows, reduce errors, and
                    provide real-time insights.
                </p>
            </div>
            <Tools />
        </section>
    );
}

function Tools() {
    return (
        <div className="my-4 w-full sm:w-1/2 lg:mr-20">
            <div className="grid grid-cols-2 gap-6 px-2 sm:grid-cols-3 md:grid-cols-4 md:gap-8 md:px-6">
                {TOOLS.map((tool) => (
                    <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${tool.name} website`}
                        className="group relative flex aspect-square items-center justify-center rounded-xl border bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        <span className="sr-only">{tool.name}</span>
                        <Image
                            src={tool.logo}
                            alt={tool.name}
                            fill
                            className="object-contain grayscale transition-all duration-200 group-hover:grayscale-0"
                            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 200px"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}
