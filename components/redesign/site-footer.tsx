import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const COLUMNS = [
    {
        title: 'Company',
        links: [
            { href: '/', label: 'Home' },
            { href: '/about-us', label: 'About us' },
            { href: '/team', label: 'Team' },
            { href: '/contact-us', label: 'Contact' },
        ],
    },
    {
        title: 'Services',
        links: [
            { href: '/services', label: 'All services' },
            { href: '/services/cross-border-taxes', label: 'Cross-border tax' },
            { href: '/services/eor-service-canada', label: 'Employer of record' },
            { href: '/services/industries', label: 'Industries' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { href: '/case-studies', label: 'Case studies' },
            { href: '/blogs', label: 'Blog' },
            { href: '/tax-calculator', label: 'Tax calculator' },
            { href: '/privacy-policy', label: 'Privacy policy' },
        ],
    },
];

export function SiteFooter() {
    return (
        <footer className="rd-site-footer">
            <div className="rd-wrap rd-site-footer__grid">
                <div className="rd-site-footer__brand">
                    <Image
                        src="/invisorcpa-logo.png"
                        alt="Invisor"
                        width={980}
                        height={256}
                    />
                    <p>
                        Accounting, tax, payroll and finance operations for
                        businesses and people working across Canada and the
                        United States.
                    </p>
                    <ul className="rd-site-footer__contact">
                        <li>
                            <Phone aria-hidden="true" />
                            <a href="tel:+12262273482">+1 226-227-3482</a>
                        </li>
                        <li>
                            <Mail aria-hidden="true" />
                            <a href="mailto:connect@invisorcpa.ca">
                                connect@invisorcpa.ca
                            </a>
                        </li>
                        <li>
                            <MapPin aria-hidden="true" />
                            <span>London and Fergus, Ontario</span>
                        </li>
                    </ul>
                </div>
                {COLUMNS.map((col) => (
                    <div key={col.title}>
                        <h3>{col.title}</h3>
                        <ul>
                            {col.links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="rd-site-footer__legal">
                <div className="rd-wrap rd-site-footer__legal-inner">
                    <p>
                        The information on this website is general and is not
                        tax, legal or accounting advice for a specific
                        situation.
                    </p>
                    <p>&copy; 2026 Invisor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
