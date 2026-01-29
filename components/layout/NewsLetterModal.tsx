import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import NewLetterForm from './NewLetterForm';

export default function NewsLetterModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="group relative"
                    variant="default"
                    size={'sm'}
                >
                    <span className="inline-flex items-center text-xs sm:text-sm">
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
                                src={`/invisorcpa-icon.png`}
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

                <NewLetterForm />

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
