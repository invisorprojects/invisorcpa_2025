import IncomeTaxCalculator from '@/components/IncomeTaxCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Income Tax Calculator Canada | Invisor CPA',
    alternates: {
        canonical: 'https://invisorcpa.ca/tax-calculator',
    },
};

export default function TaxCalculatorPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <IncomeTaxCalculator />
        </div>
    );
}
