'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { PrivacyConsent } from '@/components/privacy-consent';
import { captureTracking, trackingValues } from './tracking';

/* ------------------------------------------------------------------ *
 * Zoho web-to-lead configuration
 * ------------------------------------------------------------------ *
 * The form posts to the existing Zoho web-to-lead endpoint with the same
 * standard fields as components/ContactUsForm.tsx (name, email, phone,
 * message). The full name goes into First Name. The extra fields (UTM
 * set, gclid, lead source, form location, landing page) only land in
 * Zoho once the matching custom fields are created and their Zoho field
 * names are filled into ZOHO_CUSTOM_FIELD_NAMES below.
 *
 * TODO(crm): replace the empty strings with the Zoho field names (e.g.
 * "LEADCF40") once the custom fields exist. Lead Source is left empty
 * until "Google Ads – Cross-Border" / "Website – Cross-Border LP" are
 * added to the Lead Source picklist, since Zoho can reject the whole lead
 * on an unknown picklist value. Empty values are omitted from the POST.
 * ------------------------------------------------------------------ */
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

const ZOHO_CUSTOM_FIELD_NAMES = {
    lead_source: '', // 'Lead Source' once the picklist values exist
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

        // Standard fields — map semantic names to Zoho web-to-lead names.
        // The full name goes into First Name; Zoho requires a Last Name,
        // so it gets a placeholder.
        body.append('First Name', values.full_name.trim());
        body.append('Last Name', '(not provided)');
        body.append('Email', values.email.trim());
        body.append('Phone', values.phone.trim());
        // Message currently maps to the LEADCF32 custom field used by this form.
        body.append('LEADCF32', values.message.trim());

        // Lead Source rule from the spec.
        const leadSource =
            tracking.utm_source === 'google'
                ? 'Google Ads – Cross-Border'
                : 'Website – Cross-Border LP';

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

                        {/* 4. Message (optional) */}
                        <label
                            htmlFor={`${uid}-message`}
                            className="cbt-form-grid__wide"
                        >
                            <span>Message</span>
                            <textarea
                                id={`${uid}-message`}
                                name="message"
                                rows={3}
                                value={values.message}
                                onChange={(e) =>
                                    setField('message')(e.target.value)
                                }
                                placeholder="Anything else we should know? (optional)"
                            />
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
