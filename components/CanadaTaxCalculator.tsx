'use client';
import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    CardDescription,
} from './ui/card';
import { Input } from './ui/input';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from './ui/select';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { HandCoins } from 'lucide-react';

const PROVINCES = [
    { value: 'ON', label: 'Ontario' },
    { value: 'BC', label: 'British Columbia' },
    { value: 'QC', label: 'Quebec' },
    { value: 'AB', label: 'Alberta' },
    { value: 'MB', label: 'Manitoba' },
    { value: 'NS', label: 'Nova Scotia' },
    { value: 'PE', label: 'Prince Edward Island' },
    { value: 'SK', label: 'Saskatchewan' },
    { value: 'NT', label: 'Northwest Territories' },
    { value: 'YT', label: 'Yukon' },
    { value: 'NU', label: 'Nunavut' },
];

const YEARS = [2025, 2024, 2023, 2022, 2021];
const RATES = [
    { value: 'yearly', label: 'Yearly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'weekly', label: 'Weekly' },
];

export default function CanadaTaxCalculator() {
    const [province, setProvince] = useState('ON');
    const [year, setYear] = useState('2025');
    const [salary, setSalary] = useState('');
    const [rate, setRate] = useState('yearly');
    const [workHours, setWorkHours] = useState('7.5');
    const [bonus, setBonus] = useState('0');
    const [commission, setCommission] = useState('0');
    const [pension, setPension] = useState('0');
    const [taxableBenefit, setTaxableBenefit] = useState('0');
    const [rrsp, setRrsp] = useState('0');
    const [result, setResult] = useState<number | null>(null);

    // Placeholder calculation logic (to be replaced with real logic)
    const calculate = () => {
        const totalIncome =
            parseFloat(salary || '0') +
            parseFloat(bonus || '0') +
            parseFloat(commission || '0') +
            parseFloat(pension || '0') +
            parseFloat(taxableBenefit || '0');
        // Dummy tax: 25% of total income minus RRSP
        const tax = (totalIncome - parseFloat(rrsp || '0')) * 0.25;
        setResult(totalIncome - tax);
    };

    return (
        <Card className="mx-auto mt-10 max-w-2xl">
            <CardHeader className="pb-6 text-center">
                <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                    <HandCoins className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-foreground text-2xl font-semibold">
                    Income Tax Calculator
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    Calculate your take-home pay after tax.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <Label htmlFor="province">Province/Territory</Label>
                        <Select value={province} onValueChange={setProvince}>
                            <SelectTrigger className="w-full" id="province">
                                <SelectValue placeholder="Select province" />
                            </SelectTrigger>
                            <SelectContent>
                                {PROVINCES.map((prov) => (
                                    <SelectItem
                                        key={prov.value}
                                        value={prov.value}
                                    >
                                        {prov.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="year">Tax Year</Label>
                        <Select value={year} onValueChange={setYear}>
                            <SelectTrigger className="w-full" id="year">
                                <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                            <SelectContent>
                                {YEARS.map((y) => (
                                    <SelectItem key={y} value={String(y)}>
                                        {y}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="salary">Salary</Label>
                        <Input
                            id="salary"
                            type="number"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                            placeholder="Enter salary"
                        />
                    </div>
                    <div>
                        <Label htmlFor="rate">Rate</Label>
                        <Select value={rate} onValueChange={setRate}>
                            <SelectTrigger className="w-full" id="rate">
                                <SelectValue placeholder="Select rate" />
                            </SelectTrigger>
                            <SelectContent>
                                {RATES.map((r) => (
                                    <SelectItem key={r.value} value={r.value}>
                                        {r.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="workHours">Work Hours per Day</Label>
                        <Input
                            id="workHours"
                            type="number"
                            value={workHours}
                            onChange={(e) => setWorkHours(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="bonus">Bonus</Label>
                        <Input
                            id="bonus"
                            type="number"
                            value={bonus}
                            onChange={(e) => setBonus(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="commission">Commission</Label>
                        <Input
                            id="commission"
                            type="number"
                            value={commission}
                            onChange={(e) => setCommission(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="pension">Pension Income</Label>
                        <Input
                            id="pension"
                            type="number"
                            value={pension}
                            onChange={(e) => setPension(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="taxableBenefit">Taxable Benefit</Label>
                        <Input
                            id="taxableBenefit"
                            type="number"
                            value={taxableBenefit}
                            onChange={(e) => setTaxableBenefit(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="rrsp">RRSP</Label>
                        <Input
                            id="rrsp"
                            type="number"
                            value={rrsp}
                            onChange={(e) => setRrsp(e.target.value)}
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
                <Button onClick={calculate}>Calculate</Button>
                {result !== null && (
                    <div>
                        <div className="font-semibold">
                            Estimated Net Income:
                        </div>
                        <div>
                            $
                            {result.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}
                        </div>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
