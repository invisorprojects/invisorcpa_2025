import { groq } from '@ai-sdk/groq';
import { generateText, jsonSchema, Output } from 'ai';
import { NextResponse } from 'next/server';

type ReviewTone = 'concise professional' | 'warm personal' | 'detailed helpful';

type ReviewOption = {
    id: string;
    tone: ReviewTone;
    title: string;
    text: string;
};

type ReviewResponse = {
    reviews: ReviewOption[];
};

type ReviewRequestBody = {
    service?: unknown;
    experienceRating?: unknown;
    experience?: unknown;
    standout?: unknown;
    teamMember?: unknown;
    details?: unknown;
};

const MAX_FIELD_LENGTH = 260;
const DEFAULT_MODEL = 'llama-3.1-8b-instant';
const REVIEW_IDS = new Set(['concise', 'warm', 'detailed']);
const REVIEW_TONES = new Set<ReviewTone>([
    'concise professional',
    'warm personal',
    'detailed helpful',
]);

function cleanField(value: unknown) {
    if (typeof value !== 'string') {
        return '';
    }

    return value.trim().replace(/\s+/g, ' ').slice(0, MAX_FIELD_LENGTH);
}

function normalizeReviewOption(
    value: unknown,
    fallbackIndex: number
): ReviewOption | null {
    if (!value || typeof value !== 'object') {
        return null;
    }

    const candidate = value as Partial<Record<keyof ReviewOption, unknown>>;
    const fallbackIds = ['concise', 'warm', 'detailed'];
    const fallbackTones: ReviewTone[] = [
        'concise professional',
        'warm personal',
        'detailed helpful',
    ];
    const id =
        typeof candidate.id === 'string' && REVIEW_IDS.has(candidate.id)
            ? candidate.id
            : fallbackIds[fallbackIndex];
    const tone =
        typeof candidate.tone === 'string' &&
        REVIEW_TONES.has(candidate.tone as ReviewTone)
            ? (candidate.tone as ReviewTone)
            : fallbackTones[fallbackIndex];
    const title =
        typeof candidate.title === 'string' && candidate.title.trim()
            ? candidate.title.trim()
            : `${fallbackIds[fallbackIndex]} Review`;
    const text = typeof candidate.text === 'string' ? candidate.text.trim() : '';

    if (!id || !title || text.length < 30) {
        return null;
    }

    return {
        id,
        tone,
        title: title.slice(0, 42),
        text,
    };
}

function validateReviewResponse(value: unknown): ReviewResponse | null {
    if (!value || typeof value !== 'object') {
        return null;
    }

    const reviews = (value as { reviews?: unknown }).reviews;

    if (!Array.isArray(reviews)) {
        return null;
    }

    const fallbackIds = ['concise', 'warm', 'detailed'];
    const fallbackTones: ReviewTone[] = [
        'concise professional',
        'warm personal',
        'detailed helpful',
    ];

    const normalized = reviews
        .map((review, index) => normalizeReviewOption(review, index))
        .filter((review): review is ReviewOption => Boolean(review));

    if (normalized.length === 0) {
        return null;
    }

    const result: ReviewOption[] = fallbackIds.map((id, index) => {
        const found = normalized.find((r) => r.id === id) || normalized[index];
        const item = found || normalized[0];

        return {
            id,
            tone: fallbackTones[index],
            title: item.title || `${fallbackIds[index]} Review`,
            text: item.text,
        };
    });

    return { reviews: result };
}

const reviewResponseSchema = jsonSchema<ReviewResponse>(
    {
        type: 'object',
        additionalProperties: false,
        properties: {
            reviews: {
                type: 'array',
                items: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        id: { type: 'string' },
                        tone: { type: 'string' },
                        title: { type: 'string' },
                        text: { type: 'string' },
                    },
                    required: ['id', 'tone', 'title', 'text'],
                },
            },
        },
        required: ['reviews'],
    },
    {
        validate(value) {
            const response = validateReviewResponse(value);

            return response
                ? { success: true, value: response }
                : {
                      success: false,
                      error: new Error('Model returned invalid review JSON.'),
                  };
        },
    }
);

export async function POST(request: Request) {
    if (!process.env.GROQ_API_KEY) {
        return NextResponse.json(
            { error: 'Review generation is not configured yet.' },
            { status: 500 }
        );
    }

    let body: ReviewRequestBody;

    try {
        body = (await request.json()) as ReviewRequestBody;
    } catch {
        return NextResponse.json(
            { error: 'Please answer the review questions first.' },
            { status: 400 }
        );
    }

    const service = cleanField(body.service);
    const experienceRating = cleanField(body.experienceRating);
    const experience = cleanField(body.experience);
    const standout = cleanField(body.standout);
    const teamMember = cleanField(body.teamMember);
    const details = cleanField(body.details);

    if (
        !service ||
        !experienceRating ||
        !experience ||
        !standout
    ) {
        return NextResponse.json(
            { error: 'Please complete the required review prompts.' },
            { status: 400 }
        );
    }

    try {
        const { output } = await generateText({
            model: groq(process.env.GROQ_MODEL || DEFAULT_MODEL),
            temperature: 0.35,
            maxOutputTokens: 1600,
            output: Output.object({
                schema: reviewResponseSchema,
                name: 'review_options',
                description: 'Three valid Google review options for Invisor CPA.',
            }),
            system:
                'You write authentic, first-person Google reviews for Invisor CPA, an accounting firm in Canada. Write like a real satisfied client: specific, calm, clear, and believable. Do not mention that AI wrote the review. Do not include ratings, bullets, names other than the selected Invisor team member, dates, dollar amounts, CRA outcomes, refund amounts, legal guarantees, or facts the client did not provide.',
            prompt: [
                'Create exactly three Google review options for Invisor CPA.',
                'Each review must be first-person and suitable for a public Google review.',
                'Each review must be between 60 and 110 words.',
                'Even if specific notes or team member names are omitted, write complete, realistic reviews expanding on the selected service and experience.',
                'Make the options meaningfully different in tone:',
                '1. concise professional',
                '2. warm personal',
                '3. detailed helpful',
                '',
                'Client inputs:',
                `Service: ${service}`,
                `Experience rating: ${experienceRating}`,
                `Experience: ${experience}`,
                `What stood out: ${standout}`,
                teamMember ? `Worked with: ${teamMember}` : 'Worked with: Invisor CPA team',
                details ? `Specific note: ${details}` : 'Specific note: none (expand naturally on the client rating and experience)',
                '',
                'Keep wording natural. Avoid hype such as "best ever", "life-changing", or repeated marketing phrases.',
                '',
                'Return three objects with ids concise, warm, and detailed, using the matching tone for each id.'
            ].join('\n'),
        });

        return NextResponse.json(output);
    } catch (error) {
        console.error('Review generation failed', error);

        return NextResponse.json(
            { error: 'Could not generate reviews right now. Please try again.' },
            { status: 502 }
        );
    }
}
