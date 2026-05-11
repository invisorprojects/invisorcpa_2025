import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import '../../(frontend)/globals.css';
import { Button } from '@/components/ui/button';
import { openSans, poppins } from '@/constants/FONTS';
import { ArrowRight, Leaf, Mail, Phone } from 'lucide-react';
import ScrollLink from './_components/scroll-link';
import Script from 'next/script';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.invisorcpa.ca'),
};

const footerBadges = [
    'CPA Firm',
    'EFILE Association',
    'QuickBooks Partner',
    'Xero Partner',
];

function BookkeepingOntarioHeader() {
    return (
        <>
            <div className="bg-secondary/10 px-4 py-2.5 text-foreground sm:px-8 lg:px-16 xl:px-24">
                <div className="mx-auto flex max-w-[1490px] flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <p className="inline-flex w-fit items-center gap-1.5 font-medium text-primary">
                        <Leaf className="size-4" aria-hidden="true" />
                        Member - Canadian Income Tax EFILE Association
                    </p>
                    <a
                        href="tel:+12262273482"
                        className="inline-flex w-fit items-center gap-1.5 font-semibold text-primary transition-colors hover:text-secondary"
                        aria-label="Call Invisor at +1 (226) 227-3482"
                    >
                        <Phone className="size-4" />
                        +1 (226) 227-3482
                    </a>
                </div>
            </div>

            <header className="sticky top-0 z-50 border-b bg-white px-4 shadow-sm sm:px-8 lg:px-16 xl:px-24">
                <div className="mx-auto flex h-20 max-w-[1490px] items-center justify-between gap-6">
                    <Link href="/" aria-label="Invisor home">
                        <Image
                            src="/invisorcpa-logo.png"
                            alt="Invisor"
                            width={980}
                            height={256}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>

                    <Button
                        asChild
                        size="lg"
                        className="h-11 rounded-full px-5 text-sm font-semibold sm:px-8 sm:text-base"
                    >
                        <ScrollLink href="#hero-form">
                            Get Free Quote
                            <ArrowRight data-icon="inline-end" />
                        </ScrollLink>
                    </Button>
                </div>
            </header>
        </>
    );
}

function BookkeepingOntarioFooter() {
    return (
        <footer className="bg-[#050912] px-4 pt-16 pb-28 text-white sm:px-8 sm:pb-10 lg:px-16 lg:pt-20 xl:px-24">
            <div className="mx-auto flex max-w-[1490px] flex-col gap-14">
                <div className="grid gap-12 lg:grid-cols-[1.35fr_0.8fr_0.9fr]">
                    <div className="flex max-w-xl flex-col items-start gap-7">
                          <Link href="/" aria-label="Invisor home">
                        <Image
                            src="/invisorcpa-logo.png"
                            alt="Invisor"
                            width={980}
                            height={256}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>
                        <p className="max-w-[560px] text-base leading-8 text-white/60">
                            CPA-led bookkeeping and tax services for Canadian
                            small businesses since 2008.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {footerBadges.map((badge) => (
                                <span
                                    key={badge}
                                    className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/65"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-7">
                        <h2 className="text-sm font-bold tracking-[0.18em] text-white uppercase">
                            Contact
                        </h2>
                        <div className="flex flex-col gap-3 text-base text-white/60">
                            <a
                                href="tel:+12262273482"
                                className="inline-flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <Phone className="size-4 text-white/35" />
                                +1 (226) 227-3482
                            </a>
                            <a
                                href="mailto:connect@invisorcpa.ca"
                                className="inline-flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <Mail className="size-4 text-[#8ED6FF]/70" />
                                connect@invisorcpa.ca
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-7">
                        <h2 className="text-sm font-bold tracking-[0.18em] text-white uppercase">
                            Offices
                        </h2>
                        <div className="flex flex-col gap-5 text-base leading-7 text-white/60">
                            <address className="not-italic">
                                <strong className="block font-bold text-white">
                                    Fergus
                                </strong>
                                645-B St. David St. N.
                                <br />
                                Fergus, ON N1M 2K6
                            </address>
                            <address className="not-italic">
                                <strong className="block font-bold text-white">
                                    London
                                </strong>
                                375V - 341 Talbot St.
                                <br />
                                London, ON N6A 2R5
                            </address>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; 2026 Invisor Canada. All rights reserved.</p>
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                        <a
                            href="#"
                            className="transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="transition-colors hover:text-white"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function BookkeepingOntarioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} ${openSans.variable} scroll-smooth antialiased`}
        >
                   <head>
       {/* Google Tag Manager */}
                <Script id="google-tag-manager" strategy="beforeInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-P9F755W5');
                    `}
                </Script>
                {/* End Google Tag Manager */}

        </head>
            <body>
                <BookkeepingOntarioHeader />
                {children}
                <BookkeepingOntarioFooter />
            </body>
        </html>
    );
}
