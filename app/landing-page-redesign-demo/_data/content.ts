import {
    BrainCircuit,
    Calculator,
    CalendarCheck,
    Coins,
    FileText,
    HandHelping,
    Handshake,
    MessagesSquare,
    Repeat,
    ScrollText,
    UserLock,
    Users,
} from 'lucide-react';

export const PHONE_DISPLAY = '(226) 227-3482';
export const PHONE_HREF = 'tel:+12262273482';
export const EMAIL = 'info@invisorcpa.ca';

/* ---------------- Hero ---------------- */

export const trustPoints = [
    'CPA-Supervised Files',
    'EFILE Association Member',
    'PST / GST / HST Specialists',
    'Advanced QBO ProAdvisor',
    'Xero Certified Advisor',
    'Strict Data Encryption',
];

export const stats = [
    { value: '1,000+', label: 'Canadian Clients Served' },
    { value: '15+', label: 'Years Combined CPA Experience' },
    { value: '20+', label: 'Accounting & Tax Professionals' },
    { value: '2 Physical', label: 'Offices in Southwestern Ontario' },
];

/* ---------------- Memberships & credentials ---------------- */

export const memberships = [
    { src: '/assets/company-logos/logo-2.webp', alt: 'Proud member, Canadian Chamber of Commerce' },
    { src: '/assets/company-logos/logo-3.webp', alt: 'Association of Tax & Accounting Professionals' },
    { src: '/assets/company-logos/logo-4.webp', alt: 'CPB Canada' },
    { src: '/assets/company-logos/logo-5.webp', alt: 'National Payroll Institute' },
    { src: '/assets/company-logos/logo-6.webp', alt: 'Centre Wellington Chamber of Commerce' },
    { src: '/assets/company-logos/logo-7.webp', alt: 'Canadian Federation of Independent Business' },
    { src: '/assets/company-logos/logo-1.webp', alt: 'Member, EFILE Association of Canada' },
];

export const credentials = [
    { src: '/assets/our-achievements/achievement-1.webp', alt: 'QuickBooks Certified ProAdvisor, Advanced QuickBooks Online 2024' },
    { src: '/assets/our-achievements/achievement-2.webp', alt: 'QuickBooks Certified ProAdvisor, Online' },
    { src: '/assets/our-achievements/achievement-4.webp', alt: 'CPB Canada Certified Member' },
    { src: '/assets/our-achievements/achievement-5.webp', alt: 'Xero Certified Advisor' },
    { src: '/assets/our-achievements/achievement-3.webp', alt: 'Zoho Authorized Partner' },
];

/* ---------------- Services ---------------- */

export const services = [
    {
        icon: Calculator,
        tint: 'bg-sky-50 text-sky-700 ring-sky-100',
        title: 'Monthly & Catch-Up Bookkeeping',
        body: 'Never stress about reconciliation backlogs. We categorize expenses, reconcile multi-currency Stripe/PayPal transactions, and close monthly books with audit-proof precision.',
        points: [
            'Bank & credit card reconciliations',
            'Multi-year cleanups & catch-ups',
            'Monthly balance sheet & P&L',
        ],
        href: '/services/monthly-quarterly-bookkeeping',
    },
    {
        icon: FileText,
        tint: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
        title: 'Corporate Tax (T2) & Planning',
        body: 'Maximize your small business tax deductions while maintaining bulletproof CRA compliance. We handle corporate returns, shareholder loan reconciliations, and compilation engagements.',
        points: [
            'Corporate T2 filings via EFILE',
            'Salary vs. dividend optimization',
            'Notice to Reader / Compilations',
        ],
        href: '/services/business-tax-prep-filing',
    },
    {
        icon: Users,
        tint: 'bg-violet-50 text-violet-600 ring-violet-100',
        title: 'Payroll & Source Deductions',
        body: 'End-to-end Canadian payroll management. We eliminate late penalties by calculating CPP, EI, and income tax withholdings, remitting them directly to the CRA on your schedule.',
        points: [
            'Direct deposits via Wagepoint',
            'ROE filings & termination paperwork',
            'Year-end T4 / T4A & T5018 slips',
        ],
        href: '/services/payroll-management-services',
    },
    {
        icon: Coins,
        tint: 'bg-amber-50 text-amber-600 ring-amber-100',
        title: 'Sales Tax: HST / GST / PST / QST',
        body: 'Avoid penalties from interprovincial sales. We track registration thresholds and file returns across all Canadian jurisdictions, including Ontario HST, BC/SK/MB PST, and Quebec QST.',
        points: [
            'Multi-province tax registration',
            'Input Tax Credit (ITC) reconciliation',
            'Quick Method & regular filings',
        ],
        href: '/services/sales-tax-reporting',
    },
];

export const moreServices = [
    { label: 'Personal Tax Returns', href: '/services/personal-tax-returns' },
    { label: 'Trust Tax Filing', href: '/services/trust-tax-filing' },
    { label: 'Financial Reporting', href: '/services/financial-reporting' },
    { label: 'Accounts Payable', href: '/services/accounts-payable' },
    { label: 'Fractional CFO & Controller', href: '/services/outsourced-fractional-cfo-and-part-time-controller' },
    { label: 'Cross-Border Taxes', href: '/services/cross-border-taxes' },
    { label: 'Company Incorporation', href: '/services/company-incorporation-service-canada' },
    { label: 'AgriStability Filing', href: '/services/agristability-filing' },
    { label: 'Zoho Books & CRM Setup', href: '/services/zoho-books-mail-desk-crm-setup' },
    { label: 'Cloud Receipt Management', href: '/services/cloud-document-and-receipt-management' },
    { label: 'Ontario Health at Home Accounting', href: '/services/ontario-health-at-home-accounting-services' },
];

/* ---------------- Why Invisor ---------------- */

export const reasons = [
    {
        icon: BrainCircuit,
        title: 'Innovative Approaches',
        body: 'Leveraging the latest cloud technologies, we provide efficient solutions tailored to your needs.',
    },
    {
        icon: Handshake,
        title: 'Client-Focused Service',
        body: 'Your needs come first, with customized strategies for your unique business goals.',
    },
    {
        icon: HandHelping,
        title: 'Ongoing Support',
        body: 'A dedicated team that is always reachable, offering reliable support whenever you need it.',
    },
    {
        icon: UserLock,
        title: 'Personalized Solutions',
        body: 'Services shaped around your specific financial objectives, so you get the best results for your business.',
    },
];

export const outcomes = [
    { title: 'Accurate Books', body: 'Clean records and reliable monthly reporting.' },
    { title: 'Tax Ready', body: 'Organized support for CRA compliance.' },
    { title: 'Less Admin', body: 'Streamlined workflows for busy owners.' },
];

/* ---------------- Process ---------------- */

export const steps = [
    {
        icon: MessagesSquare,
        title: 'Free Discovery Session',
        body: 'A 20-minute call to understand your business, current books and filing obligations.',
    },
    {
        icon: ScrollText,
        title: 'Fixed-Fee Proposal',
        body: 'A clear, fixed monthly or annual quote with exactly what is included. No hourly surprises.',
    },
    {
        icon: CalendarCheck,
        title: 'Onboarding & Cleanup',
        body: 'We connect your bank feeds, set up QuickBooks or Xero and catch up any backlog.',
    },
    {
        icon: Repeat,
        title: 'Ongoing Close & Filing',
        body: 'Monthly reports, payroll runs and every CRA filing handled on schedule, all year.',
    },
];

/* ---------------- Provinces ---------------- */

export const provinces = [
    { title: 'Ontario', rate: '13% HST', body: 'Single combined return managed via CRA My Business Account.' },
    { title: 'British Columbia', rate: '5% GST + 7% PST', body: 'Dual filings: GST to CRA, PST through BC eTaxBC system.' },
    { title: 'Alberta', rate: '5% GST', body: 'No provincial sales tax. Only federal 5% GST filing needed.' },
    { title: 'Saskatchewan', rate: '5% GST + 6% PST', body: 'Mandatory SK SETS electronic return filing for remote sellers.' },
];

/* ---------------- Software ---------------- */

export const tools = [
    { name: 'QuickBooks Online', logo: '/assets/tools/quickbooks.webp', url: 'https://quickbooks.intuit.com' },
    { name: 'Xero', logo: '/assets/tools/xero.svg', url: 'https://www.xero.com' },
    { name: 'Dext', logo: '/assets/tools/dext.webp', url: 'https://dext.com' },
    { name: 'Wagepoint', logo: '/assets/tools/wagepoint.webp', url: 'https://wagepoint.com' },
    { name: 'Plooto', logo: '/assets/tools/plooto.webp', url: 'https://plooto.com' },
    { name: 'Float', logo: '/assets/tools/float.webp', url: 'https://www.floatcard.com' },
    { name: 'Venn', logo: '/assets/tools/venn.webp', url: 'https://www.vennbank.com' },
    { name: 'Humi', logo: '/assets/tools/humi.webp', url: 'https://www.humi.ca' },
];

/* ---------------- Clients ---------------- */

export const clientLogos = Array.from(
    { length: 24 },
    (_, i) => `/assets/customer-logos/${i + 1}.webp`
);

/* ---------------- Offices ---------------- */

export const offices = [
    {
        badge: 'Headquarters & Walk-In Office',
        title: 'London, Ontario CPA Office',
        body: 'Providing in-person corporate accounting, bookkeeping, and tax planning to businesses across Middlesex County, St. Thomas, Woodstock, and Strathroy.',
        address: '375V - 341 Talbot St., London, ON N6A 2R5',
        hours: 'Mon - Fri: 9:00 AM – 5:00 PM EST',
        cta: 'Schedule an In-Person Meeting in London',
        image: '/assets/our-process.webp',
        map: 'https://maps.google.com/?q=341+Talbot+St,+London,+ON+N6A+2R5',
    },
    {
        badge: 'Regional Branch',
        title: 'Centre Wellington (Fergus), ON Office',
        body: 'Serving agricultural businesses, contractors, retail, and professionals throughout Fergus, Elora, Guelph, Kitchener-Waterloo, and Wellington County.',
        address: '645-B St. David St. N., Fergus, ON N1M 2K6',
        hours: 'Mon - Fri: By Appointment & General Hours',
        cta: 'Schedule an In-Person Meeting in Fergus',
        image: '/assets/about-us.webp',
        map: 'https://maps.google.com/?q=645+St+David+St+N,+Fergus,+ON+N1M+2K6',
    },
];

export const cloudHubs = [
    'Toronto & GTA',
    'Vancouver',
    'Calgary',
    'Edmonton',
    'Winnipeg',
    'Ottawa',
    'Montreal',
    'Halifax',
];

/* ---------------- Pricing ---------------- */

export const plans = [
    {
        eyebrow: 'Self-Employed & Freelance',
        title: 'Sole Proprietor',
        body: 'Designed for independent contractors and consultants needing annual compliance.',
        price: '$595',
        period: 'Annually',
        features: [
            'QuickBooks Online Setup Support',
            'Track Income & Expenses',
            'Business GST/HST Filing',
            'T1 Return & T2125 Statement Filing',
            'CRA Review Assistance',
        ],
        featured: false,
    },
    {
        eyebrow: 'Small Incorporated Business',
        title: 'Monthly Bookkeeping & Tax',
        body: 'Complete financial back-office support with month-end closes and payroll.',
        price: '$495',
        period: 'Month',
        features: [
            'Everything in Sole Proprietor, plus:',
            'Monthly Reconciliation & Management Reports',
            'Annual Corporate Tax (T2) Filing',
            'GST / HST / PST Filing & Remittance',
            'Payroll Management (T4, ROE & Pay Stubs)',
            'Dividend Planning & T5 Filings',
        ],
        featured: true,
    },
    {
        eyebrow: 'Annual Incorporated Filing',
        title: 'Year-End Corporate (T2)',
        body: 'For corporations whose day-to-day books are ready and need annual compilation and tax.',
        price: '$1,495',
        period: 'Annually',
        features: [
            'Corporate Tax (T2) Preparation & Filing',
            'Financial Compilation / Notice to Reader',
            'Shareholder Loan Reconciliation',
            'Annual GST/HST Reporting Check',
            'T4/T5 Year-End Dividend Prep',
        ],
        featured: false,
    },
];

/* ---------------- Team ---------------- */

export const leaders = [
    {
        name: 'Geevar Thambi',
        credentials: 'MBA, CMA, CSCA, CPB, EA',
        bio: 'Specializing in cross-border tax advisory, small business bookkeeping architecture, and financial leadership across Canadian jurisdictions.',
        photo: '/assets/team/team-members-3.webp',
    },
    {
        name: 'Bernie Keim',
        credentials: 'MBA, CGA, CPA',
        bio: 'Senior Canadian CPA with extensive experience in corporate tax structuring, compilation engagements, and CRA notice resolutions.',
        photo: '/assets/team/team-members-2.webp',
    },
    {
        name: 'Roji Thomas',
        credentials: 'Finance Transformation & ERP Migration Specialist',
        bio: 'Partners with fast-growing businesses to streamline back-office ERP software, data migrations, and automated multi-currency reporting.',
        photo: '/assets/team/team-members-1.webp',
    },
];

export const widerTeam = [
    { name: 'Andrea Alba Vasquez', photo: '/assets/team/andrea.webp' },
    { name: 'Ajith Kumar', photo: '/assets/team/team-members-6.webp' },
    { name: 'Jomis John', photo: '/assets/team/jomis.webp' },
];

/* ---------------- Blogs ---------------- */

export const blogs = [
    {
        title: '7 Essential Reasons to Work With a Small Business Tax Accountant',
        excerpt: 'A small business tax accountant keeps you compliant, efficient and saving money, so you can focus on growth.',
        href: '/blogs/small-business-tax-accountant',
        image: '/assets/banners/banner-3.webp',
        tag: 'Tax Planning',
    },
    {
        title: 'What Canadian Business Owners Should Track Monthly',
        excerpt: 'The financial details that actually determine profitability, cash flow and CRA compliance.',
        href: '/blogs/monthly-tracking-canadian-business-owners',
        image: '/assets/blogs/blog-cover-3.webp',
        tag: 'Bookkeeping',
    },
    {
        title: '6 Signs Your Small Business Needs a Professional Accountant',
        excerpt: 'From missed deadlines to messy books, the warning signs it is time to bring in a professional.',
        href: '/blogs/6-signs-your-small-business-needs-a-professional-accountant',
        image: '/assets/banners/banner-5.webp',
        tag: 'Growth',
    },
];

/* ---------------- FAQ ---------------- */

export const faqs = [
    {
        q: 'Can Invisor CPA handle my accounting if I am located outside Ontario (e.g., in Calgary, Vancouver, or Winnipeg)?',
        a: 'Yes. Most of our clients never visit an office. We work through secure cloud tools like QuickBooks Online, Xero and Dext, meet by phone or video, and file federal and provincial returns for businesses registered anywhere in Canada.',
    },
    {
        q: 'How do you handle multi-provincial sales tax (PST, GST, HST, QST) for e-commerce and national trade?',
        a: 'We map where your customers are, track the registration thresholds for each province, register you where required, and file every return on schedule, including HST, BC/SK/MB PST and Quebec QST, so you are never collecting or remitting at the wrong rate.',
    },
    {
        q: 'What is the difference between hiring Invisor CPA vs. an in-house bookkeeper?',
        a: 'An in-house bookkeeper is one person with a salary, benefits and vacation gaps. With Invisor you get a CPA-supervised team, month-end reviews, payroll and tax filing under one fixed monthly fee, typically for less than the cost of a part-time hire.',
    },
    {
        q: 'Can I visit an office in person in London or Centre Wellington (Fergus)?',
        a: 'Absolutely. Our London office at 341 Talbot St. is open Monday to Friday, 9:00 AM to 5:00 PM, and our Fergus office on St. David St. N. sees clients by appointment. Book a time with the form above or call us.',
    },
    {
        q: 'What services do you offer?',
        a: 'We offer comprehensive accounting, bookkeeping, tax preparation, payroll management, business advisory, and financial reporting services to help you manage your financial needs effectively.',
    },
    {
        q: 'How will I be updated on my financial status?',
        a: 'We keep communication transparent, with regular reports, updates, and strategic advice to help you make informed decisions.',
    },
    {
        q: 'Are your prices really fixed?',
        a: 'Yes. After a free discovery session we quote a fixed monthly or annual fee based on your transaction volume and filings. There is no hourly billing, and we tell you before any change in scope affects your price.',
    },
    {
        q: 'I am behind on my books and filings. Can you help me catch up?',
        a: 'Catch-up and multi-year cleanup work is one of our specialties. We rebuild your records, file any missed GST/HST and corporate returns, and help you deal with the CRA if notices or penalties have already arrived.',
    },
    {
        q: 'Can you assist with future planning and growth strategies?',
        a: 'Yes. We offer proactive business and financial planning, from salary vs. dividend strategy to fractional CFO support, to help you navigate growth opportunities and secure long-term success.',
    },
];
