'use client';

import * as React from 'react';

type ScrollLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: `#${string}`;
};

const ScrollLink = React.forwardRef<HTMLAnchorElement, ScrollLinkProps>(
    ({ href, onClick, ...props }, ref) => {
        const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
            onClick?.(event);

            if (
                event.defaultPrevented ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const target = document.getElementById(href.slice(1));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', href);
        };

        return <a ref={ref} href={href} onClick={handleClick} {...props} />;
    }
);

ScrollLink.displayName = 'ScrollLink';

export default ScrollLink;
