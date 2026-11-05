'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const SERVICE_LINKS = [
    { label: 'Bookkeeping Services', href: '/services/bookkeeping-services' },
    { label: 'Cloud Bookkeeping', href: '/services/cloud-bookkeeping' },
    {
        label: 'Outsourced Bookkeeping',
        href: '/services/outsourced-bookkeeping',
    },
    {
        label: 'QuickBooks Setup & Bookkeeping',
        href: '/services/quickbooks-setup-bookkeeping',
    },
    {
        label: 'Company Incorporation',
        href: '/services/company-incorporation-service-canada',
    },
    { label: 'Cross-Border Taxes', href: '/services/cross-border-taxes' },
];

const NAV_LINKS = [
    { label: 'Pricing', href: '#pricing' },
    { label: 'Offices', long: 'Offices & Remote Reach', href: '#offices' },
    { label: 'Software Stack', href: '#software' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQs', href: '#faqs' },
];

export function Logo() {
    return (
        <Link
            href="#top"
            className="flex items-center gap-3"
            aria-label="Invisor CPA, back to top"
        >
            <span className="grid size-10 place-items-center sm:size-12 rounded-xl bg-gradient-to-br from-sky-600 to-sky-800 font-[family-name:var(--font-rd-display)] text-xl font-extrabold text-white shadow-md shadow-sky-900/20">
                I
            </span>
            <span className="leading-none">
                <span className="block font-[family-name:var(--font-rd-display)] text-[1.7rem] font-extrabold tracking-tight text-slate-900">
                    INVISOR <span className="text-sky-700">CPA</span>
                </span>
                <span className="mt-1 hidden text-[0.7rem] font-semibold tracking-[0.12em] text-slate-500 uppercase sm:block">
                    Chartered Professional Accountants
                </span>
            </span>
        </Link>
    );
}

export default function SiteHeader() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close the services dropdown on outside click / Escape.
    useEffect(() => {
        if (!servicesOpen) return;
        const onClick = (e: MouseEvent) => {
            if (!dropdownRef.current?.contains(e.target as Node)) {
                setServicesOpen(false);
            }
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setServicesOpen(false);
        };
        document.addEventListener('mousedown', onClick);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onClick);
            document.removeEventListener('keydown', onKey);
        };
    }, [servicesOpen]);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-[1480px] sm:h-24 items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
                <Logo />

                <nav
                    aria-label="Primary"
                    className="hidden items-center gap-7 text-[1rem] font-medium text-slate-700 xl:flex 2xl:gap-9 2xl:text-[1.05rem]"
                >
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            aria-expanded={servicesOpen}
                            aria-haspopup="true"
                            onClick={() => setServicesOpen((o) => !o)}
                            className="flex items-center gap-1.5 transition-colors hover:text-sky-700"
                        >
                            Services
                            <ChevronDown
                                className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                            />
                        </button>
                        {servicesOpen && (
                            <div className="absolute top-full left-1/2 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10">
                                <a
                                    href="#services"
                                    onClick={() => setServicesOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-sky-700 hover:bg-sky-50"
                                >
                                    All accounting solutions
                                </a>
                                {SERVICE_LINKS.map((s) => (
                                    <Link
                                        key={s.href}
                                        href={s.href}
                                        className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-700"
                                    >
                                        {s.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    {NAV_LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="transition-colors hover:text-sky-700"
                        >
                            {l.long ? (
                                <>
                                    <span className="2xl:hidden">{l.label}</span>
                                    <span className="hidden 2xl:inline">
                                        {l.long}
                                    </span>
                                </>
                            ) : (
                                l.label
                            )}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#consultation"
                        className="hidden rounded-lg bg-sky-700 px-6 py-3.5 font-[family-name:var(--font-rd-display)] text-[1.05rem] font-bold text-white shadow-md shadow-sky-900/15 transition-colors hover:bg-sky-800 sm:inline-flex"
                    >
                        Book Free Consultation
                    </a>
                    <button
                        type="button"
                        className="grid size-11 place-items-center rounded-lg border border-slate-200 text-slate-700 xl:hidden"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((o) => !o)}
                    >
                        {mobileOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>
            </div>

            {mobileOpen && (
                <nav
                    aria-label="Mobile"
                    className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 xl:hidden"
                >
                    <ul className="flex flex-col gap-1 text-base font-medium text-slate-700">
                        {[{ label: 'Services', href: '#services' }, ...NAV_LINKS].map(
                            (l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-3 py-3 hover:bg-slate-50"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                    <a
                        href="#consultation"
                        onClick={() => setMobileOpen(false)}
                        className="mt-3 flex justify-center rounded-lg bg-sky-700 px-6 py-3.5 font-bold text-white sm:hidden"
                    >
                        Book Free Consultation
                    </a>
                </nav>
            )}
        </header>
    );
}
