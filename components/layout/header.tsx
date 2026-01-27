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
                <Link
                    className="hidden sm:flex"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfzUB4ePN_gz-eQso8NRiuEgGaOXNjUnGyb42lRVddnjSLCYA/viewform"
                    target="_blank"
                >
                    <Button className="relative rounded-sm bg-yellow-400 px-4 py-5 text-black shadow-[0_0_15px_rgba(250,204,21,0.6)] transition-all hover:bg-yellow-500 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:cursor-pointer">
                        <span className="absolute inset-0 animate-pulse rounded-sm bg-yellow-400 opacity-50 blur-sm"></span>

                        {/* Rotating Star System 1 (Clockwise) */}
                        <div className="absolute inset-0 animate-spin-slow">
                            {/* Top Center */}
                            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 animate-sparkle text-white opacity-0 delay-0">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Top Right (New) */}
                            <span className="absolute right-0 -top-2 h-2 w-2 animate-sparkle text-white opacity-0 delay-1000">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Bottom Right */}
                            <span className="absolute -bottom-1 -right-1 h-2 w-2 animate-sparkle text-white opacity-0 delay-700">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Bottom Center (New) */}
                            <span className="absolute -bottom-2 left-1/3 h-2 w-2 animate-sparkle text-white opacity-0 delay-200">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Bottom Left */}
                            <span className="absolute -bottom-1 -left-1 h-2 w-2 animate-sparkle text-white opacity-0 delay-300">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                        </div>

                        {/* Rotating Star System 2 (Counter-Clockwise - fake by offset/reversing not explicitly needed if subtle, but I'll add a second layer for depth) */}
                        <div className="absolute inset-0 animate-spin-slow [animation-direction:reverse]">
                            {/* Top Left (New) */}
                            <span className="absolute -left-1 -top-1 h-2 w-2 animate-sparkle text-white opacity-0 delay-150">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Top Right */}
                            <span className="absolute -right-1 -top-1 h-3 w-3 animate-sparkle text-white opacity-0 delay-500">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Right Middle (New) */}
                            <span className="absolute -right-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-sparkle text-white opacity-0 delay-900">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                            {/* Left Middle */}
                            <span className="absolute -left-2 top-1/2 h-2 w-2 -translate-y-1/2 animate-sparkle text-white opacity-0 delay-200">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                </svg>
                            </span>
                        </div>

                        <span className="relative z-10 text-lg font-extrabold">
                            New Client Intake Form
                        </span>
                    </Button>
                </Link>
            </div>
        </header>
    );
}
