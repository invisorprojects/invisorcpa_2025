import Link from 'next/link';
import { NavBar } from './NavBar';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex h-20 flex-row items-center justify-between border-b bg-white px-2 shadow-sm sm:px-4 md:px-8 lg:px-12 xl:px-24">
            <Link className="" href={'/'}>
                <Image
                    className="h-10 w-auto"
                    src="/invisor-logo.webp"
                    alt="Invisor"
                    width={805}
                    height={220}
                    priority={true}
                />
            </Link>
            <div className="flex items-center justify-between gap-10 sm:flex-row-reverse md:flex-row">
                <NavBar />
                <Link href="/contact-us">
                    <Button className="hidden rounded-sm px-4 py-5 hover:cursor-pointer sm:flex">
                        <span className="text-lg font-extrabold">
                            Contact Us
                        </span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}
