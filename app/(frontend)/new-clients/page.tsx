import type { Metadata } from 'next';
import ZohoBookingsInlineWidget from './ZohoBookingsInlineWidget';

export const metadata: Metadata = {
    title: 'New Clients - Invisor CPA',
    description:
        'Book a consultation with Invisor CPA for small business accounting, bookkeeping, payroll, and tax support.',
};

export default function NewClientsPage() {
    return (
        <main>
            <section className="bg-[#EFF0F4] px-3 py-4 sm:px-6 md:px-10 lg:px-16">
                <div className="mx-auto flex max-w-6xl flex-col gap-4">
                    <div className="max-w-3xl space-y-2">
                        <h1 className="text-primary text-3xl font-bold sm:text-4xl">
                            Book a Consultation
                        </h1>
                        <p className="text-base text-[#686666] sm:text-lg">
                            Schedule a time with our team to discuss your
                            accounting, bookkeeping, payroll, or tax needs.
                        </p>
                    </div>

                    <ZohoBookingsInlineWidget />
                </div>
            </section>
        </main>
    );
}
