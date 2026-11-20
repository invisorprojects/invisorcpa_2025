'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HardDriveUpload, Menu, X } from 'lucide-react';

const UPLOAD_URL =
    'https://app.pigeondocuments.com/client-upload/72bb7260-1e29-4ca8-a997-bb627573927a?requesterId=bdf57f0a-63d4-4899-8e4b-cc634d7e3597&teamId=bb57c808-b997-494f-af31-b3ffbff11c68';
const LOGIN_URL = 'https://taxfolder.com/Client/Home';

const NAV = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/services/cross-border-taxes', label: 'Cross-border tax' },
    { href: '/about-us', label: 'About us' },
    { href: '/contact-us', label: 'Contact us' },
];

export function SiteHeader() {
    const [open, setOpen] = useState(false);

    return (
        <header className="rd-site-header" data-open={open}>
            <div className="rd-wrap rd-site-header__inner">
                <Link href="/" className="rd-site-header__logo" aria-label="Invisor home">
                    <Image
                        src="/invisorcpa-logo.png"
                        alt="Invisor"
                        width={980}
                        height={256}
                        priority
                    />
                </Link>

                <nav className="rd-site-header__nav" aria-label="Main">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="rd-site-header__actions">
                    <a
                        href={UPLOAD_URL}
                        className="rd-icon-btn"
                        aria-label="Upload files"
                        title="Upload files"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <HardDriveUpload aria-hidden="true" />
                    </a>
                    <a href={LOGIN_URL} className="rd-btn rd-btn--ghost rd-btn--sm">
                        Log in
                    </a>
                    <Link href="/contact-us" className="rd-btn rd-btn--primary rd-btn--sm">
                        Book a consultation
                    </Link>
                    <button
                        type="button"
                        className="rd-site-header__toggle"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </header>
    );
}
