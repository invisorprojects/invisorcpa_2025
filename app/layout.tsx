import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { openSans, poppins } from '@/constants/FONTS';
import FloatingButtons from '@/components/layout/floating-buttons';
import StoryblokProvider from '@/components/StoryblokProvider';
import LiveChat from '@/components/layout/LiveChat';
import Banner from '@/components/layout/banner';
import SEOStructuredData from '@/components/SEOStructuredData';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';
import GA from './GA';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: {
        template: 'Invisor CPA | %s | Tax Services Canada',
        default: 'Invisor CPA - Expert Tax Filing & Accounting Services Canada',
    },
    description:
        'Professional tax filing services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services. Trusted by 1000+ clients nationwide.',
    keywords: [
        'Tax filing Canada',
        'Tax services Canada',
        'Tax preparation services Canada',
        'Personal tax accountant Canada',
        'CRA tax help',
        'Best tax service Canada',
        'Canadian tax accountant',
        'Tax preparation Canada',
        'Personal tax returns Canada',
        'Business tax services Canada',
        'CRA tax filing',
        'Tax consultant Canada',
        'Tax planning Canada',
        'Tax compliance Canada',
        'Canadian tax expert',
        'Tax preparation services',
        'Personal tax filing',
        'Business tax preparation',
        'Tax return services',
        'Tax accountant near me',
    ],
    authors: [{ name: 'Invisor CPA' }],
    creator: 'Invisor CPA',
    publisher: 'Invisor CPA',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.invisorcpa.ca'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_CA',
        url: 'https://www.invisorcpa.ca',
        siteName: 'Invisor CPA',
        title: 'Invisor CPA - Expert Tax Filing & Accounting Services Canada',
        description:
            'Professional tax filing services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services. Trusted by 1000+ clients nationwide.',
        images: [
            {
                url: '/invisor-logo.webp',
                width: 1200,
                height: 630,
                alt: 'Invisor CPA - Tax Services Canada',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Invisor CPA - Expert Tax Filing & Accounting Services Canada',
        description:
            'Professional tax filing services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services.',
        images: ['/invisor-logo.webp'],
        creator: '@invisorcpa',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'aJSoqSWoydgirSEhN5oKtA5B8aWFCbDrDVjF_tvXt4',
        yandex: 'your-yandex-verification-code',
        yahoo: 'your-yahoo-verification-code',
        other: {
            'msvalidate.01': '38DA8FFFF9D52A1C9236A51CEFEE7542',
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    return (
        <StoryblokProvider>
            <html
                lang="en"
                className={`${poppins.variable} ${openSans.variable} antialiased`}
            >
                <head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'AccountingService',
                                name: 'Invisor CPA',
                                description:
                                    'Professional tax filing and accounting services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services.',
                                url: 'https://www.invisorcpa.ca',
                                logo: 'https://www.invisorcpa.ca/invisor-logo.webp',
                                image: 'https://www.invisorcpa.ca/invisor-logo.webp',
                                telephone: '+1-XXX-XXX-XXXX',
                                email: 'info@invisorcpa.ca',
                                address: {
                                    '@type': 'PostalAddress',
                                    addressCountry: 'CA',
                                    addressRegion: 'Ontario',
                                    addressLocality: 'Toronto',
                                },
                                geo: {
                                    '@type': 'GeoCoordinates',
                                    latitude: '43.6532',
                                    longitude: '-79.3832',
                                },
                                openingHours: 'Mo-Fr 09:00-17:00',
                                priceRange: '$$',
                                serviceArea: {
                                    '@type': 'Country',
                                    name: 'Canada',
                                },
                                hasOfferCatalog: {
                                    '@type': 'OfferCatalog',
                                    name: 'Tax Services',
                                    itemListElement: [
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'Personal Tax Returns',
                                                description:
                                                    'Professional personal tax filing services in Canada',
                                            },
                                        },
                                        {
                                            '@type': 'Offer',
                                            itemOffered: {
                                                '@type': 'Service',
                                                name: 'Business Tax Services',
                                                description:
                                                    'Comprehensive business tax preparation and filing',
                                            },
                                        },
                                    ],
                                },
                                sameAs: [
                                    'https://www.linkedin.com/company/invisor-cpa',
                                    'https://www.facebook.com/invisorcpa',
                                    'https://twitter.com/invisorcpa',
                                ],
                            }),
                        }}
                    />
                </head>
                <body>
                    <PerformanceOptimizer />
                    <SEOStructuredData type="localBusiness" data={{}} />
                    <Banner />
                    <Header />
                    {children}
                    <Footer />
                    <FloatingButtons />
                    {/* <LiveChat /> */}
                    <Toaster richColors />
                    {/* GA4: load and init */}
                    {gaId && (
                        <>
                            <Script
                                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                                strategy="afterInteractive"
                            />
                            <Script id="ga-init" strategy="afterInteractive">
                                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { send_page_view: false });
                `}
                            </Script>
                        </>
                    )}

                    {/* Pageview tracker */}
                    <Suspense fallback={null}>
                        <GA />
                    </Suspense>

                    {/* Microsoft Clarity */}
                    <Script id="microsoft-clarity" strategy="afterInteractive">
                        {`
                            (function(c,l,a,r,i,t,y){
                                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                            })(window, document, "clarity", "script", "su57cef7ad");
                        `}
                    </Script>
                    {/* Same as: var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); */}
                    <Script id="tawk-init" strategy="beforeInteractive">
                        {`window.Tawk_API = window.Tawk_API || {};
          window.Tawk_LoadStart = new Date();`}
                    </Script>

                    <Script
                        id="tawk-src"
                        strategy="afterInteractive"
                        src="https://embed.tawk.to/687e45c13b2af81922773516/1j0mk1036"
                        // crossOrigin="anonymous"
                    />
                </body>
            </html>
        </StoryblokProvider>
    );
}
