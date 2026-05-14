'use client';

import Script from 'next/script';
import { useCallback, useEffect, useState } from 'react';

declare global {
    interface Window {
        Bookings?: {
            inlineEmbed: (options: {
                url: string;
                parent: string;
                height: string;
            }) => void;
        };
    }
}

const BOOKING_CONTAINER_ID = 'inline-container';
const BOOKING_URL =
    'https://engagecmareview1.zohobookings.in/portal-embed#/432161000000035178';

function getBookingHeight() {
    if (typeof window === 'undefined') {
        return '625px';
    }

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
        const availableHeight = window.innerHeight - 140;
        const boundedHeight = Math.min(Math.max(availableHeight, 720), 860);

        return `${boundedHeight}px`;
    }

    const availableHeight = window.innerHeight - 170;
    const boundedHeight = Math.min(Math.max(availableHeight, 600), 680);

    return `${boundedHeight}px`;
}

export default function ZohoBookingsInlineWidget() {
    const [height, setHeight] = useState('625px');

    useEffect(() => {
        const updateHeight = () => {
            setHeight(getBookingHeight());
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    const initializeBookingWidget = useCallback(() => {
        const container = document.getElementById(BOOKING_CONTAINER_ID);

        if (!container || !window.Bookings) {
            return;
        }

        container.innerHTML = '';
        window.Bookings.inlineEmbed({
            url: BOOKING_URL,
            parent: `#${BOOKING_CONTAINER_ID}`,
            height,
        });
    }, [height]);

    useEffect(() => {
        initializeBookingWidget();
    }, [initializeBookingWidget]);

    return (
        <>
            <Script
                src="https://bookings.nimbuspop.com/assets/embed.js"
                strategy="afterInteractive"
                onReady={initializeBookingWidget}
            />
            <div
                className="relative left-1/2 w-[calc(100vw-1.5rem)] max-w-[1500px] -translate-x-1/2 overflow-hidden rounded-lg border border-[#dde2ec] bg-white shadow-[0_1px_8px_rgba(28,38,61,0.05)] sm:w-[calc(100vw-3rem)] md:w-[calc(100vw-5rem)] lg:w-[calc(100vw-8rem)]"
                style={{ minHeight: height }}
            >
                <div
                    id={BOOKING_CONTAINER_ID}
                    className="calendly-inline-widget w-full"
                    style={{ minWidth: '320px', height, width: '100%' }}
                />
            </div>
        </>
    );
}
