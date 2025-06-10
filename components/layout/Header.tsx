import Link from 'next/link';
import { NavBar } from './NavBar';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Header() {
    return (
        <header className="flex h-20 flex-row items-center justify-between border-b px-2 shadow-sm sm:px-4 md:px-8 lg:px-12 xl:px-24">
            <Link className="" href={'/'}>
                <Image
                    className=""
                    src="/invisor-logo.webp"
                    alt="Invisor"
                    width={150}
                    priority
                    height={150}
                />
            </Link>
            <div className="flex items-center justify-between gap-10 sm:flex-row-reverse md:flex-row">
                <NavBar />
                <Button className="hidden rounded-sm p-4 sm:flex">
                    <span className="font-medium">Contact Us</span>
                </Button>
            </div>
        </header>
    );
}
