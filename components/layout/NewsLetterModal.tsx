import { ArrowRight, MailIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function NewsLetterModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="group relative"
                    variant="default"
                    size={'sm'}
                >
                    <span className="inline-flex items-center">
                        Subscribe
                        <ArrowRight
                            className="ms-2 -me-1 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                        />
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="w-md">
                <div className="mb-2 flex flex-col items-center gap-2">
                    <div
                        className="flex size-11 shrink-0 items-center justify-center rounded-full border"
                        aria-hidden="true"
                    >
                        <div className="relative aspect-square h-16 w-auto">
                            <Image
                                className="absolute object-contain"
                                src={`/invisor-logo.svg`}
                                alt={`Invisor`}
                                fill
                            />
                        </div>
                    </div>
                    <DialogHeader>
                        <DialogTitle className="sm:text-center">
                            Never miss an update
                        </DialogTitle>
                        <DialogDescription className="sm:text-center">
                            Subscribe to receive news and special offers.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form className="space-y-5">
                    <div className="*:not-first:mt-2">
                        <div className="relative">
                            <Input
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
                    <Button type="button" className="w-full">
                        Subscribe
                    </Button>
                </form>

                <p className="text-muted-foreground text-center text-xs">
                    By subscribing you agree to our{' '}
                    <a className="underline hover:no-underline" href="#">
                        Privacy Policy
                    </a>
                    .
                </p>
            </DialogContent>
        </Dialog>
    );
}
