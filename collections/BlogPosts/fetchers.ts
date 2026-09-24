import { getPayloadClient } from '@/lib/payload/client';
import { STATUS_OPTIONS } from './constants';

async function _getPublishedBlogPosts() {
    try {
        const payload = await getPayloadClient();
        const { docs: blogPosts } = await payload.find({
            collection: 'blog-posts',
            where: { status: { equals: STATUS_OPTIONS.PUBLISHED } },
            select: {
                slug: true,
                title: true,
                contentSummary: true,
                coverImage: true,
                status: true,
                readTimeInMins: true,
                publishedAt: true,
            },
        });
        return blogPosts ?? [];
    } catch (error) {
        console.error('Failed to fetch blog posts', error);
        return [];
    }
}

export function getPublishedBlogPosts() {
    return _getPublishedBlogPosts();
}

async function _getRecentBlogPosts() {
    try {
        const payload = await getPayloadClient();
        const { docs: blogPosts } = await payload.find({
            collection: 'blog-posts',
            where: { status: { equals: STATUS_OPTIONS.PUBLISHED } },
            select: {
                slug: true,
                title: true,
                contentSummary: true,
                coverImage: true,
                status: true,
                readTimeInMins: true,
                publishedAt: true,
            },
            limit: 3,
            sort: 'publishedAt:desc',
        });
        return blogPosts ?? [];
    } catch (error) {
        console.error('Failed to fetch blog posts', error);
        return [];
    }
}

export function getRecentBlogPosts() {
    return _getRecentBlogPosts();
}

export async function getBlogPostBySlug(slug: string) {
    try {
        const payload = await getPayloadClient();
        const { docs: blogPosts } = await payload.find({
            collection: 'blog-posts',
            limit: 1,
            where: { slug: { equals: slug } },
        });
        const [firstBlogPost] = blogPosts ?? [];
        return firstBlogPost ?? null;
    } catch (error) {
        console.error('Failed to fetch blog posts', error);
        return null;
    }
}
