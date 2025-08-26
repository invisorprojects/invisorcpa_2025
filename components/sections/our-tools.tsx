import Image from 'next/image';

export default function OurTools() {
    return (
        <section className="mx-auto flex flex-col items-start justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="max-w-lg px-4 py-12 sm:w-1/2">
                <h3 className="text-secondary mb-2 text-lg font-semibold tracking-wide uppercase">
                    Our Tools
                </h3>

                <h2 className="text-primary sm:text- mb-4 text-3xl leading-snug font-bold">
                    Professional Accounting
                    <br />
                    Software Solutions
                </h2>

                <p className="text-primary text-base leading-relaxed font-medium sm:text-lg">
                    We leverage industry-leading accounting software and tools
                    to deliver accurate, efficient, and comprehensive financial
                    services for your business.
                </p>
            </div>
            <Tools />
        </section>
    );
}

function Tools() {
    return (
        <div className="my-4 lg:mr-20">
            <div className="grid grid-cols-2 gap-8 px-8 md:grid-cols-3 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                        key={num}
                        className="relative aspect-square h-28 w-auto"
                    >
                        <Image
                            className="absolute object-contain"
                            src={`/assets/our-tools/tool-${num}.svg`}
                            alt={`Tool ${num}`}
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
