import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Test() {
    const { data } = await fetchData();

    return (
        <div className="page">
            <StoryblokStory story={data.story} />
        </div>
    );
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return await storyblokApi.get(`cdn/stories/home`, { version: 'draft' });
}
