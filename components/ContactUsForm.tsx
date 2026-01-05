'use client';

import { useRef, useState, useEffect } from 'react';
import Script from 'next/script';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { LoaderCircle, Send, User, Phone, Mail } from 'lucide-react';

export default function ContactUsForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const handleLoad = () => {
            // Only process if we're actually submitting
            if (!isPending) return;

            try {
                const doc = iframe.contentWindow?.document;
                if (doc && doc.body.childElementCount !== 0) {
                    setStatus('success');
                    setIsPending(false);
                    formRef.current?.reset();
                }
            } catch {
                // Cross-origin access blocked means form was submitted successfully
                setStatus('success');
                setIsPending(false);
                formRef.current?.reset();
            }
        };

        iframe.addEventListener('load', handleLoad);
        return () => iframe.removeEventListener('load', handleLoad);
    }, [isPending]);

    const validateForm = () => {
        const form = formRef.current;
        if (!form) return false;

        const newErrors: Record<string, string> = {};

        const name = (
            form.elements.namedItem('Potential Name') as HTMLInputElement
        )?.value.trim();
        const phone = (
            form.elements.namedItem('POTENTIALCF7') as HTMLInputElement
        )?.value.trim();
        const email = (
            form.elements.namedItem('POTENTIALCF3') as HTMLInputElement
        )?.value.trim();

        if (!name) {
            newErrors.name = 'Name cannot be empty';
        }

        if (!phone) {
            newErrors.phone = 'Contact Number cannot be empty';
        } else if (!/^[0-9a-zA-Z+.()\-;\s]+$/.test(phone)) {
            newErrors.phone = 'Enter valid Contact Number';
        }

        if (
            email &&
            !/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/.test(
                email
            )
        ) {
            newErrors.email = 'Enter valid Email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (!validateForm()) {
            e.preventDefault();
            return;
        }
        setIsPending(true);
        setStatus('idle');
    };

    return (
        <>
            <Script
                id="wf_script"
                src="https://bigin.zoho.in/crm/WebformScriptServlet?rid=6733f8208810b0dfc2ea7b145ff4268dd48a3c04f77e92da71fbabd496ec3e5d17f079e36fa60836be968834680d1a89gidbc43702e60227464ce01035c51749a4a4d783b51756b6341e45ea553b778603f"
                strategy="lazyOnload"
            />
            <iframe
                ref={iframeRef}
                id="hidden1110346000000433216Frame"
                name="hidden1110346000000433216Frame"
                style={{ display: 'none' }}
            />
            <Card className="w-full max-w-xl border-0 shadow-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="text-primary text-2xl font-bold">
                        Contact Us
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                        Fill out the form below and we&apos;ll get back to you
                        as soon as possible.
                    </p>
                </CardHeader>
                <CardContent>
                    <form
                        ref={formRef}
                        id="BiginWebToRecordForm1110346000000433216"
                        name="BiginWebToRecordForm1110346000000433216"
                        method="POST"
                        encType="multipart/form-data"
                        target="hidden1110346000000433216Frame"
                        acceptCharset="UTF-8"
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* Hidden fields required by Zoho */}
                        <input
                            type="hidden"
                            name="xnQsjsdp"
                            value="bc43702e60227464ce01035c51749a4a4d783b51756b6341e45ea553b778603f"
                        />
                        <input
                            type="hidden"
                            name="zc_gad"
                            id="zc_gad"
                            value=""
                        />
                        <input
                            type="hidden"
                            name="xmIwtLD"
                            value="6733f8208810b0dfc2ea7b145ff4268dd48a3c04f77e92da71fbabd496ec3e5d17f079e36fa60836be968834680d1a89"
                        />
                        <input
                            type="hidden"
                            name="actionType"
                            value="UG90ZW50aWFscw=="
                        />
                        <input
                            type="hidden"
                            name="rmsg"
                            id="rmsg"
                            value="true"
                        />
                        <input type="hidden" name="returnURL" value="null" />

                        {/* Hidden fields with default values */}
                        <input
                            type="hidden"
                            name="Pipeline"
                            value="New Leads Standard"
                        />
                        <input type="hidden" name="Stage" value="Untouched" />
                        <input
                            type="hidden"
                            name="POTENTIALCF10"
                            value="London"
                        />
                        <input
                            type="hidden"
                            name="Lead Source"
                            value="Website"
                        />

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                                    <User className="text-primary h-4 w-4" />
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="text"
                                    name="Potential Name"
                                    maxLength={120}
                                    required
                                    placeholder="Enter your name"
                                    className={`h-11 ${errors.name ? 'border-red-500' : ''}`}
                                    onChange={() =>
                                        setErrors((prev) => ({
                                            ...prev,
                                            name: '',
                                        }))
                                    }
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                                    <Phone className="text-primary h-4 w-4" />
                                    Phone Number{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <Input
                                    type="tel"
                                    name="POTENTIALCF7"
                                    maxLength={20}
                                    required
                                    placeholder="Enter phone number"
                                    className={`h-11 ${errors.phone ? 'border-red-500' : ''}`}
                                    onChange={() =>
                                        setErrors((prev) => ({
                                            ...prev,
                                            phone: '',
                                        }))
                                    }
                                />
                                {errors.phone && (
                                    <p className="text-sm text-red-500">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-foreground flex items-center gap-2 text-sm font-medium">
                                <Mail className="text-primary h-4 w-4" />
                                Email
                            </label>
                            <Input
                                type="email"
                                name="POTENTIALCF3"
                                maxLength={100}
                                placeholder="Enter your email"
                                className={`h-11 ${errors.email ? 'border-red-500' : ''}`}
                                onChange={() =>
                                    setErrors((prev) => ({
                                        ...prev,
                                        email: '',
                                    }))
                                }
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {status === 'success' && (
                            <div className="rounded-md border border-green-200 bg-green-50 p-4">
                                <p className="text-sm font-medium text-green-700">
                                    Thank you! Your message has been sent
                                    successfully.
                                </p>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="rounded-md border border-red-200 bg-red-50 p-4">
                                <p className="text-sm font-medium text-red-700">
                                    Something went wrong. Please try again.
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
        </>
    );
}
