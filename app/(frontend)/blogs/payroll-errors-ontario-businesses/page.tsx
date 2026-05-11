import Image from 'next/image';
import { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

const responsibilities = [
    'CPP contributions',
    'EI premiums',
    'Income tax deductions',
    'Vacation pay',
    'Statutory holiday pay',
    'WSIB obligations',
    'Overtime requirements',
];

const consequences = [
    'Retroactive payroll taxes',
    'Interest and penalties',
    'Payroll audits',
    'Compliance reviews',
];

const warningSigns = [
    'They work primarily for one company',
    'The business controls their schedule and duties',
    'They use company equipment or systems',
    'They are integrated into daily operations',
    'They are paid consistently like staff members',
];

const vulnerableIndustries = [
    'Construction',
    'Consulting',
    'Healthcare clinics',
    'Trucking and logistics',
    'Marketing agencies',
    'Trades businesses',
    'E-commerce companies',
];

const protectionSteps = [
    {
        title: 'Review Worker Relationships Regularly',
        description:
            'As businesses grow, contractor arrangements may gradually begin functioning like employment relationships.',
    },
    {
        title: 'Maintain Proper Payroll Records',
        description:
            'Accurate payroll documentation is critical during CRA reviews or audits.',
    },
    {
        title: 'Use Written Agreements',
        description:
            'Contracts should clearly outline responsibilities, independence, payment structure, and scope of work.',
    },
    {
        title: 'Seek Professional Guidance Early',
        description:
            'A proactive payroll review is far less expensive than correcting years of payroll issues later.',
    },
];

export const metadata: Metadata = {
    title: 'The #1 Payroll Error We See in Ontario Businesses | Invisor CPA',
    description:
        'Learn the most common payroll error Ontario businesses make: misclassifying workers as contractors instead of employees. Understand CRA risks, warning signs, and practical prevention steps.',
    keywords: [
        'payroll errors Ontario businesses',
        'worker misclassification Ontario',
        'independent contractor vs employee Canada',
        'CRA payroll audit',
        'Ontario payroll compliance',
        'CPP EI payroll deductions',
        'small business payroll Ontario',
        'WSIB obligations Ontario',
        'payroll bookkeeping Ontario',
        'contractor classification Canada',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: 'The #1 Payroll Error We See in Ontario Businesses',
        description:
            'Misclassifying workers as independent contractors can create payroll taxes, penalties, audits, and Ontario labour compliance issues. Learn how to reduce the risk.',
        url: 'https://www.invisorcpa.ca/blogs/payroll-errors-ontario-businesses',
        siteName: 'Invisor CPA',
        images: [
            {
                url: 'https://www.invisorcpa.ca/assets/banners/banner-11.webp',
                width: 1200,
                height: 630,
                alt: 'Payroll compliance guide for Ontario businesses by Invisor CPA',
            },
        ],
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The #1 Payroll Error We See in Ontario Businesses',
        description:
            'Learn why worker misclassification is a major payroll risk for Ontario SMBs and how to prevent it.',
        images: ['https://www.invisorcpa.ca/assets/banners/banner-11.webp'],
        creator: '@invisorcpa',
    },
    alternates: {
        canonical:
            'https://www.invisorcpa.ca/blogs/payroll-errors-ontario-businesses',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    category: 'Payroll',
};

export default function Page() {
    return (
        <main>
            <section className="bg-[#F8FAFC] px-4 py-14 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-5">
                        <h3 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h3>
                        <h1 className="text-primary text-4xl leading-tight font-bold 2xl:text-5xl">
                            The #1 Payroll Error We See in Ontario Businesses
                        </h1>
                        <p className="text-lg text-[#4a4a4a]">
                            Payroll mistakes are more common than most business
                            owners realize. One issue consistently creates the
                            biggest problems for Ontario businesses:
                            misclassifying workers as independent contractors
                            instead of employees.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-[#0f172a]">
                            <span className="text-primary rounded-full bg-[#E8EEF9] px-4 py-2">
                                CRA payroll risk
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                Contractor classification
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                Ontario SMB compliance
                            </span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                        <Image
                            src="/assets/banners/banner-12.webp"
                            alt="Ontario business payroll compliance review"
                            width={1402}
                            height={1122}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Misclassifying Workers as Independent Contractors
                            Instead of Employees
                        </h2>
                        <p>
                            At first glance, hiring contractors may seem simpler
                            and less expensive. But many businesses
                            unintentionally classify workers incorrectly, which
                            can trigger serious consequences with the CRA and
                            Ontario labour authorities.
                        </p>
                        <p className="text-[#4b5563]">
                            Simply calling someone a contractor in an agreement
                            does not automatically make them one in the eyes of
                            the CRA. The actual working relationship matters.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-primary text-2xl font-semibold">
                            Why This Matters
                        </h3>
                        <p className="mt-3 text-[#4b5563]">
                            When a worker should legally be treated as an
                            employee, the employer may be responsible for:
                        </p>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                            {responsibilities.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-lg bg-[#F8FAFC] px-4 py-3 text-sm font-medium text-[#111827]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-[#0f172a] px-4 py-16 text-white">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            The Cost Can Build Quickly
                        </h2>
                        <p className="mt-4 text-[#e5e7eb]">
                            If the CRA determines a worker was misclassified,
                            businesses can face unexpected costs that become
                            significant very quickly, especially for growing
                            SMBs.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {consequences.map((item) => (
                            <div
                                key={item}
                                className="rounded-xl bg-white/10 p-5 ring-1 ring-white/10"
                            >
                                <p className="font-semibold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:py-20">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
                    <div className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Common Signs of Misclassification
                        </h2>
                        <p>
                            A worker may actually be considered an employee if
                            the business relationship looks and operates like
                            employment in practice.
                        </p>
                        <ul className="space-y-3">
                            {warningSigns.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
                                >
                                    <span className="text-primary font-bold">
                                        -
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-5 rounded-2xl bg-[#F8FAFC] p-6">
                        <h2 className="text-primary text-3xl font-semibold">
                            Why Ontario SMBs Are Especially Vulnerable
                        </h2>
                        <p>
                            Many small and mid-sized businesses grow quickly and
                            hire informally in the early stages. Payroll
                            structures often develop without proper review.
                        </p>
                        <p className="text-[#4b5563]">
                            We commonly see this issue in industries such as:
                        </p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {vulnerableIndustries.map((industry) => (
                                <span
                                    key={industry}
                                    className="rounded-lg bg-white px-4 py-3 text-sm font-medium shadow-sm"
                                >
                                    {industry}
                                </span>
                            ))}
                        </div>
                        <p className="text-[#4b5563]">
                            In many cases, the mistake is unintentional, but the
                            financial impact can still be severe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-16">
                <div className="mx-auto max-w-6xl space-y-8">
                    <div className="max-w-3xl space-y-4">
                        <h2 className="text-primary text-3xl font-semibold">
                            How Businesses Can Protect Themselves
                        </h2>
                        <p>
                            Payroll compliance is not just an administrative
                            task. It is a critical part of protecting your
                            business from tax exposure, penalties, and avoidable
                            audit pressure.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {protectionSteps.map((step, index) => (
                            <div
                                key={step.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                                    Step {index + 1}
                                </p>
                                <h3 className="mt-3 text-xl font-semibold">
                                    {step.title}
                                </h3>
                                <p className="mt-3 text-[#4b5563]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:py-20">
                <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a] p-8 text-white shadow-lg">
                    <h2 className="text-3xl font-semibold">Final Thoughts</h2>
                    <div className="mt-5 space-y-4 text-[#e5e7eb]">
                        <p>
                            The #1 payroll error we see in Ontario businesses is
                            not always caused by negligence. More often, it
                            comes from rapid growth, lack of clarity, or
                            outdated processes.
                        </p>
                        <p>
                            With proper bookkeeping and payroll systems in
                            place, most payroll problems can be prevented before
                            they become costly.
                        </p>
                        <p>
                            Need help reviewing your payroll processes? A
                            professional payroll assessment can identify risks
                            early and help keep your business compliant and
                            audit-ready.
                        </p>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
