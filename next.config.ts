import { withPayload } from '@payloadcms/next/withPayload';
import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
    /* config options here */
    outputFileTracingRoot: currentDir,
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
