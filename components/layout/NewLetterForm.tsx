'use client';

import { sendContact } from '@/actions';
import { useActionState } from 'react';
import { Button } from '../ui/button';
import { Check, LoaderCircle, MailIcon } from 'lucide-react';
import { Input } from '../ui/input';
const initialState = {
    status: '',
    message: '',
};
export default function NewLetterForm() {
    const [state, formAction, isPending] = useActionState(
        sendContact,
        initialState
    );

    const isLeadCollected = localStorage.getItem('is_lead_collected');

    if (isLeadCollected) {
        return (
            <div className="flex flex-col items-center justify-center py-8">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-green-700">
                    Thank you!
                </h3>
                <p className="text-muted-foreground text-sm">
                    We received your request.
                    <br />
                    We&apos;ll get back to you soon.
                </p>
            </div>
        );
    }

    if (typeof window !== 'undefined' && state?.status === 'SUCCESS') {
        localStorage.setItem('is_lead_collected', 'true');
    }
    return (
        <form className="space-y-5" action={formAction}>
            <input
                type="hidden"
                name="name"
                defaultValue={'Newsletter'}
                required
                minLength={3}
                maxLength={50}
            />
            <input
                type="hidden"
                name="subject"
                defaultValue={'0000000000'}
                required
                minLength={10}
                maxLength={10}
                pattern="^[0-9]+$"
            />
            <input
                type="hidden"
                name="message"
                defaultValue={'This lead is from the newsletter form.'}
                required
                minLength={10}
                maxLength={500}
            />
            <div className="*:not-first:mt-2">
                <div className="relative">
                    <Input
                        name="email"
                        id="dialog-subscribe"
                        className="peer ps-9"
                        placeholder="hi@yourcompany.com"
                        type="email"
                        aria-label="Email"
                    />
                    <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                        <MailIcon size={16} aria-hidden="true" />
                    </div>
                </div>
            </div>
            {state.status === 'SUCCESS' && (
                <p className="text-green-500">
                    Thank you for subscribing! We&apos;ll keep you updated with
                    the latest news and offers.
                </p>
            )}
            {state.status === 'ERROR' && (
                <p className="text-red-500">{state.message}</p>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                    <LoaderCircle className="animate-spin" />
                ) : (
                    'Subscribe'
                )}
            </Button>
        </form>
    );
}
