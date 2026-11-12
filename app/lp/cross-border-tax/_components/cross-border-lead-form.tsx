'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { PrivacyConsent } from '@/components/privacy-consent';
import { captureTracking, trackingValues } from './tracking';

/* ------------------------------------------------------------------ *
 * Zoho web form configuration ("Cross border Leads")
 * ------------------------------------------------------------------ *
 * Posts to the Zoho CRM web form for the custom module labelled "Leads"
 * in CRM (module CustomModule1, API name ACR_leads). Note the standard
 * Zoho Leads module is relabelled "CA Tax" in this org, so this form
 * deliberately does NOT use WebToLeadForm.
 *
 * Field mapping (from the Zoho-generated snippet):
 *   NAME      → Client Name (required)
 *   Email     → Email
 *   COBJ1CF2  → Contact Number 1
 *   COBJ1CF45 → Client Message
 *
 * Zoho only stores fields that are part of the web form. To capture more
 * (e.g. Lead Source = "Website - Cross border", UTM values), add them as
 * hidden fields in the Zoho web form builder, then put their field names
 * (COBJ1CFxx / "Lead Source") into ZOHO_CUSTOM_FIELD_NAMES below. Empty
 * names are skipped.
 * ------------------------------------------------------------------ */
const ZOHO_ENDPOINT = 'https://crm.zoho.in/crm/WebForm';

const ZOHO_HIDDEN: Record<string, string> = {
    xnQsjsdp:
        'b22ad1114c13dfb28bfdf53d34f6c825f2c6ae3b06e6e2f131ea1052d282f643',
    zc_gad: '',
    xmIwtLD:
        'f3ff9a408c3efa81d231724863c3d44035aea0f7f7eab57f1e91742b52e4211f86536eb5537acb142cb0af1b3af0cc80',
    actionType: 'Q3VzdG9tTW9kdWxlMQ==', // base64 "CustomModule1"
    returnURL: 'https://invisorcpa.ca/lp/cross-border-tax',
    aG9uZXlwb3Q: '', // honeypot — must stay empty
};

const ZOHO_CUSTOM_FIELD_NAMES = {
    lead_source: '', // add Lead Source as a hidden field in the Zoho form first
    utm_source: '', // UTM Source (custom text)
    utm_medium: '', // UTM Medium (custom text)
    utm_campaign: '', // UTM Campaign (custom text)
    utm_content: '', // UTM Content (custom text)
    utm_term: '', // UTM Term (custom text)
    gclid: '', // GCLID (built-in or custom text)
    form_location: '', // Form Location (custom text)
    landing_page: '', // Landing Page (custom text)
} as const;

const LANDING_PAGE_PATH = '/lp/cross-border-tax';
const THANK_YOU_PATH = '/lp/cross-border-tax/thank-you';
const PHONE_DISPLAY = '226-227-3482';

type FormLocation = 'hero' | 'footer';

type Props = {
    formLocation?: FormLocation;
    heading?: string;
    subheading?: string;
};

type Values = {
    full_name: string;
    email: string;
    phone: string;
    message: string;
};

type FieldKey = keyof Values;

const EMPTY_VALUES: Values = {
    full_name: '',
    email: '',
    phone: '',
    message: '',
};

function validate(values: Values): Partial<Record<FieldKey, string>> {
    const errors: Partial<Record<FieldKey, string>> = {};

    if (!values.full_name.trim()) {
        errors.full_name = 'Please enter your full name.';
    }
    if (!values.email.trim()) {
        errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
        errors.email = 'Please enter an email address we can reach you at.';
    }
    const digits = values.phone.replace(/\D/g, '');
    if (!values.phone.trim()) {
        errors.phone = 'Please enter a phone number we can reach you on.';
    } else if (digits.length < 10) {
        errors.phone = 'Please enter a phone number with at least 10 digits.';
    }
    if (!values.message.trim()) {
        errors.message = 'Please enter a message.';
    }

    return errors;
}

export default function CrossBorderLeadForm({
    formLocation = 'hero',
    heading = 'Book your free cross-border consultation',
    subheading = 'Takes about 60 seconds. No obligation.',
}: Props) {
    const router = useRouter();
    const uid = useId().replace(/:/g, '');
    const firstErrorRef = useRef<HTMLDivElement>(null);

    const [values, setValues] = useState<Values>(EMPTY_VALUES);
    const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
    const [submitError, setSubmitError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mirror UTM / gclid params into sessionStorage as soon as the form mounts.
    useEffect(() => {
        captureTracking();
    }, []);

    const setField = (key: FieldKey) => (value: string) => {
        setValues((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => {
            if (!prev[key]) return prev;
            const next = { ...prev };
            delete next[key];
            return next;
        });
    };

    const buildZohoBody = (tracking: Record<string, string>) => {
        const body = new FormData();

        Object.entries(ZOHO_HIDDEN).forEach(([name, value]) => {
            body.append(name, value);
        });

        // Map form fields to the "Cross border Leads" web form field names.
        body.append('NAME', values.full_name.trim());
        body.append('Email', values.email.trim());
        body.append('COBJ1CF2', values.phone.trim());
        body.append('COBJ1CF45', values.message.trim());

        // Values must match the Lead Source picklist in the Leads module.
        const leadSource =
            tracking.utm_source === 'google'
                ? 'Google Ads'
                : 'Website - Cross border';

        const extras: Record<string, string> = {
            lead_source: leadSource,
            utm_source: tracking.utm_source,
            utm_medium: tracking.utm_medium,
            utm_campaign: tracking.utm_campaign,
            utm_content: tracking.utm_content,
            utm_term: tracking.utm_term,
            gclid: tracking.gclid,
            form_location: formLocation,
            landing_page: LANDING_PAGE_PATH,
        };

        // Only append custom fields whose Zoho field name is known. Until the
        // fields exist in Zoho, these are skipped (see ZOHO_CUSTOM_FIELD_NAMES).
        (
            Object.keys(ZOHO_CUSTOM_FIELD_NAMES) as Array<
                keyof typeof ZOHO_CUSTOM_FIELD_NAMES
            >
        ).forEach((key) => {
            const zohoName = ZOHO_CUSTOM_FIELD_NAMES[key];
            const value = extras[key];
            if (zohoName && value) body.append(zohoName, value);
        });

        return body;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isSubmitting) return;

        const nextErrors = validate(values);
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) {
            // Move focus to the first invalid field's message for a11y.
            requestAnimationFrame(() => firstErrorRef.current?.focus());
            return;
        }

        setSubmitError('');
        setIsSubmitting(true);

        const tracking = trackingValues();

        try {
            await fetch(ZOHO_ENDPOINT, {
                method: 'POST',
                body: buildZohoBody(tracking),
                mode: 'no-cors',
                cache: 'no-store',
            });

            // Fire the GTM dataLayer lead event. No email or phone here.
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'lead_submit',
                form_location: formLocation,
            });

            // Hand off to the thank-you page via sessionStorage (keeps the
            // first name out of the URL / analytics). Email + phone are stored
            // for enhanced-conversions and cleared on the thank-you page.
            try {
                sessionStorage.setItem(
                    'lead_first_name',
                    values.full_name.trim().split(/\s+/)[0]
                );
                sessionStorage.setItem('lead_email', values.email.trim());
                sessionStorage.setItem('lead_phone', values.phone.trim());
            } catch {
                /* storage unavailable — thank-you page falls back gracefully */
            }

            router.push(THANK_YOU_PATH);
        } catch {
            setSubmitError(
                `Something went wrong. Please try again or call ${PHONE_DISPLAY}.`
            );
            setIsSubmitting(false);
        }
    };

    const describe = (key: FieldKey) =>
        errors[key] ? `${uid}-${key}-error` : undefined;

    return (
        <section className="cbt-lead-card">
            <div className="cbt-lead-card__topline" />
            <div className="cbt-lead-card__body">
                <p className="cbt-lead-card__badge">
                    Free · No obligation · About 60 seconds
                </p>
                <h2>{heading}</h2>
                <p className="cbt-lead-card__subheading">{subheading}</p>

                <form onSubmit={handleSubmit} noValidate className="cbt-lead-form">
                    <div className="cbt-form-grid">
                        {/* 1. Full name */}
                        <label
                            htmlFor={`${uid}-full_name`}
                            className="cbt-form-grid__wide"
                        >
                            <span>
                                Full name <b aria-hidden="true">*</b>
                            </span>
                            <input
                                id={`${uid}-full_name`}
                                name="full_name"
                                type="text"
                                maxLength={40}
                                autoComplete="name"
                                aria-required="true"
                                aria-invalid={!!errors.full_name}
                                aria-describedby={describe('full_name')}
                                value={values.full_name}
                                onChange={(e) =>
                                    setField('full_name')(e.target.value)
                                }
                                placeholder="Jane Doe"
                            />
                            {errors.full_name && (
                                <small
                                    id={`${uid}-full_name-error`}
                                    className="cbt-field-error"
                                    role="alert"
                                >
                                    {errors.full_name}
                                </small>
                            )}
                        </label>

                        {/* 2. Email */}
                        <label
                            htmlFor={`${uid}-email`}
                            className="cbt-form-grid__wide"
                        >
                            <span>
                                Email address <b aria-hidden="true">*</b>
                            </span>
                            <input
                                id={`${uid}-email`}
                                name="email"
                                type="email"
                                maxLength={100}
                                autoComplete="email"
                                inputMode="email"
                                aria-required="true"
                                aria-invalid={!!errors.email}
                                aria-describedby={describe('email')}
                                value={values.email}
                                onChange={(e) =>
                                    setField('email')(e.target.value)
                                }
                                placeholder="jane@example.com"
                            />
                            {errors.email && (
                                <small
                                    id={`${uid}-email-error`}
                                    className="cbt-field-error"
                                    role="alert"
                                >
                                    {errors.email}
                                </small>
                            )}
                        </label>

                        {/* 3. Phone */}
                        <label
                            htmlFor={`${uid}-phone`}
                            className="cbt-form-grid__wide"
                        >
                            <span>
                                Phone <b aria-hidden="true">*</b>
                            </span>
                            <input
                                id={`${uid}-phone`}
                                name="phone"
                                type="tel"
                                maxLength={30}
                                autoComplete="tel"
                                inputMode="tel"
                                aria-required="true"
                                aria-invalid={!!errors.phone}
                                aria-describedby={describe('phone')}
                                value={values.phone}
                                onChange={(e) =>
                                    setField('phone')(e.target.value)
                                }
                                placeholder="+1 (555) 000-0000"
                            />
                            {errors.phone && (
                                <small
                                    id={`${uid}-phone-error`}
                                    className="cbt-field-error"
                                    role="alert"
                                >
                                    {errors.phone}
                                </small>
                            )}
                        </label>

                        {/* 4. Message */}
                        <label
                            htmlFor={`${uid}-message`}
                            className="cbt-form-grid__wide"
                        >
                            <span>
                                Message <b aria-hidden="true">*</b>
                            </span>
                            <textarea
                                id={`${uid}-message`}
                                name="message"
                                rows={3}
                                aria-required="true"
                                aria-invalid={!!errors.message}
                                aria-describedby={describe('message')}
                                value={values.message}
                                onChange={(e) =>
                                    setField('message')(e.target.value)
                                }
                                placeholder="Anything else we should know?"
                            />
                            {errors.message && (
                                <small
                                    id={`${uid}-message-error`}
                                    className="cbt-field-error"
                                    role="alert"
                                >
                                    {errors.message}
                                </small>
                            )}
                        </label>
                    </div>

                    {/* First invalid field anchor / submit-level error */}
                    <div
                        ref={firstErrorRef}
                        tabIndex={-1}
                        className="cbt-form-focus-anchor"
                    />

                    {submitError && (
                        <p className="cbt-form-error" role="alert">
                            {submitError}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="cbt-form-next"
                    >
                        {isSubmitting ? (
                            <>
                                <LoaderCircle
                                    className="cbt-spin"
                                    aria-hidden="true"
                                />
                                Sending…
                            </>
                        ) : (
                            <>
                                Book My Free Consultation
                                <ArrowRight aria-hidden="true" />
                            </>
                        )}
                    </button>

                    <div className="cbt-form-legal">
                        <PrivacyConsent className="cbt-form-consent" />
                    </div>
                </form>
            </div>
        </section>
    );
}
