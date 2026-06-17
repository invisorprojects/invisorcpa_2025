'use client';

import Script from 'next/script';

const CALENDLY_URL =
    'https://calendly.com/geevar-invisorstaffing/tax-consultation';

export default function CalendlyInlineWidget() {
    return (
        <>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />
            <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: '320px', height: '700px' }}
            />
        </>
    );
}
