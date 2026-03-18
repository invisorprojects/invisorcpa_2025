import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Review Our Service | Invisor CPA',
    description:
        'Share your feedback about Invisor CPA and rate your service experience.',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/review',
    },
};

export default function ReviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
