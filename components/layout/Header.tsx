import Link from 'next/link';
import { NavBar } from './NavBar';
import Image from 'next/image';
import { Button } from '../ui/button';

export function Header() {
    return (
        <header className="flex h-20 flex-row items-center justify-between border-b px-24 shadow-sm">
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
            <div className="flex gap-10">
                <NavBar />
                <Button className="rounded-sm p-4">
                    <span className="font-medium">Contact Us</span>
                </Button>
            </div>
        </header>
    );
}
