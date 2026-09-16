import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lead Form | Invisor CPA',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ZohoLeadsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
