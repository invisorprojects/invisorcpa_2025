'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import ScrollLink from './scroll-link';

const WA_LINK =
    'https://wa.me/12262273482?text=Hi%2C%20I%27d%20like%20a%20free%20cross-border%20tax%20consultation.';

/**
 * Fixed bottom action bar shown on phones only (CSS handles the <768px gate).
 * Hides while the visitor is typing in a form field so it never covers inputs.
 */
export default function MobileStickyBar() {
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        const isField = (el: EventTarget | null) => {
            const node = el as HTMLElement | null;
            if (!node) return false;
            const tag = node.tagName;
            return (
                tag === 'INPUT' ||
                tag === 'TEXTAREA' ||
                tag === 'SELECT' ||
                node.isContentEditable
            );
        };

        const onFocusIn = (e: FocusEvent) => {
            if (isField(e.target)) setTyping(true);
        };
        const onFocusOut = (e: FocusEvent) => {
            if (isField(e.target)) setTyping(false);
        };

        document.addEventListener('focusin', onFocusIn);
        document.addEventListener('focusout', onFocusOut);
        return () => {
            document.removeEventListener('focusin', onFocusIn);
            document.removeEventListener('focusout', onFocusOut);
        };
    }, []);

    return (
        <div className="cbt-sticky-bar" data-hidden={typing} aria-hidden={typing}>
            <a
                href="tel:+12262273482"
                className="cbt-sticky-bar__btn cbt-sticky-bar__btn--outline"
            >
                <Phone aria-hidden="true" />
                Call
            </a>
            <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="cbt-sticky-bar__btn cbt-sticky-bar__btn--outline"
            >
                <MessageCircle aria-hidden="true" />
                WhatsApp
            </a>
            <ScrollLink
                href="#hero-form"
                className="cbt-sticky-bar__btn cbt-sticky-bar__btn--primary"
            >
                Free Consultation
            </ScrollLink>
        </div>
    );
}
