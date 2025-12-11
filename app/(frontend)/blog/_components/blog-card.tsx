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

export function BlogCard({
    href,
    title,
    summary,
    coverImage,
    publishedAt,
    readTimeMins,
}: BlogCardProps) {
    return (
        <Link
            href={href}
            aria-label={`Read blog post: "${title}"`}
            className="block"
        >
            <article className="flex h-full flex-col overflow-hidden rounded-md border border-gray-700">
                {/* cover image */}
                <Image
                    src={coverImage.url ?? ''}
                    alt={`Cover image for blog post: "${title}"`}
                    width={600}
                    height={300}
                    className="h-[200px] w-full object-cover object-center"
                    placeholder="blur"
                    blurDataURL={coverImage.blurDataUrl}
                />

                {/* content */}
                <div className="flex flex-1 flex-col gap-5 p-3">
                    <header>
                        {/* title */}
                        <h2 className="text-lg font-bold">{title}</h2>
                        {/* summary */}
                        <p className="mt-2">{summary}</p>
                    </header>

                    <BlogMetadata
                        intent="card"
                        data={{ publishedAt, readTimeMins }}
                        className="mt-auto"
                    />
                </div>
            </article>
        </Link>
    );
}

export function BlogCardSkeleton() {
    return <div className="h-[350px] animate-pulse rounded-md bg-gray-700" />;
}
