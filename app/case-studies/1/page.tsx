import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Case Studies',
};

export default function Page() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            CASE STUDIES
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold 2xl:text-5xl">
                            Streamlining Financial Operations for an Audiology
                            Service Provider
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            An established audiology provider faced challenges
                            with disorganized bookkeeping, leading to delays and
                            tax filing issues. Despite their success in
                            healthcare, financial inefficiencies held them back.
                            This case study showcases how our expert solutions
                            improved their record-keeping, enhanced compliance,
                            and brought clarity to their financial processes.
                        </p>
                    </div>
                </div>
                <Image
                    src="/assets/banners/banner-9.jpg"
                    alt="Case Studies"
                    width={4096}
                    height={1638}
                    className="rounded-4xl shadow-md"
                />
            </section>
            <CaseStudyDetails />
            <ContactUs />
        </main>
    );
}

import Link from 'next/link';
function CaseStudyDetails() {
    return (
        <section className="w-full px-4 py-12">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-3">
                {/* Main Content */}
                <div className="space-y-8 lg:col-span-2">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Client Background
                        </h3>
                        <p className="mt-2 text-gray-700">
                            The client is a trusted provider of hearing
                            solutions, dedicated to helping individuals with
                            hearing loss improve their quality of life. With a
                            strong reputation for expert audiology services, the
                            company focuses on delivering personalized care.
                            However, despite its success, the company struggled
                            with managing financial records, which impacted the
                            efficiency of their operations and caused
                            complications during tax filing and reporting.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">The Challenge</h3>
                        <p className="mt-2 text-gray-700">
                            The company faced significant challenges due to the
                            lack of a proper bookkeeping and accounting system.
                            Their financial records were disorganized, leading
                            to inefficiencies and errors in tax preparation.
                            This disarray resulted in delays during critical
                            periods, causing added stress and risk of
                            non-compliance. As a result, their ability to focus
                            on delivering quality care to clients was impacted,
                            and the business struggled with maintaining accurate
                            and up-to-date financial information.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Our Approach</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                            <li>
                                <strong>Assessment:</strong> We conducted a
                                thorough review of their financial processes to
                                identify gaps and inefficiencies.
                            </li>
                            <li>
                                <strong>QuickBooks Integration:</strong>{' '}
                                Implemented QuickBooks to digitize their
                                accounting processes, enabling real-time
                                financial tracking and reporting.
                            </li>
                            <li>
                                <strong>Ongoing Support:</strong> We took over
                                bookkeeping and tax filing responsibilities,
                                ensuring compliance with regulations and
                                providing accurate financial records.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">The Results</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
                            <li>
                                <strong>Efficiency Boost:</strong> QuickBooks
                                streamlined their financial management, reducing
                                time spent on manual tasks.
                            </li>
                            <li>
                                <strong>Accurate Records:</strong> Consistent
                                bookkeeping ensured all records were organized
                                and error-free.
                            </li>
                            <li>
                                <strong>Peace of Mind:</strong> With tax filing
                                and compliance managed by our team, the company
                                could focus entirely on serving their clients.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            Value We Bring to Every Client
                        </h3>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700">
                            <li>
                                <strong>Reduced Operational Costs:</strong> Our
                                streamlined processes and automation tools
                                reduce the time and labor involved in manual
                                bookkeeping — cutting overhead costs by up to
                                30%.
                            </li>
                            <li>
                                <strong>Avoided Penalties:</strong> With
                                accurate reporting and on-time tax filings, our
                                clients eliminate compliance risks and save
                                thousands in potential late fees and penalties.
                            </li>
                            <li>
                                <strong>Time Saved:</strong> Clients save an
                                average of 20+ hours per month that would
                                otherwise be spent managing finances — time they
                                now invest back into growing their business.
                            </li>
                            <li>
                                <strong>Improved Cash Flow Visibility:</strong>{' '}
                                Real-time tracking and clear financial insights
                                lead to smarter decisions, better budgeting, and
                                improved cash flow forecasting.
                            </li>
                            <li>
                                <strong>Audit Confidence:</strong> Our detailed,
                                audit-ready documentation ensures clients are
                                always prepared — minimizing disruption and
                                stress during audits.
                            </li>
                            <li>
                                <strong>Scalable Support:</strong> Whether a
                                startup or a growing enterprise, our flexible
                                services scale with your business — so you’re
                                never overpaying or underprepared.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Conclusion</h3>
                        <p className="mt-2 text-gray-700">
                            This service provider’s journey illustrates the
                            impact of tailored financial solutions on business
                            success. By addressing their bookkeeping challenges
                            and implementing QuickBooks, we not only brought
                            order to their financial processes but also reduced
                            stress during tax season. With their financial
                            management now in capable hands, they can fully
                            concentrate on delivering exceptional care to their
                            clients. This collaboration highlights our
                            dedication to providing solutions that empower
                            businesses.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-10">
                    <div className="rounded-md bg-sky-50 p-6 shadow-sm">
                        <h4 className="mb-4 text-lg font-semibold text-sky-800">
                            Recent Case Studies
                        </h4>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                            <li>
                                <Link
                                    href="/case-studies/3"
                                    className="underline hover:text-sky-600"
                                >
                                    Optimizing Financial Management for IT
                                    Solutions Provider
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/case-studies/1"
                                    className="underline hover:text-sky-600"
                                >
                                    Optimizing Financial Management for
                                    E-Commerce Growth and Efficiency
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-md border bg-white p-6 shadow-sm">
                        <h4 className="mb-4 text-center text-lg font-semibold">
                            Contact Us
                        </h4>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <textarea
                                placeholder="What services interest you?"
                                className="w-full rounded-md border px-4 py-2 text-sm"
                            />
                            <button
                                type="submit"
                                className="w-full rounded-md bg-sky-600 py-2 text-sm font-semibold text-white hover:bg-sky-700"
                            >
                                SEND
                            </button>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    );
}
