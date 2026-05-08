import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    CalendarClock,
    CheckCircle2,
    Mail,
    Phone,
    ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Thank You | Invisor CPA',
    description:
        'Thank you for contacting Invisor CPA. Our team will review your details and follow up shortly.',
    robots: {
        index: false,
        follow: false,
    },
};

const nextSteps = [
    {
        icon: CalendarClock,
        title: 'We review your request',
        description:
            'Our team checks the details you submitted and identifies the right next step for your situation.',
    },
    {
        icon: Phone,
        title: 'We follow up shortly',
        description:
            'Expect a call or email from Invisor CPA so we can confirm requirements and answer questions.',
    },
    {
        icon: ShieldCheck,
        title: 'Your details stay secure',
        description:
            'Your information is handled confidentially by our CPA-led team.',
    },
];

export default function ThankYouPage() {
    return (
        <main className="text-foreground min-h-screen bg-[#f7f9fc]">
            <section className="px-4 py-6 sm:px-8 lg:px-16 xl:px-24">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
                    <Link href="/" aria-label="Invisor home">
                        <Image
                            src="/invisorcpa-logo.png"
                            alt="Invisor CPA"
                            width={980}
                            height={256}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>

                    <a
                        href="tel:+12262273482"
                        className="text-primary hover:text-secondary hidden items-center gap-2 text-sm font-semibold transition-colors sm:inline-flex"
                    >
                        <Phone className="size-4" aria-hidden="true" />
                        +1 (226) 227-3482
                    </a>
                </div>
            </section>

            <section className="px-4 pt-8 pb-16 sm:px-8 sm:pt-14 sm:pb-24 lg:px-16 xl:px-24">
                <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="flex flex-col items-start">
                        <div className="border-primary/10 text-primary mb-8 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                            <CheckCircle2
                                className="text-secondary size-4"
                                aria-hidden="true"
                            />
                            Details submitted successfully
                        </div>

                        <h1 className="text-primary max-w-3xl text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                            Thank you. We have received your details.
                        </h1>

                        <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 sm:text-lg">
                            An Invisor CPA team member will review your
                            submission and contact you shortly. If your request
                            is urgent, you can call or email us directly.
                        </p>

                        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 rounded-full px-6 font-semibold"
                            >
                                <a href="tel:+12262273482">
                                    Call Invisor
                                    <Phone data-icon="inline-end" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="border-primary/20 text-primary hover:bg-primary/5 h-12 rounded-full bg-white px-6 font-semibold"
                            >
                                <a href="mailto:connect@invisorcpa.ca">
                                    Email Us
                                    <Mail data-icon="inline-end" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <div className="border-primary/10 rounded-lg border bg-white p-5 shadow-sm sm:p-7">
                        <div className="bg-primary rounded-md px-6 py-7 text-white">
                            <p className="text-sm font-semibold tracking-[0.18em] text-white/70 uppercase">
                                What happens next
                            </p>
                            <h2 className="mt-3 text-2xl font-bold">
                                Our team will take it from here.
                            </h2>
                        </div>

                        <div className="mt-6 grid gap-4">
                            {nextSteps.map((step) => (
                                <div
                                    key={step.title}
                                    className="border-border grid grid-cols-[2.75rem_1fr] gap-4 rounded-md border bg-[#fbfcfe] p-4"
                                >
                                    <div className="bg-secondary/10 text-secondary flex size-11 items-center justify-center rounded-full">
                                        <step.icon
                                            className="size-5"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-primary font-bold">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground mt-1 text-sm leading-6">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            asChild
                            variant="link"
                            className="text-primary mt-5 h-auto px-0 font-semibold"
                        >
                            <Link href="/">
                                Return to homepage
                                <ArrowRight data-icon="inline-end" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
