import Image from 'next/image';
import { Metadata } from 'next';
import ContactUs from '@/components/sections/contact-us';

export const metadata: Metadata = {
    title: 'Multigenerational Home Renovation Tax Credit (MHRTC) Canada - Complete 2025 Guide | Invisor CPA',
    description:
        'Learn how to claim up to $7,500 with Canada\'s Multigenerational Home Renovation Tax Credit. Eligibility rules, qualifying expenses, and practical tips for Canadian homeowners in 2025.',
    keywords: [
        'multigenerational home renovation tax credit',
        'MHRTC Canada',
        'multigenerational home renovation tax credit 2025',
        'secondary suite tax credit Canada',
        'renovation tax credit for seniors Canada',
        'CRA MHRTC',
        'how to claim MHRTC',
    ],
    authors: [{ name: 'Invisor CPA' }],
    openGraph: {
        title: 'Multigenerational Home Renovation Tax Credit (MHRTC) Canada - Complete 2025 Guide',
        description:
            'Understand the MHRTC rules, eligible expenses, and how to claim up to $7,500 back on secondary suite renovations for seniors or adults with disabilities in Canada.',
        url: 'https://www.invisorcpa.ca/blogs/multigenerational-home-renovation-tax-credit-canada',
        siteName: 'Invisor CPA',
        images: [
            {
                url: 'https://www.invisorcpa.ca/assets/banners/banner-10.webp',
                width: 1200,
                height: 630,
                alt: 'Multigenerational Home Renovation Tax Credit Canada guide by Invisor CPA',
            },
        ],
        locale: 'en_CA',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Multigenerational Home Renovation Tax Credit (MHRTC) Canada - Complete 2025 Guide',
        description:
            "Eligibility rules, qualifying expenses, and claiming steps for Canada's MHRTC - up to $7,500 back on secondary suite renovations.",
        images: ['https://www.invisorcpa.ca/assets/banners/banner-10.webp'],
        creator: '@invisorcpa',
    },
    alternates: {
        canonical:
            'https://www.invisorcpa.ca/blogs/multigenerational-home-renovation-tax-credit-canada',
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
    category: 'Tax Credits',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between bg-gradient-to-b from-[#F8FAFC] to-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-12 flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                    <div className="max-w-3xl space-y-4">
                        <h3 className="text-secondary text-xl font-medium">BLOGS</h3>
                        <h1 className="text-primary text-4xl font-bold leading-tight 2xl:text-5xl">
                            Multigenerational Home Renovation Tax Credit (MHRTC) Canada - Complete 2025 Guide
                        </h1>
                        <p className="text-[#4a4a4a] text-lg">
                            A practical, homeowner-first explainer on how to unlock up to $7,500 from the federal MHRTC when you
                            build a self-contained secondary unit for a senior family member or an adult eligible for the Disability Tax Credit.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-[#0f172a]">
                            <span className="rounded-full bg-[#E8EEF9] px-4 py-2 text-primary">
                                Refundable credit - up to $7,500
                            </span>
                            <span className="rounded-full bg-[#F1F5F9] px-4 py-2">Eligible expenses cap: $50,000</span>
                            <span className="rounded-full bg-[#F1F5F9] px-4 py-2">Focus: secondary suite in your home</span>
                        </div>
                    </div>
                    <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                        <Image
                            src="/assets/banners/banner-10.webp"
                            alt="Family reviewing multigenerational home renovation plans"
                            width={960}
                            height={540}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 py-14 sm:py-16 md:py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-primary text-3xl font-semibold">
                            What Exactly Is the Multigenerational Home Renovation Tax Credit?
                        </h2>
                        <p>
                            The MHRTC is a refundable federal credit introduced in the 2022 Fall Economic Statement and available for the 2023,
                            2024, and 2025 tax years. Claim 15% of up to $50,000 in eligible renovation expenses (maximum $7,500) when you create
                            a self-contained secondary dwelling unit for a qualifying family member.
                        </p>
                        <p className="text-[#4b5563]">
                            "Refundable" matters: even if your tax bill is zero, the CRA will still send you the refund once the claim is approved.
                        </p>
                        <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Quick math</p>
                            <div className="grid gap-3 text-sm sm:grid-cols-3 sm:items-center sm:gap-4">
                                <div className="rounded-xl bg-[#EEF2FF] p-4 text-center">
                                    <p className="text-xs text-[#4b5563]">Spend</p>
                                    <p className="text-2xl font-bold">$50,000</p>
                                    <p className="text-xs text-[#4b5563]">Credit $7,500</p>
                                </div>
                                <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
                                    <p className="text-xs text-[#4b5563]">Spend</p>
                                    <p className="text-2xl font-bold">$30,000</p>
                                    <p className="text-xs text-[#4b5563]">Credit $4,500</p>
                                </div>
                                <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
                                    <p className="text-xs text-[#4b5563]">Spend</p>
                                    <p className="text-2xl font-bold">$60,000</p>
                                    <p className="text-xs text-[#4b5563]">Credit still $7,500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-inner">
                            <h3 className="text-primary mb-4 text-2xl font-semibold">Who Qualifies?</h3>
                            <div className="space-y-4 text-sm sm:text-base">
                                <div>
                                    <p className="font-semibold">Qualifying individual (lives in the new suite)</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[#374151]">
                                        <li>Senior aged 65+ by December 31 of the tax year, or</li>
                                        <li>Adult 18+ eligible for the Disability Tax Credit (DTC)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold">Eligible individual (claims the credit)</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[#374151]">
                                        <li>The qualifying individual, their spouse/partner, or</li>
                                        <li>A qualifying relation: parent, grandparent, child, grandchild, sibling, aunt, uncle, niece, or nephew</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold">Ownership + residency</p>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-[#374151]">
                                        <li>Home must be in Canada and owned by the qualifying or eligible individual (or their spouse/partner).</li>
                                        <li>The new unit must be within or attached to the existing home (not a detached garden suite or laneway house).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-dashed border-primary/40 bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Fast checklist</p>
                            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-[#111827] sm:grid-cols-2">
                                <li>Qualifying individual is 65+ or DTC-eligible</li>
                                <li>You own the property in Canada</li>
                                <li>Suite is self-contained (kitchen, bath, sleeping area)</li>
                                <li>Attached or inside the main dwelling</li>
                                <li>Itemized contractor invoices and permits in hand</li>
                                <li>One claimant per qualifying individual</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#0f172a] px-4 py-16 text-white">
                <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold">What Renovation Expenses Are Eligible?</h2>
                        <p className="mt-4 text-[#e5e7eb]">
                            The CRA allows a broad list of hard costs directly tied to building the secondary unit. Keep receipts, permits,
                            and contracts organized - appliances and routine repairs do not qualify.
                        </p>
                    </div>
                    <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#cbd5e1]">
                                Eligible expenses
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#e2e8f0]">
                                <li>Building materials, labour, permits, and equipment rentals</li>
                                <li>Plumbing, electrical, HVAC for the new unit</li>
                                <li>Kitchen and bathroom installation</li>
                                <li>Architectural or engineering fees tied to the project</li>
                                <li>Windows and doors specific to the secondary unit</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#cbd5e1]">
                                Not eligible
                            </p>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-[#e2e8f0]">
                                <li>Furniture and appliances</li>
                                <li>Routine maintenance unrelated to the suite</li>
                                <li>Detached garden suites or laneway houses</li>
                                <li>Tools you purchased (rentals are fine)</li>
                                <li>Costs already reimbursed by grants or insurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs />

            <section className="px-4 py-16 sm:py-20">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-3 space-y-4">
                        <h2 className="text-primary text-3xl font-semibold">How to Claim the MHRTC</h2>
                        <ol className="list-decimal space-y-3 pl-6 text-[#1f2937]">
                            <li>Finish the renovation and ensure the suite has a private entrance, kitchen, bathroom, and sleeping area.</li>
                            <li>Organize receipts, invoices, contracts, and permits by date and category.</li>
                            <li>Report the credit on Line 45355 of your T1 return for the year the renovation is completed.</li>
                            <li>Only one person can claim per qualifying individual - decide within the family before filing.</li>
                            <li>Keep records for at least six years; the CRA can request support anytime.</li>
                        </ol>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                                Real-world snapshot
                            </p>
                            <p className="mt-3 text-sm text-[#4b5563]">
                                The Chowdhury family in Brampton converts an unfinished basement into a suite for a 72-year-old parent - permits,
                                framing, electrical, plumbing, kitchen, bath, HVAC, finishes, and a separate entrance total $50,000. Their refundable
                                MHRTC refund: $7,500.
                            </p>
                            <div className="mt-4 rounded-xl bg-[#F8FAFC] p-4 text-sm">
                                <p className="font-semibold text-[#0f172a]">Pro tip</p>
                                <p className="text-[#4b5563]">
                                    In higher-cost cities (Toronto, Vancouver), expenses may exceed $50,000. You still claim the max $7,500, so budget
                                    accordingly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8FAFC] px-4 py-16">
                <div className="mx-auto max-w-6xl space-y-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                        <div className="space-y-4">
                            <h2 className="text-primary text-3xl font-semibold">
                                Can You Combine the MHRTC With Other Credits?
                            </h2>
                            <p>
                                Yes - carefully. The MHRTC can pair with accessibility or energy programs when expenses are clearly separated.
                            </p>
                            <ul className="list-disc space-y-2 pl-5 text-[#374151]">
                                <li>
                                    <span className="font-semibold">Home Accessibility Tax Credit (HATC):</span> Up to $20,000 in eligible expenses for
                                    accessibility upgrades. Do not double-claim the same cost under both credits.
                                </li>
                                <li>
                                    <span className="font-semibold">Provincial programs:</span> BC Home Renovation Tax Credit for Seniors, Quebec's
                                    LogiRenov/RenoVert (availability varies). Rules differ by province.
                                </li>
                                <li>
                                    <span className="font-semibold">Greener Homes grants/loans:</span> Use for energy upgrades (insulation, windows, heat
                                    pumps) done alongside the suite build.
                                </li>
                            </ul>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
                            <Image
                                src="/assets/why-choose-us.webp"
                                alt="Contractor planning an accessible secondary suite renovation"
                                width={960}
                                height={640}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-primary mb-3 text-2xl font-semibold">Common mistakes to avoid</h3>
                            <ul className="list-disc space-y-2 pl-5 text-[#374151]">
                                <li>Missing or disorganized receipts and permits.</li>
                                <li>Including appliances, furniture, or unrelated renovations.</li>
                                <li>Building a detached suite (laneway/garden) instead of an attached unit.</li>
                                <li>Failing local zoning or building code requirements.</li>
                                <li>Assuming multiple family members can all claim for the same individual.</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-primary mb-3 text-2xl font-semibold">FAQ highlights</h3>
                            <ul className="space-y-3 text-[#1f2937]">
                                <li>
                                    <p className="font-semibold">Detached laneway house?</p>
                                    <p className="text-sm text-[#4b5563]">Not eligible - the suite must be part of or attached to the main dwelling.</p>
                                </li>
                                <li>
                                    <p className="font-semibold">DIY labour?</p>
                                    <p className="text-sm text-[#4b5563]">You can claim materials you purchase; you cannot claim your own labour value.</p>
                                </li>
                                <li>
                                    <p className="font-semibold">Timing for seniors turning 65?</p>
                                    <p className="text-sm text-[#4b5563]">They must be 65+ by December 31 of the year the renovation period ends.</p>
                                </li>
                                <li>
                                    <p className="font-semibold">Multiple contributors?</p>
                                    <p className="text-sm text-[#4b5563]">Only one claim per qualifying individual; decide who files before submitting.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:py-20">
                <div className="mx-auto max-w-6xl space-y-8">
                    <h2 className="text-primary text-3xl font-semibold">Checklist Before You Start Your MHRTC Renovation</h2>
                    <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2">
                        <ul className="list-disc space-y-2 pl-5 text-[#1f2937]">
                            <li>Confirm the qualifying individual meets the age (65+) or DTC requirement.</li>
                            <li>Verify the family relationship qualifies under CRA rules.</li>
                            <li>Ensure you or the qualifying individual owns the property in Canada.</li>
                            <li>Check zoning bylaws and secure building permits before work starts.</li>
                            <li>Design a self-contained unit (entrance, kitchen, bathroom, sleeping area).</li>
                            <li>Keep quotes and invoices itemized for suite-specific costs.</li>
                        </ul>
                        <ul className="list-disc space-y-2 pl-5 text-[#1f2937]">
                            <li>Decide which family member will claim the credit.</li>
                            <li>Separate non-eligible items (appliances, landscaping, detached work).</li>
                            <li>Plan for the $50,000 lifetime cap per qualifying individual.</li>
                            <li>Coordinate with HATC/provincial programs without double-claiming.</li>
                            <li>Prepare to file on Line 45355 in the year the renovation is completed.</li>
                            <li>Store all documentation for at least six years.</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a] p-8 text-white shadow-lg">
                        <h3 className="text-2xl font-semibold">Is the MHRTC worth it?</h3>
                        <p className="mt-3 text-[#e5e7eb]">
                            For most families planning a secondary suite, the renovation is happening regardless - the refundable $7,500 simply reduces
                            the out-of-pocket cost. The key is structuring the project properly, keeping documentation clean, and ensuring the unit is
                            attached to the home. If you finished a qualifying build in 2023 or 2024 and missed the credit, file an adjustment and
                            claim it retroactively.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
