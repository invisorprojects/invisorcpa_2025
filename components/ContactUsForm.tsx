'use client';

import React, { useRef, useState } from 'react';
import Script from 'next/script';
import {
    User,
    Mail,
    Phone,
    RefreshCw,
    Send,
    CheckCircle2,
    MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PrivacyConsent } from '@/components/privacy-consent';

/* ------------------------------------------------------------------ *
 * Zoho web form configuration ("Website Homepage Leads")
 * ------------------------------------------------------------------ *
 * Posts to the Zoho CRM web form for the custom module labelled "Leads"
 * in CRM (CustomModule1). Used on /contact-us, blog posts and case
 * studies.
 *
 * Field mapping (from the Zoho-generated snippet):
 *   NAME      → Client Name (required)
 *   Email     → Email
 *   COBJ1CF2  → Contact Number 1
 *   COBJ1CF45 → Client Message
 *   COBJ1CF43 → Lead Source (hidden, always "Website")
 * ------------------------------------------------------------------ */
const ZOHO_ENDPOINT = 'https://crm.zoho.in/crm/WebForm';

const ZOHO_HIDDEN: Record<string, string> = {
    xnQsjsdp:
        '8de2b3989e03e220b5e53bec6f65331b97275c5a1b4929bcb6a2ae24e5acc2c9',
    zc_gad: '',
    xmIwtLD:
        '1a06b9641c6808fc7c767f29e60be0f6aeb4639955cb4ce012709a13b501b1bbf804b5e9c0baa74fc917e11ea26337fb',
    actionType: 'Q3VzdG9tTW9kdWxlMQ==', // base64 "CustomModule1"
    returnURL: 'https://www.invisorcpa.ca/contact-us',
    COBJ1CF43: 'Website', // Lead Source
    aG9uZXlwb3Q: '', // honeypot — must stay empty
};

const ZOHO_ANALYTICS_SRC =
    'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=8e4e872aa68528e62020b03fb17170ffc88f9507479e672cb1136315cd9d706ba67cbdc8ef7dbe84aaad56e9a4d9dec2gid2209b3e45e3cac6cb85c86115efcb3cbf39faf15414c3f3955db9801bc8310bcgid6b05066bf6603220f01e44dad110b07f954380d0b3d3b56b8c4cfea280a82181gid2fc83a1cfbb35394de64bcbd16277e54cdbdf60e102415fd91a82b86c4b528db&tw=ea629b86b4aced857b6a7e80c57cf5c43be8770360cc2808ade21e799e0faaf3&version=v2';

const SUCCESS_MESSAGE =
    'Thank you! Your message has been received. Our team will reach out to you shortly.';

const inputClass =
    'h-11 rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100';

const labelClass =
    'flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300';

export default function ContactUsForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get('NAME') ?? '').trim();
        const email = String(data.get('Email') ?? '').trim();
        const phone = String(data.get('COBJ1CF2') ?? '').trim();
        const message = String(data.get('COBJ1CF45') ?? '').trim();

        if (!name) {
            setError('Please enter your name.');
            (form.elements.namedItem('NAME') as HTMLInputElement)?.focus();
            return;
        }
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            (form.elements.namedItem('Email') as HTMLInputElement)?.focus();
            return;
        }

        setError('');
        setIsSubmitting(true);

        // URL-encoded, same as Zoho's own <form method="POST"> sends.
        const body = new URLSearchParams();
        Object.entries(ZOHO_HIDDEN).forEach(([key, value]) =>
            body.append(key, value)
        );
        body.append('NAME', name);
        body.append('Email', email);
        body.append('COBJ1CF2', phone);
        body.append('COBJ1CF45', message);

        try {
            // Zoho's WebForm endpoint doesn't send CORS headers, so the
            // response is opaque; a network failure still throws.
            await fetch(ZOHO_ENDPOINT, {
                method: 'POST',
                body,
                mode: 'no-cors',
                cache: 'no-store',
            });

            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'lead_submit',
                form_location: 'contact_form',
            });

            formRef.current?.reset();
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 8000);
        } catch {
            setError(
                'Something went wrong. Please try again or call 226-227-3482.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* SalesIQ Script */}
            <Script
                id="zoho-salesiq-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        var $zoho = $zoho || {};
                        $zoho.salesiq = $zoho.salesiq || {
                            widgetcode: 'siq1d948c6a930ae771b716446ddda51a6f4660fbc26975166a5c4a2f177d9d12bb901e024f6efc8db9c532992309d4058a',
                            values: {},
                            ready: function(){}
                        };
                        var d = document;
                        var s = d.createElement('script');
                        s.type = 'text/javascript';
                        s.id = 'zsiqscript';
                        s.defer = true;
                        s.src = 'https://salesiq.zoho.in/widget';
                        var t = d.getElementsByTagName('script')[0];
                        if (t && t.parentNode) {
                            t.parentNode.insertBefore(s, t);
                        } else {
                            d.head.appendChild(s);
                        }
                    `,
                }}
            />
            {/* Zoho web form analytics */}
            <Script
                id="wf_anal"
                src={ZOHO_ANALYTICS_SRC}
                strategy="afterInteractive"
            />

            {/* Success message */}
            {showSuccess && (
                <div
                    role="status"
                    className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-800 shadow-sm transition-all dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-300"
                >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium">
                        {SUCCESS_MESSAGE}
                    </span>
                </div>
            )}

            {/* Form Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/40 transition-all sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                <div className="mb-6 space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                        Send Us a Message
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Fill in your details below and our CPA team will reach
                        out to you promptly.
                    </p>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    noValidate
                    acceptCharset="UTF-8"
                    className="space-y-5"
                >
                    {/* Name */}
                    <div className="space-y-2">
                        <label htmlFor="NAME" className={labelClass}>
                            <User className="h-3.5 w-3.5 text-slate-400" />
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            type="text"
                            id="NAME"
                            name="NAME"
                            aria-required="true"
                            maxLength={120}
                            autoComplete="name"
                            placeholder="John Doe"
                            className={inputClass}
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="Email" className={labelClass}>
                            <Mail className="h-3.5 w-3.5 text-slate-400" />
                            Email Address
                        </label>
                        <Input
                            type="email"
                            id="Email"
                            name="Email"
                            maxLength={100}
                            autoComplete="email"
                            inputMode="email"
                            placeholder="john@example.com"
                            className={inputClass}
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <label htmlFor="COBJ1CF2" className={labelClass}>
                            <Phone className="h-3.5 w-3.5 text-slate-400" />
                            Phone Number
                        </label>
                        <Input
                            type="tel"
                            id="COBJ1CF2"
                            name="COBJ1CF2"
                            maxLength={30}
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="+1 (555) 000-0000"
                            className={inputClass}
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="COBJ1CF45" className={labelClass}>
                            <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                            Message
                        </label>
                        <Textarea
                            id="COBJ1CF45"
                            name="COBJ1CF45"
                            placeholder="Tell us about your requirements..."
                            className="min-h-[100px] resize-y rounded-lg border-slate-200 bg-slate-50/50 text-slate-900 transition-all focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100"
                        />
                    </div>

                    {error && (
                        <p
                            role="alert"
                            className="text-sm font-medium text-red-600"
                        >
                            {error}
                        </p>
                    )}

                    <div className="flex items-center gap-3 pt-2">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-12 flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:from-blue-700 hover:to-sky-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.99] disabled:opacity-70"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <RefreshCw className="h-4 w-4 animate-spin" />
                                    Submitting...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <Send className="h-4 w-4" />
                                    Submit
                                </span>
                            )}
                        </Button>
                    </div>
                    <PrivacyConsent className="text-slate-500 dark:text-slate-400" />
                </form>
            </div>
        </div>
    );
}
