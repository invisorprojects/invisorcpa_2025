import { cn } from '@/lib/utils';

export const display = 'font-[family-name:var(--font-rd-display)]';
export const container = 'mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-10';

export function Eyebrow({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p
            className={cn(
                'mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] text-sky-700 uppercase',
                className
            )}
        >
            <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
            {children}
        </p>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    body,
    align = 'center',
    className,
}: {
    eyebrow: string;
    title: React.ReactNode;
    body?: React.ReactNode;
    align?: 'center' | 'left';
    className?: string;
}) {
    const centered = align === 'center';
    return (
        <div
            className={cn(
                'rd-reveal',
                centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl',
                className
            )}
        >
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
                className={`${display} text-[2.15rem] leading-[1.1] font-bold tracking-[-0.025em] text-balance text-slate-950 sm:text-5xl`}
            >
                {title}
            </h2>
            {body && (
                <p
                    className={cn(
                        'mt-5 text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl',
                        centered && 'mx-auto max-w-3xl'
                    )}
                >
                    {body}
                </p>
            )}
        </div>
    );
}

export function Stars({ className }: { className?: string }) {
    return (
        <span className={cn('inline-flex text-amber-400', className)} aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="size-[1em] fill-current">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                </svg>
            ))}
        </span>
    );
}
