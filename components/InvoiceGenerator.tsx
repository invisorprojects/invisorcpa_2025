'use client';

import { ChangeEvent, CSSProperties, useRef, useState } from 'react';
import Image from 'next/image';
import generatePDF, { Margin, Resolution } from 'react-to-pdf';
import {
    Building2,
    Download,
    FileText,
    Plus,
    Trash2,
    Upload,
} from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type ProvinceTaxPreset = {
    code: string;
    name: string;
    gst: number;
    hst: number;
    regionalTaxName: 'PST' | 'QST';
    regionalTaxRate: number;
};

type LineItem = {
    id: string;
    description: string;
    quantity: number;
    rate: number;
    taxable: boolean;
};

type InvoiceFormState = {
    companyName: string;
    contactName: string;
    businessNumber: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
    clientName: string;
    clientEmail: string;
    clientAddress: string;
    invoiceNumber: string;
    invoiceDate: string;
    dueDate: string;
    placeOfSupply: string;
    notes: string;
    gstRate: number;
    hstRate: number;
    regionalTaxName: 'PST' | 'QST';
    regionalTaxRate: number;
};

let lineItemIdSequence = 0;

const CANADIAN_TAX_PRESETS: ProvinceTaxPreset[] = [
    {
        code: 'AB',
        name: 'Alberta',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'BC',
        name: 'British Columbia',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 7,
    },
    {
        code: 'MB',
        name: 'Manitoba',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 7,
    },
    {
        code: 'NB',
        name: 'New Brunswick',
        gst: 0,
        hst: 15,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'NL',
        name: 'Newfoundland and Labrador',
        gst: 0,
        hst: 15,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'NT',
        name: 'Northwest Territories',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'NS',
        name: 'Nova Scotia',
        gst: 0,
        hst: 14,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'NU',
        name: 'Nunavut',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'ON',
        name: 'Ontario',
        gst: 0,
        hst: 13,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'PE',
        name: 'Prince Edward Island',
        gst: 0,
        hst: 15,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
    {
        code: 'QC',
        name: 'Quebec',
        gst: 5,
        hst: 0,
        regionalTaxName: 'QST',
        regionalTaxRate: 9.975,
    },
    {
        code: 'SK',
        name: 'Saskatchewan',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 6,
    },
    {
        code: 'YT',
        name: 'Yukon',
        gst: 5,
        hst: 0,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    },
];

const createLineItem = (overrides?: Partial<LineItem>): LineItem => ({
    id: `line-item-${lineItemIdSequence++}`,
    description: '',
    quantity: 1,
    rate: 0,
    taxable: true,
    ...overrides,
});

const todayAsInput = () => {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().slice(0, 10);
};

const addDaysAsInput = (days: number) => {
    const next = new Date();
    next.setDate(next.getDate() + days);
    next.setMinutes(next.getMinutes() - next.getTimezoneOffset());
    return next.toISOString().slice(0, 10);
};

const currencyFormatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const dateFormatter = new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
});

const formatCurrency = (value: number) => currencyFormatter.format(value || 0);

const formatDisplayDate = (value: string) => {
    if (!value) return 'Not set';
    const date = new Date(`${value}T12:00:00`);
    return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
};

const formatRate = (value: number) => `${value.toFixed(value % 1 === 0 ? 0 : 3)}%`;

type InvoicePdfDocumentProps = {
    form: InvoiceFormState;
    lineItems: LineItem[];
    logoDataUrl: string;
    selectedProvince: string;
    subtotal: number;
    gstAmount: number;
    hstAmount: number;
    regionalTaxAmount: number;
    grandTotal: number;
};

function InvoicePdfDocument({
    form,
    lineItems,
    logoDataUrl,
    selectedProvince,
    subtotal,
    gstAmount,
    hstAmount,
    regionalTaxAmount,
    grandTotal,
}: InvoicePdfDocumentProps) {
    const pageStyle: CSSProperties = {
        width: 794,
        backgroundColor: '#ffffff',
        color: '#1f2937',
        padding: 32,
        fontFamily: 'Arial, Helvetica, sans-serif',
    };

    const badgeStyle: CSSProperties = {
        display: 'inline-block',
        borderRadius: 9999,
        backgroundColor: '#eef4ff',
        color: '#284680',
        padding: '6px 12px',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
    };

    const labelStyle: CSSProperties = {
        color: '#64748b',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
    };

    const sectionTitleStyle: CSSProperties = {
        color: '#21355b',
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
    };

    return (
        <div style={pageStyle}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 24,
                    borderBottom: '1px solid #d9e2ef',
                    paddingBottom: 24,
                }}
            >
                <div style={{ maxWidth: 360 }}>
                    {logoDataUrl ? (
                        <Image
                            src={logoDataUrl}
                            alt="Company logo"
                            width={120}
                            height={120}
                            unoptimized
                            style={{
                                display: 'block',
                                width: 'auto',
                                maxHeight: 96,
                                marginBottom: 16,
                                borderRadius: 16,
                            }}
                        />
                    ) : null}
                    <span style={badgeStyle}>CAD Invoice</span>
                    <div
                        style={{
                            marginTop: 16,
                            color: '#21355b',
                            fontSize: 30,
                            fontWeight: 700,
                            lineHeight: 1.1,
                        }}
                    >
                        {form.companyName || 'Your company'}
                    </div>
                    {form.contactName ? (
                        <p style={{ margin: '10px 0 0', color: '#475569', fontSize: 14 }}>
                            {form.contactName}
                        </p>
                    ) : null}
                    {form.companyAddress ? (
                        <p
                            style={{
                                margin: '10px 0 0',
                                color: '#475569',
                                fontSize: 14,
                                lineHeight: 1.6,
                                whiteSpace: 'pre-line',
                            }}
                        >
                            {form.companyAddress}
                        </p>
                    ) : null}
                    {form.companyEmail ? (
                        <p style={{ margin: '10px 0 0', color: '#475569', fontSize: 14 }}>
                            {form.companyEmail}
                        </p>
                    ) : null}
                    {form.companyPhone ? (
                        <p style={{ margin: '4px 0 0', color: '#475569', fontSize: 14 }}>
                            {form.companyPhone}
                        </p>
                    ) : null}
                    {form.businessNumber ? (
                        <p style={{ margin: '4px 0 0', color: '#475569', fontSize: 14 }}>
                            BN / GST / HST No. {form.businessNumber}
                        </p>
                    ) : null}
                </div>

                <div style={{ textAlign: 'right' }}>
                    <div style={labelStyle}>Tax Invoice</div>
                    <div
                        style={{
                            marginTop: 12,
                            color: '#21355b',
                            fontSize: 44,
                            fontWeight: 700,
                            lineHeight: 1,
                        }}
                    >
                        INVOICE
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 0.8fr',
                    gap: 24,
                    borderBottom: '1px solid #d9e2ef',
                    padding: '24px 0',
                }}
            >
                <div>
                    <div style={sectionTitleStyle}>Bill To</div>
                    <p
                        style={{
                            margin: '12px 0 0',
                            color: '#0f172a',
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        {form.clientName || 'Client name'}
                    </p>
                    <p
                        style={{
                            margin: '10px 0 0',
                            color: '#475569',
                            fontSize: 14,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {form.clientAddress || 'Client address'}
                    </p>
                    {form.clientEmail ? (
                        <p style={{ margin: '10px 0 0', color: '#475569', fontSize: 14 }}>
                            {form.clientEmail}
                        </p>
                    ) : null}

                    <div style={{ marginTop: 24 }}>
                        <div style={sectionTitleStyle}>Place of Supply</div>
                        <p style={{ margin: '10px 0 0', color: '#475569', fontSize: 14 }}>
                            {selectedProvince}, Canada
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        border: '1px solid #d9e2ef',
                        borderRadius: 20,
                        backgroundColor: '#f8fbff',
                        padding: 20,
                    }}
                >
                    {[
                        ['Invoice #', form.invoiceNumber || 'INV-0001'],
                        ['Invoice Date', formatDisplayDate(form.invoiceDate)],
                        ['Due Date', formatDisplayDate(form.dueDate)],
                        ['Currency', 'CAD'],
                    ].map(([label, value]) => (
                        <div
                            key={label}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 12,
                                padding: '10px 0',
                                borderBottom:
                                    label === 'Currency'
                                        ? 'none'
                                        : '1px solid #e2e8f0',
                                fontSize: 14,
                            }}
                        >
                            <span style={{ color: '#64748b' }}>{label}</span>
                            <span style={{ color: '#0f172a', fontWeight: 700 }}>
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <table
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginTop: 24,
                    border: '1px solid #d9e2ef',
                    borderRadius: 20,
                    overflow: 'hidden',
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: '#20345a', color: '#ffffff' }}>
                        {['Item', 'Description', 'Qty', 'Rate', 'Tax', 'Amount'].map(
                            (heading) => (
                                <th
                                    key={heading}
                                    style={{
                                        padding: '14px 16px',
                                        fontSize: 12,
                                        fontWeight: 700,
                                        letterSpacing: '0.14em',
                                        textAlign: 'left',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {heading}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody>
                    {lineItems.map((item, index) => (
                        <tr key={item.id} style={{ backgroundColor: '#ffffff' }}>
                            <td
                                style={{
                                    padding: '14px 16px',
                                    borderTop: '1px solid #e2e8f0',
                                    color: '#64748b',
                                    fontSize: 14,
                                }}
                            >
                                {index + 1}
                            </td>
                            <td
                                style={{
                                    padding: '14px 16px',
                                    borderTop: '1px solid #e2e8f0',
                                    color: '#1f2937',
                                    fontSize: 14,
                                }}
                            >
                                {item.description || 'Untitled service'}
                            </td>
                            <td
                                style={{
                                    padding: '14px 16px',
                                    borderTop: '1px solid #e2e8f0',
                                    color: '#475569',
                                    fontSize: 14,
                                }}
                            >
                                {item.quantity.toFixed(2)}
                            </td>
                            <td
                                style={{
                                    padding: '14px 16px',
                                    borderTop: '1px solid #e2e8f0',
                                    color: '#475569',
                                    fontSize: 14,
                                }}
                            >
                                {formatCurrency(item.rate)}
                            </td>
                            <td
                                style={{
                                    padding: '14px 16px',
                                    borderTop: '1px solid #e2e8f0',
                                    color: '#475569',
                                    fontSize: 14,
                                }}
                            >
                                {item.taxable ? 'Applicable' : 'Exempt'}
                            </td>
                            <td
                                style={{
                                    padding: '14px 16px',
                                    borderTop: '1px solid #e2e8f0',
                                    color: '#0f172a',
                                    fontSize: 14,
                                    fontWeight: 700,
                                }}
                            >
                                {formatCurrency(item.quantity * item.rate)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 24,
                    marginTop: 24,
                    alignItems: 'flex-start',
                }}
            >
                <div
                    style={{
                        maxWidth: 320,
                        border: '1px solid #d9e2ef',
                        borderRadius: 20,
                        backgroundColor: '#f8fbff',
                        padding: 20,
                    }}
                >
                    <div style={sectionTitleStyle}>Notes</div>
                    <p
                        style={{
                            margin: '12px 0 0',
                            color: '#475569',
                            fontSize: 14,
                            lineHeight: 1.6,
                            whiteSpace: 'pre-line',
                        }}
                    >
                        {form.notes || 'Add payment terms or client notes.'}
                    </p>
                </div>

                <div
                    style={{
                        width: 300,
                        border: '1px solid #d9e2ef',
                        borderRadius: 20,
                        overflow: 'hidden',
                    }}
                >
                    {[
                        ['Subtotal', formatCurrency(subtotal)],
                        ...(form.hstRate > 0
                            ? [['HST (' + formatRate(form.hstRate) + ')', formatCurrency(hstAmount)]]
                            : []),
                        ...(form.gstRate > 0
                            ? [['GST (' + formatRate(form.gstRate) + ')', formatCurrency(gstAmount)]]
                            : []),
                        ...(form.regionalTaxRate > 0
                            ? [[
                                  form.regionalTaxName +
                                      ' (' +
                                      formatRate(form.regionalTaxRate) +
                                      ')',
                                  formatCurrency(regionalTaxAmount),
                              ]]
                            : []),
                    ].map(([label, value]) => (
                        <div
                            key={String(label)}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '14px 18px',
                                borderBottom: '1px solid #e2e8f0',
                                fontSize: 14,
                                color: '#475569',
                            }}
                        >
                            <span>{label}</span>
                            <span style={{ color: '#0f172a', fontWeight: 700 }}>
                                {value}
                            </span>
                        </div>
                    ))}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '16px 18px',
                            background: 'linear-gradient(135deg, #f6fbff 0%, #fff7ed 100%)',
                            color: '#0f172a',
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >
                        <span>Total</span>
                        <span>{formatCurrency(grandTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function InvoiceGenerator() {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const pdfTargetRef = useRef<HTMLDivElement | null>(null);
    const [logoDataUrl, setLogoDataUrl] = useState('');
    const [form, setForm] = useState<InvoiceFormState>({
        companyName: '',
        contactName: '',
        businessNumber: '',
        companyEmail: '',
        companyPhone: '',
        companyAddress: '',
        clientName: '',
        clientEmail: '',
        clientAddress: '',
        invoiceNumber: '',
        invoiceDate: todayAsInput(),
        dueDate: addDaysAsInput(14),
        placeOfSupply: 'ON',
        notes:
            'Payment due within 14 days.\nThank you for your business.',
        gstRate: 0,
        hstRate: 13,
        regionalTaxName: 'PST',
        regionalTaxRate: 0,
    });
    const [lineItems, setLineItems] = useState<LineItem[]>([
        createLineItem({
            description: 'Bookkeeping and accounting services',
            quantity: 1,
            rate: 350,
        }),
    ]);

    const subtotal = lineItems.reduce(
        (total, item) => total + item.quantity * item.rate,
        0
    );
    const taxableSubtotal = lineItems.reduce((total, item) => {
        if (!item.taxable) return total;
        return total + item.quantity * item.rate;
    }, 0);
    const gstAmount = taxableSubtotal * (form.gstRate / 100);
    const hstAmount = taxableSubtotal * (form.hstRate / 100);
    const regionalTaxAmount = taxableSubtotal * (form.regionalTaxRate / 100);
    const totalTax = gstAmount + hstAmount + regionalTaxAmount;
    const grandTotal = subtotal + totalTax;
    const selectedProvince =
        CANADIAN_TAX_PRESETS.find(
            (province) => province.code === form.placeOfSupply
        )?.name || 'Canada';

    const updateForm = <K extends keyof InvoiceFormState>(
        field: K,
        value: InvoiceFormState[K]
    ) => {
        setForm((current) => ({ ...current, [field]: value }));
    };

    const updateLineItem = <K extends keyof LineItem>(
        id: string,
        field: K,
        value: LineItem[K]
    ) => {
        setLineItems((current) =>
            current.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    const addLineItem = () => {
        setLineItems((current) => [...current, createLineItem()]);
    };

    const removeLineItem = (id: string) => {
        setLineItems((current) =>
            current.length === 1 ? current : current.filter((item) => item.id !== id)
        );
    };

    const applyProvinceTaxPreset = (provinceCode: string) => {
        const preset = CANADIAN_TAX_PRESETS.find(
            (province) => province.code === provinceCode
        );
        if (!preset) return;

        setForm((current) => ({
            ...current,
            placeOfSupply: provinceCode,
            gstRate: preset.gst,
            hstRate: preset.hst,
            regionalTaxName: preset.regionalTaxName,
            regionalTaxRate: preset.regionalTaxRate,
        }));
    };

    const handleLogoUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size > 1024 * 1024) {
            toast.error('Logo must be 1MB or smaller.');
            event.target.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const result = reader.result;
            if (typeof result === 'string') {
                setLogoDataUrl(result);
            }
        };
        reader.readAsDataURL(file);
    };
    const handleDownloadPdf = async () => {
        if (!form.companyName.trim() || !form.clientName.trim()) {
            toast.error('Add both company and client names before exporting.');
            return;
        }

        if (!pdfTargetRef.current) {
            toast.error('Invoice preview is not ready yet.');
            return;
        }

        const toastId = toast.loading('Generating PDF...');

        try {
            await generatePDF(() => pdfTargetRef.current, {
                filename: `${(form.invoiceNumber || 'invoice').trim()}.pdf`,
                method: 'save',
                resolution: Resolution.MEDIUM,
                page: {
                    margin: Margin.MEDIUM,
                    format: 'a4',
                    orientation: 'portrait',
                },
                canvas: {
                    mimeType: 'image/png',
                    qualityRatio: 1,
                    useCORS: true,
                },
                overrides: {
                    canvas: {
                        onclone: (clonedDocument) => {
                            const root = clonedDocument.documentElement;
                            const safeThemeTokens: Record<string, string> = {
                                '--background': '#ffffff',
                                '--foreground': '#1f2937',
                                '--card': '#ffffff',
                                '--card-foreground': '#1f2937',
                                '--popover': '#ffffff',
                                '--popover-foreground': '#1f2937',
                                '--primary': '#21355b',
                                '--primary-foreground': '#ffffff',
                                '--secondary': '#2e6cbf',
                                '--secondary-foreground': '#21355b',
                                '--muted': '#eff6ff',
                                '--muted-foreground': '#64748b',
                                '--accent': '#e2ecff',
                                '--accent-foreground': '#21355b',
                                '--destructive': '#dc2626',
                                '--border': '#d9e2ef',
                                '--input': '#d9e2ef',
                                '--ring': '#93c5fd',
                                '--sidebar': '#ffffff',
                                '--sidebar-foreground': '#1f2937',
                                '--sidebar-primary': '#21355b',
                                '--sidebar-primary-foreground': '#ffffff',
                                '--sidebar-accent': '#e2ecff',
                                '--sidebar-accent-foreground': '#21355b',
                                '--sidebar-border': '#d9e2ef',
                                '--sidebar-ring': '#93c5fd',
                            };

                            Object.entries(safeThemeTokens).forEach(
                                ([token, value]) => {
                                    root.style.setProperty(token, value);
                                }
                            );

                            clonedDocument.body.style.backgroundColor =
                                '#ffffff';
                            clonedDocument.body.style.color = '#1f2937';
                        },
                    },
                },
            });

            toast.success('PDF downloaded.', { id: toastId });
        } catch (error) {
            console.error(error);
            toast.error('Failed to generate the PDF.', { id: toastId });
        }
    };

    return (
        <main className="bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_35%,#fdf7ef_100%)]">
            <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <div className="space-y-4">
                        <span className="text-secondary inline-flex items-center rounded-full border border-[#d6e3ff] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] shadow-sm">
                            Canadian Invoice Generator
                        </span>
                        <h1 className="text-primary max-w-3xl text-4xl font-bold sm:text-5xl">
                            Build a clean CAD invoice and export it as PDF
                        </h1>
                        <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            This invoice stays entirely in the browser. Add your
                            details, review live totals, and use the export
                            button to open a print-ready PDF flow.
                        </p>
                    </div>

                    <Card className="border-white/70 bg-white/85 shadow-xl backdrop-blur">
                        <CardContent className="grid gap-4 pt-6 sm:grid-cols-3">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-2xl font-semibold text-slate-900">
                                    CAD
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Fixed Canadian currency formatting
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-2xl font-semibold text-slate-900">
                                    {CANADIAN_TAX_PRESETS.length}
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Province presets for sales tax defaults
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-2xl font-semibold text-slate-900">
                                    0
                                </p>
                                <p className="mt-1 text-sm text-slate-500">
                                    Server storage or saved invoice records
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-6">
                        <Card className="border-0 bg-white shadow-xl shadow-slate-200/70">
                            <CardHeader className="border-b border-slate-100">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Building2 className="text-secondary h-5 w-5" />
                                    Business Details
                                </CardTitle>
                                <CardDescription>
                                    Upload an optional logo and fill the sender
                                    information that appears on the invoice.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                                    <div className="space-y-3">
                                        <Label>Logo</Label>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                fileInputRef.current?.click()
                                            }
                                            className="flex h-44 w-full flex-col items-center justify-center rounded-3xl border border-dashed border-[#cfdaf5] bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] px-4 text-center transition hover:border-[#98b3eb] hover:bg-[linear-gradient(180deg,#f1f7ff_0%,#e7f0ff_100%)]"
                                        >
                                            {logoDataUrl ? (
                                                <Image
                                                    src={logoDataUrl}
                                                    alt="Uploaded logo"
                                                    width={160}
                                                    height={160}
                                                    unoptimized
                                                    className="max-h-24 w-auto rounded-xl object-contain"
                                                />
                                            ) : (
                                                <Upload className="text-secondary h-8 w-8" />
                                            )}
                                            <span className="mt-3 text-sm font-semibold text-slate-800">
                                                {logoDataUrl
                                                    ? 'Replace logo'
                                                    : 'Upload logo'}
                                            </span>
                                            <span className="mt-1 text-xs leading-5 text-slate-500">
                                                PNG, JPG or WebP up to 1MB.
                                            </span>
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/png,image/jpeg,image/webp"
                                            className="hidden"
                                            onChange={handleLogoUpload}
                                        />
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2 sm:col-span-2">
                                            <Label htmlFor="companyName">
                                                Company name
                                            </Label>
                                            <Input
                                                id="companyName"
                                                value={form.companyName}
                                                onChange={(event) =>
                                                    updateForm(
                                                        'companyName',
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="Your company"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="contactName">
                                                Contact name
                                            </Label>
                                            <Input
                                                id="contactName"
                                                value={form.contactName}
                                                onChange={(event) =>
                                                    updateForm(
                                                        'contactName',
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="businessNumber">
                                                BN / GST / HST No.
                                            </Label>
                                            <Input
                                                id="businessNumber"
                                                value={form.businessNumber}
                                                onChange={(event) =>
                                                    updateForm(
                                                        'businessNumber',
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="123456789RT0001"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="companyEmail">
                                                Email
                                            </Label>
                                            <Input
                                                id="companyEmail"
                                                type="email"
                                                value={form.companyEmail}
                                                onChange={(event) =>
                                                    updateForm(
                                                        'companyEmail',
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="billing@company.ca"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="companyPhone">
                                                Phone
                                            </Label>
                                            <Input
                                                id="companyPhone"
                                                value={form.companyPhone}
                                                onChange={(event) =>
                                                    updateForm(
                                                        'companyPhone',
                                                        event.target.value
                                                    )
                                                }
                                                placeholder="+1 519 555 0123"
                                            />
                                        </div>
                                        <div className="space-y-2 sm:col-span-2">
                                            <Label htmlFor="companyAddress">
                                                Business address
                                            </Label>
                                            <Textarea
                                                id="companyAddress"
                                                value={form.companyAddress}
                                                onChange={(event) =>
                                                    updateForm(
                                                        'companyAddress',
                                                        event.target.value
                                                    )
                                                }
                                                placeholder={
                                                    '100 King Street W\nLondon, ON N6A 1C5'
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-white shadow-xl shadow-slate-200/70">
                            <CardHeader className="border-b border-slate-100">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <FileText className="text-secondary h-5 w-5" />
                                    Client and Invoice Info
                                </CardTitle>
                                <CardDescription>
                                    Province selection loads Canadian sales-tax
                                    defaults that you can still override.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
                                <div className="space-y-2 sm:col-span-2">
                                    <Label htmlFor="clientName">
                                        Client name or company
                                    </Label>
                                    <Input
                                        id="clientName"
                                        value={form.clientName}
                                        onChange={(event) =>
                                            updateForm(
                                                'clientName',
                                                event.target.value
                                            )
                                        }
                                        placeholder="Client company"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="clientEmail">
                                        Client email
                                    </Label>
                                    <Input
                                        id="clientEmail"
                                        type="email"
                                        value={form.clientEmail}
                                        onChange={(event) =>
                                            updateForm(
                                                'clientEmail',
                                                event.target.value
                                            )
                                        }
                                        placeholder="client@example.ca"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="invoiceNumber">
                                        Invoice number
                                    </Label>
                                    <Input
                                        id="invoiceNumber"
                                        value={form.invoiceNumber}
                                        onChange={(event) =>
                                            updateForm(
                                                'invoiceNumber',
                                                event.target.value
                                            )
                                        }
                                        placeholder="INV-1001"
                                    />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <Label htmlFor="clientAddress">
                                        Client address
                                    </Label>
                                    <Textarea
                                        id="clientAddress"
                                        value={form.clientAddress}
                                        onChange={(event) =>
                                            updateForm(
                                                'clientAddress',
                                                event.target.value
                                            )
                                        }
                                        placeholder={
                                            '200 Bay Street\nToronto, ON M5J 2J2'
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="invoiceDate">
                                        Invoice date
                                    </Label>
                                    <Input
                                        id="invoiceDate"
                                        type="date"
                                        value={form.invoiceDate}
                                        onChange={(event) =>
                                            updateForm(
                                                'invoiceDate',
                                                event.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="dueDate">Due date</Label>
                                    <Input
                                        id="dueDate"
                                        type="date"
                                        value={form.dueDate}
                                        onChange={(event) =>
                                            updateForm(
                                                'dueDate',
                                                event.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Place of supply</Label>
                                    <Select
                                        value={form.placeOfSupply}
                                        onValueChange={applyProvinceTaxPreset}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select province" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {CANADIAN_TAX_PRESETS.map(
                                                (province) => (
                                                    <SelectItem
                                                        key={province.code}
                                                        value={province.code}
                                                    >
                                                        {province.name}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notes</Label>
                                    <Textarea
                                        id="notes"
                                        value={form.notes}
                                        onChange={(event) =>
                                            updateForm(
                                                'notes',
                                                event.target.value
                                            )
                                        }
                                        className="min-h-24"
                                        placeholder="Payment terms or thank-you note"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-white shadow-xl shadow-slate-200/70">
                            <CardHeader className="border-b border-slate-100">
                                <CardTitle className="text-xl">
                                    Tax Settings
                                </CardTitle>
                                <CardDescription>
                                    Defaults follow the selected Canadian place
                                    of supply. Review rates before issuing the
                                    invoice.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4 pt-6 sm:grid-cols-3">
                                <div className="space-y-2">
                                    <Label htmlFor="hstRate">HST %</Label>
                                    <Input
                                        id="hstRate"
                                        type="number"
                                        min="0"
                                        step="0.001"
                                        value={form.hstRate}
                                        onChange={(event) =>
                                            updateForm(
                                                'hstRate',
                                                Number(event.target.value) || 0
                                            )
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="gstRate">GST %</Label>
                                    <Input
                                        id="gstRate"
                                        type="number"
                                        min="0"
                                        step="0.001"
                                        value={form.gstRate}
                                        onChange={(event) =>
                                            updateForm(
                                                'gstRate',
                                                Number(event.target.value) || 0
                                            )
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="regionalTaxRate">
                                        {form.regionalTaxName} %
                                    </Label>
                                    <Input
                                        id="regionalTaxRate"
                                        type="number"
                                        min="0"
                                        step="0.001"
                                        value={form.regionalTaxRate}
                                        onChange={(event) =>
                                            updateForm(
                                                'regionalTaxRate',
                                                Number(event.target.value) || 0
                                            )
                                        }
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 bg-white shadow-xl shadow-slate-200/70">
                            <CardHeader className="border-b border-slate-100">
                                <CardTitle className="text-xl">
                                    Line Items
                                </CardTitle>
                                <CardDescription>
                                    Mark any line as non-taxable if it should
                                    not contribute to GST, HST, PST, or QST.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-5 pt-6">
                                {lineItems.map((item, index) => {
                                    const lineTotal =
                                        item.quantity * item.rate;

                                    return (
                                        <div
                                            key={item.id}
                                            className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4"
                                        >
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <p className="text-sm font-semibold tracking-[0.12em] text-slate-500 uppercase">
                                                    Item {index + 1}
                                                </p>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() =>
                                                        removeLineItem(item.id)
                                                    }
                                                    disabled={
                                                        lineItems.length === 1
                                                    }
                                                    className="text-slate-500 hover:text-red-600"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                    Remove
                                                </Button>
                                            </div>
                                            <div className="grid gap-4 sm:grid-cols-[1.3fr_0.5fr_0.6fr]">
                                                <div className="space-y-2 sm:col-span-3">
                                                    <Label>
                                                        Description
                                                    </Label>
                                                    <Textarea
                                                        value={
                                                            item.description
                                                        }
                                                        onChange={(event) =>
                                                            updateLineItem(
                                                                item.id,
                                                                'description',
                                                                event.target
                                                                    .value
                                                            )
                                                        }
                                                        placeholder="Bookkeeping retainer, tax filing, payroll support..."
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Quantity</Label>
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value={item.quantity}
                                                        onChange={(event) =>
                                                            updateLineItem(
                                                                item.id,
                                                                'quantity',
                                                                Number(
                                                                    event.target
                                                                        .value
                                                                ) || 0
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Rate (CAD)</Label>
                                                    <Input
                                                        type="number"
                                                        min="0"
                                                        step="0.01"
                                                        value={item.rate}
                                                        onChange={(event) =>
                                                            updateLineItem(
                                                                item.id,
                                                                'rate',
                                                                Number(
                                                                    event.target
                                                                        .value
                                                                ) || 0
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Line total</Label>
                                                    <div className="flex h-9 items-center rounded-md border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800">
                                                        {formatCurrency(
                                                            lineTotal
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                                                <input
                                                    type="checkbox"
                                                    checked={item.taxable}
                                                    onChange={(event) =>
                                                        updateLineItem(
                                                            item.id,
                                                            'taxable',
                                                            event.target.checked
                                                        )
                                                    }
                                                    className="h-4 w-4 rounded border-slate-300 text-[#243d66] focus:ring-[#243d66]"
                                                />
                                                Apply Canadian sales taxes to
                                                this line item
                                            </label>
                                        </div>
                                    );
                                })}

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={addLineItem}
                                    className="rounded-full"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add line item
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6 xl:sticky xl:top-28 xl:self-start">
                        <Card className="overflow-hidden border-0 bg-white shadow-2xl shadow-slate-200/70">
                            <CardHeader className="border-b border-slate-100 bg-[linear-gradient(135deg,#f6fbff_0%,#fff8ee_100%)]">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <CardTitle className="text-xl">
                                            Invoice Preview
                                        </CardTitle>
                                        <CardDescription>
                                            Export opens a print-ready dialog so
                                            the user can save the invoice as
                                            PDF.
                                        </CardDescription>
                                    </div>
                                    <Button
                                        type="button"
                                        size="lg"
                                        className="rounded-full bg-[#1f355b] px-6 hover:bg-[#162945]"
                                        onClick={handleDownloadPdf}
                                    >
                                        <Download className="h-4 w-4" />
                                        Download PDF
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <article className="bg-white p-6 sm:p-8">
                                    <div className="flex flex-col gap-8 border-b border-slate-200 pb-8 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="max-w-sm">
                                            {logoDataUrl ? (
                                                <Image
                                                    src={logoDataUrl}
                                                    alt="Company logo"
                                                    width={160}
                                                    height={160}
                                                    unoptimized
                                                    className="mb-5 max-h-24 w-auto rounded-2xl object-contain"
                                                />
                                            ) : null}
                                            <span className="inline-flex rounded-full bg-[#eef4ff] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#284680] uppercase">
                                                CAD Invoice
                                            </span>
                                            <h2 className="text-primary mt-4 text-3xl font-bold">
                                                {form.companyName ||
                                                    'Your company'}
                                            </h2>
                                            {form.contactName ? (
                                                <p className="mt-2 text-sm text-slate-600">
                                                    {form.contactName}
                                                </p>
                                            ) : null}
                                            {form.companyAddress ? (
                                                <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                                                    {form.companyAddress}
                                                </p>
                                            ) : null}
                                            {form.companyEmail ? (
                                                <p className="mt-3 text-sm text-slate-600">
                                                    {form.companyEmail}
                                                </p>
                                            ) : null}
                                            {form.companyPhone ? (
                                                <p className="mt-1 text-sm text-slate-600">
                                                    {form.companyPhone}
                                                </p>
                                            ) : null}
                                            {form.businessNumber ? (
                                                <p className="mt-1 text-sm text-slate-600">
                                                    BN / GST / HST No.{' '}
                                                    {form.businessNumber}
                                                </p>
                                            ) : null}
                                        </div>

                                        <div className="sm:text-right">
                                            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                                                Tax Invoice
                                            </p>
                                            <h2 className="text-primary mt-3 text-4xl font-bold sm:text-5xl">
                                                INVOICE
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="grid gap-6 border-b border-slate-200 py-8 md:grid-cols-[1.2fr_0.8fr]">
                                        <div className="space-y-5">
                                            <div>
                                                <p className="text-sm font-semibold tracking-[0.14em] text-slate-500 uppercase">
                                                    Bill To
                                                </p>
                                                <p className="mt-3 text-lg font-semibold text-slate-900">
                                                    {form.clientName ||
                                                        'Client name'}
                                                </p>
                                                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                                                    {form.clientAddress ||
                                                        'Client address'}
                                                </p>
                                                {form.clientEmail ? (
                                                    <p className="mt-2 text-sm text-slate-600">
                                                        {form.clientEmail}
                                                    </p>
                                                ) : null}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold tracking-[0.14em] text-slate-500 uppercase">
                                                    Place of Supply
                                                </p>
                                                <p className="mt-2 text-sm text-slate-700">
                                                    {selectedProvince}, Canada
                                                </p>
                                            </div>
                                        </div>

                                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                                            <div className="flex items-center justify-between gap-3 border-b border-slate-200 py-3 first:pt-0 last:border-b-0 last:pb-0">
                                                <span className="text-sm text-slate-500">
                                                    Invoice #
                                                </span>
                                                <span className="text-sm font-semibold text-slate-900">
                                                    {form.invoiceNumber ||
                                                        'INV-0001'}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3 border-b border-slate-200 py-3">
                                                <span className="text-sm text-slate-500">
                                                    Invoice Date
                                                </span>
                                                <span className="text-sm font-semibold text-slate-900">
                                                    {formatDisplayDate(
                                                        form.invoiceDate
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3 border-b border-slate-200 py-3">
                                                <span className="text-sm text-slate-500">
                                                    Due Date
                                                </span>
                                                <span className="text-sm font-semibold text-slate-900">
                                                    {formatDisplayDate(
                                                        form.dueDate
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-3 pt-3">
                                                <span className="text-sm text-slate-500">
                                                    Currency
                                                </span>
                                                <span className="text-sm font-semibold text-slate-900">
                                                    CAD
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto py-8">
                                        <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-3xl border border-slate-200">
                                            <thead>
                                                <tr className="bg-[#20345a] text-left text-white">
                                                    <th className="px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
                                                        Item
                                                    </th>
                                                    <th className="px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
                                                        Description
                                                    </th>
                                                    <th className="px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
                                                        Qty
                                                    </th>
                                                    <th className="px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
                                                        Rate
                                                    </th>
                                                    <th className="px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
                                                        Tax
                                                    </th>
                                                    <th className="px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
                                                        Amount
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {lineItems.map(
                                                    (item, index) => {
                                                        const lineTotal =
                                                            item.quantity *
                                                            item.rate;

                                                        return (
                                                            <tr
                                                                key={item.id}
                                                                className="bg-white even:bg-slate-50/70"
                                                            >
                                                                <td className="border-t border-slate-200 px-4 py-4 text-sm text-slate-500">
                                                                    {index + 1}
                                                                </td>
                                                                <td className="border-t border-slate-200 px-4 py-4 text-sm text-slate-800">
                                                                    {item.description ||
                                                                        'Untitled service'}
                                                                </td>
                                                                <td className="border-t border-slate-200 px-4 py-4 text-sm text-slate-600">
                                                                    {item.quantity.toFixed(
                                                                        2
                                                                    )}
                                                                </td>
                                                                <td className="border-t border-slate-200 px-4 py-4 text-sm text-slate-600">
                                                                    {formatCurrency(
                                                                        item.rate
                                                                    )}
                                                                </td>
                                                                <td className="border-t border-slate-200 px-4 py-4 text-sm text-slate-600">
                                                                    {item.taxable
                                                                        ? 'Applicable'
                                                                        : 'Exempt'}
                                                                </td>
                                                                <td className="border-t border-slate-200 px-4 py-4 text-sm font-semibold text-slate-900">
                                                                    {formatCurrency(
                                                                        lineTotal
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                )}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                        <div className="max-w-sm rounded-3xl border border-slate-200 bg-slate-50/80 p-5">
                                            <p className="text-sm font-semibold tracking-[0.14em] text-slate-500 uppercase">
                                                Notes
                                            </p>
                                            <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                                                {form.notes ||
                                                    'Add payment terms or client notes.'}
                                            </p>
                                        </div>

                                        <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white">
                                            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-sm text-slate-600">
                                                <span>Subtotal</span>
                                                <span className="font-semibold text-slate-900">
                                                    {formatCurrency(subtotal)}
                                                </span>
                                            </div>
                                            {form.hstRate > 0 ? (
                                                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-sm text-slate-600">
                                                    <span>
                                                        HST (
                                                        {formatRate(
                                                            form.hstRate
                                                        )}
                                                        )
                                                    </span>
                                                    <span className="font-semibold text-slate-900">
                                                        {formatCurrency(
                                                            hstAmount
                                                        )}
                                                    </span>
                                                </div>
                                            ) : null}
                                            {form.gstRate > 0 ? (
                                                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-sm text-slate-600">
                                                    <span>
                                                        GST (
                                                        {formatRate(
                                                            form.gstRate
                                                        )}
                                                        )
                                                    </span>
                                                    <span className="font-semibold text-slate-900">
                                                        {formatCurrency(
                                                            gstAmount
                                                        )}
                                                    </span>
                                                </div>
                                            ) : null}
                                            {form.regionalTaxRate > 0 ? (
                                                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-sm text-slate-600">
                                                    <span>
                                                        {form.regionalTaxName}{' '}
                                                        (
                                                        {formatRate(
                                                            form.regionalTaxRate
                                                        )}
                                                        )
                                                    </span>
                                                    <span className="font-semibold text-slate-900">
                                                        {formatCurrency(
                                                            regionalTaxAmount
                                                        )}
                                                    </span>
                                                </div>
                                            ) : null}
                                            <div className="flex items-center justify-between bg-[linear-gradient(135deg,#f6fbff_0%,#fff7ed_100%)] px-5 py-5">
                                                <span className="text-base font-semibold text-slate-900">
                                                    Total
                                                </span>
                                                <span className="text-xl font-bold text-slate-900">
                                                    {formatCurrency(
                                                        grandTotal
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </CardContent>
                        </Card>

                        <Card className="border border-[#dbe7fb] bg-[#f7fbff] shadow-sm">
                            <CardContent className="pt-6">
                                <p className="text-sm leading-6 text-slate-600">
                                    Canadian sales-tax defaults are loaded from
                                    the selected province or territory and can
                                    be edited before export. This tool does not
                                    store invoice data and does not replace
                                    professional tax advice.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div
                    aria-hidden="true"
                    className="pointer-events-none fixed top-0 left-[-200vw] overflow-hidden"
                >
                    <div ref={pdfTargetRef}>
                        <InvoicePdfDocument
                            form={form}
                            lineItems={lineItems}
                            logoDataUrl={logoDataUrl}
                            selectedProvince={selectedProvince}
                            subtotal={subtotal}
                            gstAmount={gstAmount}
                            hstAmount={hstAmount}
                            regionalTaxAmount={regionalTaxAmount}
                            grandTotal={grandTotal}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
