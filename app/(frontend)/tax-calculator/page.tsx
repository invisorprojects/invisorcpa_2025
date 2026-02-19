import IncomeTaxCalculator from '@/components/IncomeTaxCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free Canadian Tax Calculator | InvisorCPA',
    description:
        "Estimate your Canadian income tax quickly and easily with InvisorCPA's free tax calculator. Calculate federal and provincial taxes for any income level.",
    alternates: {
        canonical: 'https://www.invisorcpa.ca/tax-calculator',
    },
};

export default function TaxCalculatorPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <IncomeTaxCalculator />
        </div>
    );
}
