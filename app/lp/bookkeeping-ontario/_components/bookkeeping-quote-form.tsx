'use client';

import { sendContact } from '@/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useId } from 'react';

const initialState = {
    status: '',
    message: '',
};

const inputClassName =
    'h-14 rounded-xl border-[#E1D9CE] bg-[#FBF8F3] px-5 text-base shadow-none placeholder:text-[#747A86] focus-visible:border-primary focus-visible:ring-primary/15 sm:h-[58px] sm:text-lg';

export default function BookkeepingQuoteForm() {
    const router = useRouter();
    const formId = useId();
    const [state, formAction, isPending] = useActionState(
        sendContact,
        initialState
    );

    useEffect(() => {
        if (state.status === 'SUCCESS') {
            router.push('/thank-you');
        }
    }, [router, state.status]);

    return (
        <section className="rounded-[1.75rem] border border-[#E1D9CE] bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <div className="flex flex-col gap-2">
                <p className="text-secondary text-sm font-bold tracking-[0.16em] uppercase">
                    Free Quote
                </p>
                <h2 className="text-primary text-3xl leading-tight font-bold text-balance sm:text-4xl">
                    Get Your Free Bookkeeping Quote
                </h2>
                <p className="text-muted-foreground text-base leading-7 sm:text-lg">
                    Tell us about your business. We&apos;ll send a custom quote
                    within 24 hours, no obligation.
                </p>
            </div>

            <form action={formAction} className="mt-7 flex flex-col gap-5">
                <input
                    type="hidden"
                    name="lead_source"
                    defaultValue="Bookkeeping Ontario landing page"
                />
                <input
                    type="hidden"
                    name="page_url"
                    defaultValue="https://www.invisorcpa.ca/lp/bookkeeping-ontario"
                />

                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor={`${formId}-name`}
                        className="text-primary text-base font-bold"
                    >
                        Full Name *
                    </Label>
                    <Input
                        id={`${formId}-name`}
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={80}
                        autoComplete="name"
                        placeholder="Jane Smith"
                        className={inputClassName}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor={`${formId}-email`}
                        className="text-primary text-base font-bold"
                    >
                        Email *
                    </Label>
                    <Input
                        id={`${formId}-email`}
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@yourbusiness.ca"
                        className={inputClassName}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor={`${formId}-phone`}
                        className="text-primary text-base font-bold"
                    >
                        Phone Number *
                    </Label>
                    <Input
                        id={`${formId}-phone`}
                        name="subject"
                        type="tel"
                        required
                        minLength={10}
                        maxLength={20}
                        autoComplete="tel"
                        placeholder="(226) 555-0123"
                        className={inputClassName}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <Label
                        htmlFor={`${formId}-business`}
                        className="text-primary text-base font-bold"
                    >
                        Business Name *
                    </Label>
                    <Input
                        id={`${formId}-business`}
                        name="message"
                        type="text"
                        required
                        minLength={2}
                        maxLength={120}
                        autoComplete="organization"
                        placeholder="Smith Consulting Ltd."
                        className={inputClassName}
                    />
                </div>

                {state.status === 'ERROR' && (
                    <p
                        className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive"
                        role="alert"
                    >
                        {state.message}
                    </p>
                )}

                <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-primary hover:bg-primary/90 mt-1 h-16 rounded-xl text-base font-bold text-white sm:text-lg"
                >
                    {isPending ? (
                        <>
                            <LoaderCircle
                                data-icon="inline-start"
                                className="animate-spin"
                            />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send My Free Quote
                            <ArrowRight data-icon="inline-end" />
                        </>
                    )}
                </Button>

                <p className="text-muted-foreground text-center text-sm">
                    100% confidential. We respond within 1 business day.
                </p>
            </form>
        </section>
    );
}
