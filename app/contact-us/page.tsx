'use client';

import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./_components/LeafletMap'), {
    ssr: false,
});

import ContactUs from '@/components/sections/contact-us';
import ContactUsForm from '@/components/ContactUsForm';
import { Phone, Mail, MapPin } from 'lucide-react';

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
            <GetInTouchSection />
            <section className="mt-20 flex flex-col items-center justify-between px-4 py-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
                <LeafletMap />
            </section>
            <ContactUs />
        </main>
    );
}

function GetInTouchSection() {
    return (
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                {/* Contact Details */}
                <div className="w-full space-y-8 md:w-1/2">
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                        Get In Touch
                    </h2>

                    <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <Phone className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Phone</h3>
                            <p className="text-gray-600">(+1) 226 577 9183</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <Mail className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Email</h3>
                            <p className="text-gray-600">
                                geevar.c@invisorcpa.ca
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                            <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">
                                Fergus Office
                            </h3>
                            <p className="text-gray-600">
                                Unit B, 645 St David St. N, Fergus, N1M2K6, ON,{' '}
                                <br /> Canada
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                            <MapPin className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">
                                London Office
                            </h3>
                            <p className="text-gray-600">
                                375V- 341 Talbot St , London, ON N6A 2R5.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactUsForm />
            </div>
        </section>
    );
}
