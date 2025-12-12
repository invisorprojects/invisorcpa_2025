import { withPayload } from '@payloadcms/next/withPayload';
import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            new URL('https://placehold.co/**'),
            new URL('https://a.storyblok.com/**'),
            new URL('https://www.invisorcpa.ca/**'),
        ],
    },
    reactCompiler: true,
    devIndicators: false,
};

export default withPlaiceholder(withPayload(nextConfig));
