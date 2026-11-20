'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Check,
    ChevronRight,
    Cpu,
    HardHat,
    HeartPulse,
    Laptop,
    Plane,
    ShoppingCart,
    Truck,
    Utensils,
    type LucideIcon,
} from 'lucide-react';

type Industry = {
    icon: LucideIcon;
    name: string;
    points: string[];
    image: string;
};

const INDUSTRIES: Industry[] = [
    {
        icon: HardHat,
        name: 'Construction and trades',
        points: [
            'Job costing and work-in-progress schedules',
            'Subcontractor payments and T5018 reporting',
            'Holdbacks and retainage',
            'GST/HST on progress billing',
        ],
        image: '/assets/industries/industries-3.webp',
    },
    {
        icon: ShoppingCart,
        name: 'E-commerce and retail',
        points: [
            'Shopify, Amazon and Stripe reconciliations',
            'Sales tax across provinces and US states',
            'Inventory and cost of goods sold',
            'Cross-border shipping and duties',
        ],
        image: '/assets/industries/industries-2.webp',
    },
    {
        icon: Laptop,
        name: 'Professional services',
        points: [
            'Time, billing and work in progress',
            'Partner draws and compensation planning',
            'Contractor versus employee reviews',
            'Owner tax and salary-dividend mix',
        ],
        image: '/assets/industries/industries-1.webp',
    },
    {
        icon: HeartPulse,
        name: 'Healthcare and non-profits',
        points: [
            'Funder reporting and restricted funds',
            'Ontario Health at Home accounting',
            'Payroll for clinical and support staff',
            'Charity and non-profit filings',
        ],
        image: '/assets/industries/industries-4.webp',
    },
    {
        icon: Utensils,
        name: 'Restaurants and hospitality',
        points: [
            'Daily sales and tip reconciliations',
            'Food cost and margin reporting',
            'Payroll with variable hours',
            'Multi-location consolidation',
        ],
        image: '/assets/our-process.webp',
    },
    {
        icon: Truck,
        name: 'Import, export and distribution',
        points: [
            'Landed cost and customs reconciliation',
            'Foreign currency and FX gains',
            'Intercompany invoicing across the border',
            'US nexus and sales tax reviews',
        ],
        image: '/assets/section-2-1.webp',
    },
    {
        icon: Cpu,
        name: 'Technology and startups',
        points: [
            'SR&ED and US R&D credit claims',
            'Investor-ready monthly reporting',
            'US subsidiary setup and filings',
            'Stock options and payroll',
        ],
        image: '/assets/about-us.webp',
    },
    {
        icon: Plane,
        name: 'Tourism and travel',
        points: [
            'Seasonal cash-flow planning',
            'Multi-currency bookings and deposits',
            'GST/HST on travel services',
            'Seasonal payroll',
        ],
        image: '/assets/industries/industries-1.webp',
    },
];

export function IndustryTabs() {
    const [active, setActive] = useState(0);
    const current = INDUSTRIES[active];
    const Icon = current.icon;

    return (
        <div className="rd-industries">
            <div className="rd-industries__tabs" role="tablist" aria-label="Industries">
                {INDUSTRIES.map((item, index) => {
                    const TabIcon = item.icon;
                    return (
                        <button
                            key={item.name}
                            type="button"
                            role="tab"
                            aria-selected={index === active}
                            data-active={index === active}
                            onClick={() => setActive(index)}
                        >
                            <TabIcon aria-hidden="true" />
                            <span>{item.name}</span>
                            <ChevronRight aria-hidden="true" />
                        </button>
                    );
                })}
            </div>

            <div className="rd-industries__panel" role="tabpanel">
                <div className="rd-industries__copy">
                    <span className="rd-icon">
                        <Icon aria-hidden="true" />
                    </span>
                    <h3>{current.name}</h3>
                    <ul>
                        {current.points.map((point) => (
                            <li key={point}>
                                <Check aria-hidden="true" />
                                {point}
                            </li>
                        ))}
                    </ul>
                    <Link href="/services/industries" className="rd-link">
                        See how we work with your industry
                        <ArrowRight aria-hidden="true" />
                    </Link>
                </div>
                <div className="rd-industries__image">
                    <Image
                        key={current.image + active}
                        src={current.image}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 40vw"
                    />
                </div>
            </div>
        </div>
    );
}
