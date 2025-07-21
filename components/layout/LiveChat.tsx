'use client';

import { useEffect } from 'react';

export default function LiveChat() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/687e45c13b2af81922773516/1j0mk1036';
        script.async = true;
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);
    }, []);

    return null;
}
