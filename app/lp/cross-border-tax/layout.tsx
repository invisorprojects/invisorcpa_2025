import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Inter, Manrope } from 'next/font/google';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import '../../(frontend)/globals.css';
import './cross-border-tax.css';
import './redesign.css';
import ScrollLink from './_components/scroll-link';
import { GoogleTagManager } from '@/components/GoogleTagManager';

/* Page-scoped typography (redesign): Manrope for headings, Inter for body.
   The CSS variable names are kept so the thank-you page styles still apply. */
const headingFont = Manrope({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
    variable: '--font-cbt-serif',
    display: 'swap',
});

const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-cbt-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.invisorcpa.ca'),
};

const navLinks: { href: `#${string}`; label: string }[] = [
    { href: '#who-we-help', label: 'Who it’s for' },
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'Process' },
    { href: '#faq', label: 'FAQ' },
];

function CrossBorderHeader() {
    return (
        <header className="cbt-simple-header rd-header">
            <div className="cbt-container cbt-simple-header__inner">
                <ScrollLink
                    href="#top"
                    aria-label="Back to top"
                    className="cbt-logo"
                >
                    <Image
                        src="/invisorcpa-logo.png"
                        alt="Invisor"
                        width={980}
                        height={256}
                        priority
                    />
                </ScrollLink>
                <nav className="rd-header__nav" aria-label="Page sections">
                    {navLinks.map((link) => (
                        <ScrollLink key={link.href} href={link.href}>
                            {link.label}
                        </ScrollLink>
                    ))}
                </nav>
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
                        Book a consultation
                        <ArrowRight aria-hidden="true" />
                    </ScrollLink>
                </div>
            </div>
        </header>
    );
}

function CrossBorderFooter() {
    return (
        <footer className="rd-footer">
            <div className="cbt-container rd-footer__grid">
                <div className="rd-footer__brand">
                    <Image
                        src="/invisorcpa-logo.png"
                        alt="Invisor"
                        width={980}
                        height={256}
                    />
                    <p>
                        One team for your Canadian and US tax filings, from
                        planning to compliance.
                    </p>
                </div>
                <div className="rd-footer__pagelinks">
                    <h3>On this page</h3>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <ScrollLink href={link.href}>
                                    {link.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul className="rd-footer__contact">
                        <li>
                            <Phone aria-hidden="true" />
                            <a href="tel:+12262273482">+1 226-227-3482</a>
                        </li>
                        <li>
                            <Mail aria-hidden="true" />
                            <a href="mailto:connect@invisorcpa.ca">
                                connect@invisorcpa.ca
                            </a>
                        </li>
                        <li>
                            <MapPin aria-hidden="true" />
                            <span>341 Talbot St, Suite 120, London, ON</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rd-footer__legal">
                <div className="cbt-container rd-footer__legal-inner">
                    <p>
                        The information on this page is general and is not tax,
                        legal or accounting advice for a specific situation.
                    </p>
                    <p>
                        &copy; 2026 Invisor ·{' '}
                        <Link href="/privacy-policy">Privacy policy</Link>
                    </p>
                </div>
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
            className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth antialiased`}
        >
            <head>
                {/* Google Tag Manager — must stay first in <head> */}
                <GoogleTagManager />
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
