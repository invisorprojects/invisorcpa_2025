import { DUMMY_REVIEWS } from '@/constants/DUMMY_REVIEWS';
import { NextResponse } from 'next/server';

type GoogleReview = {
    authorAttribution?: {
        displayName?: string;
        photoUri?: string;
        uri?: string;
    };
    googleMapsUri?: string;
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: {
        text?: string;
    };
};

type GooglePlaceDetails = {
    displayName?: {
        text?: string;
    };
    rating?: number;
    reviews?: GoogleReview[];
    userRatingCount?: number;
};

type Review = {
    name: string;
    image?: string;
    rating: number;
    text: string;
    time?: string;
    authorUrl?: string;
    reviewUrl?: string;
};
const FOURTEEN_DAYS = 60 * 60 * 24 * 14; // 1209600
const MINIMUM_REVIEW_RATING = 4;
const CACHE_HEADERS = {
    'Cache-Control': `public, s-maxage=${FOURTEEN_DAYS}, stale-while-revalidate=${FOURTEEN_DAYS}`,
};

export async function GET() {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (process.env.NODE_ENV === 'development') {
        return NextResponse.json(
            {
                businessName: 'Test Business',
                rating: 5,
                totalReviews: 100,
                reviews: DUMMY_REVIEWS,
            },
            { headers: CACHE_HEADERS }
        );
    }

    if (!placeId || !apiKey) {
        return NextResponse.json(
            { error: 'Missing Google API key or Place ID' },
            { status: 500 }
        );
    }

    const url = `https://places.googleapis.com/v1/places/${placeId}`;

    const res = await fetch(url, {
        headers: {
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'displayName,rating,userRatingCount,reviews',
        },
        next: { revalidate: FOURTEEN_DAYS },
    });

    if (!res.ok) {
        const errorText = await res.text();

        console.error('Google Places API error:', {
            body: errorText,
            status: res.status,
        });

        return NextResponse.json(
            { error: 'Failed to fetch Google reviews' },
            { status: 502 }
        );
    }

    const data = (await res.json()) as GooglePlaceDetails;
    const reviews: Review[] =
        data.reviews
            ?.filter(
                (review) =>
                    typeof review.rating === 'number' &&
                    review.rating >= MINIMUM_REVIEW_RATING &&
                    review.text?.text
            )
            .map((review) => ({
                name: review.authorAttribution?.displayName || 'Google user',
                image: review.authorAttribution?.photoUri,
                rating: review.rating || 5,
                text: review.text?.text || '',
                time: review.relativePublishTimeDescription,
                authorUrl: review.authorAttribution?.uri,
                reviewUrl: review.googleMapsUri,
            })) || [];

    return NextResponse.json(
        {
            businessName: data.displayName?.text,
            rating: data.rating,
            totalReviews: data.userRatingCount,
            reviews,
        },
        { headers: CACHE_HEADERS }
    );
}
