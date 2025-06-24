import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';
export function CaseStudyCard({
    content,
    slug,
}: {
    content: any;
    slug: string;
}) {
    console.log(slug);
    return (
        <div className="flex max-w-sm flex-1 flex-col overflow-hidden rounded-xl bg-gray-100 hover:bg-sky-50">
            <Image
                src={content.image.filename}
                alt="Case Study"
                width={2048}
                height={1152}
                className="h-64 w-full object-cover"
            />
            <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                <h3 className="text-primary text-lg font-bold">
                    {content.title}
                </h3>
                <Link href={`/case-studies/${slug}`}>
                    <Button
                        variant="ghost"
                        className="text-primary flex items-center gap-2 px-0 text-sm font-bold hover:bg-sky-50 hover:underline"
                    >
                        View Case Study
                        <CircleArrowRight className="h-5 w-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
