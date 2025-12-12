import { CircleArrowRight } from 'lucide-react';

import { Media } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import { BlogMetadata } from './blog-metadata';

type BlogCardProps = {
    href: string;
    title: string;
    summary: string;
    coverImage: Media;
    publishedAt: Date;
    readTimeMins: number;
};

export default function BlogCard({
    href,
    title,
    summary,
    coverImage,
    publishedAt,
    readTimeMins,
}: BlogCardProps) {
    return (
        <article className="group relative max-w-sm overflow-hidden rounded-xl shadow-sm">
            {/* cover image */}
            <Image
                src={coverImage.url ?? ''}
                alt={`Cover image for blog post: "${title}"`}
                width={600}
                height={400}
                className="h-[436px] w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
                placeholder="blur"
                blurDataURL={coverImage.blurDataUrl}
                unoptimized
            />
            {/* content */}
            <Link href={href} aria-label={`Read blog post: "${title}"`}>
                <div className="absolute right-0 bottom-0 left-0 m-4 rounded-xl bg-white p-6 shadow-md transition-transform duration-300 group-hover:scale-95">
                    <BlogMetadata
                        intent="card"
                        data={{ publishedAt, readTimeMins }}
                        className="mb-2"
                    />
                    <h3 className="text-lg leading-snug font-bold">{title}</h3>
                    <div className="text-primary mt-4 inline-flex items-center text-sm font-semibold hover:underline">
                        Read Post
                        <span className="sr-only">: {title}</span>
                        <CircleArrowRight className="ml-1 h-4 w-4" />
                    </div>
                </div>
            </Link>
        </article>
    );
}

export function BlogCardSkeleton() {
    return (
        <article className="group relative max-w-sm overflow-hidden rounded-xl shadow-sm">
            {/* cover image skeleton */}
            <div className="h-[436px] w-full animate-pulse bg-gray-200" />

            {/* content skeleton */}
            <div className="absolute right-0 bottom-0 left-0 m-4 rounded-xl bg-white p-6 shadow-md transition-transform duration-300 group-hover:scale-95">
                <div className="mb-2 h-4 w-32 animate-pulse rounded bg-gray-200" />
                <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
                <div className="mt-4 h-10 w-full animate-pulse rounded bg-gray-100" />
            </div>
        </article>
    );
}
