'use client';

import React, { useId, useRef, useState } from 'react';
import Script from 'next/script';
import {
    ArrowRight,
    CheckCircle2,
    LoaderCircle,
    Lock,
} from 'lucide-react';
import { PrivacyConsent } from '@/components/privacy-consent';

type Props = {
    withScripts?: boolean;
    heading?: string;
    subheading?: string;
};

export default function CrossBorderLeadForm({
    withScripts = false,
    heading = 'Book your free cross-border consultation',
    subheading = 'Takes about 60 seconds. No obligation.',
}: Props) {
    const formRef = useRef<HTMLFormElement>(null);
    const uid = useId().replace(/:/g, '');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = formRef.current;
        if (!form) return;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setError('');
        setIsSubmitting(true);
        try {
            const response = await fetch(
                'https://crm.zoho.in/crm/WebToLeadForm',
                {
                    method: 'POST',
                    body: new FormData(form),
                    cache: 'no-cache',
                }
            );
            const contentType = response.headers.get('Content-Type');
            const data =
                contentType?.includes('application/json')
                    ? await response.json()
                    : await response.text();

            setSuccess(
                typeof data === 'object' && data?.actionvalue
                    ? data.actionvalue
                    : 'Thank you. A cross-border specialist will be in touch within one business day.'
            );
            form.reset();
        } catch {
            setError('Something went wrong. Please try again or call us.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="cbt-lead-card">
            {withScripts && (
                <>
                    <Script
                        id="cbt-zoho-salesiq"
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
                                if (t && t.parentNode) t.parentNode.insertBefore(s, t);
                                else d.head.appendChild(s);
                            `,
                        }}
                    />
                    <Script
                        id="cbt-wf-anal"
                        src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=49ccacb85890151def45efaf3036fed561c4663bf2a8e68fcd046f01ae21f9a68052f2dc52ae298f393f095133ed3e62gide84d0131a9aab88bc58b1ecbe0aaa56f7f13c688d18cf749059f9c1e877270e1gidcd5de85c08fef1146ef30404ffd73f37242a3dd0b62be1691c49c312ffb23f68gid499417063d81621b2bb44eb6f6c4458552aa273867c783ffcfd41c903cf01be8&tw=ea20361527057f5044d256014df2b1edd5c583d0a13b3e5d1cde87a629e7211c&version=v2"
                        strategy="afterInteractive"
                    />
                </>
            )}

            <div className="cbt-lead-card__topline" />
            <div className="cbt-lead-card__body">
                <p className="cbt-lead-card__badge">
                    Free · No obligation · About 60 seconds
                </p>
                <h2>{heading}</h2>
                <p className="cbt-lead-card__subheading">{subheading}</p>

                {success ? (
                    <div className="cbt-form-success" role="status">
                        <span>
                            <CheckCircle2 aria-hidden="true" />
                        </span>
                        <h3>Request received</h3>
                        <p>{success}</p>
                    </div>
                ) : (
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        acceptCharset="UTF-8"
                        className="cbt-lead-form"
                    >
                        <input
                            type="hidden"
                            name="xnQsjsdp"
                            value="93108f27608e72f336668528c22d0a704fb5730fe4728712f14c0d302bbaf90c"
                            readOnly
                        />
                        <input type="hidden" name="zc_gad" value="" readOnly />
                        <input
                            type="hidden"
                            name="xmIwtLD"
                            value="8725995e4973668ac96e905ff69d10c175b1dff4e226bb139ed1fc2f7bed83ff460a34cbdceb8d1c8770bd7e75477a80"
                            readOnly
                        />
                        <input
                            type="hidden"
                            name="actionType"
                            value="TGVhZHM="
                            readOnly
                        />
                        <input
                            type="hidden"
                            name="returnURL"
                            value="null"
                            readOnly
                        />
                        <input type="hidden" name="ldeskuid" value="" readOnly />
                        <input type="hidden" name="LDTuvid" value="" readOnly />
                        <input
                            type="hidden"
                            name="aG9uZXlwb3Q"
                            value=""
                            readOnly
                        />
                        <input
                            type="hidden"
                            name="Lead Status"
                            value="New Enquiry"
                            readOnly
                        />

                        <div className="cbt-form-grid">
                            <label htmlFor={`${uid}-first-name`}>
                                <span>
                                    First name <b aria-hidden="true">*</b>
                                </span>
                                <input
                                    id={`${uid}-first-name`}
                                    name="First Name"
                                    type="text"
                                    maxLength={40}
                                    autoComplete="given-name"
                                    required
                                    aria-required="true"
                                    placeholder="Jane"
                                />
                            </label>
                            <label htmlFor={`${uid}-last-name`}>
                                <span>
                                    Last name <b aria-hidden="true">*</b>
                                </span>
                                <input
                                    id={`${uid}-last-name`}
                                    name="Last Name"
                                    type="text"
                                    maxLength={80}
                                    autoComplete="family-name"
                                    required
                                    aria-required="true"
                                    placeholder="Doe"
                                />
                            </label>
                            <label
                                htmlFor={`${uid}-email`}
                                className="cbt-form-grid__wide"
                            >
                                <span>
                                    Email address <b aria-hidden="true">*</b>
                                </span>
                                <input
                                    id={`${uid}-email`}
                                    name="Email"
                                    type="email"
                                    maxLength={100}
                                    autoComplete="email"
                                    required
                                    aria-required="true"
                                    placeholder="jane@example.com"
                                />
                            </label>
                            {/* Phone field temporarily hidden.
                            <label
                                htmlFor={`${uid}-phone`}
                                className="cbt-form-grid__wide"
                            >
                                <span>Phone number</span>
                                <input
                                    id={`${uid}-phone`}
                                    name="Phone"
                                    type="tel"
                                    maxLength={30}
                                    autoComplete="tel"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </label>
                            */}
                            <label
                                htmlFor={`${uid}-message`}
                                className="cbt-form-grid__wide"
                            >
                                <span>Message</span>
                                <textarea
                                    id={`${uid}-message`}
                                    name="LEADCF32"
                                    rows={4}
                                    placeholder="Tell us about your cross-border tax situation."
                                />
                            </label>
                        </div>

                        {error && (
                            <p className="cbt-form-error" role="alert">
                                {error}
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
                                    Book consultation
                                    <ArrowRight aria-hidden="true" />
                                </>
                            )}
                        </button>

                        <div className="cbt-form-legal">
                            <PrivacyConsent className="cbt-form-consent" />
                            {/*<p className="cbt-form-confidential">
                                <Lock aria-hidden="true" />
                                <span>
                                    Your information stays confidential. A
                                    cross-border specialist will reply within 1
                                    business day.
                                </span>
                            </p>*/}
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
