'use client';

import { Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GetStartedModal from './GetStratedModal';

export const STANDARD_PRICING_CARDS = [
    {
        title: 'Personal Taxes',
        subtitle: 'Individuals with a single income source',
        price: '$70',
        duration: 'Per Person',
        height: '30rem',
        features: [
            'T1 - Income Tax Return Filing',
            'GST/HST Credit, CCB & CCR Filing',
            'Ontario Trillium Benefits & Other Provincial Filings',
            'Tax Deferral Investment Planning (RRSP/FHSA/TFSA)',
        ],
    },
    {
        title: 'Sole Proprietor',
        subtitle: 'Ideal for self employed professionals',
        price: '$595',
        duration: 'Annually',
        height: '32rem',
        features: [
            'Quickbooks Online Subscription (Ledgers)',
            'Track Income & Expenses',
            'Bank Feeds Reconciliations',
            'Business GST/HST/PST Filing',
            'T1 - Annual Income Tax Filing',
            'T2125/T5013 Filing',
            'Personal Tax Planning & CRA Review Support',
        ],
    },
    {
        title: 'Monthly Bookkeeping',
        subtitle: 'Perfect for small incorporated business',
        price: '$495',
        duration: 'Per Month',
        height: '34rem',
        features: [
            'Quickbooks Online Subscription (Essentials Plan)',
            'T2 - Annual Income Tax Filing',
            'GST/HST/PST Filing',
            'Annual Return Filing (Provisional)',
            'Payroll Management (T4, ROE, Pay Stubs & Payrun)',
            'T5018 Filings (Sub Contractors)',
            'AP, AR & Bank Feeds Management',
            'Dividend Planning & T5 Filings',
        ],
    },
    {
        title: 'Quarterly Bookkeeping',
        subtitle: 'Perfect for small incorporated business',
        price: '$745',
        duration: 'Per Quarter',
        height: '32rem',
        features: [
            'Quickbooks Online Subscription (Essentials Plan)',
            'T2 - Annual Income Tax Filing',
            'GST/HST/PST Filing',
            'Annual Return Filing (Provisional)',
            'Bank Feed Management',
            'T5018 Filings (Sub Contractors)',
            'T5 & Dividend Planning',
        ],
    },
    {
        title: 'Year-end Bookkeeping',
        subtitle: 'Perfect for small incorporated business',
        price: '$1,495',
        duration: 'Annually',
        height: '30rem',
        features: [
            'Quickbooks Online Subscription (Ledgers)',
            'T2 - Annual Income Tax Filing',
            'GST/HST/PST Annual Filing',
            'Annual Return Filing (Provisional)',
            'Bank Feed Management',
            'T4 & T5 Filings',
            'T5018 Filings (Sub Contractors)',
            'Dividend Planning',
        ],
    },
];

export const ADVANCED_PRICING_CARDS = [
    {
        title: 'Personal Taxes',
        subtitle: 'Individuals with multiple income sources',
        price: '$115',
        duration: 'Per Person',
        height: '30rem',
        features: [
            'T1 - Income Tax Return Filing',
            'Ontario Trillium Benefits & Other Provincial Filings',
            'GST/HST Credit, CCB & CCR Filing',
            'Pension/Income Splitting Planning',
            'Multiple Source of Income (T4, T4A, T4RSP)',
            'Tax Deferral Investment Planning (RRSP/FHSA/TFSA)',
        ],
    },
    {
        title: 'Monthly Bookkeeping',
        subtitle: 'Ideal for high volume transaction clients',
        price: '$1,495',
        duration: 'Per Month',
        height: '32rem',
        features: [
            'Quickbooks Online Subscription (QB Plus Plan)',
            'T2 - Annual Income Tax Filing',
            'GST/HST/PST Filing',
            'Annual Return Filing (Provincial)',
            'Payroll Management (T4, ROE, Pay Stubs & Payrun)',
            'T5018 Filings (Sub Contractors)',
            'AP, AR & Bank Feed Management',
            'Dividend Planning & T5 Filings',
        ],
    },
    {
        title: 'Catchup Accounting',
        subtitle: 'Ideal for high volume transaction clients',
        price: '$3,600',
        duration: '',
        height: '32rem',
        features: [
            'Cleanup books for previous periods',
            'Books Migration & Setup',
            'T2 - Annual Income Tax Filing (Unlimited Backyear Filing)',
            'GST/HST/PST Filing (Unlimited Backyear Filings)',
            'Provincial Annual Tax Filing (Unlimited Backyear Filings)',
            'Any Other Adhoc Requests',
        ],
    },
    {
        title: 'Custom Services',
        subtitle: 'Client who have requirements',
        price: '$58',
        duration: 'Per Hour',
        height: '30rem',
        features: [
            'CFO Advisory',
            'Project Accounting',
            'Data Migrations',
            'Quickbooks Integration',
            'Agristability Filings',
            'Trust Bookkeeping & Filing',
            'Any Other Adhoc Requests',
            'CRA Review Support',
        ],
    },
];

export default function PricingSection() {
    return (
        <Tabs defaultValue="standard" className="w-full text-center">
            <TabsList className="mx-auto mb-10 h-10 w-fit gap-1 rounded-full bg-[#E5F2F8]">
                <TabsTrigger
                    value="standard"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground max-w-30 rounded-full px-20"
                >
                    Standard
                </TabsTrigger>
                <TabsTrigger
                    value="advanced"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground max-w-30 rounded-full px-20"
                >
                    Advanced
                </TabsTrigger>
            </TabsList>
            <TabsContent value="standard">
                <PricingGrid cards={STANDARD_PRICING_CARDS} />
            </TabsContent>
            <TabsContent value="advanced">
                <PricingGrid cards={ADVANCED_PRICING_CARDS} />
            </TabsContent>
        </Tabs>
    );
}

function PricingGrid({ cards }: { cards: typeof STANDARD_PRICING_CARDS }) {
    return (
        <div className="relative z-0 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:flex-nowrap lg:items-end lg:gap-0">
            {cards.map((card, idx) => {
                let zIndex = 'z-10';

                if (idx === 2) zIndex = 'z-30';
                else if (idx === 3) zIndex = 'z-20';

                return (
                    <div
                        key={idx}
                        className={`relative w-full max-w-sm transition-transform duration-300 first:ml-0 hover:z-50 lg:-ml-12 ${zIndex}`}
                    >
                        <PricingCard {...card} />
                    </div>
                );
            })}
        </div>
    );
}

export function PricingCard({
    title,
    subtitle,
    price,
    duration,
    features,
    height,
}: (typeof STANDARD_PRICING_CARDS)[number] & { height: string }) {
    return (
        <div
            className="group relative z-10 w-full max-w-sm rounded-xl border border-gray-200 bg-[#EFF0F4] p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ minHeight: height }}
        >
            <h2 className="text-primary text-xl font-semibold">{title}</h2>
            <p className="mt-1 text-xs text-gray-600">{subtitle}</p>

            <div className="mt-4 text-left text-lg">
                <span>Starting at</span>
                <div className="mt-1 text-4xl font-bold text-black">
                    {price}{' '}
                    <span className="text-base font-medium">{duration}</span>
                </div>
            </div>

            <GetStartedModal />

            <ul className="mt-6 space-y-2 text-left text-xs">
                {features.map((feature, idx) => (
                    <li
                        key={`${title}-${feature}-${idx}`}
                        className="flex items-start gap-2"
                    >
                        <Check className="text-primary mt-[2px] h-4 w-4" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
