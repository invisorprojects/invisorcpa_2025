import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ReviewAssistant } from '../_components/review-assistant';
import {
    REVIEW_LOCATIONS,
    getReviewLocationBySlug,
} from '../review-locations';

export function generateStaticParams() {
    return REVIEW_LOCATIONS.map((location) => ({
        office: location.slug,
    }));
}

export async function generateMetadata({
    params,
}: PageProps<'/review/[office]'>): Promise<Metadata> {
    const { office } = await params;
    const location = getReviewLocationBySlug(office);

    if (!location) {
        return {};
    }

    return {
        title: `Create Your ${location.name} Review | Invisor CPA`,
        description: `Create a ready-to-post Google review for Invisor CPA ${location.name}.`,
        alternates: {
            canonical: `https://www.invisorcpa.ca/request-review/${location.slug}`,
        },
    };
}

export default async function RequestReviewLocationPage({
    params,
}: PageProps<'/review/[office]'>) {
    const { office } = await params;
    const location = getReviewLocationBySlug(office);

    if (!location) {
        notFound();
    }

    return <ReviewAssistant initialOffice={location.name} />;
}
