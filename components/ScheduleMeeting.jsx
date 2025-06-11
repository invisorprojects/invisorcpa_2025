'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function ScheduleMeeting() {
    useEffect(() => {
        // Optional: reinitialize Calendly widget if needed
        if (window.Calendly) {
            window.Calendly.initInlineWidgets();
        }
    }, []);

    return (
        <div className="container-fluid calendar-wrapper w-full">
            {/* Calendly Inline Widget */}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ajith-k-bizfacts/30min"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
            />

            {/* Calendly Script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
            />
        </div>
    );
}
