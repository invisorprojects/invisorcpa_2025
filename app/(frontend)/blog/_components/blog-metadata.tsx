export function BlogMetadata({
    data,
    intent,
    className,
}: {
    data: {
        publishedAt: Date;
        readTimeMins: number;
    };
    intent: 'card' | 'post';
    className?: string;
}) {
    const { publishedAt, readTimeMins } = data;

    return (
        <div className={`mt-4 flex items-center justify-between ${className}`}>
            {/* date, read time */}
            <div
                className={`flex flex-col text-right ${intent === 'card' ? 'gap-1.5 text-sm' : 'gap-2 text-base'}`}
            >
                <time
                    dateTime={new Date(publishedAt).toISOString()}
                    className="leading-none"
                >
                    {publishedAt.toLocaleString('en-GB', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </time>
                <p className="text-dimmed leading-none">
                    {readTimeMins} minutes read
                </p>
            </div>
        </div>
    );
}
