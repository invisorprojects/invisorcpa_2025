import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Page from '@/app/(storyblok)/components/Page';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        page: Page,
    },
    apiOptions: {
        // region: 'ca',
        endpoint: 'https://api.storyblok.com/v2/',
    },
});
