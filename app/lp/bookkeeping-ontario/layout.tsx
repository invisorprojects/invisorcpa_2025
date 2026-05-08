import type { Metadata } from 'next';
import '../../(frontend)/globals.css';
import Banner from '@/components/layout/banner';
import Footer from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { openSans, poppins } from '@/constants/FONTS';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.invisorcpa.ca'),
};

export default function BookkeepingOntarioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} ${openSans.variable} scroll-smooth antialiased`}
        >
            <body>
                <Banner />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
