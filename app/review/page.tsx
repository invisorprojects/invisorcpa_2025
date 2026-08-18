import type { Metadata } from 'next';

import { ReviewAssistant } from './_components/review-assistant';

export const metadata: Metadata = {
    title: 'Create Your Review | Invisor CPA',
    description:
        'Answer a few quick questions and get a ready-to-post Google review for Invisor CPA.',
};

export default function RequestReviewPage() {
    return <ReviewAssistant initialOffice="Fergus" />;
}
