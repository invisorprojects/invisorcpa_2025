import { Open_Sans, Poppins } from 'next/font/google';

export const poppins = Poppins({
    subsets: ['latin'],
    weight: '300',
    variable: '--font-poppins',
});

export const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-open-sans',
});
