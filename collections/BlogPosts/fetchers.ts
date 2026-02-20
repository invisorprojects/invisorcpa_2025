import { getPayloadClient } from '@/lib/payload/client';
import { CACHE_TAG_BLOG_POSTS, STATUS_OPTIONS } from './constants';
import { unstable_cache } from 'next/cache';

async function _getPublishedBlogPosts() {
    const payload = await getPayloadClient();
    try {
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
    // return unstable_cache(_getPublishedBlogPosts, [], {
    //     tags: [CACHE_TAG_BLOG_POSTS],
    // })();
}

async function _getRecentBlogPosts() {
    const payload = await getPayloadClient();
    try {
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
    // return unstable_cache(_getRecentBlogPosts, [], {
    //     tags: [CACHE_TAG_BLOG_POSTS],
    // })();
}

export async function getBlogPostBySlug(slug: string) {
    const payload = await getPayloadClient();
    try {
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
