import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { BlogMetadata } from './blog-metadata'

type BlogCardProps = {
    href: string
    title: string
    summary: string
    coverImage: Media
    publishedAt: Date
    readTimeMins: number
}

export function BlogCard({
    href,
    title,
    summary,
    coverImage,
    publishedAt,
    readTimeMins,
}: BlogCardProps) {
    return (
        <Link href={href} aria-label={`Read blog post: "${title}"`} className="block">
            <article className="rounded-md border border-gray-700 overflow-hidden h-full flex flex-col">
                {/* cover image */}
                <Image
                    src={coverImage.url ?? ''}
                    alt={`Cover image for blog post: "${title}"`}
                    width={600}
                    height={300}
                    className="h-[200px] object-cover object-center w-full"
                    placeholder="blur"
                    blurDataURL={coverImage.blurDataUrl}
                />

                {/* content */}
                <div className="p-3 flex-1 flex flex-col gap-5">
                    <header>
                        {/* title */}
                        <h2 className="font-bold text-lg">{title}</h2>
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
    )
}

export function BlogCardSkeleton() {
    return <div className="rounded-md h-[350px] animate-pulse bg-gray-700" />
}
