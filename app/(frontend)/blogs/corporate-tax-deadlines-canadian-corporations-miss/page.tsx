import Image from 'next/image';
import { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

const deadlines = [
    {
        title: 'T2 Corporate Tax Return Filing Deadline',
        description:
            'All Canadian corporations must file a T2 corporate income tax return every year, even if there is no income or tax owing.',
        deadline:
            "Generally, the T2 return is due 6 months after the corporation's fiscal year-end.",
        mistakes: [
            'Assuming no revenue means no filing is required',
            'Assuming inactive corporations do not need to file',
            'Forgetting dormant corporations still have filing obligations',
        ],
        impact: [
            'Late-filing penalties',
            'Loss of refund eligibility',
            'Increased audit risk over time',
        ],
    },
    {
        title: 'Corporate Tax Balance Payment Deadline',
        description:
            'Even if the return is filed on time, corporations often miss the tax payment deadline.',
        deadline:
            'Usually 2 months after year-end. For qualifying CCPCs, it may be 3 months after year-end.',
        mistakes: [
            'Waiting until filing time to pay taxes owed',
            'Misjudging instalments already paid',
            'Not setting aside cash for tax obligations',
        ],
        impact: [
            'Interest charges start immediately after the due date',
            'Cash flow pressure when a lump sum is unexpected',
        ],
    },
    {
        title: 'Instalment Payment Deadlines',
        description:
            'Many corporations are required to pay monthly or quarterly tax instalments throughout the year.',
        deadline:
            'Monthly instalments are due each month. Quarterly instalments for eligible CCPCs generally follow March, June, September, and December cycles.',
        mistakes: [
            'Not realizing instalments are required at all',
            'Paying only at year-end',
            'Missing CRA recalculated instalment amounts',
        ],
        impact: [
            'Instalment interest charges',
            'Surprise tax bills at year-end',
            'Higher risk of reassessment',
        ],
    },
    {
        title: 'GST/HST Filing and Payment Deadlines',
        description:
            'While not part of the T2 return, GST/HST deadlines are one of the most frequently missed corporate obligations.',
        deadline:
            'Monthly filers are generally due 1 month after the reporting period. Quarterly filers are generally due 1 month after quarter-end.',
        mistakes: [
            'Assuming GST/HST is filed with the T2',
            'Not tracking collected tax separately',
            'Forgetting filing even when no sales occur',
        ],
        impact: [
            'Penalties and interest',
            'Reduced Input Tax Credit eligibility if records are weak',
            'Increased audit likelihood',
        ],
    },
    {
        title: 'Payroll Remittance Deadlines',
        description:
            'If a corporation has employees, payroll remittances are often missed or delayed.',
        deadline:
            'Payroll remittance schedules vary, but deductions for income tax, CPP, and EI must be remitted to the CRA on time.',
        mistakes: [
            'Paying employees correctly but remitting late to CRA',
            'Mixing payroll funds with operating cash',
            'Missing due dates due to cash flow issues',
        ],
        impact: [
            'Penalties for late remittances can be immediate',
            'Director liability in some cases',
        ],
    },
    {
        title: 'Corporate Records and Filing Compliance Deadlines',
        description:
            'Corporations often miss ongoing compliance deadlines even when they are not direct tax payments.',
        deadline:
            'Keep records for at least 6 years, file business structure changes, and keep CRA account information current.',
        mistakes: [
            'Weak recordkeeping',
            'Missing updates after business structure changes',
            'Outdated CRA account information',
        ],
        impact: [
            'CRA reviews',
            'Processing delays',
            'Filing problems when records are requested',
        ],
    },
];

const missedObligations = [
    'T2 filing deadlines',
    'Corporate tax payment deadlines',
    'Instalment schedules',
    'GST/HST filings',
    'Payroll remittances',
];

export const metadata: Metadata = {
    title: 'Corporate Tax Deadlines Canadian Corporations Commonly Miss | Invisor CPA',
    description:
        'Learn the corporate tax deadlines Canadian corporations commonly miss, including T2 filing, balance payments, instalments, GST/HST, payroll remittances, and corporate records compliance.',
    keywords: [
        'corporate tax deadlines Canada',
        'T2 filing deadline Canada',
        'corporate tax payment deadline',
        'Canadian corporation tax compliance',
        'CRA corporate tax penalties',
        'corporate tax instalments Canada',
        'GST HST filing deadline corporation',
        'payroll remittance deadlines Canada',
        'CCPC tax payment deadline',
        'corporate bookkeeping Canada',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: 'Corporate Tax Deadlines Canadian Corporations Commonly Miss',
        description:
            'A practical guide to missed corporate tax deadlines in Canada and how monthly bookkeeping can help prevent CRA issues.',
        url: 'https://www.invisorcpa.ca/blogs/corporate-tax-deadlines-canadian-corporations-miss',
        siteName: 'Invisor CPA',
        images: [
            {
                url: 'https://www.invisorcpa.ca/assets/banners/banner-15.webp',
                width: 1200,
                height: 630,
                alt: 'Corporate tax deadline guide for Canadian corporations',
            },
        ],
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Corporate Tax Deadlines Canadian Corporations Commonly Miss',
        description:
            'Understand the missed CRA deadlines that can lead to penalties, interest, and reviews for Canadian corporations.',
        images: ['https://www.invisorcpa.ca/assets/banners/banner-15.webp'],
        creator: '@invisorcpa',
    },
    alternates: {
        canonical:
            'https://www.invisorcpa.ca/blogs/corporate-tax-deadlines-canadian-corporations-miss',
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
    category: 'Corporate Tax',
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
                            Corporate Tax Deadlines Canadian Corporations
                            Commonly Miss
                        </h1>
                        <p className="text-lg text-[#4a4a4a]">
                            Many Canadian corporations assume that once they
                            file their T2 return, they are caught up with CRA
                            requirements. In reality, corporate tax compliance
                            involves multiple deadlines throughout the year.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-[#0f172a]">
                            <span className="text-primary rounded-full bg-[#E8EEF9] px-4 py-2">
                                T2 deadlines
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                CRA compliance
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                Corporate tax planning
                            </span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                        <Image
                            src="/assets/banners/banner-15.webp"
                            alt="Canadian corporation tax deadline planning"
                            width={960}
                            height={640}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16 md:py-20">
                <div className="mx-auto max-w-6xl space-y-8">
                    <div className="max-w-3xl space-y-4">
                        <h2 className="text-primary text-3xl font-semibold">
                            The Deadlines That Create the Most CRA Risk
                        </h2>
                        <p>
                            Missing even one corporate tax deadline can lead to
                            interest charges, penalties, or CRA reviews. These
                            are the obligations Canadian corporations most often
                            overlook.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {deadlines.map((deadline, index) => (
                            <article
                                key={deadline.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                                    <div>
                                        <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                                            {String(index + 1).padStart(2, '0')}
                                        </p>
                                        <h3 className="mt-3 text-2xl font-semibold">
                                            {deadline.title}
                                        </h3>
                                        <p className="mt-3 text-[#4b5563]">
                                            {deadline.description}
                                        </p>
                                        <p className="mt-5 rounded-lg bg-[#F8FAFC] p-4 text-sm text-[#111827]">
                                            <span className="font-semibold">
                                                Deadline:{' '}
                                            </span>
                                            {deadline.deadline}
                                        </p>
                                    </div>

                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <p className="font-semibold">
                                                Common mistake
                                            </p>
                                            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#374151]">
                                                {deadline.mistakes.map(
                                                    (mistake) => (
                                                        <li key={mistake}>
                                                            {mistake}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                CRA impact
                                            </p>
                                            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#374151]">
                                                {deadline.impact.map(
                                                    (impact) => (
                                                        <li key={impact}>
                                                            {impact}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0f172a] px-4 py-16 text-white">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Final Thoughts
                        </h2>
                        <p className="mt-4 text-[#e5e7eb]">
                            Most corporate tax issues in Canada do not come from
                            complex tax planning. They come from missed
                            deadlines.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                        <p className="font-semibold text-[#f8fafc]">
                            The most commonly missed obligations are:
                        </p>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {missedObligations.map((obligation) => (
                                <li
                                    key={obligation}
                                    className="rounded-lg bg-white/10 px-4 py-3 text-sm"
                                >
                                    {obligation}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-[#e5e7eb]">
                            A simple system of monthly bookkeeping and tax
                            planning can prevent most CRA issues before they
                            start.
                        </p>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
