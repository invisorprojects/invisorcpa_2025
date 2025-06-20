import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Feature from '@/app/storyblok-test/components/Feature';
import Grid from '@/app/storyblok-test/components/Grid';
import Teaser from '@/app/storyblok-test/components/Teaser';
import Page from '@/app/storyblok-test/components/Page';

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
