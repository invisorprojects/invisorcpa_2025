interface NAV_ITEMS {
    title: string;
    href: string;
    disabled: boolean;
}
export const NAV_ITEMS: NAV_ITEMS[] = [
    {
        title: 'Home',
        href: '/',
        disabled: false,
    },
    {
        title: 'Services',
        href: '/services',
        disabled: false,
    },
    // {
    //     title: 'Tax Season',
    //     href: '/tax-season',
    //     disabled: true,
    // },
    {
        title: 'Pricing',
        href: '/pricing',
        disabled: false,
    },
    {
        title: 'About Us',
        href: '/about-us',
        disabled: false,
    },
];
