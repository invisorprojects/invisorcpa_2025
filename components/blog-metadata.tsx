export function BlogMetadata({
    data,
    intent,
    className,
}: {
    data: {
        publishedAt: Date
        readTimeMins: number
    }
    intent: 'card' | 'post'
    className?: string
}) {
    const {  publishedAt, readTimeMins } = data

    return (
        <div className={className}>

            {/* date, read time */}
            <div
                className={`flex justify-between ${intent === 'card' ? 'text-sm gap-1.5 text-right' : 'text-base gap-2'}`}
            >
                <time dateTime={new Date(publishedAt).toISOString()} className="leading-none">
                    {publishedAt.toLocaleString('en-GB', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                </time>
                <p className="text-dimmed leading-none">{readTimeMins} minutes read</p>
            </div>
        </div>
    )
}
