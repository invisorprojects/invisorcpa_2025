import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { openSans, poppins } from '@/constants/FONTS';
import FloatingButtons from '@/components/layout/floating-buttons';
import StoryblokProvider from '@/components/StoryblokProvider';
import Banner from '@/components/layout/banner';
import SEOStructuredData from '@/components/SEOStructuredData';
import { PerformanceOptimizer } from '@/components/PerformanceOptimizer';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

export const metadata: Metadata = {
    title: {
        template: ' %s ',
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
                url: '/invisorcpa-logo.png',
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
        images: ['/invisorcpa-logo.png'],
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
        google: 'NaJSoqSWoydgirSEhN5oKtA5B8aWFCbDrDVjF_tvXt4',
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
    return (
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
                            logo: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
                            image: 'https://www.invisorcpa.ca/invisorcpa-logo.png',
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
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-P9F755W5"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                <StoryblokProvider>
                    <PerformanceOptimizer />
                    <SEOStructuredData type="localBusiness" data={{}} />
                    <Banner />
                    <Header />
                    {children}
                    <Footer />
                    <FloatingButtons />
                    <Toaster richColors />

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

                    {/* Zoho SalesIQ Chat Widget */}
                    <Script
                        id="zsiqchat"
                        strategy="lazyOnload"
                        dangerouslySetInnerHTML={{
                            __html: `
                                var $zoho = $zoho || {};
                                $zoho.salesiq = $zoho.salesiq || {
                                    widgetcode: "siq1d948c6a930ae771b716446ddda51a6f4660fbc26975166a5c4a2f177d9d12bb901e024f6efc8db9c532992309d4058a",
                                    values: {},
                                    ready: function(){}
                                };
                                var d = document;
                                var s = d.createElement("script");
                                s.type = "text/javascript";
                                s.id = "zsiqscript";
                                s.defer = true;
                                s.src = "https://salesiq.zoho.in/widget";
                                var t = d.getElementsByTagName("script")[0];
                                t.parentNode.insertBefore(s, t);
                            `,
                        }}
                    />
                </StoryblokProvider>
            </body>
        </html>
    );
}
