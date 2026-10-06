import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Public_Sans, Source_Serif_4 } from 'next/font/google';
import { ArrowRight, Phone } from 'lucide-react';
import '../../(frontend)/globals.css';
import './cross-border-tax.css';
import ScrollLink from './_components/scroll-link';

/* Page-scoped typography: Source Serif 4 for headings, Public Sans for body. */
const sourceSerif = Source_Serif_4({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-cbt-serif',
    display: 'swap',
});

const publicSans = Public_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-cbt-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.invisorcpa.ca'),
};

function CrossBorderHeader() {
    return (
        <header className="cbt-simple-header">
            <div className="cbt-container cbt-simple-header__inner">
                <Link href="/" aria-label="Invisor home" className="cbt-logo">
                    <Image
                        src="/invisorcpa-logo.png"
                        alt="Invisor"
                        width={980}
                        height={256}
                        priority
                    />
                </Link>
                <div className="cbt-simple-header__actions">
                    <a
                        href="tel:+12262273482"
                        className="cbt-simple-header__phone"
                        aria-label="Call Invisor at +1 (226) 227-3482"
                    >
                        <Phone aria-hidden="true" />
                        226-227-3482
                    </a>
                    <ScrollLink href="#hero-form" className="cbt-header-cta">
                        Free consultation
                        <ArrowRight aria-hidden="true" />
                    </ScrollLink>
                </div>
            </div>
        </header>
    );
}

function CrossBorderFooter() {
    return (
        <footer className="cbt-simple-footer">
            <div className="cbt-container cbt-simple-footer__inner">
                <p>
                    &copy; 2026 Invisor · 341 Talbot St, Suite 120, London, ON
                </p>
                <Link href="/privacy-policy">Privacy policy</Link>
            </div>
        </footer>
    );
}

export default function CrossBorderTaxLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${sourceSerif.variable} ${publicSans.variable} scroll-smooth antialiased`}
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
            <body className="cbt-site">
                <CrossBorderHeader />
                {children}
                <CrossBorderFooter />
                {/* Microsoft Clarity */}
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "wcinlb76xa");
                    `}
                </Script>
            </body>
        </html>
    );
}
