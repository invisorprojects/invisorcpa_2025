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
                <Link
                    className="hidden sm:flex"
                    href="https://app.pigeondocuments.com/client-upload/72bb7260-1e29-4ca8-a997-bb627573927a?requesterId=bdf57f0a-63d4-4899-8e4b-cc634d7e3597&teamId=bb57c808-b997-494f-af31-b3ffbff11c68"
                >
                    <Button className="rounded-sm px-4 py-5 hover:cursor-pointer">
                        <span className="text-lg font-extrabold">
                            File Upload
                        </span>
                    </Button>
                </Link>
                <Link
                    className="hidden sm:flex"
                    href="https://taxfolder.com/Client/Home"
                >
                    <Button className="rounded-sm px-4 py-5 hover:cursor-pointer">
                        <span className="text-lg font-extrabold">
                            Client Login
                        </span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}
