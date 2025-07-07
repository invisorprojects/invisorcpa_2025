// app/tax-calculator/page.tsx
'use client';
import { useState } from 'react';

export default function TaxCalculator() {
    const [income, setIncome] = useState('');
    const [province, setProvince] = useState('ON');
    const [result, setResult] = useState<number | null>(null);

    const calculateTax = () => {
        const incomeNum = parseFloat(income);
        if (isNaN(incomeNum)) return;

        let federalTax = 0;
        if (incomeNum <= 50197) federalTax = incomeNum * 0.15;
        else if (incomeNum <= 100392)
            federalTax = 50197 * 0.15 + (incomeNum - 50197) * 0.205;
        // ... you can add more brackets

        let provincialTax = 0;
        if (province === 'ON') {
            if (incomeNum <= 49231) provincialTax = incomeNum * 0.0505;
            else if (incomeNum <= 98463)
                provincialTax = 49231 * 0.0505 + (incomeNum - 49231) * 0.0915;
            // ... more brackets
        }

        setResult(incomeNum - (federalTax + provincialTax));
    };

    return (
        <div className="mx-auto w-full max-w-xl rounded bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-bold">Canada Tax Calculator</h2>
            <div className="mb-4">
                <label className="mb-1 block">Annual Income (CAD)</label>
                <input
                    type="number"
                    className="w-full border p-2"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="mb-1 block">Province</label>
                <select
                    className="w-full border p-2"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                >
                    <option value="ON">Ontario</option>
                    <option value="BC">British Columbia</option>
                    <option value="QC">Quebec</option>
                    {/* Add other provinces as needed */}
                </select>
            </div>
            <button
                onClick={calculateTax}
                className="bg-primary rounded px-4 py-2 text-white"
            >
                Calculate
            </button>

            {result !== null && (
                <div className="mt-4">
                    <h3 className="font-semibold">Estimated Net Income:</h3>
                    <p>${result.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}
