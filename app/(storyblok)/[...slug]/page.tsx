import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const { data } = await fetchData(slug);

    return <StoryblokStory story={data.story} />;
}

async function fetchData(slug: string[]) {
    const fullSlug = slug ? slug.join('/') : 'home';

    const storyblokApi = getStoryblokApi();
    return await storyblokApi.get(`cdn/stories/${fullSlug}`, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft',
    });
}
