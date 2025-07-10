import TaxCalculator from '@/components/TaxCalculator';
import CanadaTaxCalculator from '@/components/CanadaTaxCalculator';

export default function TaxCalculatorPage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            {/* <TaxCalculator /> */}
            <CanadaTaxCalculator />
        </div>
    );
}
