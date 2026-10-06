import Link from 'next/link';

import { cn } from '@/lib/utils';

export function PrivacyConsent({ className }: { className?: string }) {
    return (
        <p
            className={cn(
                'text-muted-foreground text-xs leading-5',
                className
            )}
        >
            By submitting this form, you consent to Invisor Business Facts Ltd.
            collecting and using the information you provide to respond to your
            inquiry and, if requested, deliver accounting, bookkeeping, payroll,
            and tax services. For more information, please review our{' '}
            <Link
                href="/privacy-policy"
                className="text-primary font-semibold underline underline-offset-2 transition-colors hover:text-blue-700"
            >
                Privacy Policy
            </Link>
            .
        </p>
    );
}
