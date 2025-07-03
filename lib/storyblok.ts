import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
    use: [apiPlugin],
    apiOptions: {
        // region: 'ca',
        endpoint: 'https://api.storyblok.com/v2/',
    },
});
