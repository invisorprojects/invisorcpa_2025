import type { ComponentType } from 'react';

import * as post0 from './top-5-benefits-of-outsourcing-your-bookkeeping-to-experts.mdx';
import * as post1 from './how-quickbooks-integration-can-streamline-your-business-operations.mdx';
import * as post2 from './why-accurate-bookkeeping-is-critical-for-your-business-growth.mdx';
import * as post3 from './how-technology-is-transforming-modern-accounting-practices.mdx';
import * as post4 from './tax-season-made-easy-tips-for-businesses-to-stay-prepared.mdx';
import * as post5 from './why-accurate-financial-reporting-is-key-to-business-growth.mdx';
import * as post6 from './bookkeeper-london-ontario-transaction-management-books.mdx';
import * as post7 from './personal-tax-returns.mdx';
import * as post8 from './personal-tax-accountant-save-time-money.mdx';

export type BlogCoverImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type BlogPostMetadata = {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    contentSummary: string;
    readTimeInMins: number;
    publishedAt: string;
    coverImage: BlogCoverImage;
};

type BlogPostModule = {
    default: ComponentType;
    metadata: BlogPostMetadata;
};

const postModules = [
    post0,
    post1,
    post2,
    post3,
    post4,
    post5,
    post6,
    post7,
    post8,
] as BlogPostModule[];

export const blogPosts = postModules.map(({ metadata }) => metadata);

export function getBlogPostBySlug(slug: string) {
    return postModules.find(({ metadata }) => metadata.slug === slug) ?? null;
}

export function getRecentBlogPosts(limit = 3) {
    return [...blogPosts]
        .sort(
            (first, second) =>
                new Date(second.publishedAt).getTime() -
                new Date(first.publishedAt).getTime()
        )
        .slice(0, limit);
}
