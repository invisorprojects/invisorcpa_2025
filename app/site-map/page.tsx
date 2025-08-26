/* eslint-disable @typescript-eslint/no-explicit-any */
export const dynamic = 'force-static';

import Link from 'next/link';
import { SERVICES } from '@/constants/SERVICES';
import { getStoryblokApi } from '@/lib/storyblok';

export const metadata = {
    title: 'HTML Sitemap',
    description: 'Browse all important pages on Invisor CPA',
    alternates: {
        canonical: 'https://invisorcpa.ca/site-map',
    },
};

export default async function HtmlSitemap() {
    const storyblokApi = getStoryblokApi();
    let blogs: { name: string; slug: string }[] = [];
    let caseStudies: { name: string; slug: string }[] = [];

    try {
        const [blogsData, caseStudiesData] = await Promise.all([
            storyblokApi.get('cdn/stories', {
                version:
                    process.env.NODE_ENV === 'production'
                        ? 'published'
                        : 'draft',
                starts_with: 'blogs/',
                content_type: 'blog',
                per_page: 100,
            }),
            storyblokApi.get('cdn/stories', {
                version:
                    process.env.NODE_ENV === 'production'
                        ? 'published'
                        : 'draft',
                starts_with: 'case-studies/',
                content_type: 'case_study',
                per_page: 100,
            }),
        ]);

        blogs = (blogsData.data.stories || []).map((s: any) => ({
            name: s.content?.title || s.name,
            slug: s.slug.replace('blogs/', ''),
        }));
        caseStudies = (caseStudiesData.data.stories || []).map((s: any) => ({
            name: s.content?.title || s.name,
            slug: s.slug.replace('case-studies/', ''),
        }));
    } catch (e) {
        console.log(e);
        // ignore storyblok fetch failures; show static sections
    }

    return (
        <main className="mx-auto max-w-5xl p-6 sm:p-10">
            <h1 className="mb-6 text-3xl font-bold">HTML Sitemap</h1>
            <p className="mb-10 text-gray-600">Quick links to key pages.</p>

            <section className="mb-10">
                <h2 className="mb-3 text-xl font-semibold">Core Pages</h2>
                <ul className="list-inside list-disc space-y-1">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/team">Team</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link href="/tax-calculator">Tax Calculator</Link>
                    </li>
                    <li>
                        <Link href="/payroll-calculator">
                            Payroll Calculator
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="mb-3 text-xl font-semibold">Services</h2>
                <ul className="list-inside list-disc space-y-1">
                    {SERVICES.map((s) => (
                        <li key={s.slug}>
                            <Link href={`/services/${s.slug}`}>{s.title}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/services/cross-border-taxes">
                            Cross-Border Taxes
                        </Link>
                    </li>
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="mb-3 text-xl font-semibold">Blogs</h2>
                <ul className="list-inside list-disc space-y-1">
                    <li>
                        <Link href="/blogs">All Blogs</Link>
                    </li>
                    {blogs.map((b) => (
                        <li key={b.slug}>
                            <Link href={`/blogs/${b.slug}`}>{b.name}</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-10">
                <h2 className="mb-3 text-xl font-semibold">Case Studies</h2>
                <ul className="list-inside list-disc space-y-1">
                    <li>
                        <Link href="/case-studies">All Case Studies</Link>
                    </li>
                    {caseStudies.map((c) => (
                        <li key={c.slug}>
                            <Link href={`/case-studies/${c.slug}`}>
                                {c.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
