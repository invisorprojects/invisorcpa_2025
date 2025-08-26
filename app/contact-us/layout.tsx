import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Invisor CPA | Tax Services Canada | Get CRA Tax Help',
    description:
        'Contact Invisor CPA for expert tax services Canada. Get professional tax accountant help, CRA tax filing support, and personal tax preparation services. Call or email us today.',
    keywords: [
        'Contact Invisor CPA',
        'Tax services Canada contact',
        'CRA tax help contact',
        'Personal tax accountant contact',
        'Tax preparation services contact',
        'Canadian tax expert contact',
        'Tax filing services contact',
        'Business tax preparation contact',
        'Tax consultant Canada contact',
        'Tax planning Canada contact',
        'Tax compliance Canada contact',
        'Best tax service Canada contact',
    ],
    openGraph: {
        title: 'Contact Invisor CPA | Tax Services Canada | Get CRA Tax Help',
        description:
            'Contact Invisor CPA for expert tax services Canada. Get professional tax accountant help, CRA tax filing support, and personal tax preparation services.',
        url: 'https://www.invisorcpa.ca/contact-us',
        siteName: 'Invisor CPA',
        images: [
            {
                url: '/assets/contact-us.png',
                width: 1200,
                height: 630,
                alt: 'Contact Invisor CPA - Tax Services Canada',
            },
        ],
        locale: 'en_CA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Invisor CPA | Tax Services Canada | Get CRA Tax Help',
        description:
            'Contact Invisor CPA for expert tax services Canada. Get professional tax accountant help, CRA tax filing support, and personal tax preparation services.',
        images: ['/assets/contact-us.png'],
    },
    alternates: {
        canonical: 'https://www.invisorcpa.ca/contact-us',
    },
};

export default function ContactUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
