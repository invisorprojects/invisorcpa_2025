'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';
import {
    BadgeCheck,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Star,
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

type Review = {
    name: string;
    image?: string;
    rating: number;
    text: string;
    time?: string;
    authorUrl?: string;
    reviewUrl?: string;
};

type ReviewsResponse = {
    businessName?: string;
    rating?: number;
    totalReviews?: number;
    reviews?: Review[];
    error?: string;
};

export default function GoogleReviewsCarousel() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [summary, setSummary] = useState<ReviewsResponse>({});
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
        'loading'
    );
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        skipSnaps: false,
    });

    const onSelect = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        const controller = new AbortController();

        async function loadReviews() {
            try {
                const res = await fetch('/api/google-reviews', {
                    signal: controller.signal,
                });
                const data = (await res.json()) as ReviewsResponse;

                if (!res.ok || data.error) {
                    throw new Error(
                        data.error || 'Failed to load Google reviews'
                    );
                }

                setSummary(data);
                setReviews(data.reviews || []);
                setStatus('ready');
            } catch (error) {
                if (controller.signal.aborted) {
                    return;
                }

                console.error(error);
                setStatus('error');
            }
        }

        loadReviews();

        return () => controller.abort();
    }, []);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    if (status === 'error' || (status === 'ready' && reviews.length === 0)) {
        return null;
    }

    return (
        <section className="bg-gradient-to-b from-[#EFF0F4] via-white to-[#E5F2F8] py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E1E5A]/10 bg-white px-4 py-2 text-sm font-semibold text-[#1E1E5A] shadow-sm">
                            <BadgeCheck className="h-4 w-4 text-sky-600" />
                            Verified Google Reviews
                        </div>
                        <h2 className="text-3xl font-bold tracking-normal text-[#11135f] md:text-5xl">
                            Trusted by businesses that expect clear books.
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-7 text-gray-600">
                            Real feedback from clients who rely on Invisor for
                            dependable accounting, tax, and advisory support.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-4 rounded-lg border border-[#1E1E5A]/10 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between md:w-auto md:min-w-96">
                        <div className="flex items-center gap-3">
                            <div className="text-4xl font-bold text-[#11135f]">
                                4.9
                            </div>
                            <div>
                                <div
                                    className="flex gap-1"
                                    aria-label={`${summary.rating || 5} out of 5 stars`}
                                >
                                    {Array.from({ length: 4 }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                    {summary.totalReviews
                                        ? `${summary.totalReviews}+ Google reviews`
                                        : 'Google review rating'}
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/request-review"
                            aria-label="Leave us a review"
                            className="flex w-fit items-center gap-3 rounded-md border border-[#1E1E5A]/10 bg-white p-2 pr-4 transition-colors hover:border-[#1E1E5A]/40 focus-visible:ring-2 focus-visible:ring-[#1E1E5A] focus-visible:outline-none"
                        >
                            <Image
                                src="/qr.svg"
                                alt="QR code for leaving an Invisor CPA review"
                                width={72}
                                height={72}
                                className="h-18 w-18"
                            />
                            <span className="text-sm font-semibold text-[#11135f]">
                                Leave us a review
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div className="overflow-hidden py-1" ref={emblaRef}>
                        <div className="-ml-4 flex">
                            {status === 'loading'
                                ? Array.from({ length: 4 }).map((_, index) => (
                                      <ReviewSkeleton key={index} />
                                  ))
                                : reviews.map((review, index) => (
                                      <ReviewCard
                                          key={`${review.name}-${index}`}
                                          review={review}
                                      />
                                  ))}
                        </div>
                    </div>

                    {reviews.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={() => emblaApi?.scrollPrev()}
                                className="absolute top-1/2 left-0 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1E1E5A]/10 bg-white text-[#1E1E5A] shadow-lg transition hover:-translate-x-[55%] hover:bg-[#1E1E5A] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1E1E5A] md:flex"
                                aria-label="Previous review"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={() => emblaApi?.scrollNext()}
                                className="absolute top-1/2 right-0 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#1E1E5A]/10 bg-white text-[#1E1E5A] shadow-lg transition hover:translate-x-[55%] hover:bg-[#1E1E5A] hover:text-white focus-visible:ring-2 focus-visible:ring-[#1E1E5A] md:flex"
                                aria-label="Next review"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {reviews.length > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
                            <button
                                type="button"
                                onClick={() => emblaApi?.scrollPrev()}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E5A]/10 bg-white text-[#1E1E5A] shadow-sm"
                                aria-label="Previous review"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => emblaApi?.scrollNext()}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E5A]/10 bg-white text-[#1E1E5A] shadow-sm"
                                aria-label="Next review"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    )}

                    {scrollSnaps.length > 1 && (
                        <div className="mt-6 flex justify-center gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`h-2 rounded-full transition-all ${
                                        index === selectedIndex
                                            ? 'w-8 bg-[#1E1E5A]'
                                            : 'w-2 bg-[#1E1E5A]/20 hover:bg-[#1E1E5A]/40'
                                    }`}
                                    aria-label={`Go to review slide ${index + 1}`}
                                    aria-current={index === selectedIndex}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ review }: { review: Review }) {
    const isLongReview = review.text.length > 125;

    return (
        <div className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
            <Dialog>
                <article className="group relative flex h-full min-h-56 flex-col overflow-hidden rounded-lg border border-[#1E1E5A]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#E5F2F8]/35 hover:shadow-xl">
                    <div className="absolute top-0 right-0 h-20 w-20 rounded-bl-full bg-[#E5F2F8] transition duration-300 group-hover:bg-white/80" />

                    <div className="relative mb-5 flex items-center gap-3">
                        {review.image ? (
                            // Google review author images are remote user-generated URLs, so
                            // keep them as plain images instead of expanding Next image config.
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={review.image}
                                alt=""
                                className="h-12 w-12 shrink-0 rounded-full border border-white object-cover shadow-sm"
                                loading="lazy"
                            />
                        ) : (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5F2F8] text-base font-semibold text-[#1E1E5A]">
                                {review.name.charAt(0)}
                            </div>
                        )}

                        <div className="min-w-0">
                            {review.authorUrl ? (
                                <a
                                    href={review.authorUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex min-w-0 items-center gap-1.5 text-sm font-semibold text-[#11135f] hover:text-sky-600"
                                >
                                    <span className="truncate">
                                        {review.name}
                                    </span>
                                    <BadgeCheck className="h-3.5 w-3.5 shrink-0 fill-sky-100 text-sky-600" />
                                </a>
                            ) : (
                                <p className="flex min-w-0 items-center gap-1.5 text-sm font-semibold text-[#11135f]">
                                    <span className="truncate">
                                        {review.name}
                                    </span>
                                    <BadgeCheck className="h-3.5 w-3.5 shrink-0 fill-sky-100 text-sky-600" />
                                </p>
                            )}
                            <p className="text-sm leading-5 text-gray-500">
                                                        {review.time ? `  ${review.time}` : ''}

                            </p>
                        </div>
                    </div>

                    <div
                        className="relative mb-3 flex gap-0.5"
                        aria-label={`${review.rating} out of 5 stars`}
                    >
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={`h-4 w-4 ${
                                    index < review.rating
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'fill-gray-100 text-gray-200'
                                }`}
                            />
                        ))}
                    </div>

                    <p className="relative line-clamp-4 text-base leading-6 text-gray-700">
                        {review.text}
                    </p>

                    {isLongReview && (
                        <DialogTrigger asChild>
                            <button
                                type="button"
                                className="relative mt-1 w-fit text-left text-base leading-6 text-sky-600 transition hover:text-[#1E1E5A] focus-visible:ring-2 focus-visible:ring-[#1E1E5A] focus-visible:outline-none"
                            >
                                Read more
                            </button>
                        </DialogTrigger>
                    )}
                </article>

                {isLongReview && <ReviewDialogContent review={review} />}
            </Dialog>
        </div>
    );
}

function ReviewDialogContent({ review }: { review: Review }) {
    return (
        <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto rounded-lg border border-[#1E1E5A]/10 bg-white p-8 text-gray-700 shadow-2xl sm:max-w-2xl md:p-10">
            <DialogTitle className="sr-only">
                Google review from {review.name}
            </DialogTitle>
            <DialogDescription className="sr-only">
                Full Google review text and reviewer details.
            </DialogDescription>

            <div className="mb-7 flex items-center gap-4">
                {review.image ? (
                    // Google review author images are remote user-generated URLs, so
                    // keep them as plain images instead of expanding Next image config.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={review.image}
                        alt=""
                        className="h-14 w-14 shrink-0 rounded-full border border-white object-cover shadow-sm"
                    />
                ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E5F2F8] text-lg font-semibold text-[#1E1E5A]">
                        {review.name.charAt(0)}
                    </div>
                )}

                <div className="min-w-0">
                    {review.authorUrl ? (
                        <a
                            href={review.authorUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex min-w-0 items-center gap-2 text-xl font-bold text-[#11135f] hover:text-sky-600"
                        >
                            <span className="truncate">{review.name}</span>
                            <BadgeCheck className="h-4 w-4 shrink-0 fill-sky-100 text-sky-600" />
                        </a>
                    ) : (
                        <p className="flex min-w-0 items-center gap-2 text-xl font-bold text-[#11135f]">
                            <span className="truncate">{review.name}</span>
                            <BadgeCheck className="h-4 w-4 shrink-0 fill-sky-100 text-sky-600" />
                        </p>
                    )}

                    {review.reviewUrl ? (
                        <a
                            href={review.reviewUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-base text-gray-500 hover:text-sky-600"
                        >
                            Posted on{' '}
                            <span className="font-semibold text-[#1E1E5A]">
                                Google
                            </span>
                            {review.time ? ` - ${review.time}` : ''}
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    ) : (
                        <p className="text-base text-gray-500">
                            Posted on{' '}
                            <span className="font-semibold text-[#1E1E5A]">
                                Google
                            </span>
                            {review.time ? ` - ${review.time}` : ''}
                        </p>
                    )}
                </div>
            </div>

            <div
                className="mb-4 flex gap-1"
                aria-label={`${review.rating} out of 5 stars`}
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className={`h-6 w-6 ${
                            index < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-100 text-gray-200'
                        }`}
                    />
                ))}
            </div>

            <p className="text-xl leading-8 text-gray-700 md:text-2xl md:leading-9">
                {review.text}
            </p>
        </DialogContent>
    );
}

function ReviewSkeleton() {
    return (
        <div className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
            <div className="h-full min-h-56 rounded-lg border border-[#1E1E5A]/10 bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                    <div className="h-12 w-12 animate-pulse rounded-full bg-gray-200" />
                    <div className="space-y-2">
                        <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                        <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
                    </div>
                </div>
                <div className="mb-3 h-4 w-24 animate-pulse rounded bg-gray-200" />
                <div className="space-y-2">
                    <div className="h-4 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-gray-200" />
                </div>
            </div>
        </div>
    );
}
