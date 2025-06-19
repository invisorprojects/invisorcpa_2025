import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Services',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            SERVICES
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Innovative Accounting Solutions for Your
                            Business{' '}
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We offer comprehensive accounting and tax services
                            tailored to your business needs, combining expert
                            insights with advanced tools to ensure accuracy and
                            compliance.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-7.jpg"
                    alt="Services"
                    width={4096}
                    height={1632}
                    className="rounded-4xl shadow-md"
                />
            </section>
            <section className="flex flex-col items-center justify-between gap-4 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-primary mb-4 text-3xl font-extrabold sm:text-4xl">
                        Why Our Clients Prefer Working with Us
                    </h2>
                    <p className="max-w-3xl text-base leading-relaxed font-medium sm:text-lg">
                        At the heart of every successful business is a financial
                        partner that truly understands its needs. Here's why our
                        clients consistently choose us—and stay with us.
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between gap-8 md:flex-row">
                    <div>
                        <Image
                            src="/assets/features-section.jpg"
                            alt="Services"
                            width={1280}
                            height={800}
                            className="w-auto rounded-2xl shadow-md"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                icon={feature.icon}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServicesCard
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>

            <ContactUs />
        </main>
    );
}

import {
    BrainCircuit,
    Lightbulb,
    Cog,
    MessagesSquare,
    ChartBar,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ContactUs from '@/components/contact-us';
const iconMap = {
    BrainCircuit,
    Lightbulb,
    Cog,
    MessagesSquare,
    ChartNoAxesCombined: ChartBar, // Fallback, adjust as needed
};
export const services = [
    {
        title: 'Personal Tax Returns',
        description:
            "Managing personal tax returns shouldn't be stressful. Our expert team simplifies the process, ensuring you take full advantage of deductions and credits to maximize your refund while staying fully compliant with tax laws.",
    },
    {
        title: 'Catch-Up Bookkeeping Services',
        description:
            'Our Catch-Up Bookkeeping Services are designed to bring your financial records up to date quickly and accurately, ensuring your business gets back on track without missing a beat.',
    },
    {
        title: 'Payroll Management Services',
        description:
            'Our Payroll Management Services take the stress out of payroll processing, ensuring your employees are paid accurately and on time while you focus on growing your business.',
    },
    {
        title: 'Business Tax Prep & Filing',
        description:
            'Tax season doesn’t have to be a nightmare. Our Business Tax Preparation & Filing services ensure your returns are prepared accurately and on time.',
    },
    {
        title: 'QuickBooks Setup & Bookkeeping',
        description:
            'Managing finances shouldn’t be a hassle. With our QuickBooks Setup & Bookkeeping services, we combine technology and expertise to streamline your financial processes, ensuring accuracy and efficiency.',
    },
    {
        title: 'Monthly & Quarterly Bookkeeping',
        description:
            'Our Monthly and Quarterly Bookkeeping Services give you peace of mind with timely updates of your books, ensuring accurate financial management tailored to your needs.',
    },
    {
        title: 'Trust Tax Filing',
        description:
            "Managing trust taxes can be a complex and evolving responsibility, requiring both precision and expertise. Trust tax filing ensures compliance with regulations while safeguarding the intentions behind the trust's establishment.",
    },
    {
        title: 'Accounts Payable',
        description:
            'Efficient accounts payable management is essential for maintaining strong supplier relationships and ensuring smooth cash flow. Our tailored services help businesses automate and optimize their payment processes with accuracy and compliance.',
    },
    {
        title: 'Financial Reporting',
        description:
            'Empower your business decisions with clear, accurate, and timely financial reporting. Our services ensure compliance, transparency, and actionable insights, enabling you to stay ahead in today’s dynamic market.',
    },
    {
        title: 'AgriStability Filing',
        description:
            'Managing the financial challenges in agriculture can be daunting, but with the AgriStability program, farmers and ranchers can protect their income against significant income drops. At Invisor, we specialize to help you maximize your program benefits with minimal hassle.',
    },
    {
        title: 'Sales Tax Reporting',
        description:
            'Managing sales tax requirements can be both complex and time-consuming, especially when navigating ever-changing regulations. Our expert sales tax reporting services are designed to take the burden off your shoulders, ensuring accurate and timely filings for your business.',
    },
    {
        title: 'Bank and Credit Card Reconciliation',
        description:
            'Our expert services ensure that every transaction aligns with your bank and credit card statements, helping you maintain accuracy and avoid costly errors.',
    },
    {
        title: 'Outsourced Fractional CFO and Part-Time Controller',
        description:
            'Our Outsourced Fractional CFO and Part-Time Controller Services provide your business with access to seasoned financial leadership, tailored specifically to your unique needs.',
    },
    {
        title: 'Support for Accountants, CFOs, and VPs of Finance',
        description:
            'In today’s fast-paced financial world, leaders like accountants, CFOs, and VPs focus on strategy. But bookkeeping drains time and energy. Our support services help you delegate routine work and focus on growth.',
    },
    {
        title: 'Zoho Books, Mail, Desk & CRM Setup',
        description:
            'Managing multiple business tools shouldn’t slow you down. With our Zoho Books, Mail, Desk, and CRM setup services, you can get seamless integration and configuration of these powerful platforms to streamline operations and boost productivity.',
    },
    {
        title: 'Cloud Document and Receipt Management',
        description:
            'In today’s fast-paced world, managing documents effectively is key to staying organized. Our Cloud Document and Receipt Management service offers a seamless, secure, and efficient way to handle your business’s paperwork.',
    },
];

const features = [
    {
        title: 'Expertise You Can Count On',
        description:
            'Our experienced professionals bring deep knowledge in accounting, tax, and financial management to ensure your business stays compliant and financially healthy.',
        icon: 'BrainCircuit',
    },
    {
        title: 'Tailored Solutions',
        description:
            'We understand that every business is different. That’s why we offer customized services designed to meet your specific goals and challenges.',
        icon: 'Lightbulb',
    },
    {
        title: 'Tech-Driven Efficiency',
        description:
            'We leverage powerful tools like QuickBooks, Zoho, and cloud-based platforms to automate, streamline, and optimize your financial operations.',
        icon: 'Cog',
    },
    {
        title: 'Reliable & Transparent',
        description:
            'With clear communication and dependable service, we become an extension of your team—committed to your success and growth.',
        icon: 'MessagesSquare',
    },
    {
        title: 'Scalable Support',
        description:
            "Whether you're a solo entrepreneur or a growing enterprise, our services scale with you—offering the flexibility and expertise you need at every stage.",
        icon: 'ChartNoAxesCombined',
    },
];

function FeatureCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) {
    const Icon = iconMap[icon as keyof typeof iconMap];
    return (
        <div className="flex max-w-xl items-start gap-4">
            <div className="rounded-lg bg-[#1B1E65] p-2">
                <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

import { Calculator, CircleArrowRight } from 'lucide-react';

export function ServicesCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="group hover:bg-primary flex max-w-96 flex-col gap-4 rounded-2xl border px-8 py-6 shadow-md drop-shadow-lg transition-all duration-300">
            {/* Icon Box */}
            <div className="w-fit rounded-sm bg-[#E5F2F8] p-2 transition-colors group-hover:bg-white">
                <Calculator strokeWidth={1} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 transition-colors group-hover:text-white">
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-sm font-light text-[#5F5F5F] transition-colors group-hover:text-white">
                    {description}
                </p>
            </div>

            {/* Button */}
            <div className="flex h-full w-full items-end justify-end">
                <Button className="group-hover:text-primary hover:text-primary flex items-center gap-2 rounded-full transition-all group-hover:bg-white hover:bg-white">
                    <span>Learn More</span>
                    <CircleArrowRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
