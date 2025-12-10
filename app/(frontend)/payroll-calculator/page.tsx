import PayrollCalculator from '@/components/PayrollCalculator';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Payroll Calculator Canada | Invisor CPA',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/payroll-calculator',
    },
};

export default function TaxCalculatorPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <PayrollCalculator />
        </div>
    );
}
