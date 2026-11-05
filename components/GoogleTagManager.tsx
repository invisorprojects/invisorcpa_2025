export const GTM_ID = 'GTM-P99CPN5G';

/**
 * Google tag snippet supplied by the Google Ads team.
 * Render this as the FIRST child of <head> in every root layout.
 *
 * Uses plain <script> tags (not next/script) so the tag is emitted as real
 * HTML in the server response. next/script with `beforeInteractive` wraps
 * inline code in a `self.__next_s.push(...)` string that only runs once the
 * Next.js runtime boots, which delays the tag and hides it from tag checkers.
 */
export function GoogleTagManager() {
    return (
        <>
            <script
                async
                src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
            />
            <script
                id="google-tag-init"
                dangerouslySetInnerHTML={{
                    __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
                }}
            />
        </>
    );
}

export function GoogleTagManagerNoScript() {
    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            />
        </noscript>
    );
}
