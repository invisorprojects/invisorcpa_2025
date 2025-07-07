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
        else if (incomeNum <= 155625)
            federalTax =
                50197 * 0.15 +
                (100392 - 50197) * 0.205 +
                (incomeNum - 100392) * 0.26;
        else if (incomeNum <= 221708)
            federalTax =
                50197 * 0.15 +
                (100392 - 50197) * 0.205 +
                (155625 - 100392) * 0.26 +
                (incomeNum - 155625) * 0.29;
        else
            federalTax =
                50197 * 0.15 +
                (100392 - 50197) * 0.205 +
                (155625 - 100392) * 0.26 +
                (221708 - 155625) * 0.29 +
                (incomeNum - 221708) * 0.33;

        let provincialTax = 0;
        if (province === 'ON') {
            if (incomeNum <= 49231) provincialTax = incomeNum * 0.0505;
            else if (incomeNum <= 98463)
                provincialTax = 49231 * 0.0505 + (incomeNum - 49231) * 0.0915;
            else if (incomeNum <= 150000)
                provincialTax =
                    49231 * 0.0505 +
                    (98463 - 49231) * 0.0915 +
                    (incomeNum - 98463) * 0.1116;
            else if (incomeNum <= 220000)
                provincialTax =
                    49231 * 0.0505 +
                    (98463 - 49231) * 0.0915 +
                    (150000 - 98463) * 0.1116 +
                    (incomeNum - 150000) * 0.1216;
            else
                provincialTax =
                    49231 * 0.0505 +
                    (98463 - 49231) * 0.0915 +
                    (150000 - 98463) * 0.1116 +
                    (220000 - 150000) * 0.1216 +
                    (incomeNum - 220000) * 0.1316;
        } else if (province === 'BC') {
            if (incomeNum <= 45654) provincialTax = incomeNum * 0.0506;
            else if (incomeNum <= 91310)
                provincialTax = 45654 * 0.0506 + (incomeNum - 45654) * 0.077;
            else if (incomeNum <= 104835)
                provincialTax =
                    45654 * 0.0506 +
                    (91310 - 45654) * 0.077 +
                    (incomeNum - 91310) * 0.105;
            else if (incomeNum <= 127299)
                provincialTax =
                    45654 * 0.0506 +
                    (91310 - 45654) * 0.077 +
                    (104835 - 91310) * 0.105 +
                    (incomeNum - 104835) * 0.1229;
            else if (incomeNum <= 172602)
                provincialTax =
                    45654 * 0.0506 +
                    (91310 - 45654) * 0.077 +
                    (104835 - 91310) * 0.105 +
                    (127299 - 104835) * 0.1229 +
                    (incomeNum - 127299) * 0.147;
            else
                provincialTax =
                    45654 * 0.0506 +
                    (91310 - 45654) * 0.077 +
                    (104835 - 91310) * 0.105 +
                    (127299 - 104835) * 0.1229 +
                    (172602 - 127299) * 0.147 +
                    (incomeNum - 172602) * 0.168;
        } else if (province === 'AB') {
            if (incomeNum <= 142292) provincialTax = incomeNum * 0.1;
            else if (incomeNum <= 170751)
                provincialTax = 142292 * 0.1 + (incomeNum - 142292) * 0.12;
            else if (incomeNum <= 227668)
                provincialTax =
                    142292 * 0.1 +
                    (170751 - 142292) * 0.12 +
                    (incomeNum - 170751) * 0.13;
            else if (incomeNum <= 341502)
                provincialTax =
                    142292 * 0.1 +
                    (170751 - 142292) * 0.12 +
                    (227668 - 170751) * 0.13 +
                    (incomeNum - 227668) * 0.14;
            else
                provincialTax =
                    142292 * 0.1 +
                    (170751 - 142292) * 0.12 +
                    (227668 - 170751) * 0.13 +
                    (341502 - 227668) * 0.14 +
                    (incomeNum - 341502) * 0.15;
        } else if (province === 'QC') {
            if (incomeNum <= 49275) provincialTax = incomeNum * 0.14;
            else if (incomeNum <= 98540)
                provincialTax = 49275 * 0.14 + (incomeNum - 49275) * 0.19;
            else if (incomeNum <= 119910)
                provincialTax =
                    49275 * 0.14 +
                    (98540 - 49275) * 0.19 +
                    (incomeNum - 98540) * 0.24;
            else
                provincialTax =
                    49275 * 0.14 +
                    (98540 - 49275) * 0.19 +
                    (119910 - 98540) * 0.24 +
                    (incomeNum - 119910) * 0.2575;
        } else if (province === 'MB') {
            if (incomeNum <= 36842) provincialTax = incomeNum * 0.108;
            else if (incomeNum <= 79610)
                provincialTax = 36842 * 0.108 + (incomeNum - 36842) * 0.1275;
            else
                provincialTax =
                    36842 * 0.108 +
                    (79610 - 36842) * 0.1275 +
                    (incomeNum - 79610) * 0.174;
        } else if (province === 'NS') {
            if (incomeNum <= 29590) provincialTax = incomeNum * 0.0879;
            else if (incomeNum <= 59180)
                provincialTax = 29590 * 0.0879 + (incomeNum - 29590) * 0.1495;
            else if (incomeNum <= 93000)
                provincialTax =
                    29590 * 0.0879 +
                    (59180 - 29590) * 0.1495 +
                    (incomeNum - 59180) * 0.1667;
            else if (incomeNum <= 150000)
                provincialTax =
                    29590 * 0.0879 +
                    (59180 - 29590) * 0.1495 +
                    (93000 - 59180) * 0.1667 +
                    (incomeNum - 93000) * 0.175;
            else
                provincialTax =
                    29590 * 0.0879 +
                    (59180 - 29590) * 0.1495 +
                    (93000 - 59180) * 0.1667 +
                    (150000 - 93000) * 0.175 +
                    (incomeNum - 150000) * 0.21;
        } else if (province === 'PE') {
            if (incomeNum <= 31984) provincialTax = incomeNum * 0.098;
            else if (incomeNum <= 63969)
                provincialTax = 31984 * 0.098 + (incomeNum - 31984) * 0.138;
            else
                provincialTax =
                    31984 * 0.098 +
                    (63969 - 31984) * 0.138 +
                    (incomeNum - 63969) * 0.167;
        } else if (province === 'SK') {
            if (incomeNum <= 49720) provincialTax = incomeNum * 0.105;
            else if (incomeNum <= 142058)
                provincialTax = 49720 * 0.105 + (incomeNum - 49720) * 0.125;
            else
                provincialTax =
                    49720 * 0.105 +
                    (142058 - 49720) * 0.125 +
                    (incomeNum - 142058) * 0.14;
        } else if (province === 'NT') {
            if (incomeNum <= 113888) provincialTax = incomeNum * 0.059;
            else if (incomeNum <= 149155)
                provincialTax = 113888 * 0.059 + (incomeNum - 113888) * 0.073;
            else
                provincialTax =
                    113888 * 0.059 +
                    (149155 - 113888) * 0.073 +
                    (incomeNum - 149155) * 0.098;
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
                    <option value="AB">Alberta</option>
                    <option value="MB">Manitoba</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="NT">Northwest Territories</option>
                    <option value="YT">Yukon</option>
                    <option value="NU">Nunavut</option>
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
