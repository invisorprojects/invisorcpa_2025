import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import { notFound } from 'next/navigation';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const response = await fetchData(slug);
    if (!response || !response.data?.story) {
        notFound();
    }

    return <StoryblokStory story={response.data.story} />;
}

async function fetchData(slug: string[]) {
    const fullSlug = slug ? slug.join('/') : 'home';
    try {
        const storyblokApi = getStoryblokApi();
        return await storyblokApi.get(`cdn/stories/${fullSlug}`, {
            version:
                process.env.NODE_ENV === 'production' ? 'published' : 'draft',
        });
    } catch (error) {
        console.log(error);
        return null;
    }
}
