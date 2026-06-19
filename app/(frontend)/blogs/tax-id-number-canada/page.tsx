import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

const taxIdRows = [
    {
        number: 'SIN (Social Insurance Number)',
        who: 'Individuals: citizens, permanent residents, eligible temporary residents',
        format: '9 digits, written as 123-456-789',
        issuedBy: 'Service Canada',
    },
    {
        number: 'BN (Business Number)',
        who: 'Businesses, corporations, sole proprietors with CRA obligations',
        format: '9 digits, written as 123456789',
        issuedBy: 'CRA',
    },
    {
        number: 'Program account (BN15)',
        who: 'A specific CRA tax account attached to a BN',
        format: '9-digit BN + 2-letter program + 4-digit reference, such as 123456789 RT 0001',
        issuedBy: 'CRA',
    },
    {
        number: 'GST/HST number',
        who: 'Businesses collecting sales tax',
        format: 'BN + RT0001',
        issuedBy: 'CRA',
    },
    {
        number: 'ITN (Individual Tax Number)',
        who: "Non-residents with Canadian tax obligations who cannot get a SIN",
        format: '9 digits',
        issuedBy: 'CRA',
    },
    {
        number: 'TTN (Temporary Tax Number)',
        who: 'A stopgap CRA-assigned number in limited cases',
        format: '9 digits',
        issuedBy: 'CRA',
    },
    {
        number: 'Trust account number',
        who: 'Trusts and estates',
        format: 'T + 8 digits',
        issuedBy: 'CRA',
    },
];

const programRows = [
    {
        identifier: 'RT',
        accountType: 'GST/HST',
        purpose: 'Collecting and remitting sales tax',
    },
    {
        identifier: 'RP',
        accountType: 'Payroll deductions',
        purpose: 'Withholding and remitting income tax, CPP, and EI for employees. T4, T4A',
    },
    {
        identifier: 'RC',
        accountType: 'Corporate income tax',
        purpose: 'Filing the T2 corporate return',
    },
    {
        identifier: 'RZ',
        accountType: 'Information returns',
        purpose: 'Filing slips such as T5, T5013, and T5018',
    },
    {
        identifier: 'RM',
        accountType: 'Import-export',
        purpose: 'Importing or exporting goods',
    },
];

const numberNeeds = [
    "You are an employee or filing a personal return: SIN",
    "You are a non-resident with Canadian income or property: ITN",
    "You are starting a sole proprietorship and crossing $30,000 in revenue: BN with a GST/HST (RT) account",
    "You are hiring your first employee: BN with a payroll (RP) account",
    "You are incorporating: BN with a corporate income tax (RC) account, plus RT/RP as needed",
    "Your corporation is paying dividends or issuing slips: BN with an information-return (RZ) account",
    "You are administering a trust or estate: trust account number",
];

const faqs = [
    {
        question: 'Does Canada have a tax identification number (TIN)?',
        answer: "Not as a single number. Canada uses the SIN for individuals, the Business Number for businesses, and the ITN for non-residents who cannot get a SIN. On international forms, you provide whichever of these applies to you.",
    },
    {
        question: 'What is a Canadian tax ID number for an individual?',
        answer: 'For most individuals it is the Social Insurance Number (SIN), a nine-digit number issued by Service Canada that you use for employment, filing taxes, and accessing benefits.',
    },
    {
        question: 'Is a Business Number the same as a GST/HST number?',
        answer: 'Not exactly. The Business Number, or BN, is the 9-digit root identifier. Your GST/HST number is that BN plus the RT program account, written as 123456789RT0001.',
    },
    {
        question: 'What do the letters RT, RP, RC, and RZ mean?',
        answer: 'They are CRA program identifiers attached to your Business Number: RT is GST/HST, RP is payroll deductions, RC is corporate income tax, and RZ is information returns such as T5 and T4A slips.',
    },
    {
        question: 'How do I get a tax ID number in Canada?',
        answer: 'Apply for a SIN through Service Canada, a Business Number and program accounts through CRA Business Registration Online, and an ITN by filing Form T1261. All are free directly from the government.',
    },
    {
        question: 'How much does a Canadian tax ID number cost?',
        answer: 'Nothing. The SIN, BN, GST/HST account, and ITN are all free from Service Canada or the CRA. You only pay if you use a third party to handle the application.',
    },
    {
        question: 'What tax ID do non-residents of Canada use?',
        answer: 'Non-residents who cannot get a SIN use an Individual Tax Number (ITN), obtained by filing Form T1261. It is essential before selling Canadian property because of the 25% withholding under Section 116.',
    },
    {
        question: 'How long does it take to get a Business Number or ITN?',
        answer: 'A Business Number through Business Registration Online is usually issued immediately. An ITN typically takes six to eight weeks to process.',
    },
    {
        question: 'Where can I find my Business Number?',
        answer: 'In CRA My Business Account, on any CRA notice, on past GST/HST or payroll filings, or on a prior T2 corporate return.',
    },
    {
        question: 'Can I register a Business Number by phone?',
        answer: 'No longer. As of November 3, 2025, the CRA stopped accepting business number registrations by phone. Register online or through an authorized representative.',
    },
];

const structuredData = [
    {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
            'Tax ID Number in Canada: SIN, BN, ITN & GST/HST Explained',
        description:
            'Canada has no single tax ID number. Learn the real equivalents: SIN, Business Number, GST/HST account, ITN, what each looks like, who needs one, and how to get it.',
        image: [
            'https://www.invisorcpa.ca/assets/blogs/tax-id-number-canada/1.jpg',
        ],
        author: {
            '@type': 'Organization',
            name: 'Invisor CPA',
            url: 'https://www.invisorcpa.ca',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Invisor CPA',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
            },
        },
        mainEntityOfPage:
            'https://www.invisorcpa.ca/blogs/tax-id-number-canada',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    },
];

export const metadata: Metadata = {
    title: 'Tax ID Number in Canada: SIN, BN, ITN & GST/HST (2026 Guide)',
    description:
        'Canada has no single tax ID number. Learn the real equivalents: SIN, Business Number, GST/HST account, ITN, what each looks like, who needs one, and how to get it.',
    keywords: [
        'tax id number canada',
        'TIN canada',
        'what is a business number',
        'GST HST number',
        'individual tax number ITN',
        'SIN number canada',
        'CRA program account',
        'BN15',
        'tax id for non-residents canada',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: 'Tax ID Number in Canada: SIN, BN, ITN & GST/HST Explained',
        description:
            'A practical 2026 guide to Canadian tax ID numbers, including SINs, BNs, CRA program accounts, GST/HST numbers, ITNs, TTNs, and trust account numbers.',
        url: 'https://www.invisorcpa.ca/blogs/tax-id-number-canada',
        siteName: 'Invisor CPA',
        images: [
            {
                url: 'https://www.invisorcpa.ca/assets/blogs/tax-id-number-canada/1.jpg',
                width: 1200,
                height: 630,
                alt: 'Canadian tax ID records including SIN confirmation, business registration, and CRA files',
            },
        ],
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tax ID Number in Canada: SIN, BN, ITN & GST/HST',
        description:
            'Understand the Canadian equivalents of a tax ID number, including SIN, BN, GST/HST, and ITN.',
        images: [
            'https://www.invisorcpa.ca/assets/blogs/tax-id-number-canada/1.jpg',
        ],
        creator: '@invisorcpa',
    },
    alternates: {
        canonical: 'https://www.invisorcpa.ca/blogs/tax-id-number-canada',
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
    category: 'Tax Services',
};

function BlogImage({
    src,
    alt,
    priority = false,
}: {
    src: string;
    alt: string;
    priority?: boolean;
}) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
            <Image
                src={src}
                alt={alt}
                width={2752}
                height={1536}
                className="h-auto w-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1120px"
                priority={priority}
            />
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />

            <section className="bg-[#F8FAFC] px-4 py-14 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-5">
                        <h3 className="text-secondary text-xl font-medium">
                            BLOGS
                        </h3>
                        <h1 className="text-primary text-4xl leading-tight font-bold 2xl:text-5xl">
                            Tax ID Number in Canada: SIN, BN, ITN & GST/HST
                            Explained
                        </h1>
                        <p className="text-lg text-[#4a4a4a]">
                            Canada does not issue one universal tax
                            identification number. Instead, your Canadian tax
                            ID depends on who you are and what you need to do.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-[#0f172a]">
                            <span className="text-primary rounded-full bg-[#E8EEF9] px-4 py-2">
                                2026 guide
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                SIN, BN, ITN
                            </span>
                            <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                                GST/HST accounts
                            </span>
                        </div>
                    </div>
                    <BlogImage
                        src="/assets/blogs/tax-id-number-canada/1.jpg"
                        alt="Canadian tax ID records including SIN confirmation, business registration, and CRA files"
                        priority
                    />
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16 md:py-20">
                <article className="mx-auto max-w-5xl space-y-12 text-[#374151]">
                    <div className="space-y-5 text-lg leading-8">
                        <p>
                            Canada does not issue a single &quot;tax
                            identification number&quot; (TIN) the way some
                            countries do. Instead, the Canada Revenue Agency
                            (CRA) and Service Canada use a set of numbers
                            depending on who you are: the Social Insurance
                            Number (SIN) for individuals, the Business Number
                            (BN) for businesses, and the Individual Tax Number
                            (ITN) for non-residents who cannot get a SIN. When
                            a bank, employer, or foreign tax authority asks for
                            your &quot;Canadian tax ID,&quot; one of these is
                            almost always what they mean.
                        </p>
                        <p>
                            The confusion is understandable. The term
                            &quot;TIN&quot; appears constantly on international
                            forms, yet you will rarely see it on a CRA document.
                            This guide clears it up: every Canadian tax ID
                            number, what each one looks like, who needs which,
                            how to apply, and where to find a number you
                            already have.
                        </p>
                    </div>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Does Canada Have a Tax ID Number (TIN)?
                        </h2>
                        <p>
                            Not as a standalone number. &quot;TIN&quot; is an
                            international umbrella term used by the IRS in the
                            U.S., on FATCA and Common Reporting Standard (CRS)
                            forms, and by foreign banks for whatever number a
                            country uses to identify a taxpayer. Canada uses
                            purpose-specific numbers instead of one universal
                            ID.
                        </p>
                        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                            <p className="font-semibold text-[#111827]">
                                For tax-reporting and information-exchange
                                purposes, the CRA treats these as Canada&apos;s
                                TIN equivalents:
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li>
                                    Individuals: the Social Insurance Number
                                    (SIN)
                                </li>
                                <li>
                                    Businesses and corporations: the Business
                                    Number (BN)
                                </li>
                                <li>
                                    Non-residents without a SIN: the Individual
                                    Tax Number (ITN), or a Temporary Tax Number
                                    in some cases
                                </li>
                                <li>
                                    Trusts: a trust account number, the letter T
                                    followed by eight digits
                                </li>
                            </ul>
                        </div>
                        <p>
                            So if a form asks for your &quot;Canadian
                            TIN,&quot; supply the number that matches your
                            situation.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-primary text-3xl font-semibold">
                                Canadian Tax ID Numbers at a Glance
                            </h2>
                            <p className="mt-3">
                                Use this comparison as the quick answer before
                                choosing which section applies to you.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[760px] text-left text-sm">
                                    <thead className="bg-[#0f172a] text-white">
                                        <tr>
                                            <th className="px-5 py-4 font-semibold">
                                                Number
                                            </th>
                                            <th className="px-5 py-4 font-semibold">
                                                Who it is for
                                            </th>
                                            <th className="px-5 py-4 font-semibold">
                                                Format
                                            </th>
                                            <th className="px-5 py-4 font-semibold">
                                                Issued by
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {taxIdRows.map((row) => (
                                            <tr key={row.number}>
                                                <td className="px-5 py-4 font-semibold text-[#111827]">
                                                    {row.number}
                                                </td>
                                                <td className="px-5 py-4">
                                                    {row.who}
                                                </td>
                                                <td className="px-5 py-4">
                                                    {row.format}
                                                </td>
                                                <td className="px-5 py-4">
                                                    {row.issuedBy}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <BlogImage
                        src="/assets/blogs/tax-id-number-canada/2.jpg"
                        alt="Illustration of Canadian SIN confirmation, business registration, and CRA tax records"
                    />

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Social Insurance Number (SIN)
                        </h2>
                        <p>
                            The SIN is the tax ID number for individuals in
                            Canada. It is a nine-digit number, written as
                            123-456-789, issued by Service Canada, and it
                            follows you for life. Service Canada describes the
                            SIN as the number you need to work in Canada or
                            access government programs and benefits.
                        </p>
                        <ul className="list-disc space-y-2 pl-5">
                            <li>
                                Start a job. Your employer must collect it for
                                payroll and to issue your T4.
                            </li>
                            <li>File a personal income tax return.</li>
                            <li>
                                Receive government benefits such as the Canada
                                Child Benefit, GST/HST credit, or Employment
                                Insurance.
                            </li>
                            <li>
                                Open interest-bearing or investment accounts,
                                where the institution reports income to the CRA
                                under your SIN.
                            </li>
                        </ul>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-semibold text-[#111827]">
                                    Temporary residents
                                </h3>
                                <p className="mt-2 text-sm">
                                    Workers and students on permits receive a
                                    SIN that begins with 9 and carries an expiry
                                    date tied to their permit.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-semibold text-[#111827]">
                                    No more SIN cards
                                </h3>
                                <p className="mt-2 text-sm">
                                    Physical SIN cards are no longer issued.
                                    You receive a confirmation letter instead.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-semibold text-[#111827]">
                                    Confidential number
                                </h3>
                                <p className="mt-2 text-sm">
                                    Your SIN is confidential, but employers and
                                    financial institutions need it for legal
                                    tax-reporting purposes.
                                </p>
                            </div>
                        </div>
                        <p>
                            You can apply for a SIN online, by mail, or in
                            person through{' '}
                            <a
                                href="https://www.canada.ca/en/employment-social-development/services/sin/apply.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary underline"
                            >
                                Service Canada&apos;s SIN application page
                            </a>
                            .
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Business Number (BN): And Why It Is Only Half the
                            Story
                        </h2>
                        <p>
                            The Business Number is the tax ID for businesses.
                            It is a nine-digit number issued by the CRA that
                            acts as the single root identifier linking your
                            business to federal, provincial, and many municipal
                            programs.
                        </p>
                        <p>
                            Here is the part that trips up many business owners:
                            the BN by itself is not a working tax account. It is
                            the anchor. To actually file GST/HST, run payroll,
                            or file a corporate return, you register a program
                            account that attaches to your BN. One BN can support
                            many program accounts.
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            CRA Program Accounts: The 15-Character Full Tax ID
                        </h2>
                        <p>
                            When someone gives you a number like 123456789 RT
                            0001, that is a program account. It is sometimes
                            called the BN15 because it is 15 characters long.
                            It has three parts:
                        </p>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl bg-[#F8FAFC] p-5">
                                <p className="text-primary text-sm font-semibold">
                                    01
                                </p>
                                <h3 className="mt-2 font-semibold text-[#111827]">
                                    The 9-digit BN
                                </h3>
                                <p className="mt-2 text-sm">
                                    Identifies your business, such as
                                    123456789.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[#F8FAFC] p-5">
                                <p className="text-primary text-sm font-semibold">
                                    02
                                </p>
                                <h3 className="mt-2 font-semibold text-[#111827]">
                                    Program identifier
                                </h3>
                                <p className="mt-2 text-sm">
                                    Two letters that say which kind of tax
                                    account it is.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-[#F8FAFC] p-5">
                                <p className="text-primary text-sm font-semibold">
                                    03
                                </p>
                                <h3 className="mt-2 font-semibold text-[#111827]">
                                    Reference number
                                </h3>
                                <p className="mt-2 text-sm">
                                    Four digits that distinguish multiple
                                    accounts of the same type, such as 0001 or
                                    0002.
                                </p>
                            </div>
                        </div>
                    </section>

                    <BlogImage
                        src="/assets/blogs/tax-id-number-canada/3.jpg"
                        alt="Canadian business tax records showing CRA program account documents"
                    />

                    <section className="space-y-6">
                        <h2 className="text-primary text-3xl font-semibold">
                            Common CRA Program Identifiers
                        </h2>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[680px] text-left text-sm">
                                    <thead className="bg-[#0f172a] text-white">
                                        <tr>
                                            <th className="px-5 py-4 font-semibold">
                                                Program identifier
                                            </th>
                                            <th className="px-5 py-4 font-semibold">
                                                Account type
                                            </th>
                                            <th className="px-5 py-4 font-semibold">
                                                What it is for
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {programRows.map((row) => (
                                            <tr key={row.identifier}>
                                                <td className="px-5 py-4 text-lg font-semibold text-[#111827]">
                                                    {row.identifier}
                                                </td>
                                                <td className="px-5 py-4 font-medium">
                                                    {row.accountType}
                                                </td>
                                                <td className="px-5 py-4">
                                                    {row.purpose}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p>
                            A single corporation might hold 123456789 RC 0001
                            for corporate taxes, 123456789 RT 0001 for
                            GST/HST, and 123456789 RP 0001 for payroll. Each
                            account is registered separately. Having a GST/HST
                            account does not automatically create a payroll
                            account.
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Your GST/HST Number (RT) and the $30,000 Threshold
                        </h2>
                        <p>
                            Your GST/HST number is your BN plus the RT program
                            account, such as 123456789RT0001. You are required
                            to register once your business earns more than
                            $30,000 in taxable revenue over four consecutive
                            calendar quarters, or in a single quarter. Below
                            that small supplier threshold, registration is
                            optional, but many businesses register voluntarily
                            so they can claim input tax credits (ITCs) on their
                            expenses.
                        </p>
                        <p>
                            This RT number is what you must show on invoices of
                            $100 or more so your customers can claim their own
                            ITCs. The CRA also notes that if you do not already
                            have a BN when you register for GST/HST, you receive
                            one at the same time as your GST/HST account
                            registration.
                        </p>
                        <p>
                            You can read the current CRA process on the{' '}
                            <a
                                href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-account/register-account.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary underline"
                            >
                                CRA GST/HST registration page
                            </a>
                            .
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Payroll (RP), Corporate Income Tax (RC), and
                            Information Returns (RZ)
                        </h2>
                        <p>
                            If you hire employees, you need an RP account to
                            remit source deductions. If you incorporate, you
                            need an RC account to file your T2. And if you issue
                            slips, for example a corporation paying dividends on
                            a T5 or issuing T4As, you may need an RZ
                            information-return account. Registering the wrong
                            account, or missing one, is a common cause of
                            misfiled returns and penalties.
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Individual Tax Number (ITN) for Non-Residents
                        </h2>
                        <p>
                            The ITN is the tax ID for non-residents who have a
                            Canadian tax obligation but are not eligible for a
                            SIN. It is a nine-digit number issued by the CRA,
                            and you apply using Form T1261, mailed to the CRA.
                            Processing typically takes six to eight weeks, so
                            apply well ahead of any deadline.
                        </p>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="font-semibold text-[#111827]">
                                You will generally need an ITN if you are a
                                non-resident who:
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li>
                                    Earns Canadian rental, investment, or
                                    employment income
                                </li>
                                <li>Owns or is selling Canadian property</li>
                                <li>
                                    Needs to file a Canadian return for any
                                    other reason
                                </li>
                            </ul>
                        </div>
                        <p>
                            The ITN matters most in real estate. When a
                            non-resident sells Canadian property, the buyer must
                            withhold 25% of the gross sale price under Section
                            116 of the Income Tax Act until the CRA issues a
                            clearance certificate, and you cannot get that
                            certificate without an ITN on file. This is where
                            non-residents most often run into trouble, and it is
                            worth planning for months in advance.
                        </p>
                        <p>
                            The CRA publishes the current form on its{' '}
                            <a
                                href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/t1261.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary underline"
                            >
                                T1261 Individual Tax Number page
                            </a>
                            .
                        </p>
                    </section>

                    <section className="grid gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl bg-[#F8FAFC] p-6">
                            <h2 className="text-primary text-2xl font-semibold">
                                Temporary Tax Number (TTN)
                            </h2>
                            <p className="mt-4">
                                In limited situations, the CRA assigns a
                                Temporary Tax Number. It is a nine-digit stopgap
                                used to process a filing while a permanent
                                number, usually an ITN, is being obtained. A
                                TTN is not something you choose. It is issued by
                                the CRA when needed. Once your permanent number
                                arrives, records should be updated to avoid
                                future mismatches.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-[#F8FAFC] p-6">
                            <h2 className="text-primary text-2xl font-semibold">
                                Trust Account Number
                            </h2>
                            <p className="mt-4">
                                Trusts and estates are identified by a trust
                                account number, the letter T followed by eight
                                digits, issued by the CRA. This is the
                                trust&apos;s TIN equivalent for filing the T3
                                return and for information-exchange purposes.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            How to Find a Tax ID Number You Already Have
                        </h2>
                        <p>
                            If you know your number exists but cannot locate it,
                            start with the source that matches the number.
                        </p>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 p-5">
                                <h3 className="font-semibold text-[#111827]">
                                    SIN
                                </h3>
                                <p className="mt-2 text-sm">
                                    Check a prior tax return, your CRA My
                                    Account profile, a T4 slip, or your original
                                    SIN confirmation letter.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-5">
                                <h3 className="font-semibold text-[#111827]">
                                    BN and program accounts
                                </h3>
                                <p className="mt-2 text-sm">
                                    Look in CRA My Business Account, CRA notices,
                                    past GST/HST or payroll filings, or a prior
                                    T2 return.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 p-5">
                                <h3 className="font-semibold text-[#111827]">
                                    GST/HST number
                                </h3>
                                <p className="mt-2 text-sm">
                                    Check your invoices, GST/HST registration
                                    confirmation, or My Business Account. You
                                    can also confirm another business through
                                    the CRA GST/HST Registry.
                                </p>
                            </div>
                        </div>
                        <p>
                            If a number has genuinely been lost or you are
                            unsure which account you hold, your accountant can
                            retrieve it through CRA&apos;s Represent a Client
                            portal.
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            How to Apply for Each Tax ID Number
                        </h2>
                        <div className="space-y-4">
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <h3 className="text-xl font-semibold text-[#111827]">
                                    SIN
                                </h3>
                                <p className="mt-3">
                                    Apply through Service Canada online, by
                                    mail, or in person with original identity
                                    and status documents such as a birth
                                    certificate, passport, PR card, or permit.
                                    It is free.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <h3 className="text-xl font-semibold text-[#111827]">
                                    Business Number and program accounts
                                </h3>
                                <p className="mt-3">
                                    Register through Business Registration
                                    Online (BRO), which usually issues your BN
                                    immediately. You are often assigned a BN
                                    automatically when you incorporate federally
                                    or in most provinces, or when you first
                                    register for GST/HST or payroll. As of
                                    November 3, 2025, the CRA no longer accepts
                                    business number registrations by phone. Use
                                    the online service or have your accountant
                                    register on your behalf. Registering a BN
                                    and its program accounts is free.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                                <h3 className="text-xl font-semibold text-[#111827]">
                                    ITN
                                </h3>
                                <p className="mt-3">
                                    Submit Form T1261 with certified copies of
                                    your identity documents to the CRA. Allow
                                    six to eight weeks. It is free.
                                </p>
                            </div>
                        </div>
                        <p>
                            All of these are free directly from the government.
                            You only pay if you hire someone to manage the
                            process for you. CRA business registration details
                            are available on the{' '}
                            <a
                                href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/business-registration/business-number-program-account/how-register.html"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary underline"
                            >
                                Business number and CRA program accounts page
                            </a>
                            .
                        </p>
                    </section>

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Which Tax ID Number Do You Actually Need?
                        </h2>
                        <div className="grid gap-3">
                            {numberNeeds.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <span className="text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EEF9] text-sm font-semibold">
                                        {index + 1}
                                    </span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <BlogImage
                        src="/assets/blogs/tax-id-number-canada/4.jpg"
                        alt="CRA folder and Canadian business registration documents for tax ID records"
                    />

                    <section className="space-y-5">
                        <h2 className="text-primary text-3xl font-semibold">
                            Protecting Your Tax ID Number From Scams
                        </h2>
                        <p>
                            Your SIN and BN are prime targets for identity
                            theft, and CRA impersonation scams spike every tax
                            season. Two rules to keep in mind: the CRA will
                            never ask for your SIN by email or text, and you
                            should only share these numbers when there is a
                            genuine legal reason. Store confirmation letters
                            securely, verify any request through official CRA
                            channels rather than links in messages, and report
                            suspected misuse to the CRA and police immediately.
                        </p>
                    </section>

                    <section className="rounded-2xl bg-[#0f172a] p-8 text-white md:p-10">
                        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <div>
                                <h2 className="text-3xl font-semibold">
                                    How Invisor Helps You Get Your Numbers Right
                                </h2>
                                <p className="mt-4 text-[#e5e7eb]">
                                    Registering the correct CRA program accounts
                                    and keeping them straight at filing time is
                                    exactly where new and growing businesses
                                    lose time and money.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                                <p className="text-[#f8fafc]">
                                    At Invisor, we register Business Numbers,
                                    GST/HST, payroll, and corporate tax accounts
                                    for clients across Ontario and beyond, make
                                    sure non-residents have the right ITN in
                                    place before a property sale or filing
                                    deadline, and keep every account compliant
                                    year-round.
                                </p>
                                <Link
                                    href="/contact-us"
                                    className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f172a]"
                                >
                                    Book a consultation
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-primary text-3xl font-semibold">
                                Frequently Asked Questions
                            </h2>
                            <p className="mt-3">
                                Quick answers to the tax ID number questions
                                people most often ask in Canada.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <details
                                    key={faq.question}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <summary className="cursor-pointer text-lg font-semibold text-[#111827]">
                                        {faq.question}
                                    </summary>
                                    <p className="mt-3">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                </article>
            </section>

            <ContactUs />
        </main>
    );
}
