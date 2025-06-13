import { Phone, Mail, MapPinned } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="mb-8">
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
            </div>
            <div className="flex flex-col justify-between gap-8 md:flex-row">
                {/* Contact Section */}
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-[#EAF3FE] p-2 shadow-md">
                            <Phone color="#1B1E65" size={16} />
                        </div>
                        <span>+1 2265779183</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-[#EAF3FE] p-2 shadow-md">
                            <Mail color="#1B1E65" size={16} />
                        </div>
                        <span>geevar.c@invisorglobal.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-[#EAF3FE] p-2 shadow-md">
                            <MapPinned color="#1B1E65" size={16} />
                        </div>
                        <div>
                            <p className="font-semibold">Fergus Office</p>
                            <p>
                                Unit B, 645 St David St. N, Fergus, N1M2K6, ON,
                                Canada
                            </p>
                            <p className="mt-2 font-semibold">London Office</p>
                            <p>
                                Unit 120, 341 Talbot Street, London, Ontario,
                                N6A2R5, Canada.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-row items-start justify-between gap-4 md:w-1/2">
                    {/* Explore */}
                    <div>
                        <h4 className="mb-2 font-semibold">Explore</h4>
                        <ul className="space-y-1">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="mb-2 font-semibold">Solutions</h4>
                        <ul className="space-y-1">
                            <li>Services</li>
                            <li>Industries</li>
                            <li>Tax Season</li>
                            <li>Case Study</li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h4 className="mb-2 font-semibold">Get in Touch</h4>
                        <ul className="space-y-1">
                            <li>Contact Us</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 border-t pt-4 text-center text-xs">
                © Copyright - Invisor Canada | All Rights Reserved
            </div>
        </footer>
    );
}
