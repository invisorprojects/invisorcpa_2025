'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
import {
    ArrowUpRight,
    ClipboardCheck,
    CircleArrowRight,
    Sparkles,
} from 'lucide-react';

import CountUp from '@/components/react-bits/count-up';
import { Button } from '@/components/ui/button';

const easeOut = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: easeOut },
    },
};

const stats = [
    {
        value: 20,
        suffix: '+',
        label: 'Professional Experts',
        className:
            'h-1/2 border-transparent bg-gradient-to-br from-green-100 to-blue-100',
    },
    {
        value: 20,
        suffix: '+',
        label: 'Year of Affiliate Experience',
        className: 'h-1/2 border-transparent bg-gray-100',
    },
    {
        value: 15,
        suffix: '+',
        label: 'Years Experience',
        className: 'h-1/3 border-gray-200 bg-white',
    },
    {
        value: 1,
        suffix: 'K+',
        label: "Canada's trusted accounting experts, proudly serving 1000+ clients nationwide",
        className: 'h-2/3 border-transparent bg-blue-100',
    },
];

export default function HomeHero() {
    return (
        <motion.div
            className=" grid   2xl:gap-10 gap-8 lg:grid-cols-[1.02fr_0.98fr]  lg:items-center "
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col items-start gap-4  2xl:gap-8">
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D7EAF4] bg-[#F7FCFF] px-4 py-2 text-sm font-semibold text-primary"
                >
                    <Sparkles className="h-4 w-4 text-secondary" />
                    Accounting for growing Canadian businesses
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex max-w-3xl flex-col items-start gap-4"
                >
                    <h1 className="text-4xl leading-tight font-bold text-primary sm:text-5xl lg:text-6xl">
                        Accounting Service for Small Businesses
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-[#4E4E5A]">
                        Our small business tax accountant simplifies your
                        bookkeeping and financial processes so you can focus on
                        growing your business with confidence and clarity.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex w-full max-w-2xl flex-col gap-4 rounded-2xl border border-[#DCEAF1] bg-[#F7FCFF] p-4 shadow-sm sm:p-5"
                >
                    <div className="flex items-center gap-3 text-sm font-medium text-primary">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                            <ClipboardCheck className="h-4 w-4" />
                        </span>
                        Get a clearer view of your books, taxes, and next steps.
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            className="w-full rounded-full bg-primary px-6 py-5 text-white hover:bg-primary/90 sm:w-auto"
                        >
                            <Link href="/contact-us">
                                Get Started
                                <CircleArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="w-full rounded-full border-primary bg-white px-6 py-5 text-primary hover:bg-sky-50 sm:w-auto"
                        >
                            <Link href="/services">
                                View Services
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                variants={itemVariants}
                className="flex h-[460px] w-full max-w-xl gap-4 lg:ml-auto xl:h-80"
            >
                <div className="flex h-full w-1/2 flex-col gap-4">
                    <StatCard stat={stats[0]} index={0} />
                    <StatCard stat={stats[1]} index={1} />
                </div>

                <div className="flex h-full w-1/2 flex-col gap-4">
                    <StatCard stat={stats[2]} index={2} />
                    <StatCard stat={stats[3]} index={3} />
                </div>
            </motion.div>
        </motion.div>
    );
}

function StatCard({
    stat,
    index,
}: {
    stat: (typeof stats)[number];
    index: number;
}) {
    return (
        <motion.div
            className={`flex flex-col justify-center rounded-lg border p-6 text-[#11135f] shadow-sm ${stat.className}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.35 + index * 0.1,
                duration: 0.5,
                ease: easeOut,
            }}
            whileHover={{ y: -4 }}
        >
            <div className="flex items-center">
                <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-3xl font-[900] sm:text-4xl"
                />
                <span className="text-3xl font-[900] sm:text-4xl">
                    {stat.suffix}
                </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-base">
                {stat.label}
            </p>
        </motion.div>
    );
}
