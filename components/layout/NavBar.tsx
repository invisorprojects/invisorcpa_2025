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
                    <SheetTrigger aria-label="Open navigation menu">
                        <Menu
                            className="size-8"
                            aria-hidden="true"
                            focusable="false"
                        />
                    </SheetTrigger>
                    <SheetContent className="">
                        <SheetTitle></SheetTitle>
                        <div className="flex h-full flex-col justify-between gap-4 p-4">
                            <div className="flex flex-col gap-4">
                                {NAV_ITEMS.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={
                                            item.disabled
                                                ? `${path}`
                                                : item.href
                                        }
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
                            </div>
                            <div className="flex w-full justify-center">
                                <Link href="/contact-us" className="">
                                    <Button className="rounded-sm px-4 py-5 hover:cursor-pointer md:hidden">
                                        <span className="font-medium">
                                            Contact Us
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    );
}
