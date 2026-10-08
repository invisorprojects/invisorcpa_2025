'use client';

import { useEffect, useState } from 'react';

declare global {
    interface Window {
        /**
         * Read by a GTM "User-Provided Data" variable on the Google Ads
         * Enhanced Conversions tag. Google hashes these before sending.
         */
        enhanced_conversion_data?: { email: string; phone: string };
    }
}

/**
 * Greets the visitor by the first name stored on submission and hands the
 * email + phone to GTM for enhanced conversions, then clears them from
 * sessionStorage so they don't linger.
 */
export default function ThankYouClient() {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        let storedFirst = '';
        let storedEmail = '';
        let storedPhone = '';
        try {
            storedFirst = sessionStorage.getItem('lead_first_name') || '';
            storedEmail = sessionStorage.getItem('lead_email') || '';
            storedPhone = sessionStorage.getItem('lead_phone') || '';
        } catch {
            /* storage unavailable — show the page without a name */
        }

        // Storage is only readable after mount, so the greeting name has to be
        // applied here to stay hydration-safe (server renders the no-name copy).
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (storedFirst) setFirstName(storedFirst);

        // Expose user-provided data for the GTM enhanced-conversions tag.
        if (storedEmail || storedPhone) {
            window.enhanced_conversion_data = {
                email: storedEmail,
                phone: storedPhone,
            };
        }

        // Clear stored lead data once the conversion tag has had a chance to
        // fire, so a reload neither re-greets from stale data nor re-sends it.
        const timer = window.setTimeout(() => {
            try {
                sessionStorage.removeItem('lead_first_name');
                sessionStorage.removeItem('lead_email');
                sessionStorage.removeItem('lead_phone');
            } catch {
                /* ignore */
            }
        }, 4000);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <h1>
            {firstName
                ? `Thanks, ${firstName}. Your free consultation request is in.`
                : 'Thanks. Your free consultation request is in.'}
        </h1>
    );
}
