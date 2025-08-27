'use client';

import { InlineWidget } from 'react-calendly';

export function ScheduleMeeting() {
    return (
        <section className="flex items-center justify-center bg-[#EFF0F4] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24">
            <div className="container-fluid calendar-wrapper w-full">
                <InlineWidget
                    url="https://calendly.com/ajith-k-bizfacts/30min"
                    styles={{
                        height: '700px',
                        width: '100%',
                        minWidth: '320px',
                    }}
                    pageSettings={{
                        backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '00a2ff',
                        textColor: '4d5055',
                    }}
                />
            </div>
        </section>
    );
}
