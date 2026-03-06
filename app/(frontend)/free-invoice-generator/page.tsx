import type { Metadata } from 'next';

import InvoiceGenerator from '@/components/InvoiceGenerator';

export const metadata: Metadata = {
    title: 'Invoice Generator | Invisor CPA',
    description:
        'Create simple Canadian invoices in CAD, preview live totals, and export them through a print-ready PDF flow.',
    alternates: {
        canonical: '/free-invoice-generator',
    },
};

export default function InvoiceGeneratorPage() {
    return <InvoiceGenerator />;
}
