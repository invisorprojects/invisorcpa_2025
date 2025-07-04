'use client';

import { useEffect } from 'react';

export default function LiveChat() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/6867a13072d72e190b4f14ac/1ivacravp';
        script.async = true;
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);
    }, []);

    return null;
}
