import { storyblokEditable } from '@storyblok/react/rsc';

const Feature = ({ blok }: { blok: any }) => {
    return (
        <div
            className="feature border-2 border-green-500"
            {...storyblokEditable(blok)}
        >
            <span>{blok.name}</span>
        </div>
    );
};

export default Feature;
