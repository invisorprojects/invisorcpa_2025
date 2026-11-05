import '../(frontend)/globals.css';
import { openSans, poppins } from '@/constants/FONTS';
import { GoogleTagManager } from '@/components/GoogleTagManager';

export default function ThankYouLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${poppins.variable} ${openSans.variable} antialiased`}
        >
            <head>
                {/* Google Tag Manager — must stay first in <head> */}
                <GoogleTagManager />
            </head>
            <body>{children}</body>
        </html>
    );
}
