import PayrollCalculator from '@/components/PayrollCalculator';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Canadian Payroll Calculator | InvisorCPA',
    description:
        "Use InvisorCPA's free payroll calculator to estimate employee net pay, CPP, EI, and income tax deductions for any province in Canada. Fast and accurate.",
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
