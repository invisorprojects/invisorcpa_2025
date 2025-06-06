import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';

export const metadata: Metadata = {
    title: {
        template: 'Invisor Business Facts | %s ',
        default: 'Invisor Business Facts',
    },
    description:
        'We provide expert accounting, tax planning, and bookkeeping services to simplify your accounting journey with efficient, tech-driven solutions.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
