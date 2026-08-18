import type { Metadata } from 'next';
import Link from 'next/link';
import {
    CalendarDays,
    ExternalLink,
    Mail,
    ShieldCheck,
} from 'lucide-react';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Privacy Policy | Invisor CPA',
    description:
        'Learn how Invisor Business Facts Ltd. collects, uses, stores, and protects personal information.',
    alternates: {
        canonical: 'https://www.invisorcpa.ca/privacy-policy',
    },
};

const pageSections = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'information-we-collect', label: 'Information We Collect' },
    { id: 'how-we-use-information', label: 'How We Use Your Information' },
    { id: 'cra-authorization', label: 'CRA Authorization' },
    { id: 'cloud-accounting-software', label: 'Cloud Accounting Software' },
    { id: 'analytics-and-cookies', label: 'Website Analytics and Cookies' },
    { id: 'sharing-information', label: 'Sharing Your Information' },
    { id: 'protecting-information', label: 'How We Protect Your Information' },
    { id: 'retention', label: 'Retention of Information' },
    { id: 'privacy-rights', label: 'Your Privacy Rights' },
    { id: 'third-party-websites', label: 'Third-Party Websites' },
    { id: 'childrens-privacy', label: "Children's Privacy" },
    { id: 'policy-changes', label: 'Changes to This Privacy Policy' },
    { id: 'contact-us', label: 'Contact Us' },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-[#f7f9fc]">
            <section className="relative overflow-hidden border-b border-[#dce4f2] bg-[linear-gradient(135deg,#f8fbff_0%,#eef5ff_48%,#f9fbff_100%)]">
                <div
                    aria-hidden="true"
                    className="absolute -top-28 -right-24 h-80 w-80 rounded-full bg-[#52b8ec]/10 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="bg-primary/5 absolute -bottom-32 -left-20 h-80 w-80 rounded-full blur-3xl"
                />

                <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16 lg:py-24 xl:px-24">
                    <div className="max-w-3xl">
                        <div className="text-primary mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfdcf1] bg-white/80 px-3.5 py-2 text-sm font-medium shadow-sm backdrop-blur">
                            <ShieldCheck className="size-4" aria-hidden="true" />
                            Legal &amp; privacy
                        </div>
                        <h1 className="text-primary text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Privacy Policy
                        </h1>
                        <p className="mt-6 max-w-2xl text-base leading-8 text-[#536176] sm:text-lg">
                            We are committed to protecting your privacy and
                            safeguarding the personal information you entrust
                            to us.
                        </p>
                        <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#d6e1f1] bg-white px-4 py-3 text-sm text-[#536176] shadow-sm">
                            <span className="bg-primary/8 text-primary flex size-9 items-center justify-center rounded-lg">
                                <CalendarDays
                                    className="size-4"
                                    aria-hidden="true"
                                />
                            </span>
                            <span>
                                <span className="block text-xs font-medium tracking-wide text-[#7a8799] uppercase">
                                    Effective date
                                </span>
                                <span className="text-foreground font-semibold">
                                    July 27, 2026
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-8 sm:py-16 md:px-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-16 lg:py-20 xl:px-24">
                <aside className="hidden lg:block">
                    <nav
                        aria-label="Privacy policy sections"
                        className="sticky top-28 rounded-2xl border border-[#e0e6ef] bg-white p-5 shadow-[0_12px_36px_rgba(25,42,85,0.06)]"
                    >
                        <p className="text-primary mb-4 text-sm font-bold tracking-wider uppercase">
                            On this page
                        </p>
                        <ol className="space-y-1">
                            {pageSections.map((section, index) => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        className="group flex items-start gap-3 rounded-lg px-2 py-1.5 text-sm leading-5 text-[#5f6c7e] transition-colors hover:bg-[#f3f7fc] hover:text-primary"
                                    >
                                        <span className="mt-px w-5 shrink-0 text-xs font-semibold text-[#99a5b5] group-hover:text-primary">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span>{section.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </aside>

                <article className="min-w-0 rounded-2xl border border-[#e0e6ef] bg-white px-5 py-8 shadow-[0_18px_50px_rgba(25,42,85,0.07)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                    <div className="border-b border-[#e8edf4] pb-10 text-[15px] leading-7 text-[#536176] sm:text-base sm:leading-8">
                        <p>
                            At Invisor Business Facts Ltd., we are committed to
                            protecting your privacy and safeguarding the
                            personal information you entrust to us. This Privacy
                            Policy explains how we collect, use, disclose,
                            store, and protect your personal information when
                            you visit our website, submit an inquiry, or engage
                            our accounting and bookkeeping services.
                        </p>
                        <p className="mt-5">
                            This policy applies to our website, online forms,
                            and all services provided by Invisor Business Facts
                            Ltd.
                        </p>
                    </div>

                    <PolicySection
                        id="who-we-are"
                        number="01"
                        title="Who We Are"
                    >
                        <p>
                            Invisor Business Facts Ltd provides professional
                            accounting, bookkeeping, payroll, tax, and business
                            advisory services to businesses across Canada.
                        </p>
                        <p>
                            If you have questions regarding this Privacy Policy
                            or our privacy practices, please contact:
                        </p>
                        <ContactCard />
                    </PolicySection>

                    <PolicySection
                        id="information-we-collect"
                        number="02"
                        title="Information We Collect"
                    >
                        <p>
                            We collect only the information necessary to
                            provide our services and respond to your inquiries.
                        </p>

                        <Subheading>Information you provide directly</Subheading>
                        <p>This may include:</p>
                        <PolicyList
                            items={[
                                'Full name',
                                'Business name',
                                'Email address',
                                'Telephone number',
                                'Business address',
                                'Information submitted through our contact forms',
                                'Accounting and financial records',
                                'Payroll information',
                                'Tax information',
                                'Banking information provided for bookkeeping purposes',
                                'CRA-related information necessary to perform authorized services',
                            ]}
                        />

                        <Subheading>
                            Information collected automatically
                        </Subheading>
                        <p>
                            When you visit our website, we may automatically
                            collect:
                        </p>
                        <PolicyList
                            items={[
                                'IP address',
                                'Browser type',
                                'Device information',
                                'Operating system',
                                'Pages visited',
                                'Time spent on our website',
                                'Referring websites',
                                'Website usage statistics',
                            ]}
                        />
                        <p>
                            This information helps us improve our website and
                            user experience.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="how-we-use-information"
                        number="03"
                        title="How We Use Your Information"
                    >
                        <p>We use your information to:</p>
                        <PolicyList
                            items={[
                                'Respond to inquiries submitted through our website',
                                'Provide bookkeeping and accounting services',
                                'Prepare tax returns and financial statements',
                                'Process payroll services',
                                'File GST/HST, payroll, T4, T5, T5018 and corporate tax returns',
                                'Communicate regarding your account',
                                'Meet legal and regulatory obligations',
                                'Improve our website and services',
                                'Detect fraud and maintain security',
                            ]}
                        />
                        <p>
                            We will only use your personal information for the
                            purposes for which it was collected or as otherwise
                            permitted by law.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="cra-authorization"
                        number="04"
                        title="CRA Authorization"
                    >
                        <p>
                            When you authorize Invisor CPA to act on your behalf
                            with the Canada Revenue Agency (CRA), we may collect
                            and use information necessary to:
                        </p>
                        <PolicyList
                            items={[
                                'Access CRA online services',
                                'Represent you before the CRA',
                                'Prepare and file tax returns',
                                'Respond to CRA correspondence',
                                'Manage payroll, GST/HST, and corporate tax matters',
                            ]}
                        />
                        <p>
                            We only access CRA information with your
                            authorization and solely for the services you have
                            requested.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="cloud-accounting-software"
                        number="05"
                        title="Cloud Accounting Software"
                    >
                        <p>
                            To provide our services efficiently, we may use
                            secure cloud-based accounting and business
                            platforms, including but not limited to:
                        </p>
                        <PolicyList
                            items={[
                                'QuickBooks Online',
                                'Xero',
                                'AccountEdge',
                                'Microsoft 365',
                                'Secure client portals',
                                'Document management and cloud storage platforms',
                            ]}
                        />
                        <p>
                            These service providers maintain their own privacy
                            and security practices. We select reputable
                            providers that use industry-standard security
                            measures.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="analytics-and-cookies"
                        number="06"
                        title="Website Analytics and Cookies"
                    >
                        <p>
                            Our website may use cookies and similar technologies
                            to:
                        </p>
                        <PolicyList
                            items={[
                                'Improve website functionality',
                                'Understand visitor behavior',
                                'Measure website traffic',
                                'Improve our marketing efforts',
                            ]}
                        />
                        <p>We may use services such as:</p>
                        <PolicyList
                            items={[
                                'Google Analytics',
                                'Google Search Console',
                                'Meta (Facebook) Pixel',
                                'Other website performance and analytics tools',
                            ]}
                        />
                        <p>
                            Cookies do not generally identify you personally but
                            help us understand how visitors use our website.
                        </p>
                        <p>
                            You can disable cookies through your browser
                            settings; however, some website features may not
                            function properly.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="sharing-information"
                        number="07"
                        title="Sharing Your Information"
                    >
                        <p className="text-foreground font-semibold">
                            We do not sell your personal information.
                        </p>
                        <p>
                            We may share your information only when necessary
                            with:
                        </p>
                        <PolicyList
                            items={[
                                'Canada Revenue Agency (with authorization)',
                                'Provincial tax authorities',
                                'Government agencies where legally required',
                                'Secure software providers used to deliver our services',
                                'Professional advisors where required',
                                'Courts or regulatory authorities where required by law',
                            ]}
                        />
                        <p>
                            All third parties are expected to protect your
                            information appropriately.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="protecting-information"
                        number="08"
                        title="How We Protect Your Information"
                    >
                        <p>
                            We use reasonable administrative, technical, and
                            physical safeguards to protect your personal
                            information, including:
                        </p>
                        <PolicyList
                            items={[
                                'Secure cloud storage',
                                'Encrypted data transmission where applicable',
                                'Password-protected systems',
                                'Restricted employee access',
                                'Multi-factor authentication where available',
                                'Regular software updates and security practices',
                            ]}
                        />
                        <p>
                            While we take appropriate precautions, no method of
                            electronic transmission or storage is completely
                            secure.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="retention"
                        number="09"
                        title="Retention of Information"
                    >
                        <p>
                            We retain your personal information only for as long
                            as necessary to:
                        </p>
                        <PolicyList
                            items={[
                                'Provide requested services',
                                'Meet legal and professional obligations',
                                'Comply with CRA record retention requirements',
                                'Resolve disputes',
                                'Enforce agreements',
                            ]}
                        />
                        <p>
                            When information is no longer required, it is
                            securely destroyed or anonymized where appropriate.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="privacy-rights"
                        number="10"
                        title="Your Privacy Rights"
                    >
                        <p>
                            Subject to applicable Canadian privacy laws, you may
                            have the right to:
                        </p>
                        <PolicyList
                            items={[
                                'Request access to your personal information',
                                'Request corrections to inaccurate information',
                                'Withdraw consent where applicable (subject to legal and contractual obligations)',
                                'Ask questions regarding how your information is handled',
                            ]}
                        />
                        <p>
                            Requests should be submitted to our Privacy Officer
                            using the contact information above.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="third-party-websites"
                        number="11"
                        title="Third-Party Websites"
                    >
                        <p>
                            Our website may contain links to third-party
                            websites.
                        </p>
                        <p>
                            We are not responsible for the privacy practices or
                            content of external websites. We encourage you to
                            review their privacy policies before providing
                            personal information.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="childrens-privacy"
                        number="12"
                        title="Children's Privacy"
                    >
                        <p>
                            Our services are intended for businesses and adults.
                        </p>
                        <p>
                            We do not knowingly collect personal information
                            from individuals under the age of 18.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="policy-changes"
                        number="13"
                        title="Changes to This Privacy Policy"
                    >
                        <p>
                            We may update this Privacy Policy from time to time.
                        </p>
                        <p>
                            Any changes will be posted on this page with an
                            updated effective date.
                        </p>
                    </PolicySection>

                    <PolicySection
                        id="contact-us"
                        number="14"
                        title="Contact Us"
                        isLast
                    >
                        <p>
                            If you have questions regarding this Privacy Policy
                            or wish to exercise your privacy rights, please
                            contact:
                        </p>
                        <ContactCard />
                    </PolicySection>
                </article>
            </div>
        </main>
    );
}

function PolicySection({
    id,
    number,
    title,
    children,
    isLast = false,
}: {
    id: string;
    number: string;
    title: string;
    children: ReactNode;
    isLast?: boolean;
}) {
    return (
        <section
            id={id}
            className={`scroll-mt-32 py-10 sm:py-12 ${
                isLast ? '' : 'border-b border-[#e8edf4]'
            }`}
        >
            <div className="mb-6 flex items-start gap-4">
                <span className="bg-primary/8 text-primary mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold">
                    {number}
                </span>
                <h2 className="text-primary text-2xl leading-tight font-bold tracking-tight sm:text-[1.75rem]">
                    {title}
                </h2>
            </div>
            <div className="space-y-5 text-[15px] leading-7 text-[#536176] sm:text-base sm:leading-8">
                {children}
            </div>
        </section>
    );
}

function Subheading({ children }: { children: ReactNode }) {
    return (
        <h3 className="text-foreground pt-3 text-lg font-semibold">
            {children}
        </h3>
    );
}

function PolicyList({ items }: { items: string[] }) {
    return (
        <ul className="grid gap-x-8 gap-y-2 pl-1 sm:grid-cols-2">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <span
                        aria-hidden="true"
                        className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-[#52b8ec]"
                    />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

function ContactCard() {
    return (
        <div className="mt-6 rounded-2xl border border-[#dbe5f2] bg-[#f6f9fd] p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                    <p className="text-primary text-base font-bold">
                        Privacy Officer
                    </p>
                    <p className="mt-1 text-sm text-[#69778a]">
                        Invisor Business Facts Ltd.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-2.5 text-sm">
                    <Link
                        href="mailto:connect@invisorcpa.ca"
                        className="text-primary inline-flex items-center gap-2 font-semibold hover:underline"
                    >
                        <Mail className="size-4" aria-hidden="true" />
                        Connect@invisorcpa.ca
                    </Link>
                    <Link
                        href="https://www.invisorcpa.ca"
                        className="text-primary inline-flex items-center gap-2 font-semibold hover:underline"
                    >
                        <ExternalLink className="size-4" aria-hidden="true" />
                        www.invisorcpa.ca
                    </Link>
                </div>
            </div>
        </div>
    );
}
