'use client';

import { sendContact } from '@/actions';
import { useActionState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
    LoaderCircle,
    Send,
    User,
    Phone,
    Mail,
    MessageSquare,
} from 'lucide-react';

const initialState = {
    status: '',
    message: '',
};

export default function ContactUsForm() {
    const [state, formAction, isPending] = useActionState(
        sendContact,
        initialState
    );

    return (
        <Card className="w-full max-w-xl border-0 shadow-lg">
            <CardHeader className="pb-4">
                <CardTitle className="text-primary text-2xl font-bold">
                    Contact Us
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                </p>
            </CardHeader>
            <CardContent>
                <form className="space-y-6" action={formAction}>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                                <User className="text-primary h-4 w-4" />
                                Name
                            </label>
                            <Input
                                type="text"
                                name="name"
                                required
                                minLength={3}
                                maxLength={50}
                                title="Please enter a valid name"
                                placeholder="Enter your name"
                                className="h-11"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                                <Phone className="text-primary h-4 w-4" />
                                Phone Number
                            </label>
                            <Input
                                type="tel"
                                name="subject"
                                required
                                minLength={10}
                                maxLength={10}
                                pattern="^[0-9]+$"
                                title="Please enter a valid 10-digit phone number"
                                placeholder="Enter phone number"
                                className="h-11"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                            <Mail className="text-primary h-4 w-4" />
                            Email
                        </label>
                        <Input
                            type="email"
                            name="email"
                            pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                            required
                            title="Please enter a valid email address"
                            placeholder="Enter your email"
                            className="h-11"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                            <MessageSquare className="text-primary h-4 w-4" />
                            Message
                        </label>
                        <Textarea
                            name="message"
                            required
                            minLength={10}
                            maxLength={500}
                            title="Please enter a valid message"
                            placeholder="Tell us about your inquiry..."
                            className="min-h-[120px] resize-none"
                        />
                    </div>

                    {state.status === 'SUCCESS' && (
                        <div className="rounded-md border border-green-200 bg-green-50 p-4">
                            <p className="text-sm font-medium text-green-700">
                                {state.message}
                            </p>
                        </div>
                    )}
                    {state.status === 'ERROR' && (
                        <div className="rounded-md border border-red-200 bg-red-50 p-4">
                            <p className="text-sm font-medium text-red-700">
                                {state.message}
                            </p>
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isPending}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 w-full font-semibold"
                    >
                        {isPending ? (
                            <>
                                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
