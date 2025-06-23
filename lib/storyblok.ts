import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Feature from '@/app/(storyblok)/components/Feature';
import Grid from '@/app/(storyblok)/components/Grid';
import Teaser from '@/app/(storyblok)/components/Teaser';
import Page from '@/app/(storyblok)/components/Page';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    components: {
        page: Page,
        feature: Feature,
        grid: Grid,
        teaser: Teaser,
    },
    apiOptions: {
        // region: 'ca',
        endpoint: 'https://api.storyblok.com/v2/',
    },
});
