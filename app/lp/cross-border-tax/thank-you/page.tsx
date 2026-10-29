import type { Metadata } from 'next';
import { MessageCircle, Phone } from 'lucide-react';
import ThankYouClient from './_components/thank-you-client';

const WA_LINK =
    'https://wa.me/12262273482?text=Hi%2C%20I%27d%20like%20a%20free%20cross-border%20tax%20consultation.';

export const metadata: Metadata = {
    title: 'Thank you | Cross-Border Tax | Invisor CPA',
    description:
        'Your free cross-border tax consultation request has been received.',
    robots: { index: false, follow: true },
};

export default function CrossBorderThankYouPage() {
    return (
        <main className="cbt-page cbt-thank-you">
            <section className="cbt-thanks-hero">
                <div className="cbt-container cbt-thanks-wrap">
                    <ThankYouClient />

                    <div className="cbt-thanks-card">
                        <h2>What happens next</h2>
                        <ol className="cbt-thanks-steps">
                            <li>A cross-border specialist will review your answers.</li>
                            <li>
                                We&rsquo;ll contact you within 1 business day, by
                                phone or email, to book your consultation.
                            </li>
                            <li>
                                On the call, we&rsquo;ll tell you exactly what you
                                need to file and give you a fixed quote.
                            </li>
                        </ol>
                    </div>

                    {/*
                      Optional Calendly inline embed. Enable once Nisam supplies
                      the live event link, and set the event to Eastern time with
                      the team's real availability. Load the Calendly script on
                      this page only (never on the landing page).

                    <div className="cbt-thanks-card">
                        <h2>Want to lock in a time now?</h2>
                        <p>
                            Pick a slot for your free consultation below. This is
                            optional; we'll still contact you within 1 business day.
                        </p>
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/[account]/[event]?hide_gdpr_banner=1"
                            style={{ minWidth: 320, height: 700 }}
                        />
                        <Script
                            src="https://assets.calendly.com/assets/external/widget.js"
                            strategy="afterInteractive"
                        />
                    </div>
                    */}

                    <div className="cbt-thanks-card">
                        <h2>To make the most of your call</h2>
                        <p>
                            If you have them, keep your most recent US and Canadian
                            tax returns nearby. Not required, just helpful.
                        </p>
                    </div>

                    <div className="cbt-thanks-contact">
                        <strong>Want to talk sooner?</strong>
                        <div className="cbt-thanks-actions">
                            <a
                                href="tel:+12262273482"
                                className="cbt-button cbt-button--primary"
                            >
                                <Phone aria-hidden="true" />
                                Call 226-227-3482
                            </a>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="cbt-button cbt-button--outline-dark"
                            >
                                <MessageCircle aria-hidden="true" />
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
