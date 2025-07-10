'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import {
    Info,
    Calculator,
    DollarSign,
    TrendingDown,
    TrendingUp,
} from 'lucide-react';
import { toast } from 'sonner';

interface PayrollResult {
    grossPay: number;
    federalTax: number;
    provincialTax: number;
    cpp: number;
    ei: number;
    netPay: number;
    totalDeductions: number;
}

export default function PayrollCalculator() {
    const [payrollDate, setPayrollDate] = useState<Date | undefined>();
    const [province, setProvince] = useState('');
    const [td1Code, setTd1Code] = useState('');
    const [td1mbCode, setTd1abCode] = useState('');
    const [payPeriod, setPayPeriod] = useState('');
    const [grossWage, setGrossWage] = useState('');
    const [result, setResult] = useState<PayrollResult | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);
    const [calendarOpen, setCalendarOpen] = useState(false);

    // Tax rates and constants (2024 rates)
    const FEDERAL_TAX_RATES = [
        { threshold: 0, rate: 0.15 },
        { threshold: 55817, rate: 0.205 },
        { threshold: 111733, rate: 0.26 },
        { threshold: 173205, rate: 0.29 },
        { threshold: 246752, rate: 0.33 },
    ];

    // 2024 Provincial tax brackets for all provinces and territories
    // Source: Canada Revenue Agency (CRA)
    const PROVINCIAL_TAX_RATES = {
        AB: [
            { threshold: 0, rate: 0.1 },
            { threshold: 148269, rate: 0.12 },
            { threshold: 177922, rate: 0.13 },
            { threshold: 237230, rate: 0.14 },
            { threshold: 355845, rate: 0.15 },
        ],
        BC: [
            { threshold: 0, rate: 0.0506 },
            { threshold: 45654, rate: 0.077 },
            { threshold: 91310, rate: 0.105 },
            { threshold: 104835, rate: 0.1229 },
            { threshold: 127299, rate: 0.147 },
            { threshold: 172602, rate: 0.168 },
            { threshold: 240716, rate: 0.205 },
        ],
        MB: [
            { threshold: 0, rate: 0.108 },
            { threshold: 47000, rate: 0.1275 },
            { threshold: 100000, rate: 0.174 },
        ],
        NB: [
            { threshold: 0, rate: 0.094 },
            { threshold: 49020, rate: 0.14 },
            { threshold: 98040, rate: 0.16 },
            { threshold: 159460, rate: 0.195 },
            { threshold: 187913, rate: 0.207 },
        ],
        NL: [
            { threshold: 0, rate: 0.087 },
            { threshold: 43298, rate: 0.145 },
            { threshold: 86595, rate: 0.158 },
            { threshold: 154244, rate: 0.178 },
            { threshold: 215943, rate: 0.198 },
            { threshold: 275870, rate: 0.208 },
            { threshold: 551739, rate: 0.213 },
            { threshold: 1103478, rate: 0.218 },
        ],
        NS: [
            { threshold: 0, rate: 0.0879 },
            { threshold: 29590, rate: 0.1495 },
            { threshold: 59180, rate: 0.1667 },
            { threshold: 93000, rate: 0.175 },
            { threshold: 150000, rate: 0.21 },
        ],
        NT: [
            { threshold: 0, rate: 0.059 },
            { threshold: 50097, rate: 0.086 },
            { threshold: 100196, rate: 0.122 },
            { threshold: 163926, rate: 0.1405 },
        ],
        NU: [
            { threshold: 0, rate: 0.04 },
            { threshold: 51277, rate: 0.07 },
            { threshold: 102555, rate: 0.09 },
            { threshold: 167275, rate: 0.115 },
        ],
        ON: [
            { threshold: 0, rate: 0.0505 },
            { threshold: 51446, rate: 0.0915 },
            { threshold: 102894, rate: 0.1116 },
            { threshold: 150000, rate: 0.1216 },
            { threshold: 220000, rate: 0.1316 },
        ],
        PE: [
            { threshold: 0, rate: 0.098 },
            { threshold: 31984, rate: 0.138 },
            { threshold: 63969, rate: 0.167 },
        ],
        QC: [
            { threshold: 0, rate: 0.145 },
            { threshold: 51280, rate: 0.2 },
            { threshold: 102555, rate: 0.24 },
            { threshold: 124641, rate: 0.2575 },
        ],
        SK: [
            { threshold: 0, rate: 0.105 },
            { threshold: 52257, rate: 0.125 },
            { threshold: 149484, rate: 0.145 },
        ],
        YT: [
            { threshold: 0, rate: 0.064 },
            { threshold: 55867, rate: 0.09 },
            { threshold: 111733, rate: 0.109 },
            { threshold: 173205, rate: 0.128 },
            { threshold: 246752, rate: 0.15 },
        ],
    };

    const TD1_CLAIMS = {
        0: 0,
        1: 16129,
        2: 18907,
        3: 21685,
        4: 24463,
        5: 27241,
        6: 30019,
        7: 32097,
        8: 35575,
        9: 38353,
        10: 41131,
    };

    const TD1AB_CLAIMS = {
        0: 0,
        1: 22323,
        2: 25516,
        3: 28709,
        4: 31902,
        5: 35095,
        6: 38288,
        7: 41481,
        8: 44674,
        9: 47867,
        10: 51060,
    };

    const calculateTax = (
        income: number,
        rates: Array<{ threshold: number; rate: number }>
    ) => {
        let tax = 0;
        for (let i = 0; i < rates.length; i++) {
            const currentRate = rates[i];
            const nextRate = rates[i + 1];

            if (nextRate) {
                const taxableInThisBracket = Math.min(
                    income - currentRate.threshold,
                    nextRate.threshold - currentRate.threshold
                );
                if (taxableInThisBracket > 0) {
                    tax += taxableInThisBracket * currentRate.rate;
                }
            } else {
                const taxableInThisBracket = income - currentRate.threshold;
                if (taxableInThisBracket > 0) {
                    tax += taxableInThisBracket * currentRate.rate;
                }
            }
        }
        return tax;
    };

    const calculatePayroll = () => {
        if (
            !payrollDate ||
            !province ||
            !td1Code ||
            !td1mbCode ||
            !payPeriod ||
            !grossWage
        ) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsCalculating(true);

        // Simulate calculation delay
        setTimeout(() => {
            const grossPay = parseFloat(grossWage);
            const annualGross = grossPay * getPayPeriodsPerYear(payPeriod);

            // Get claim amounts
            const federalClaim =
                TD1_CLAIMS[parseInt(td1Code) as keyof typeof TD1_CLAIMS] || 0;
            const provincialClaim =
                TD1AB_CLAIMS[
                    parseInt(td1mbCode) as keyof typeof TD1AB_CLAIMS
                ] || 0;

            // Calculate taxable income
            const federalTaxableIncome = Math.max(
                0,
                annualGross - federalClaim
            );
            const provincialTaxableIncome = Math.max(
                0,
                annualGross - provincialClaim
            );

            // Calculate taxes
            const federalTaxAnnual = calculateTax(
                federalTaxableIncome,
                FEDERAL_TAX_RATES
            );
            const provincialRates =
                PROVINCIAL_TAX_RATES[
                    province as keyof typeof PROVINCIAL_TAX_RATES
                ];
            const provincialTaxAnnual = provincialRates
                ? calculateTax(provincialTaxableIncome, provincialRates)
                : 0;

            // Calculate CPP and EI
            const cppRate = 0.0595; // 5.95% for 2024
            const eiRate = 0.0163; // 1.63% for 2024
            const cppMax = 3754.45; // Maximum CPP contribution for 2024
            const eiMax = 1003.45; // Maximum EI contribution for 2024

            const cppAnnual = Math.min(annualGross * cppRate, cppMax);
            const eiAnnual = Math.min(annualGross * eiRate, eiMax);

            // Convert to pay period amounts
            const payPeriodsPerYear = getPayPeriodsPerYear(payPeriod);
            const federalTax = federalTaxAnnual / payPeriodsPerYear;
            const provincialTax = provincialTaxAnnual / payPeriodsPerYear;
            const cpp = cppAnnual / payPeriodsPerYear;
            const ei = eiAnnual / payPeriodsPerYear;

            const totalDeductions = federalTax + provincialTax + cpp + ei;
            const netPay = grossPay - totalDeductions;

            setResult({
                grossPay,
                federalTax,
                provincialTax,
                cpp,
                ei,
                netPay,
                totalDeductions,
            });

            setIsCalculating(false);
        }, 1000);
    };

    const getPayPeriodsPerYear = (period: string) => {
        switch (period) {
            case 'weekly':
                return 52;
            case 'bi-weekly':
                return 26;
            case 'monthly':
                return 12;
            default:
                return 26;
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD',
        }).format(amount);
    };

    return (
        <div className="mx-auto w-full max-w-2xl px-4 py-8">
            <Card className="shadow-lg">
                <CardHeader className="pb-6 text-center">
                    <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                        <Calculator className="text-primary h-6 w-6" />
                    </div>
                    <CardTitle className="text-foreground text-2xl font-semibold">
                        Payroll Calculator
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Calculate your payroll deductions and net pay with our
                        comprehensive calculator
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Payroll Payment Date */}
                        <div className="space-y-2">
                            <Label className="text-foreground text-sm font-medium">
                                Payroll Payment Date{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="flex items-center gap-2">
                                <Popover
                                    open={calendarOpen}
                                    onOpenChange={setCalendarOpen}
                                >
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-[calc(100%-1.5rem)] justify-start text-left font-normal"
                                            onClick={() =>
                                                setCalendarOpen(true)
                                            }
                                        >
                                            {payrollDate
                                                ? format(
                                                      payrollDate,
                                                      'yyyy-MM-dd'
                                                  )
                                                : 'Select date'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className="p-0"
                                        align="start"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={payrollDate}
                                            onSelect={(date) => {
                                                setPayrollDate(date);
                                                setCalendarOpen(false);
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <Info className="text-muted-foreground h-4 w-4 min-w-4" />
                            </div>
                        </div>

                        {/* Province */}
                        <div className="space-y-2">
                            <Label className="text-foreground text-sm font-medium">
                                Province of Employment{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="flex items-center gap-2">
                                <Select onValueChange={setProvince}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Province" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="AB">
                                            Alberta
                                        </SelectItem>
                                        <SelectItem value="BC">
                                            British Columbia
                                        </SelectItem>
                                        <SelectItem value="MB">
                                            Manitoba
                                        </SelectItem>
                                        <SelectItem value="NB">
                                            New Brunswick
                                        </SelectItem>
                                        <SelectItem value="NL">
                                            Newfoundland/Labrador
                                        </SelectItem>
                                        <SelectItem value="NT">
                                            Northwest Territories
                                        </SelectItem>
                                        <SelectItem value="NS">
                                            Nova Scotia
                                        </SelectItem>
                                        <SelectItem value="NU">
                                            Nunavut
                                        </SelectItem>
                                        <SelectItem value="ON">
                                            Ontario
                                        </SelectItem>
                                        <SelectItem value="PE">
                                            Prince Edward Island
                                        </SelectItem>
                                        <SelectItem value="QC">
                                            Quebec
                                        </SelectItem>
                                        <SelectItem value="SK">
                                            Saskatchewan
                                        </SelectItem>
                                        <SelectItem value="YT">
                                            Yukon
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Info className="text-muted-foreground h-4 w-4" />
                            </div>
                        </div>

                        {/* TD1 Total Claim Code */}
                        <div className="space-y-2">
                            <Label className="text-foreground text-sm font-medium">
                                TD1 Total Claim Code{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="flex items-center gap-2">
                                <Select onValueChange={setTd1Code}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Choose Claim Code" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">
                                            Claim Code 0 (no claim amount)
                                        </SelectItem>
                                        <SelectItem value="1">
                                            Claim Code 1 (Basic claim:
                                            $16,129.00)
                                        </SelectItem>
                                        <SelectItem value="2">
                                            Claim Code 2 ($16,129.01 -
                                            $18,907.00)
                                        </SelectItem>
                                        <SelectItem value="3">
                                            Claim Code 3 ($18,907.01 -
                                            $21,685.00)
                                        </SelectItem>
                                        <SelectItem value="4">
                                            Claim Code 4 ($21,685.01 -
                                            $24,463.00)
                                        </SelectItem>
                                        <SelectItem value="5">
                                            Claim Code 5 ($24,463.01 -
                                            $27,241.00)
                                        </SelectItem>
                                        <SelectItem value="6">
                                            Claim Code 6 ($27,241.01 -
                                            $30,019.00)
                                        </SelectItem>
                                        <SelectItem value="7">
                                            Claim Code 7 ($30,019.01 -
                                            $32,797.00)
                                        </SelectItem>
                                        <SelectItem value="8">
                                            Claim Code 8 ($32,797.01 -
                                            $35,575.00)
                                        </SelectItem>
                                        <SelectItem value="9">
                                            Claim Code 9 ($35,575.01 -
                                            $38,353.00)
                                        </SelectItem>
                                        <SelectItem value="10">
                                            Claim Code 10 ($38,353.01 -
                                            $41,131.00)
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Info className="text-muted-foreground h-4 w-4" />
                            </div>
                        </div>

                        {/* TD1AB Total Claim Code */}
                        <div className="space-y-2">
                            <Label className="text-foreground text-sm font-medium">
                                TD1AB Total Claim Code{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="flex items-center gap-2">
                                <Select onValueChange={setTd1abCode}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Choose TD1AB Code" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">
                                            Claim Code 0 (no claim amount)
                                        </SelectItem>
                                        <SelectItem value="1">
                                            Claim Code 1 (Basic claim:
                                            $22,323.00)
                                        </SelectItem>
                                        <SelectItem value="2">
                                            Claim Code 2 ($22,323.01 -
                                            $25,516.00)
                                        </SelectItem>
                                        <SelectItem value="3">
                                            Claim Code 3 ($25,516.01 -
                                            $28,709.00)
                                        </SelectItem>
                                        <SelectItem value="4">
                                            Claim Code 4 ($28,709.01 -
                                            $31,902.00)
                                        </SelectItem>
                                        <SelectItem value="5">
                                            Claim Code 5 ($31,902.01 -
                                            $35,095.00)
                                        </SelectItem>
                                        <SelectItem value="6">
                                            Claim Code 6 ($35,095.01 -
                                            $38,288.00)
                                        </SelectItem>
                                        <SelectItem value="7">
                                            Claim Code 7 ($38,288.01 -
                                            $41,481.00)
                                        </SelectItem>
                                        <SelectItem value="8">
                                            Claim Code 8 ($41,481.01 -
                                            $44,674.00)
                                        </SelectItem>
                                        <SelectItem value="9">
                                            Claim Code 9 ($44,674.01 -
                                            $47,867.00)
                                        </SelectItem>
                                        <SelectItem value="10">
                                            Claim Code 10 ($47,867.01 -
                                            $51,060.00)
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Info className="text-muted-foreground h-4 w-4" />
                            </div>
                        </div>

                        {/* Pay Period */}
                        <div className="space-y-2">
                            <Label className="text-foreground text-sm font-medium">
                                Pay Periods{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="flex items-center gap-2">
                                <Select onValueChange={setPayPeriod}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Frequency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="weekly">
                                            Weekly (52 per year)
                                        </SelectItem>
                                        <SelectItem value="bi-weekly">
                                            Bi-weekly (26 per year)
                                        </SelectItem>
                                        <SelectItem value="monthly">
                                            Monthly (12 per year)
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <Info className="text-muted-foreground h-4 w-4" />
                            </div>
                        </div>

                        {/* Gross Salary/Wages */}
                        <div className="space-y-2">
                            <Label className="text-foreground text-sm font-medium">
                                Gross Salary/Wages{' '}
                                <span className="text-destructive">*</span>
                            </Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    type="number"
                                    placeholder="Enter amount"
                                    value={grossWage}
                                    onChange={(e) =>
                                        setGrossWage(e.target.value)
                                    }
                                    className="w-full"
                                />
                                <Info className="text-muted-foreground h-4 w-4" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center pt-4">
                        <Button
                            size="lg"
                            className="px-8 py-3 text-base font-medium"
                            onClick={calculatePayroll}
                            disabled={isCalculating}
                        >
                            {isCalculating
                                ? 'Calculating...'
                                : 'Calculate Payroll'}
                        </Button>
                    </div>

                    {/* Results Section */}
                    {result && (
                        <div className="mt-8 space-y-6">
                            <div className="border-t pt-6">
                                <h3 className="mb-4 text-center text-lg font-semibold">
                                    Payroll Calculation Results
                                </h3>

                                <div className="grid gap-4 md:grid-cols-2">
                                    {/* Gross Pay */}
                                    <Card className="border-green-200 bg-green-50">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2">
                                                <DollarSign className="h-5 w-5 text-green-600" />
                                                <div>
                                                    <p className="text-sm font-medium text-green-800">
                                                        Gross Pay
                                                    </p>
                                                    <p className="text-xl font-bold text-green-900">
                                                        {formatCurrency(
                                                            result.grossPay
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Net Pay */}
                                    <Card className="border-blue-200 bg-blue-50">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                                <div>
                                                    <p className="text-sm font-medium text-blue-800">
                                                        Net Pay
                                                    </p>
                                                    <p className="text-xl font-bold text-blue-900">
                                                        {formatCurrency(
                                                            result.netPay
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Deductions Breakdown */}
                                <Card className="mt-4 border-red-200 bg-red-50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-red-800">
                                            <TrendingDown className="h-5 w-5" />
                                            Total Deductions:{' '}
                                            {formatCurrency(
                                                result.totalDeductions
                                            )}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="flex justify-between">
                                                <span className="text-sm text-red-700">
                                                    Federal Tax:
                                                </span>
                                                <span className="font-medium text-red-800">
                                                    {formatCurrency(
                                                        result.federalTax
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-red-700">
                                                    Provincial Tax:
                                                </span>
                                                <span className="font-medium text-red-800">
                                                    {formatCurrency(
                                                        result.provincialTax
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-red-700">
                                                    CPP:
                                                </span>
                                                <span className="font-medium text-red-800">
                                                    {formatCurrency(result.cpp)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-sm text-red-700">
                                                    EI:
                                                </span>
                                                <span className="font-medium text-red-800">
                                                    {formatCurrency(result.ei)}
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
