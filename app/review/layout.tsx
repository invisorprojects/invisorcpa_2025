import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../(frontend)/globals.css';

import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-review-sans',
});

export const metadata: Metadata = {
    title: 'AI Review Assistant | Invisor CPA',
    description:
        'Create a thoughtful Google review for Invisor CPA in a few quick taps.',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/review',
    },
};

export default function RequestReviewLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} antialiased`}>
            <body className={inter.className}>
                {children}
                <Toaster richColors />
            </body>
        </html>
    );
}
