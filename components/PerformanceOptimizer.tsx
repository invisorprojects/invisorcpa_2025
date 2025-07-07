export function PerformanceOptimizer() {
    return (
        <>
            {/* Critical CSS inline */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        /* Critical CSS for above-the-fold content */
                        .hero-section {
                            display: flex;
                            flex-direction: column;
                            gap: 1rem;
                            padding: 1rem;
                        }
                        
                        @media (min-width: 640px) {
                            .hero-section {
                                padding: 2rem;
                            }
                        }
                        
                        @media (min-width: 768px) {
                            .hero-section {
                                padding: 3rem;
                            }
                        }
                        
                        @media (min-width: 1024px) {
                            .hero-section {
                                padding: 4rem;
                            }
                        }
                        
                        @media (min-width: 1280px) {
                            .hero-section {
                                padding: 6rem;
                            }
                        }
                        
                        /* Optimize font loading */
                        .font-optimized {
                            font-display: swap;
                        }
                        
                        /* Reduce layout shift */
                        .image-container {
                            aspect-ratio: 16/9;
                            overflow: hidden;
                        }
                        
                        .image-container img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    `,
                }}
            />

            {/* Resource hints */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />

            {/* Preload critical images */}
            <link
                rel="preload"
                href="/invisor-logo.webp"
                as="image"
                type="image/webp"
            />
            <link
                rel="preload"
                href="/assets/banners/banner-1.jpg"
                as="image"
                type="image/jpeg"
            />

            {/* Prefetch important pages */}
            <link rel="prefetch" href="/services" />
            <link rel="prefetch" href="/about-us" />
            <link rel="prefetch" href="/contact-us" />
        </>
    );
}
