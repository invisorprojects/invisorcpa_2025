'use client';

import { useId, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoaderCircle } from 'lucide-react';

/* Posts to the same Zoho web-to-lead form as the other site forms
 * (see app/lp/cross-border-tax/_components/cross-border-lead-form.tsx).
 * Location and service are folded into the message field (LEADCF32)
 * because they have no dedicated Zoho fields yet. */
const ZOHO_ENDPOINT = 'https://crm.zoho.in/crm/WebToLeadForm';

const ZOHO_HIDDEN: Record<string, string> = {
    xnQsjsdp:
        '93108f27608e72f336668528c22d0a704fb5730fe4728712f14c0d302bbaf90c',
    zc_gad: '',
    xmIwtLD:
        '8725995e4973668ac96e905ff69d10c175b1dff4e226bb139ed1fc2f7bed83ff460a34cbdceb8d1c8770bd7e75477a80',
    actionType: 'TGVhZHM=',
    returnURL: 'null',
    ldeskuid: '',
    LDTuvid: '',
    aG9uZXlwb3Q: '',
    'Lead Status': 'New Enquiry',
};

const LOCATIONS = [
    'London, ON (Physical Office)',
    'Centre Wellington / Fergus, ON (Physical Office)',
    'Elsewhere in Ontario (Remote)',
    'British Columbia (Remote)',
    'Alberta (Remote)',
    'Saskatchewan / Manitoba (Remote)',
    'Quebec (Remote)',
    'Atlantic Canada (Remote)',
];

const SERVICES = [
    'Monthly Bookkeeping & Financial Reporting',
    'Catch-Up / Cleanup Bookkeeping',
    'Corporate Tax (T2) & Planning',
    'Payroll & Source Deductions',
    'Sales Tax: HST / GST / PST / QST',
    'Sole Proprietor (T1 & T2125)',
    'Not sure yet, need advice',
];

type Values = {
    name: string;
    email: string;
    phone: string;
    location: string;
    service: string;
};
type Errors = Partial<Record<'name' | 'email' | 'phone', string>>;

function validate(v: Values): Errors {
    const errors: Errors = {};
    if (!v.name.trim()) errors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
        errors.email = 'Please enter a valid email.';
    }
    if (v.phone.replace(/\D/g, '').length < 10) {
        errors.phone = 'Please enter a 10-digit phone number.';
    }
    return errors;
}

const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 transition focus:border-sky-600 focus:ring-4 focus:ring-sky-600/15 focus:outline-none aria-[invalid=true]:border-red-500';
const labelClass = 'mb-2 block text-sm font-semibold text-slate-700';

export default function DiscoveryForm() {
    const router = useRouter();
    const uid = useId().replace(/:/g, '');
    const [values, setValues] = useState<Values>({
        name: '',
        email: '',
        phone: '',
        location: LOCATIONS[0],
        service: SERVICES[0],
    });
    const [errors, setErrors] = useState<Errors>({});
    const [submitError, setSubmitError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const set =
        (key: keyof Values) =>
        (
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
            setValues((prev) => ({ ...prev, [key]: e.target.value }));
            setErrors((prev) => ({ ...prev, [key]: undefined }));
        };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;
        const next = validate(values);
        setErrors(next);
        if (Object.keys(next).length) return;

        setSubmitting(true);
        setSubmitError('');

        const body = new FormData();
        Object.entries(ZOHO_HIDDEN).forEach(([k, v]) => body.append(k, v));
        body.append('First Name', values.name.trim());
        body.append('Last Name', '(not provided)');
        body.append('Email', values.email.trim());
        body.append('Phone', values.phone.trim());
        body.append(
            'LEADCF32',
            `Location: ${values.location} | Service: ${values.service} | Form: landing-page-redesign-demo`
        );

        try {
            await fetch(ZOHO_ENDPOINT, {
                method: 'POST',
                body,
                mode: 'no-cors',
                cache: 'no-store',
            });
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'lead_submit',
                form_location: 'landing-redesign-hero',
            });
            router.push('/thank-you');
        } catch {
            setSubmitError(
                'Something went wrong. Please try again or call (226) 227-3482.'
            );
            setSubmitting(false);
        }
    };

    const err = (key: keyof Errors) =>
        errors[key] ? (
            <p
                id={`${uid}-${key}-err`}
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600"
            >
                {errors[key]}
            </p>
        ) : null;

    return (
        <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div>
                <label htmlFor={`${uid}-name`} className={labelClass}>
                    Full Name
                </label>
                <input
                    id={`${uid}-name`}
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className={inputClass}
                    value={values.name}
                    onChange={set('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                />
                {err('name')}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                <div>
                    <label htmlFor={`${uid}-email`} className={labelClass}>
                        Business Email
                    </label>
                    <input
                        id={`${uid}-email`}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="jane@company.ca"
                        className={inputClass}
                        value={values.email}
                        onChange={set('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby={
                            errors.email ? `${uid}-email-err` : undefined
                        }
                    />
                    {err('email')}
                </div>
                <div>
                    <label htmlFor={`${uid}-phone`} className={labelClass}>
                        Phone Number
                    </label>
                    <input
                        id={`${uid}-phone`}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="(519) 000-0000"
                        className={inputClass}
                        value={values.phone}
                        onChange={set('phone')}
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                            errors.phone ? `${uid}-phone-err` : undefined
                        }
                    />
                    {err('phone')}
                </div>
            </div>

            <div>
                <label htmlFor={`${uid}-location`} className={labelClass}>
                    Primary Location / Hub
                </label>
                <select
                    id={`${uid}-location`}
                    className={inputClass}
                    value={values.location}
                    onChange={set('location')}
                >
                    {LOCATIONS.map((l) => (
                        <option key={l}>{l}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor={`${uid}-service`} className={labelClass}>
                    Primary Service Needed
                </label>
                <select
                    id={`${uid}-service`}
                    className={inputClass}
                    value={values.service}
                    onChange={set('service')}
                >
                    {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                    ))}
                </select>
            </div>

            {submitError && (
                <p role="alert" className="text-sm font-medium text-red-600">
                    {submitError}
                </p>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-700 px-6 py-4 font-[family-name:var(--font-rd-display)] text-[1.05rem] font-bold text-white shadow-lg shadow-sky-900/20 transition-colors hover:bg-sky-800 disabled:opacity-70"
            >
                {submitting ? (
                    <>
                        <LoaderCircle className="size-5 animate-spin" />
                        Sending…
                    </>
                ) : (
                    'Claim Free Tax & Bookkeeping Review'
                )}
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
                Zero obligations. Protected by Canadian privacy laws. See our{' '}
                <a
                    href="/privacy-policy"
                    className="font-medium text-sky-700 underline underline-offset-2"
                >
                    Privacy Policy
                </a>
                .
            </p>
        </form>
    );
}
