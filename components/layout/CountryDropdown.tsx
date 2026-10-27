'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, ExternalLink, Loader2 } from 'lucide-react';
import { CanadaFlag, USAFlag } from '@/components/icons/Flags';

interface CountryOption {
    code: 'ca' | 'us';
    name: string;
    flag: React.ReactNode;
    url?: string;
    isExternal?: boolean;
}

const COUNTRIES: CountryOption[] = [
    {
        code: 'ca',
        name: 'Canada',
        flag: (
            <span className="flex items-center overflow-hidden rounded-[2px] shadow-xs ring-1 ring-black/15">
                <CanadaFlag className="h-3.5 w-5 object-cover" />
            </span>
        ),
    },
    {
        code: 'us',
        name: 'USA',
        flag: (
            <span className="flex items-center overflow-hidden rounded-[2px] shadow-xs ring-1 ring-black/15">
                <USAFlag className="h-3.5 w-5 object-cover" />
            </span>
        ),
        url: 'https://invisorcpa.us',
        isExternal: true,
    },
];

interface CountryDropdownProps {
    className?: string;
    variant?: 'header' | 'mobile-sheet';
}

export function CountryDropdown({
    className = '',
    variant = 'header',
}: CountryDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState<'ca' | 'us'>('ca');
    const [isRedirecting, setIsRedirecting] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleSelect = (country: CountryOption) => {
        if (country.code === 'us') {
            setIsRedirecting(true);
            setSelectedCode('us');
            setIsOpen(false);
            const targetUrl = country.url || 'https://invisorcpa.us';
            window.location.assign(targetUrl);
            return;
        }

        // Canada selected -> stay on the same page
        setSelectedCode('ca');
        setIsOpen(false);
    };

    const currentCountry =
        COUNTRIES.find((c) => c.code === selectedCode) || COUNTRIES[0];

    return (
        <div
            ref={dropdownRef}
            className={`relative inline-block text-left ${className}`}
        >
            {/* Trigger Button */}
            <button
                type="button"
                id={`country-dropdown-btn-${variant}`}
                onClick={() => setIsOpen((prev) => !prev)}
                className={`group flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-700 shadow-xs transition-all hover:border-gray-300 hover:bg-gray-50/80 focus:ring-2 focus:ring-blue-500/20 focus:outline-hidden active:bg-gray-100 ${
                    variant === 'mobile-sheet' ? 'w-full justify-between py-2 px-3' : ''
                }`}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-label="Select Country"
            >
                <div className="flex items-center gap-2">
                    {currentCountry.flag}
                    <span className="text-xs font-semibold tracking-wide sm:text-sm">
                        {currentCountry.name}
                    </span>
                    {isRedirecting && (
                        <Loader2 className="size-3.5 animate-spin text-blue-600" />
                    )}
                </div>
                <ChevronDown
                    className={`size-3.5 text-gray-400 transition-transform duration-200 group-hover:text-gray-600 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                    aria-hidden="true"
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    id={`country-dropdown-menu-${variant}`}
                    className={`absolute z-50 mt-1 min-w-[150px] rounded-lg border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black/5 animate-in fade-in-0 zoom-in-95 duration-150 ${
                        variant === 'mobile-sheet'
                            ? 'left-0 right-0 w-full'
                            : 'right-0 origin-top-right'
                    }`}
                    role="listbox"
                    aria-label="Countries"
                >
                    <div className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                        Select Region
                    </div>
                    {COUNTRIES.map((country) => {
                        const isSelected = selectedCode === country.code;
                        const itemContent = (
                            <>
                                <div className="flex items-center gap-2.5">
                                    {country.flag}
                                    <span className="font-medium">
                                        {country.name}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    {isSelected ? (
                                        <Check
                                            className="size-4 text-blue-600"
                                            aria-hidden="true"
                                        />
                                    ) : country.isExternal ? (
                                        <ExternalLink
                                            className="size-3.5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    ) : null}
                                </div>
                            </>
                        );

                        if (country.code === 'us') {
                            return (
                                <a
                                    key={country.code}
                                    id={`country-option-${country.code}-${variant}`}
                                    href={country.url || 'https://invisorcpa.us'}
                                    onClick={() => {
                                        setSelectedCode('us');
                                        setIsOpen(false);
                                    }}
                                    className={`flex w-full items-center justify-between gap-2.5 rounded-md px-2.5 py-2 text-left text-sm transition-colors hover:cursor-pointer ${
                                        isSelected
                                            ? 'bg-blue-50 font-semibold text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                                    role="option"
                                    aria-selected={isSelected}
                                >
                                    {itemContent}
                                </a>
                            );
                        }

                        return (
                            <button
                                key={country.code}
                                id={`country-option-${country.code}-${variant}`}
                                type="button"
                                onClick={() => handleSelect(country)}
                                className={`flex w-full items-center justify-between gap-2.5 rounded-md px-2.5 py-2 text-left text-sm transition-colors hover:cursor-pointer ${
                                    isSelected
                                        ? 'bg-blue-50 font-semibold text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                                role="option"
                                aria-selected={isSelected}
                            >
                                {itemContent}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
