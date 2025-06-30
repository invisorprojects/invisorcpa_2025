'use client';

import { sendContact } from '@/actions';
import { useActionState } from 'react';
import { Button } from './ui/button';
import { LoaderCircle } from 'lucide-react';
const initialState = {
    status: '',
    message: '',
};
export default function ContactUsForm() {
    const [state, formAction, isPending] = useActionState(
        sendContact,
        initialState
    );
    console.log('state:', state);
    return (
        <div className="w-full max-w-xl rounded-md border bg-white p-6 shadow-md">
            <form className="space-y-6" action={formAction}>
                <div>
                    <label className="mb-1 block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        // defaultValue={'Test User'}
                        required
                        minLength={3}
                        maxLength={50}
                        title="Please enter a valid name"
                        placeholder="Enter your name"
                        className="w-full rounded-md border px-4 py-2 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="mb-1 block font-medium">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="subject"
                        // defaultValue={'1234567890'}
                        required
                        minLength={10}
                        maxLength={10}
                        pattern="^[0-9]+$"
                        title="Please enter a valid 10-digit phone number"
                        placeholder="Enter phone number"
                        className="w-full rounded-md border px-4 py-2 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="mb-1 block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        // defaultValue={'test@test.com'}
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                        required
                        title="Please enter a valid email address"
                        placeholder="Enter email"
                        className="w-full rounded-md border px-4 py-2 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="mb-1 block font-medium">Message</label>
                    <textarea
                        name="message"
                        // defaultValue={'I am a test message. Kindly ignore me.'}
                        required
                        minLength={10}
                        maxLength={500}
                        title="Please enter a valid message"
                        placeholder="Enter message"
                        className="min-h-[120px] w-full rounded-md border px-4 py-2 shadow-sm focus:ring focus:ring-blue-100 focus:outline-none"
                    />
                </div>
                {state.status === 'SUCCESS' && (
                    <p className="text-green-500">{state.message}</p>
                )}
                {state.status === 'ERROR' && (
                    <p className="text-red-500">{state.message}</p>
                )}

                <Button
                    variant={'outline'}
                    className="bg-secondary h-10 w-48 rounded-md py-2 font-semibold text-white hover:bg-[#007fd1] hover:text-white"
                    disabled={isPending}
                    type="submit"
                >
                    {isPending ? (
                        <LoaderCircle className="animate-spin" />
                    ) : (
                        'Submit'
                    )}
                </Button>
            </form>
        </div>
    );
}
