import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { openSans, poppins } from '@/constants/FONTS';
import FloatingButtons from '@/components/layout/floating-buttons';
import StoryblokProvider from '@/components/StoryblokProvider';
import LiveChat from '@/components/layout/LiveChat';

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
        <StoryblokProvider>
            <html
                lang="en"
                className={`${poppins.variable} ${openSans.variable} antialiased`}
            >
                <body>
                    <Header />
                    {children}
                    <Footer />
                    <FloatingButtons />
                    <LiveChat />
                </body>
            </html>
        </StoryblokProvider>
    );
}
