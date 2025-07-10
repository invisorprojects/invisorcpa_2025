import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import GetStartedForm from './GetStratedForm';
import { Button } from './ui/button';

export default function SubmitDetailsModal({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: (open: boolean) => void;
}) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    hidden
                    className="mt-5 w-full rounded-md py-2 font-semibold transition"
                >
                    Submit Details
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
                            Submit Details
                        </DialogTitle>
                        <DialogDescription className="sm:text-center">
                            Submit your details to view results.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <GetStartedForm />
            </DialogContent>
        </Dialog>
    );
}
