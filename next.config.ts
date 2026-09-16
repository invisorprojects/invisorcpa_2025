import { withPayload } from '@payloadcms/next/withPayload';
import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'stage.invisorcpa.ca' }],
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow, noarchive',
                    },
                ],
            },
        ];
    },
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'invisorcpa.ca' }],
                destination: 'https://www.invisorcpa.ca/:path*',
                permanent: true,
            },
        ];
    },
    images: {
        qualities: [100, 75],
        remotePatterns: [
            new URL('https://a.storyblok.com/**'),
            new URL('https://www.invisorcpa.ca/**'),
        ],
    },

    reactCompiler: true,
    devIndicators: false,
};

export default withPlaiceholder(withPayload(nextConfig));
