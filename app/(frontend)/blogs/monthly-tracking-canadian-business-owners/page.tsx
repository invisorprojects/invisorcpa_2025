import Image from 'next/image';
import { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

const trackingItems = [
    {
        title: 'Revenue and Sales',
        description:
            'Track total monthly sales and compare them to previous months.',
        label: 'Focus on',
        points: [
            'Growth or decline trends',
            'Best-performing services/products',
            'Seasonal changes',
        ],
        takeaway: 'This helps with forecasting, pricing, and planning.',
    },
    {
        title: 'Cash Flow',
        description:
            'Cash flow shows how much real money is moving in and out of your business.',
        label: 'Monitor',
        points: [
            'Customer payments received',
            'Upcoming bills and payroll',
            'Bank balances',
            'GST/HST set aside',
        ],
        takeaway: 'Strong revenue does not guarantee healthy cash flow.',
    },
    {
        title: 'Accounts Receivable',
        description: 'Unpaid invoices directly affect your cash flow.',
        label: 'Track',
        points: [
            'Total outstanding invoices',
            'Overdue payments',
            'Slow-paying clients',
        ],
        takeaway: 'Follow up regularly to avoid cash shortages.',
    },
    {
        title: 'Business Expenses',
        description:
            'Review all monthly expenses to control costs and protect profit.',
        label: 'Watch for',
        points: [
            'Rising operating costs',
            'Unnecessary subscriptions',
            'Overspending in categories like marketing, software, or travel',
        ],
        takeaway: 'Small leaks can significantly reduce profit over time.',
    },
    {
        title: 'GST/HST Payable',
        description: 'GST/HST is not business income. It belongs to the CRA.',
        label: 'Track',
        points: [
            'GST/HST collected',
            'Input Tax Credits (ITCs)',
            'Amount payable to CRA',
        ],
        takeaway: 'Poor tracking can lead to cash flow issues and penalties.',
    },
    {
        title: 'Payroll Liabilities',
        description: 'Ensure payroll is accurate and compliant.',
        label: 'Monitor',
        points: [
            'Employee wages',
            'CPP, EI, and tax deductions',
            'Remittance deadlines',
            'Vacation pay',
        ],
        takeaway: 'Payroll errors can quickly trigger CRA issues.',
    },
    {
        title: 'Net Profit',
        description: 'Profit is what actually matters after all expenses.',
        label: 'Track',
        points: ['Gross profit', 'Net profit', 'Profit margins'],
        takeaway: 'This shows whether your business is truly sustainable.',
    },
    {
        title: 'Bank Reconciliations',
        description: 'Reconcile bank and credit card accounts monthly.',
        label: 'This helps identify',
        points: [
            'Missing transactions',
            'Errors or duplicates',
            'Fraud or unauthorized charges',
        ],
        takeaway: 'It keeps your books accurate and tax-ready.',
    },
];

export const metadata: Metadata = {
    title: 'What Canadian Business Owners Should Track Monthly | Invisor CPA',
    description:
        'Learn the monthly financial numbers every Canadian business owner should track, including revenue, cash flow, receivables, expenses, GST/HST, payroll, net profit, and bank reconciliations.',
    keywords: [
        'monthly financial tracking Canadian business',
        'Canadian business bookkeeping checklist',
        'business owners monthly numbers',
        'GST HST payable tracking',
        'small business cash flow Canada',
        'accounts receivable tracking',
        'payroll liabilities Canada',
        'CRA compliance bookkeeping',
        'monthly bank reconciliation',
        'net profit tracking',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: 'What Canadian Business Owners Should Track Monthly',
        description:
            'A practical monthly bookkeeping checklist for Canadian business owners who want better cash flow, profitability, and CRA compliance.',
        url: 'https://www.invisorcpa.ca/blogs/monthly-tracking-canadian-business-owners',
        siteName: 'Invisor CPA',
        images: [
            {
                url: 'https://www.invisorcpa.ca/assets/banners/banner-14.webp',
                width: 1200,
                height: 630,
                alt: 'Monthly financial tracking checklist for Canadian business owners',
            },
        ],
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'What Canadian Business Owners Should Track Monthly',
        description:
            'Track revenue, cash flow, receivables, expenses, GST/HST, payroll, profit, and reconciliations monthly.',
        images: ['https://www.invisorcpa.ca/assets/banners/banner-14.webp'],
        creator: '@invisorcpa',
    },
    alternates: {
        canonical:
            'https://www.invisorcpa.ca/blogs/monthly-tracking-canadian-business-owners',
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
    category: 'Bookkeeping',
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
                            What Canadian Business Owners Should Track Monthly
                        </h1>
                        <p className="text-lg text-[#4a4a4a]">
                            Many Canadian business owners focus on sales but
                            overlook the financial details that actually
                            determine profitability, cash flow, and CRA
                            compliance.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-[#0f172a]">
                            <span className="text-primary rounded-full bg-[#E8EEF9] px-4 py-2">
                                Monthly review
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                GST/HST readiness
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                Profit and cash flow
                            </span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                        <Image
                            src="/assets/banners/banner-14.webp"
                            alt="Canadian business owner reviewing monthly financial performance"
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
                            The Numbers Worth Reviewing Every Month
                        </h2>
                        <p>
                            A simple monthly review of key numbers can prevent
                            surprises and support better decision-making. Here
                            are the most important things every business should
                            track each month.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {trackingItems.map((item, index) => (
                            <article
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >
                                <p className="text-primary text-sm font-semibold tracking-wide uppercase">
                                    {String(index + 1).padStart(2, '0')}
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-[#4b5563]">
                                    {item.description}
                                </p>
                                <p className="mt-5 text-sm font-semibold text-[#111827]">
                                    {item.label}:
                                </p>
                                <ul className="mt-3 list-disc space-y-2 pl-5 text-[#374151]">
                                    {item.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                                <p className="mt-5 rounded-lg bg-[#F8FAFC] p-4 text-sm text-[#111827]">
                                    {item.takeaway}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0f172a] px-4 py-16 text-white">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                    <div>
                        <h2 className="text-3xl font-semibold">
                            Final Takeaway
                        </h2>
                        <p className="mt-4 text-[#e5e7eb]">
                            Monthly financial tracking gives business owners
                            clarity and control. At a minimum, every Canadian
                            business should consistently review revenue, cash
                            flow, expenses, receivables, GST/HST, payroll,
                            profit, and bank reconciliations.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                        <p className="text-lg text-[#f8fafc]">
                            Businesses that stay on top of these numbers avoid
                            compliance issues, improve profitability, and make
                            better strategic decisions.
                        </p>
                    </div>
                </div>
            </section>

            <ContactUs />
        </main>
    );
}
