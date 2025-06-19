'use client';

import { NAV_ITEMS } from '@/constants/NAV_ITEMS';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

export function NavBar() {
    const path = usePathname();
    return (
        <>
            <nav className="hidden flex-row items-center justify-center gap-2 md:flex md:gap-4 lg:gap-10 xl:gap-12">
                {NAV_ITEMS.map((item, index) => (
                    <Link
                        key={index}
                        href={item.disabled ? `${path}` : item.href}
                    >
                        <span
                            className={`flex text-lg font-semibold ${
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

            <nav className="flex flex-row items-center justify-center md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <Menu className="size-8" />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col gap-4 p-4">
                        <SheetTitle></SheetTitle>

                        {NAV_ITEMS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.disabled ? `${path}` : item.href}
                            >
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
                        <Button className="rounded-sm p-4 sm:hidden">
                            <span className="font-medium">Contact Us</span>
                        </Button>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    );
}
