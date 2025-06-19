'use client';

import Script from 'next/script';

export function ScheduleMeeting() {
    return (
        <section className="flex items-center justify-center bg-[#EFF0F4] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24">
            <div className="container-fluid calendar-wrapper w-full">
                {/* Calendly Inline Widget */}
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/ajith-k-bizfacts/30min"
                    style={{
                        minWidth: '320px',
                        height: '700px',
                        width: '100%',
                    }}
                />

                {/* Calendly Script */}
                <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                />
            </div>
        </section>
    );
}
