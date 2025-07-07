import { CircleArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({
    content,
    slug,
}: {
    content: any;
    slug: string;
}) {
    return (
        <div className="group relative max-w-sm overflow-hidden rounded-xl shadow-sm">
            <Image
                src={content.image.filename}
                alt={`${content.title} - Tax services blog post by Invisor CPA, Canadian tax accountants`}
                width={600}
                height={400}
                className="h-[436px] w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
            <div className="absolute right-0 bottom-0 left-0 m-4 rounded-xl bg-white p-6 shadow-md transition-transform duration-300 group-hover:scale-95">
                <h3 className="text-lg leading-snug font-bold">
                    {content.title}
                </h3>
                <Link
                    href={`/blogs/${slug}`}
                    className="text-primary mt-4 inline-flex items-center text-sm font-semibold hover:underline"
                >
                    Read Post
                    <CircleArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
