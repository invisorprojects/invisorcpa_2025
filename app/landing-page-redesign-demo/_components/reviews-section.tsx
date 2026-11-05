'use client';

import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react';
import { Stars, display } from './ui';

type Review = {
    name: string;
    image?: string;
    rating: number;
    text: string;
    time?: string;
    reviewUrl?: string;
};

type ReviewsResponse = {
    rating?: number;
    totalReviews?: number;
    reviews?: Review[];
    error?: string;
};

const REVIEW_LINK =
    'https://www.google.com/search?q=Invisor+CPA+London+Ontario+reviews';

function initials(name: string) {
    return name
        .split(/\s+/)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join('');
}

export default function ReviewsCarousel() {
    const [data, setData] = useState<ReviewsResponse | null>(null);
    const [failed, setFailed] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
    });

    useEffect(() => {
        const controller = new AbortController();
        fetch('/api/google-reviews', { signal: controller.signal })
            .then((r) => r.json() as Promise<ReviewsResponse>)
            .then((d) => {
                if (d.error || !d.reviews?.length) throw new Error();
                setData(d);
            })
            .catch((e) => {
                if (e?.name !== 'AbortError') setFailed(true);
            });
        return () => controller.abort();
    }, []);

    if (failed) return null;

    const reviews = data?.reviews ?? [];

    return (
        <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:gap-10">
            {/* Summary */}
            <div className="flex flex-col justify-between rounded-3xl bg-slate-900 p-8 text-white">
                <div>
                    <p className="text-sm font-semibold tracking-[0.1em] text-sky-300 uppercase">
                        Google Reviews
                    </p>
                    <p
                        className={`${display} mt-4 text-6xl font-extrabold tracking-tight`}
                    >
                        {data?.rating ? data.rating.toFixed(1) : '–'}
                    </p>
                    <Stars className="mt-2 text-2xl" />
                    <p className="mt-3 text-slate-300">
                        {data?.totalReviews
                            ? `Average rating from ${data.totalReviews} Google reviews`
                            : 'Loading reviews…'}
                    </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Previous review"
                        onClick={() => emblaApi?.scrollPrev()}
                        className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white/10 disabled:opacity-40"
                    >
                        <ChevronLeft className="size-5" />
                    </button>
                    <button
                        type="button"
                        aria-label="Next review"
                        onClick={() => emblaApi?.scrollNext()}
                        className="grid size-11 place-items-center rounded-full border border-white/20 transition hover:bg-white/10 disabled:opacity-40"
                    >
                        <ChevronRight className="size-5" />
                    </button>
                    <a
                        href={REVIEW_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-white"
                    >
                        View all
                        <ExternalLink className="size-3.5" />
                    </a>
                </div>
            </div>

            {/* Cards */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6">
                    {(reviews.length ? reviews : Array.from({ length: 3 })).map(
                        (r, i) => {
                            const review = r as Review | undefined;
                            return (
                                <article
                                    key={review?.name ?? i}
                                    className="flex min-h-72 min-w-0 flex-[0_0_88%] flex-col rounded-3xl border border-slate-200 bg-white p-7 sm:flex-[0_0_46%] xl:flex-[0_0_32%]"
                                >
                                    {review ? (
                                        <>
                                            <div className="flex items-center justify-between">
                                                <Stars className="text-lg" />
                                                <Quote
                                                    className="size-7 text-sky-100"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <p className="mt-4 line-clamp-6 flex-1 leading-relaxed text-slate-700">
                                                {review.text}
                                            </p>
                                            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                                                {review.image ? (
                                                    // Google avatar host isn't in next/image remotePatterns.
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={review.image}
                                                        alt=""
                                                        width={40}
                                                        height={40}
                                                        referrerPolicy="no-referrer"
                                                        className="size-10 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <span className="grid size-10 place-items-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">
                                                        {initials(review.name)}
                                                    </span>
                                                )}
                                                <div>
                                                    <p className="font-semibold text-slate-900">
                                                        {review.name}
                                                    </p>
                                                    {review.time && (
                                                        <p className="text-sm text-slate-500">
                                                            {review.time}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex-1 animate-pulse space-y-3">
                                            <div className="h-4 w-24 rounded bg-slate-100" />
                                            <div className="h-3 rounded bg-slate-100" />
                                            <div className="h-3 rounded bg-slate-100" />
                                            <div className="h-3 w-2/3 rounded bg-slate-100" />
                                        </div>
                                    )}
                                </article>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
}
