import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default function Grid({ blok }: { blok: any }) {
    return (
        <div className="grid border-2 border-blue-500">
            {blok.columns.map((nestedBlok: any) => (
                <StoryblokServerComponent
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                />
            ))}
        </div>
    );
}
