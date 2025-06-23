import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL('https://placehold.co/**'),
            new URL('https://a.storyblok.com/**'),
        ],
    },
};

export default nextConfig;
