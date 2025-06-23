import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';

export function CaseStudiesCard() {
    const studies = [
        {
            image: '/assets/case-studies/case-study-1.jpg',
            title: 'Optimizing Financial Management for E-Commerce Growth and Efficiency',
            link: '/case-studies/1',
        },
        {
            image: '/assets/case-studies/case-study-2.jpg',
            title: 'Streamlining Financial Operations for an Audiology Service Provider',
            link: '/case-studies/2',
        },
        {
            image: '/assets/case-studies/case-study-3.jpg',
            title: 'Optimizing Financial Management for IT Solutions Provider',
            link: '/case-studies/3',
        },
    ];

    return (
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-stretch">
            {studies.map((study, index) => (
                <div
                    key={index}
                    className="flex max-w-sm flex-1 flex-col overflow-hidden rounded-xl bg-gray-100 hover:bg-sky-50"
                >
                    <Image
                        src={study.image}
                        alt="Case Study"
                        width={2048}
                        height={1152}
                        className="h-64 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                        <h3 className="text-primary text-lg font-bold">
                            {study.title}
                        </h3>
                        <Link href={study.link}>
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
            ))}
        </div>
    );
}
