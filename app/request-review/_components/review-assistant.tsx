'use client';

import {
    Check,
    ExternalLink,
    MessageCircle,
    Quote,
    RefreshCcw,
    Send,
    Sparkles,
    Star,
} from 'lucide-react';
import {
    AnimatePresence,
    motion,
    type Transition,
    useReducedMotion,
} from 'motion/react';
import { useEffect, useRef, useState, useTransition } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type StepId =
    | 'office'
    | 'service'
    | 'experienceRating'
    | 'experience'
    | 'standout'
    | 'teamMember';
type FlowPhase = 'questions' | 'details' | 'generating' | 'results';

type Question = {
    id: StepId;
    prompt: string;
    options: string[];
};

type Answers = Record<StepId, string>;

type ReviewOption = {
    id: string;
    tone: 'concise professional' | 'warm personal' | 'detailed helpful';
    title: string;
    text: string;
};

type GenerateResponse = {
    reviews?: ReviewOption[];
    error?: string;
};

const GOOGLE_REVIEW_BASE_URL = 'https://search.google.com/local/writereview?placeid=';

const OFFICE_PLACE_IDS = {
    London: 'ChIJS4dQXIzzLogRH_-w_SFaeu8',
    Fergus: 'ChIJnwAyNiC_K4gRJr1cFih8V9E',
    Strathroy: 'ChIJYxvDSZgFL4gRSckyvwWdnew',
} as const;

const QUESTIONS: Question[] = [
    {
        id: 'office',
        prompt: 'Which office?',
        options: ['London', 'Fergus', 'Strathroy'],
    },
    {
        id: 'service',
        prompt: 'What service did Invisor help you with?',
        options: [
            'Personal tax',
            'Business tax',
            'Bookkeeping',
            'Payroll',
            'Incorporation',
            'Accounting advice',
            'Other',
        ],
    },
    {
        id: 'experience',
        prompt: 'How was your experience?',
        options: [
            'Very smooth',
            'Professional',
            'Fast',
            'Helpful',
            'Clear communication',
            'Stress-free',
        ],
    },
    {
        id: 'experienceRating',
        prompt: 'How do you rate the experience?',
        options: ['Excellent', 'Great', 'Good', 'Average', 'Could be better'],
    },
    {
        id: 'standout',
        prompt: 'What stood out most?',
        options: [
            'Saved time',
            'Explained things clearly',
            'Accurate work',
            'Friendly team',
            'Quick response',
            'Helped with CRA/tax issue',
        ],
    },
    {
        id: 'teamMember',
        prompt: 'Whom did you work with?',
        options: [
            'Geever Thambi',
            'Mohammed Shafeeque',
            'Anjali Anil',
            'Dayana Silvin',
            'Irine Catherine',
        ],
    },
];

const EMPTY_ANSWERS: Answers = {
    office: '',
    service: '',
    experienceRating: '',
    experience: '',
    standout: '',
    teamMember: '',
};

async function copyTextToClipboard(text: string) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // Fall through to the textarea copy path for browsers that deny
            // clipboard access despite receiving a direct tap/click.
        }
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '0';
    textarea.style.left = '0';
    textarea.style.width = '1px';
    textarea.style.height = '1px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    textarea.setSelectionRange(0, text.length);

    try {
        return document.execCommand('copy');
    } finally {
        textarea.remove();
    }
}

const chatContainerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const messageVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98 },
};

const optionVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

function getTransition(shouldReduceMotion: boolean): Transition {
    return shouldReduceMotion
        ? { duration: 0 }
        : { type: 'spring', stiffness: 360, damping: 32 };
}

function ChatBubble({
    children,
    side = 'assistant',
    className,
    layout = false,
}: {
    children: React.ReactNode;
    side?: 'assistant' | 'user';
    className?: string;
    layout?: boolean;
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            layout={layout}
            variants={messageVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={getTransition(Boolean(shouldReduceMotion))}
            className={cn(
                'flex w-full',
                side === 'user' ? 'justify-end' : 'justify-start'
            )}
        >
            <div
                className={cn(
                    'max-w-[86%] border px-4 py-3 text-[15px] leading-6 shadow-[0_4px_12px_rgba(27,30,101,0.05)] sm:max-w-[78%] sm:text-base',
                    side === 'user'
                        ? 'rounded-2xl rounded-br-sm border-[#1b1e65] bg-[#1b1e65] text-white'
                        : 'rounded-2xl rounded-bl-sm border-[#e2e8f0] bg-[#f1f5f9] text-[#0b1c30]',
                    className
                )}
            >
                {children}
            </div>
        </motion.div>
    );
}

function AssistantAvatar() {
    return (
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1b1e65] text-white shadow-[0_8px_20px_rgba(27,30,101,0.18)]">
            <MessageCircle className="size-4" aria-hidden="true" />
        </div>
    );
}

function TypingIndicator() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <ChatBubble>
            <div className="flex items-center gap-2 text-[#464650]">
                <span className="text-sm font-medium">Drafting options</span>
                <span className="flex items-center gap-1" aria-hidden="true">
                    {[0, 1, 2].map((dot) => (
                        <motion.span
                            key={dot}
                            className="size-1.5 rounded-full bg-[#53579f]"
                            animate={
                                shouldReduceMotion
                                    ? { opacity: 0.8 }
                                    : { opacity: [0.35, 1, 0.35], y: [0, -3, 0] }
                            }
                            transition={
                                shouldReduceMotion
                                    ? { duration: 0 }
                                    : {
                                          duration: 0.9,
                                          repeat: Infinity,
                                          delay: dot * 0.12,
                                      }
                            }
                        />
                    ))}
                </span>
            </div>
        </ChatBubble>
    );
}

function ProgressRail({
    currentIndex,
    phase,
}: {
    currentIndex: number;
    phase: FlowPhase;
}) {
    const shouldReduceMotion = useReducedMotion();
    const totalSteps = QUESTIONS.length + 1;
    const activeStep =
        phase === 'details' || phase === 'generating' || phase === 'results'
            ? QUESTIONS.length
            : currentIndex;
    const percent =
        phase === 'results'
            ? 100
            : phase === 'generating'
              ? 88
              : Math.max(12, (activeStep / totalSteps) * 100);

    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-[#616363]">
                <span>Review draft</span>
                <span>
                    {phase === 'results'
                        ? 'Ready'
                        : `${Math.min(activeStep + 1, totalSteps)} of ${totalSteps}`}
                </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#dfe0e0]">
                <motion.div
                    className="h-full rounded-full bg-[#1b1e65]"
                    initial={false}
                    animate={{ width: `${percent}%` }}
                    transition={
                        shouldReduceMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 160, damping: 26 }
                    }
                />
            </div>
        </div>
    );
}

function OptionGrid({
    options,
    onSelect,
}: {
    options: string[];
    onSelect: (option: string) => void;
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            variants={chatContainerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-2 sm:grid-cols-2"
        >
            {options.map((option) => (
                <motion.button
                    key={option}
                    variants={optionVariants}
                    transition={getTransition(Boolean(shouldReduceMotion))}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    onClick={() => onSelect(option)}
                    className="min-h-12 rounded-lg border border-[#d7dfeb] bg-white px-4 py-3 text-left text-sm font-semibold text-[#0b1c30] shadow-[0_4px_12px_rgba(27,30,101,0.04)] transition-colors hover:border-[#1b1e65]/40 hover:bg-[#f8f9ff] focus-visible:ring-3 focus-visible:ring-[#bfc1ff]/70 focus-visible:outline-none"
                >
                    {option}
                </motion.button>
            ))}
        </motion.div>
    );
}

function ReviewCard({
    review,
    isSelected,
    isRedirecting,
    onSelect,
}: {
    review: ReviewOption;
    isSelected: boolean;
    isRedirecting: boolean;
    onSelect: (review: ReviewOption) => void;
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.button
            layout
            variants={messageVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
            onClick={() => onSelect(review)}
            disabled={isRedirecting}
            aria-pressed={isSelected}
            aria-label={`Use this ${review.tone} review`}
            className={cn(
                'group relative w-full overflow-hidden rounded-2xl border bg-white p-5 text-left shadow-[0_12px_28px_rgba(27,30,101,0.08)] transition-colors focus-visible:ring-3 focus-visible:ring-[#bfc1ff]/70 focus-visible:outline-none disabled:cursor-wait disabled:opacity-75',
                isSelected
                    ? 'border-[#1b1e65] ring-2 ring-[#bfc1ff]/70'
                    : 'border-[#e2e8f0] hover:border-[#1b1e65]/35'
            )}
        >
            <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#eff4ff] text-[#1b1e65]">
                        <Quote className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                        <p className="text-sm font-bold text-[#0b1c30]">
                            {review.title}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-[#616363] capitalize">
                            {review.tone}
                        </p>
                    </div>
                </div>
                <span
                    className={cn(
                        'flex size-7 shrink-0 items-center justify-center rounded-full border',
                        isSelected
                            ? 'border-[#1b1e65] bg-[#1b1e65] text-white'
                            : 'border-[#d7dfeb] text-transparent'
                    )}
                >
                    <Check className="size-4" aria-hidden="true" />
                </span>
            </div>
            <div
                className="mb-4 flex items-center gap-0.5 text-[#f5a524]"
                aria-label="Five star review"
            >
                {[0, 1, 2, 3, 4].map((star) => (
                    <Star
                        key={star}
                        className="size-4 fill-current"
                        aria-hidden="true"
                    />
                ))}
            </div>
            <p className="text-[15px] leading-6 text-[#334155]">
                &ldquo;{review.text}&rdquo;
            </p>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#e2e8f0] pt-4">
                <span className="text-xs font-semibold text-[#616363]">
                    Tap to copy and open Google
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1b1e65]">
                    Use this
                    <ExternalLink className="size-4" aria-hidden="true" />
                </span>
            </div>
        </motion.button>
    );
}

export function ReviewAssistant() {
    const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phase, setPhase] = useState<FlowPhase>('questions');
    const [details, setDetails] = useState('');
    const [reviews, setReviews] = useState<ReviewOption[]>([]);
    const [selectedReviewId, setSelectedReviewId] = useState('');
    const [redirectingReviewId, setRedirectingReviewId] = useState('');
    const [error, setError] = useState('');
    const [isPending, startTransition] = useTransition();
    const bottomRef = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const currentQuestion = QUESTIONS[currentIndex];

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
            block: 'end',
        });
    }, [
        answers,
        currentIndex,
        phase,
        reviews,
        selectedReviewId,
        error,
        shouldReduceMotion,
    ]);

    function resetFlow() {
        setAnswers(EMPTY_ANSWERS);
        setCurrentIndex(0);
        setPhase('questions');
        setDetails('');
        setReviews([]);
        setSelectedReviewId('');
        setRedirectingReviewId('');
        setError('');
    }

    function selectAnswer(question: Question, option: string) {
        setAnswers((current) => ({
            ...current,
            [question.id]: option,
        }));
        setError('');

        if (currentIndex >= QUESTIONS.length - 1) {
            setPhase('details');
            return;
        }

        setCurrentIndex((index) => index + 1);
    }

    async function generateReviews(nextDetails = details) {
        setPhase('generating');
        setError('');

        startTransition(async () => {
            try {
                const response = await fetch('/api/request-review/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        service: answers.service,
                        experienceRating: answers.experienceRating,
                        experience: answers.experience,
                        standout: answers.standout,
                        details: nextDetails,
                        teamMember: answers.teamMember,
                    }),
                });

                const data = (await response.json()) as GenerateResponse;

                if (!response.ok || !data.reviews?.length) {
                    throw new Error(
                        data.error || 'Could not generate review options.'
                    );
                }

                setReviews(data.reviews);
                setSelectedReviewId('');
                setPhase('results');
            } catch (generationError) {
                const message =
                    generationError instanceof Error
                        ? generationError.message
                        : 'Could not generate reviews right now.';

                setError(message);
                setPhase('details');
                toast.error(message);
            }
        });
    }

    async function copyReview(text: string) {
        const reviewText = text.trim();

        if (!reviewText) {
            toast.error('Select a review first.');
            return false;
        }

        try {
            const copied = await copyTextToClipboard(reviewText);

            if (!copied) {
                throw new Error('Copy command failed.');
            }

            return true;
        } catch {
            toast.error('Could not copy the review.');
            return false;
        }
    }

    async function selectReview(review: ReviewOption) {
        const placeId =
            OFFICE_PLACE_IDS[answers.office as keyof typeof OFFICE_PLACE_IDS];

        if (!placeId) {
            toast.error('Select an office first.');
            return;
        }

        setSelectedReviewId(review.id);
        setRedirectingReviewId(review.id);

        const copied = await copyReview(review.text);

        if (!copied) {
            setRedirectingReviewId('');
            return;
        }

        toast.success('Review copied. Opening Google review page.');
        window.location.assign(`${GOOGLE_REVIEW_BASE_URL}${placeId}`);
    }

    return (
        <main className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
            <div className="mx-auto flex min-h-screen w-full max-w-[840px] flex-col px-4 py-4 sm:px-6 sm:py-8">
                <motion.header
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                        shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }
                    }
                    className="mb-4 flex items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-3">
                        <AssistantAvatar />
                        <div>
                            <p className="text-sm font-bold tracking-[0.08em] text-[#1b1e65] uppercase">
                                Invisor CPA
                            </p>
                            <h1 className="text-xl leading-7 font-bold text-[#0b1c30] sm:text-2xl">
                                Create your review
                            </h1>
                        </div>
                    </div>
                    <div className="hidden items-center gap-1 rounded-full border border-[#e2e8f0] bg-white px-3 py-2 text-xs font-bold text-[#1b1e65] shadow-[0_4px_12px_rgba(27,30,101,0.04)] sm:flex">
                        <Star className="size-3.5 fill-[#1b1e65]" aria-hidden="true" />
                        Google ready
                    </div>
                </motion.header>

                <section className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_16px_42px_rgba(27,30,101,0.08)]">
                    <div className="border-b border-[#e2e8f0] bg-[#ffffff] px-4 py-4 sm:px-6">
                        <ProgressRail currentIndex={currentIndex} phase={phase} />
                    </div>

                    <motion.div
                        variants={chatContainerVariants}
                        initial="hidden"
                        animate="show"
                        className="flex-1 space-y-4 overflow-y-auto bg-[#f8fafc] px-4 py-5 sm:px-6 sm:py-6"
                    >
                        <ChatBubble>
                            Answer a few quick prompts. I&apos;ll draft review
                            options you can choose from before opening Google.
                        </ChatBubble>

                        {QUESTIONS.filter(
                            (question) => answers[question.id]
                        ).map((question) => (
                            <motion.div
                                key={`answered-${question.id}`}
                                layout="position"
                                variants={messageVariants}
                                initial="hidden"
                                animate="show"
                                className="space-y-3"
                            >
                                <ChatBubble>{question.prompt}</ChatBubble>
                                <ChatBubble side="user">
                                    {answers[question.id]}
                                </ChatBubble>
                            </motion.div>
                        ))}

                        <AnimatePresence initial={false} mode="wait">
                            {phase === 'questions' && currentQuestion ? (
                                <motion.div
                                    key={`active-${currentQuestion.id}`}
                                    layout="position"
                                    variants={messageVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    transition={getTransition(
                                        Boolean(shouldReduceMotion)
                                    )}
                                    className="space-y-3"
                                >
                                    <ChatBubble>{currentQuestion.prompt}</ChatBubble>
                                    <OptionGrid
                                        options={currentQuestion.options}
                                        onSelect={(option) =>
                                            selectAnswer(currentQuestion, option)
                                        }
                                    />
                                </motion.div>
                            ) : null}

                            {phase === 'details' ? (
                                <motion.div
                                    key="details"
                                    layout="position"
                                    className="space-y-3"
                                    variants={messageVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    transition={getTransition(
                                        Boolean(shouldReduceMotion)
                                    )}
                                >
                                    <ChatBubble>
                                        Anything specific you want to mention?
                                    </ChatBubble>
                                    <div className="rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-[0_4px_12px_rgba(27,30,101,0.05)]">
                                        <Textarea
                                            value={details}
                                            onChange={(event) =>
                                                setDetails(event.target.value)
                                            }
                                            maxLength={260}
                                            placeholder="Example: They explained my tax return clearly and responded quickly."
                                            className="min-h-24 resize-none border-[#e2e8f0] bg-white text-base focus-visible:border-[#1b1e65] focus-visible:ring-[#bfc1ff]/70"
                                        />
                                        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                className="h-11 border-[#1b1e65]/25 text-[#1b1e65] hover:bg-[#eff4ff]"
                                                onClick={() => generateReviews('')}
                                                disabled={isPending}
                                            >
                                                Skip
                                            </Button>
                                            <Button
                                                type="button"
                                                className="h-11 bg-[#1b1e65] text-white hover:bg-[#020252]"
                                                onClick={() =>
                                                    generateReviews(details)
                                                }
                                                disabled={isPending}
                                            >
                                                <Sparkles
                                                    className="size-4"
                                                    aria-hidden="true"
                                                />
                                                Generate reviews
                                            </Button>
                                        </div>
                                    </div>
                                    {error ? (
                                        <p className="px-1 text-sm font-medium text-[#ba1a1a]">
                                            {error}
                                        </p>
                                    ) : null}
                                </motion.div>
                            ) : null}

                            {phase === 'generating' ? (
                                <motion.div
                                    key="generating"
                                    layout="position"
                                    variants={messageVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    transition={getTransition(
                                        Boolean(shouldReduceMotion)
                                    )}
                                >
                                    <TypingIndicator />
                                </motion.div>
                            ) : null}

                            {phase === 'results' ? (
                                <motion.div
                                    key="results"
                                    layout="position"
                                    variants={chatContainerVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    transition={getTransition(
                                        Boolean(shouldReduceMotion)
                                    )}
                                    className="space-y-4"
                                >
                                    <ChatBubble>
                                        I made three options. Pick the one that
                                        sounds most like you. I&apos;ll copy it
                                        before opening Google.
                                    </ChatBubble>

                                    <div className="space-y-3">
                                        {reviews.map((review) => (
                                            <ReviewCard
                                                key={review.id}
                                                review={review}
                                                isSelected={
                                                    review.id === selectedReviewId
                                                }
                                                isRedirecting={
                                                    redirectingReviewId === review.id
                                                }
                                                onSelect={selectReview}
                                            />
                                        ))}
                                    </div>

                                    <div className="flex justify-start">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="h-11 border-[#1b1e65]/25 bg-white text-[#1b1e65] hover:bg-[#eff4ff]"
                                            onClick={resetFlow}
                                        >
                                            <RefreshCcw
                                                className="size-4"
                                                aria-hidden="true"
                                            />
                                            Start over
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : null}
                        </AnimatePresence>
                        <div ref={bottomRef} />
                    </motion.div>

                    <div className="border-t border-[#e2e8f0] bg-white px-4 py-3 sm:px-6">
                        <div className="flex items-center justify-between gap-3 text-xs font-medium text-[#616363]">
                            <span>Private answers. Public review only after you post.</span>
                            <Send className="size-4 text-[#1b1e65]" aria-hidden="true" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
