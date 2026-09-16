/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from 'next';
import { getStoryblokApi } from '@/lib/storyblok';
import { SERVICES } from '@/constants/SERVICES';

const BASE_URL = 'https://www.invisorcpa.ca';

const staticEntries: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
    {
        url: `${BASE_URL}/services`,
        changeFrequency: 'monthly',
        priority: 0.9,
    },
    {
        url: `${BASE_URL}/about-us`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/contact-us`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/pricing`,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/privacy-policy`,
        changeFrequency: 'yearly',
        priority: 0.4,
    },
    {
        url: `${BASE_URL}/team`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/blogs`,
        changeFrequency: 'weekly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/case-studies`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/tax-calculator`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/payroll-calculator`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/free-invoice-generator`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/new-clients`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/site-map`,
        changeFrequency: 'monthly',
        priority: 0.4,
    },
    {
        url: `${BASE_URL}/services/bookkeeping-services`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/services/cloud-bookkeeping`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/services/industries`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/services/outsourced-bookkeeping`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/services/quickbooks-setup-bookkeeping`,
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${BASE_URL}/blogs/6-signs-your-small-business-needs-a-professional-accountant`,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/blogs/multigenerational-home-renovation-tax-credit-canada`,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/blogs/payroll-errors-ontario-businesses`,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/blogs/small-business-tax-accountant`,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/blogs/tax-id-number-canada`,
        changeFrequency: 'monthly',
        priority: 0.7,
    },
    {
        url: `${BASE_URL}/case-studies/construction-bookkeeping`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
    {
        url: `${BASE_URL}/case-studies/restaurant-bookkeeping`,
        changeFrequency: 'monthly',
        priority: 0.6,
    },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((service) => ({
        url: `${BASE_URL}/services/${service.slug}`,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const storyblokApi = getStoryblokApi();
    let blogEntries: MetadataRoute.Sitemap = [];
    let caseStudyEntries: MetadataRoute.Sitemap = [];

    try {
        const [blogs, caseStudies] = await Promise.all([
            storyblokApi.getAll('cdn/stories', {
                version:
                    process.env.NODE_ENV === 'production'
                        ? 'published'
                        : 'draft',
                starts_with: 'blogs',
                content_type: 'blog',
            }),
            storyblokApi.getAll('cdn/stories', {
                version:
                    process.env.NODE_ENV === 'production'
                        ? 'published'
                        : 'draft',
                starts_with: 'case-studies',
                content_type: 'case_study',
            }),
        ]);

        blogEntries = blogs.map((story: any) => ({
            url: `${BASE_URL}/blogs/${story.slug.replace('blogs/', '')}`,
            lastModified: story.published_at || story.updated_at,
            changeFrequency: 'weekly',
            priority: 0.6,
        }));

        caseStudyEntries = caseStudies.map((story: any) => ({
            url: `${BASE_URL}/case-studies/${story.slug.replace('case-studies/', '')}`,
            lastModified: story.published_at || story.updated_at,
            changeFrequency: 'monthly',
            priority: 0.5,
        }));
    } catch (error) {
        console.error(error);
    }

    const entries = [
        ...staticEntries,
        ...serviceEntries,
        ...blogEntries,
        ...caseStudyEntries,
    ];

    return Array.from(
        new Map(entries.map((entry) => [entry.url, entry])).values()
    );
}
