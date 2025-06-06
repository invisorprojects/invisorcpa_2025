'use client';

import { NavItems } from '@/constants/NavItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
    const path = usePathname();
    return (
        <nav className="flex flex-row items-center justify-center gap-11">
            {NavItems.map((item, index) => (
                <Link key={index} href={item.disabled ? `${path}` : item.href}>
                    <span
                        className={`flex ${
                            path === item.href
                                ? 'text-blue-500'
                                : 'hover:text-blue-500'
                        }`}
                    >
                        {item.title}
                    </span>
                </Link>
            ))}
        </nav>
    );
}
