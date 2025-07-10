'use client';

import { sendContact } from '@/actions';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, CheckCircle, LoaderCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';
const initialState = {
    status: '',
    message: '',
};
export default function GetStartedForm() {
    const [state, formAction, isPending] = useActionState(
        sendContact,
        initialState
    );

    const isLeadCollected = localStorage.getItem('is_lead_collected');
    console.log(isLeadCollected);
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
            <div>
                <label className="mb-1 block font-medium">Name</label>
                <Input
                    type="text"
                    name="name"
                    defaultValue={'Test User'}
                    required
                    minLength={3}
                    maxLength={50}
                    title="Please enter a valid name"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label className="mb-1 block font-medium">Phone Number</label>
                <Input
                    type="tel"
                    name="subject"
                    defaultValue={'1234567890'}
                    required
                    minLength={10}
                    maxLength={10}
                    pattern="^[0-9]+$"
                    title="Please enter a valid 10-digit phone number"
                    placeholder="Enter phone number"
                />
            </div>
            <div>
                <label className="mb-1 block font-medium">Email</label>
                <Input
                    type="email"
                    name="email"
                    defaultValue={'test@test.com'}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    required
                    title="Please enter a valid email address"
                    placeholder="Enter email"
                />
            </div>
            <div>
                <label className="mb-1 block font-medium">Message</label>
                <Textarea
                    name="message"
                    defaultValue={'I am a test message. Kindly ignore me.'}
                    required
                    minLength={10}
                    maxLength={500}
                    title="Please enter a valid message"
                    placeholder="Enter message"
                />
            </div>

            {state.status === 'ERROR' && (
                <p className="text-red-500">{state.message}</p>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? (
                    <LoaderCircle className="animate-spin" />
                ) : (
                    'Submit'
                )}
            </Button>
        </form>
    );
}
