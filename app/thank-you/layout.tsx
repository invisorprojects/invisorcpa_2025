import Script from 'next/script';
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
                               <head>
       {/* Google Tag Manager */}
                <Script id="google-tag-manager" strategy="beforeInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-P9F755W5');
                    `}
                </Script>
                {/* End Google Tag Manager */}

        </head>
            <body>{children}</body>
        </html>
    );
}
