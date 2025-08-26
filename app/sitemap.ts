import { MetadataRoute } from 'next';
import { getStoryblokApi } from '@/lib/storyblok';
import { SERVICES } from '@/constants/SERVICES';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://invisorcpa.ca';
    const currentDate = new Date();

    const staticEntries: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/tax-calculator`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/payroll-calculator`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/services/cross-border-taxes`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: currentDate,
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
            url: `${baseUrl}/blogs/${story.slug.replace('blogs/', '')}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        }));

        caseStudyEntries = caseStudies.map((story: any) => ({
            url: `${baseUrl}/case-studies/${story.slug.replace('case-studies/', '')}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        }));
    } catch (error) {
        // If Storyblok fails, fall back to static entries only
    }

    return [
        ...staticEntries,
        ...serviceEntries,
        ...blogEntries,
        ...caseStudyEntries,
    ];
}
