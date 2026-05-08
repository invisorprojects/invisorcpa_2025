import '../(frontend)/globals.css';
import { openSans, poppins } from '@/constants/FONTS';

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
            <body>{children}</body>
        </html>
    );
}
