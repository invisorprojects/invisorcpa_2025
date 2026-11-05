import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../(frontend)/globals.css';

/* Page-scoped typography for the redesign demo:
 * Plus Jakarta Sans for headings, Inter for body copy. */
const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    weight: ['500', '600', '700', '800'],
    variable: '--font-rd-display',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-rd-sans',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.invisorcpa.ca'),
    title: 'Landing Page Redesign (Demo) | Invisor CPA',
    description:
        'Design preview of the new Invisor CPA landing page: modern CPA accounting, bookkeeping and tax for growing Canadian businesses.',
    // Demo route — keep it out of search results.
    robots: { index: false, follow: false },
};

export default function LandingRedesignDemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${jakarta.variable} ${inter.variable} scroll-smooth antialiased`}
        >
            <body className="bg-white font-[family-name:var(--font-rd-sans)] text-slate-900">
                {children}
            </body>
        </html>
    );
}
