import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
    const host = (await headers()).get('host')?.split(':')[0];

    if (host === 'stage.invisorcpa.ca') {
        return {
            // Google must be able to crawl staging temporarily to process the
            // X-Robots-Tag noindex header configured in next.config.ts.
            rules: {
                userAgent: '*',
                allow: '/',
            },
        };
    }

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/', '/api/'],
        },
        sitemap: 'https://www.invisorcpa.ca/sitemap.xml',
        host: 'https://www.invisorcpa.ca',
    };
}
