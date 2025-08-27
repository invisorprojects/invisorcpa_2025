export function PerformanceOptimizer() {
    return (
        <>
            {/* Critical CSS inline for above-the-fold content */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        /* Optimize font loading */
                        .font-display-swap {
                            font-display: swap;
                        }
                        
                        /* Reduce layout shift for images */
                        .image-optimized {
                            aspect-ratio: auto;
                            object-fit: cover;
                        }
                        
                        /* Smooth scrolling */
                        html {
                            scroll-behavior: smooth;
                        }
                        
                        /* Optimize button interactions */
                        button {
                            transition: all 0.2s ease-in-out;
                        }
                        
                        /* Optimize link hover states */
                        a {
                            transition: color 0.2s ease-in-out;
                        }
                    `,
                }}
            />

            {/* Resource hints for external domains */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.clarity.ms" />

            {/* Preconnect to external domains for faster connections */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />

            {/* Preload critical images used on the homepage */}
            <link
                rel="preload"
                href="/invisor-logo.webp"
                as="image"
                type="image/webp"
            />
            <link
                rel="preload"
                href="/assets/laptop-lady.webp"
                as="image"
                type="image/webp"
            />

            {/* Prefetch important pages for better navigation performance */}
            <link rel="prefetch" href="/services" />
            <link rel="prefetch" href="/about-us" />
            <link rel="prefetch" href="/contact-us" />
            <link rel="prefetch" href="/pricing" />
        </>
    );
}
