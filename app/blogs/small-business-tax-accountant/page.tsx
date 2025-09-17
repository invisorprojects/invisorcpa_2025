'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const placeholder = 'https://ui.shadcn.com/placeholder.svg';

const reasons = [
    {
        title: 'Keeps you compliant with tax laws and deadlines',
        desc: 'Stay compliant with all current tax laws and avoid missing crucial deadlines. Sleep soundly knowing your business is on track.',
    },
    {
        title: 'Identifies deductions that lower tax burden',
        desc: 'Accountants pinpoint deductions you might miss, which lowers your overall tax burden. More money remains in your pocket!',
    },
    {
        title: 'Offers strategic advice for growth and scaling',
        desc: 'Receive expert advice on financial strategies. Plan for business growth and scaling with informed decisions and long‑term vision.',
    },
    {
        title: 'Provides accurate financial records for decision‑making',
        desc: 'Get accurate financial records that give you clear insights. This empowers better decision‑making for your business operations.',
    },
    {
        title: 'Helps with payroll, GST/HST, and year‑end reporting',
        desc: 'Leave the complicated calculations to your accountant. Get help with payroll, GST/HST, and year‑end reporting for ease.',
    },
    {
        title: 'Minimises risk of penalties or costly mistakes',
        desc: "Avoid costly errors and penalties with expert tax guidance. Minimise financial risks that threaten your business's bottom line.",
    },
    {
        title: 'Saves time so you can focus on business operations',
        desc: 'Focus on running your business while your accountant handles the taxes. Save time to spend on your business operations.',
    },
];

export default function Page() {
    return (
        <div className="w-full bg-[#0B5EA8] text-white">
            {/* Top decorative background bands */}
            <div className="relative">
                <div className="pointer-events-none absolute inset-0">
                    {/* Soft rounded accents */}
                    <div className="absolute -top-8 left-2 h-28 w-28 rounded-3xl bg-[#5FD7C1] opacity-90" />
                    <div className="absolute top-8 left-20 h-8 w-16 rounded-lg bg-[#AEEADF] opacity-90" />
                    <div className="absolute top-6 right-4 h-10 w-10 rounded-xl bg-[#3DA5EA] opacity-70" />
                </div>

                {/* Header section */}
                <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-6">
                    <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 md:gap-8">
                        {/* Image left with thick white rounded frame */}
                        <div className="relative">
                            {/* stacked chips on the far left */}
                            <div className="pointer-events-none absolute top-8 -left-8 hidden h-24 w-16 rounded-3xl bg-[#5FD7C1] md:block" />
                            <div className="pointer-events-none absolute top-16 -left-14 hidden h-24 w-16 rounded-3xl bg-[#7FE3D1] md:block" />
                            <div className="pointer-events-none absolute top-24 -left-20 hidden h-24 w-16 rounded-3xl bg-[#AEEADF] md:block" />

                            <div className="rounded-[28px] bg-white p-3 shadow-2xl">
                                <div className="rounded-[22px] border-[10px] border-white/90 bg-white/10 p-1">
                                    <img
                                        src={placeholder}
                                        alt="placeholder hero"
                                        className="h-[340px] w-full rounded-[18px] object-cover md:h-[420px]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Headline on blue background */}
                        <div className="text-white">
                            <h1 className="text-3xl leading-tight font-semibold md:text-4xl">
                                7 Essential Reasons to Work With a
                            </h1>
                            <span className="mt-2 block text-5xl font-extrabold tracking-tight md:text-6xl">
                                Small Business Tax Accountant
                            </span>
                            <p className="mt-5 max-w-xl text-sm text-white/90 md:text-base">
                                Discover the essential reasons why partnering
                                with a small business tax accountant can
                                significantly benefit your business.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Reason blocks */}
            <section className="mx-auto max-w-6xl space-y-10 px-4 py-6">
                {reasons.map((item, index) => {
                    const isEven = index % 2 === 1;
                    return (
                        <div
                            key={item.title}
                            className="relative grid grid-cols-1 items-stretch gap-6 md:grid-cols-2"
                        >
                            {/* Decorative corner chips */}
                            <div className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 rounded-xl bg-[#AEEADF] md:h-10 md:w-10" />
                            <div className="pointer-events-none absolute -right-3 -bottom-3 h-8 w-8 rounded-xl bg-[#5FD7C1] md:h-10 md:w-10" />

                            {isEven ? (
                                <>
                                    <div className="order-2 rounded-2xl bg-white p-6 text-[#0A2540] shadow-xl md:order-1">
                                        <h3 className="text-xl font-bold md:text-2xl">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <div className="order-1 overflow-hidden rounded-[22px] border-[6px] border-white/60 bg-white/10 p-2 md:order-2">
                                        <img
                                            src={placeholder}
                                            alt="placeholder"
                                            className="h-[220px] w-full rounded-[16px] object-cover md:h-[260px]"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="order-1 overflow-hidden rounded-[22px] border-[6px] border-white/60 bg-white/10 p-2 md:order-1">
                                        <img
                                            src={placeholder}
                                            alt="placeholder"
                                            className="h-[220px] w-full rounded-[16px] object-cover md:h-[260px]"
                                        />
                                    </div>
                                    <div className="order-2 rounded-2xl bg-white p-6 text-[#0A2540] shadow-xl md:order-2">
                                        <h3 className="text-xl font-bold md:text-2xl">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </section>

            {/* Footer ribbon */}
            <section className="mx-auto max-w-6xl px-4 pt-6 pb-14">
                <div className="grid grid-cols-1 items-center gap-6 rounded-2xl bg-[#084C89] p-6 md:grid-cols-[auto,1fr]">
                    <Link className="" href={'/'}>
                        <Image
                            className="h-10 w-auto"
                            src="/invisor-logo.webp"
                            alt="Invisor"
                            width={805}
                            height={220}
                        />
                    </Link>
                    <div className="text-sm text-white/90 md:text-base">
                        A tax accountant helps small businesses with compliance,
                        deductions, and strategic advice, saving time and
                        minimising risks.
                    </div>
                </div>
                <p className="mt-4 text-center text-xs text-white/70">
                    https://www.invisorcpa.ca
                </p>
            </section>
        </div>
    );
}
