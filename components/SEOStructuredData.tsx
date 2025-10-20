/* eslint-disable @typescript-eslint/no-explicit-any */
import Script from 'next/script';

interface SEOStructuredDataProps {
    type: 'organization' | 'breadcrumb' | 'service' | 'localBusiness';
    data: any;
}

export default function SEOStructuredData({
    type,
    data,
}: SEOStructuredDataProps) {
    const getStructuredData = () => {
        switch (type) {
            case 'organization':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'Invisor CPA',
                    description:
                        'Professional tax filing and accounting services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services.',
                    url: 'https://www.invisorcpa.ca',
                    logo: 'https://www.invisorcpa.ca/invisor-logo.webp',
                    image: 'https://www.invisorcpa.ca/invisor-logo.webp',
                    telephone: '+1-226-227-3482',
                    email: 'geevar.c@invisorglobal.com',
                    address: {
                        '@type': 'PostalAddress',
                        addressCountry: 'CA',
                        addressRegion: 'Ontario',
                        addressLocality: 'Fergus',
                        streetAddress: 'Unit B, 645 St David St. N',
                        postalCode: 'N1M2K6',
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
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Bookkeeping Services',
                                    description:
                                        'Professional bookkeeping and accounting services',
                                },
                            },
                            {
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: 'Payroll Management',
                                    description:
                                        'Comprehensive payroll processing and management',
                                },
                            },
                        ],
                    },
                    sameAs: [
                        'https://www.linkedin.com/company/invisor-cpa',
                        'https://www.facebook.com/invisorcpa',
                        'https://twitter.com/invisorcpa',
                    ],
                };

            case 'breadcrumb':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: data.breadcrumbs.map(
                        (item: any, index: number) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: item.name,
                            item: item.url,
                        })
                    ),
                };

            case 'service':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: data.name,
                    description: data.description,
                    provider: {
                        '@type': 'Organization',
                        name: 'Invisor CPA',
                        url: 'https://www.invisorcpa.ca',
                    },
                    serviceType: data.serviceType,
                    areaServed: {
                        '@type': 'Country',
                        name: 'Canada',
                    },
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: data.name,
                        itemListElement:
                            data.includes?.map((item: any) => ({
                                '@type': 'Offer',
                                itemOffered: {
                                    '@type': 'Service',
                                    name: item.caption,
                                    description: item.content,
                                },
                            })) || [],
                    },
                };

            case 'localBusiness':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'AccountingService',
                    name: 'Invisor CPA',
                    description:
                        'Professional tax filing and accounting services in Canada. Expert personal tax accountant, CRA tax help, and comprehensive tax preparation services.',
                    url: 'https://www.invisorcpa.ca',
                    logo: 'https://www.invisorcpa.ca/invisor-logo.webp',
                    image: 'https://www.invisorcpa.ca/invisor-logo.webp',
                    telephone: '+1-226-227-3482',
                    email: 'geevar.c@invisorglobal.com',
                    address: {
                        '@type': 'PostalAddress',
                        addressCountry: 'CA',
                        addressRegion: 'Ontario',
                        addressLocality: 'Fergus',
                        streetAddress: 'Unit B, 645 St David St. N',
                        postalCode: 'N1M2K6',
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
                };

            default:
                return {};
        }
    };

    return (
        <Script
            id={`structured-data-${type}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(getStructuredData()),
            }}
        />
    );
}
