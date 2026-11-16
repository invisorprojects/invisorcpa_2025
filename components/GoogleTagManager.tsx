export const GTM_ID = 'GTM-P99CPN5G';

/**
 * Standard Google Tag Manager container snippet.
 * Render this as the FIRST child of <head> in every root layout.
 *
 * Uses a plain <script> tag (not next/script) so the tag is emitted as real
 * HTML in the server response. next/script with `beforeInteractive` wraps
 * inline code in a `self.__next_s.push(...)` string that only runs once the
 * Next.js runtime boots, which delays the tag and hides it from tag checkers.
 *
 * Do NOT replace this with a gtag.js-style snippet (`gtag('js', ...)`).
 * GTM only fires its Initialization / All Pages triggers (and therefore the
 * GA4 tag) after the `{ 'gtm.start', event: 'gtm.js' }` push below.
 */
export function GoogleTagManager() {
    return (
        <script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
        />
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
