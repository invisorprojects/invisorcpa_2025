export default function Teaser({ blok }: { blok: any }) {
    return (
        <div className="teaser border-2 border-red-500">
            <h2>{blok.headline}</h2>
        </div>
    );
}
