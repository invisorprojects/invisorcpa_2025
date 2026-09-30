import { groq } from '@ai-sdk/groq';
import { generateText, Output } from 'ai';
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
const DEFAULT_MODEL = 'openai/gpt-oss-20b';
const MAX_ATTEMPTS_PER_MODEL = 2;
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

class InvalidReviewResponseError extends Error {
    constructor() {
        super('Model returned invalid review JSON.');
        this.name = 'InvalidReviewResponseError';
    }
}

type GenerationError = {
    name?: unknown;
    message?: unknown;
    statusCode?: unknown;
    responseHeaders?: unknown;
};

function getGenerationErrorDetails(error: unknown) {
    const candidate = error as GenerationError;
    const name = typeof candidate?.name === 'string' ? candidate.name : 'UnknownError';
    const message =
        typeof candidate?.message === 'string' ? candidate.message : 'Unknown error';
    const statusCode =
        typeof candidate?.statusCode === 'number' ? candidate.statusCode : undefined;
    const responseHeaders = candidate?.responseHeaders as
        | Record<string, string | undefined>
        | undefined;

    return {
        name,
        message,
        statusCode,
        requestId: responseHeaders?.['x-request-id'],
    };
}

function shouldRetryGeneration(error: unknown) {
    const { name, statusCode } = getGenerationErrorDetails(error);

    return (
        name === 'AI_NoOutputGeneratedError' ||
        name === 'AI_NoObjectGeneratedError' ||
        name === 'InvalidReviewResponseError' ||
        statusCode === 429 ||
        (typeof statusCode === 'number' && statusCode >= 500)
    );
}

async function generateReviewOptions({
    model,
    prompt,
}: {
    model: string;
    prompt: string;
}) {
    const { output } = await generateText({
        model: groq(model),
        temperature: 0.35,
        // GPT-OSS spends output tokens on reasoning. This leaves enough room for
        // both low-effort reasoning and three complete public reviews.
        maxOutputTokens: 2400,
        // JSON object mode is supported across both production models. The
        // application validation below remains the source of truth.
        providerOptions: {
            groq: {
                reasoningEffort: 'low',
            },
        },
        output: Output.json({
            name: 'review_options',
            description: 'Three valid Google review options for Invisor CPA.',
        }),
        system:
            'You write authentic, first-person Google reviews for Invisor CPA, an accounting firm in Canada. Write like a real satisfied client: specific, calm, clear, and believable. Do not mention that AI wrote the review. Do not include ratings, bullets, names other than the selected Invisor team member, dates, dollar amounts, CRA outcomes, refund amounts, legal guarantees, or facts the client did not provide.',
        prompt,
    });

    const response = validateReviewResponse(output);

    if (!response) {
        throw new InvalidReviewResponseError();
    }

    return response;
}

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

    const prompt = [
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
        'Return JSON only, with this exact top-level shape:',
        '{"reviews":[{"id":"concise","tone":"concise professional","title":"...","text":"..."},{"id":"warm","tone":"warm personal","title":"...","text":"..."},{"id":"detailed","tone":"detailed helpful","title":"...","text":"..."}]}',
        'Do not wrap the JSON in Markdown or add any other keys.',
    ].join('\n');
    const primaryModel = process.env.GROQ_MODEL?.trim() || DEFAULT_MODEL;
    // Keep the default free-tier path to one verified model. A fallback is
    // opt-in so deployments never call a model the account cannot access.
    const fallbackModel = process.env.GROQ_FALLBACK_MODEL?.trim();
    const models = [
        ...new Set(
            [primaryModel, fallbackModel].filter(
                (model): model is string => Boolean(model)
            )
        ),
    ];

    for (const model of models) {
        for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt += 1) {
            try {
                const output = await generateReviewOptions({ model, prompt });

                return NextResponse.json(output);
            } catch (error) {
                const details = getGenerationErrorDetails(error);

                console.error('Review generation attempt failed', {
                    model,
                    attempt,
                    ...details,
                });

                if (!shouldRetryGeneration(error)) {
                    break;
                }
            }
        }
    }

    return NextResponse.json(
        { error: 'Could not generate reviews right now. Please try again.' },
        { status: 502 }
    );
}
