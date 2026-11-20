import localFont from 'next/font/local';

/*
 * Redesign typography, self-hosted so the build never has to reach
 * Google Fonts (a bad Google response broke a Vercel build).
 * Files are the latin variable fonts from Fontsource (SIL OFL 1.1).
 */

export const headingFont = localFont({
    src: './manrope-latin-var.woff2',
    weight: '200 800',
    style: 'normal',
    variable: '--font-rd-heading',
    display: 'swap',
});

export const bodyFont = localFont({
    src: './inter-latin-var.woff2',
    weight: '100 900',
    style: 'normal',
    variable: '--font-rd-body',
    display: 'swap',
});
