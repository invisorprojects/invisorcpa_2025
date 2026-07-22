export const REVIEW_LOCATIONS = [
    {
        name: 'London',
        slug: 'london',
        placeId: 'ChIJS4dQXIzzLogRH_-w_SFaeu8',
    },
    {
        name: 'Fergus',
        slug: 'fergus',
        placeId: 'ChIJnwAyNiC_K4gRJr1cFih8V9E',
    },
    {
        name: 'Strathroy',
        slug: 'strathroy',
        placeId: 'ChIJYxvDSZgFL4gRSckyvwWdnew',
    },
] as const;

export type ReviewLocation = (typeof REVIEW_LOCATIONS)[number];
export type ReviewLocationName = ReviewLocation['name'];
export type ReviewLocationSlug = ReviewLocation['slug'];

export const REVIEW_LOCATION_NAMES = REVIEW_LOCATIONS.map(
    (location) => location.name
) as ReviewLocationName[];

export const OFFICE_PLACE_IDS = REVIEW_LOCATIONS.reduce(
    (placeIds, location) => ({
        ...placeIds,
        [location.name]: location.placeId,
    }),
    {} as Record<ReviewLocationName, string>
);

export function getReviewLocationBySlug(slug: string) {
    return REVIEW_LOCATIONS.find((location) => location.slug === slug);
}
