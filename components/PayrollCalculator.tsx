'use client';

import { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function PayrollCalculator() {
    const [grossIncome, setGrossIncome] = useState('');
    const [taxRate, setTaxRate] = useState('');
    const [otherDeductions, setOtherDeductions] = useState('');
    const [netPay, setNetPay] = useState<number | null>(null);

    const calculatePayroll = () => {
        const gross = parseFloat(grossIncome) || 0;
        const tax = (parseFloat(taxRate) || 0) / 100;
        const deductions = parseFloat(otherDeductions) || 0;

        const net = gross - gross * tax - deductions;
        setNetPay(net > 0 ? parseFloat(net.toFixed(2)) : 0);
    };

    return (
        <Card className="mx-auto my-12 w-full max-w-md">
            <CardHeader>
                <CardTitle className="text-primary text-center text-xl">
                    Canada Payroll Calculator
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="gross-income" className="mb-1 block">
                            Gross Income (Monthly)
                        </Label>
                        <Input
                            id="gross-income"
                            type="number"
                            value={grossIncome}
                            onChange={(e) => setGrossIncome(e.target.value)}
                            placeholder="Enter gross income"
                        />
                    </div>
                    <div>
                        <Label htmlFor="tax-rate" className="mb-1 block">
                            Estimated Tax Rate (%)
                        </Label>
                        <Input
                            id="tax-rate"
                            type="number"
                            value={taxRate}
                            onChange={(e) => setTaxRate(e.target.value)}
                            placeholder="Enter tax rate (e.g. 20)"
                        />
                    </div>
                    <div>
                        <Label
                            htmlFor="other-deductions"
                            className="mb-1 block"
                        >
                            Other Deductions (CPP, EI etc.)
                        </Label>
                        <Input
                            id="other-deductions"
                            type="number"
                            value={otherDeductions}
                            onChange={(e) => setOtherDeductions(e.target.value)}
                            placeholder="Enter total deductions"
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <Button onClick={calculatePayroll} className="w-full">
                    Calculate Net Pay
                </Button>
                {netPay !== null && (
                    <div className="mt-2 w-full text-center">
                        <h3 className="text-lg font-semibold text-gray-800">
                            Net Pay:{' '}
                            <span className="text-green-600">${netPay}</span>
                        </h3>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
