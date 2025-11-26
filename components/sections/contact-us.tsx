import { CircleArrowRight, Phone } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactUs() {
    return (
        <section className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
            <div className="relative z-0 flex min-h-96 flex-col items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/contact-us.webp"
                        alt="Contact Us Background"
                        fill
                        className="rounded-2xl object-cover object-left"
                    />
                </div>
                <div className="z-10 flex max-w-2xl flex-col items-center justify-between gap-8">
                    <h2 className="text-primary text-center text-3xl font-bold sm:text-4xl">
                        Let&#39;s Connect : Schedule Your Consultation
                        Today!{' '}
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <Link href="/contact-us">
                            <Button className="flex items-center gap-2 rounded-full">
                                <span>Contact Us</span>
                                <CircleArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>

                        <a
                            target="_blank"
                            href="tel:+12262273482"
                            rel="noopener noreferrer"
                            aria-label="Contact us on Phone"
                        >
                            <Button
                                variant="link"
                                className="border-primary flex items-center gap-2 rounded-full border"
                            >
                                <span>Schedule an Introductory Call</span>
                                <Phone className="h-4 w-4" />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
