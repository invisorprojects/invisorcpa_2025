'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./_components/LeafletMap'), {
    ssr: false,
});

import ContactUs from '@/components/sections/contact-us';
import { Metadata } from 'next';
import { WorldMapDemo } from './WorldMapDemo';
import ContactUsForm from '@/components/ContactUsForm';

// export const metadata: Metadata = {
//     title: 'Contact Us',
// };

export default function ContactUsPage() {
    return (
        <main>
            <section className="flex flex-col items-center justify-between px-4 pt-4 sm:px-8 sm:pt-8 md:px-12 md:pt-12 lg:px-16 lg:pt-16 xl:px-24 xl:pt-24">
                <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                    <div className="max-w-2xl">
                        <h3 className="text-secondary text-xl font-medium">
                            CONTACT US
                        </h3>
                        <h2 className="text-primary mt-4 text-4xl font-bold sm:text-5xl">
                            Let&apos;s Connect : Schedule Your Consultation
                            Today!
                        </h2>
                    </div>
                    <div className="flex max-w-lg flex-col items-start gap-4">
                        <p className="text-[#686666]">
                            We&apos;re here to help with your bookkeeping and
                            accounting needs. Reach out to our team for expert
                            guidance, service inquiries, or to get started with
                            a customized financial solution for your business.
                        </p>
                    </div>
                </div>
            </section>
            <ContactUs />
            <GetInTouchSection />
            {/* <section className="flex flex-col items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <WorldMapDemo />
            </section> */}
            <section className="flex flex-col items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <LeafletMap />
            </section>
        </main>
    );
}

function GetInTouchSection() {
    return (
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                {/* Contact Details */}
                <div className="w-full space-y-8 md:w-1/2">
                    <h2 className="text-2xl font-semibold">Get In Touch</h2>

                    <div>
                        <h4 className="font-bold">Phone</h4>
                        <p>(+1) 226 577 9183</p>
                    </div>

                    <div>
                        <h4 className="font-bold">Email</h4>
                        <p>geevar.c@invisorglobal.com</p>
                    </div>

                    <div>
                        <h4 className="font-bold">Fergus Office</h4>
                        <p>
                            Unit B, 645 St David St. N, Fergus, N1M2K6, ON,{' '}
                            <br /> Canada
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold">London Office</h4>
                        <p>
                            Unit 120, 341 Talbot Street, London, Ontario,
                            N6A2R5, <br /> Canada.
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactUsForm />
            </div>
        </section>
    );
}
