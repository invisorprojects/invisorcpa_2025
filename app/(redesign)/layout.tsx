import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Manrope } from 'next/font/google';
import '../(frontend)/globals.css';
import './redesign.css';
import { SiteHeader } from '@/components/redesign/site-header';
import { SiteFooter } from '@/components/redesign/site-footer';
import {
    GoogleTagManager,
    GoogleTagManagerNoScript,
} from '@/components/GoogleTagManager';

/*
 * Root layout for pages that have moved to the 2026 redesign.
 * Pages move here from (frontend) one at a time; navigating between the
 * two route groups does a full page load, which is expected.
 */

const headingFont = Manrope({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
    variable: '--font-rd-heading',
    display: 'swap',
});

const bodyFont = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-rd-body',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.invisorcpa.ca'),
};

export default function RedesignLayout({
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
            <body className="rd-body">
                <GoogleTagManagerNoScript />
                <SiteHeader />
                {children}
                <SiteFooter />
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
