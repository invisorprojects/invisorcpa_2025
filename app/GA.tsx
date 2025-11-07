// app/GA.tsx
'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GA() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const gaId = 'G-KLWG9V2SYX';

    useEffect(() => {
        if (!gaId || !pathname) return;
        const url =
            pathname + (searchParams?.toString() ? `?${searchParams}` : '');
        // @ts-expect-error: gtag is injected by GA script at runtime
        window.gtag?.('config', gaId, { page_path: url });
    }, [gaId, pathname, searchParams]);

    return null;
}
