import { Phone, Mail, MapPinned } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="px-4 py-8 sm:px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="mb-8">
                <Link className="" href={'/'}>
                    <Image
                        className="h-10 w-auto"
                        src="/invisor-logo.webp"
                        alt="Invisor"
                        width={805}
                        height={220}
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
                        <span>+1 226-227-3482</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-[#EAF3FE] p-2 shadow-md">
                            <Mail color="#1B1E65" size={16} />
                        </div>
                        <span>connect@invisorcpa.ca</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-[#EAF3FE] p-2 shadow-md">
                            <MapPinned color="#1B1E65" size={16} />
                        </div>
                        <div>
                            <p className="font-semibold">Fergus Office</p>
                            <p>
                                645-B St. David St. N. Fergus, ON, NIM 2K6,
                                Canada
                            </p>
                            <p className="mt-2 font-semibold">London Office</p>
                            <p>375V- 341 Talbot St. London, ON N6A 2R5</p>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-row items-start justify-between gap-4 md:w-1/2">
                    {/* Explore */}
                    <div>
                        <h3 className="mb-2 font-semibold">Explore</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="/team">Team</Link>
                            </li>
                            <li>
                                <Link href="/blogs">Blog</Link>
                            </li>
                            <li>
                                <Link href="/site-map">Sitemap</Link>
                            </li>
                            <li>
                                <Link href="/add_review">Review</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="mb-2 font-semibold">Solutions</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/services">Services</Link>
                            </li>
                            <li>
                                <Link href="/tax-calculator">
                                    Tax Calculator
                                </Link>
                            </li>
                            <li>
                                <Link href="/payroll-calculator">
                                    Payroll Calculator
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies">Case Study</Link>
                            </li>
                            <li>
                                <Link href="/services/cross-border-taxes">
                                    Cross-border Taxes
                                </Link>
                            </li>

                            {/* <li>
                                <Link href="/industries">Industries</Link>
                            </li> */}
                            {/* <li>
                                <Link href="/tax-season">Tax Season</Link>
                            </li> */}
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="mb-2 font-semibold">Get in Touch</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/contact-us">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/pricing">Pricing</Link>
                            </li>
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
