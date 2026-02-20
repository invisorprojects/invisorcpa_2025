'use client';

import { useState } from 'react';
import { Mail, PhoneOutgoing, XIcon } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import NewsLetterModal from './NewsLetterModal';

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();

    // Hide banner on /payroll-calculator and /tax-calculator routes
    if (pathname === '/payroll-calculator' || pathname === '/tax-calculator') {
        return null;
    }

    if (!isVisible) return null;

    return (
        <div className="text-foreground bg-[#E5F2F8] px-4 py-3 md:py-2">
            <div className="flex gap-2 md:items-center">
                <div className="flex grow gap-3 md:items-center">
                    <Mail
                        color="#1B1E65"
                        className="text-primary shrink-0 max-md:mt-0.5"
                        size={16}
                        aria-hidden="true"
                    />
                    <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
                        <p className="text-xs sm:text-sm">
                            Subscribe to receive news and canadian tax law
                            updates.
                        </p>
                        <p className="text-xs sm:text-sm">
                        🍁 Member - Canadian Income Tax EFILE Association
                        </p>
                        <div className="flex gap-2 max-md:flex-wrap">
                            <NewsLetterModal />
                            <a
                                target="_blank"
                                href="tel:+12262273482"
                                rel="noopener noreferrer"
                                aria-label="Contact us on Phone"
                            >
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button
                                            asChild
                                            // variant="outline"
                                            size={'sm'}
                                            className="group border-primary hover:bg-primary hover:text-primary-foreground relative border-2 transition-all"
                                        >
                                            <span className="inline-flex items-center text-xs sm:text-sm">
                                                Call Now
                                                <PhoneOutgoing
                                                    color="#ffffff"
                                                    className="text-primary ms-2 -me-1 h-4 w-4 opacity-60 transition-all group-hover:translate-x-0.5"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent className="text-primary border-primary border bg-white">
                                        <p>+1 226-227-3482</p>
                                    </TooltipContent>
                                </Tooltip>
                            </a>

                     

                        </div>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close banner"
                >
                    <XIcon
                        size={16}
                        className="opacity-60 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                    />
                </Button>
            </div>
        </div>
    );
}
