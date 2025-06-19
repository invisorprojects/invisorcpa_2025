'use client';
import WorldMap from '@/components/ui/world-map';

export function WorldMapDemo() {
    return (
        <div className="w-full max-w-6xl bg-white">
            <WorldMap
                dots={[
                    {
                        start: {
                            lat: -6.9676,
                            lng: 77.2973,
                            label: 'Kerala',
                        },
                        end: {
                            lat: 51.2538,
                            lng: -85.3232,
                            label: 'Ontario',
                        },
                    },
                    {
                        start: {
                            lat: 64.2008,
                            lng: -149.4937,
                            label: 'Alaska (Fairbanks)',
                        },
                        end: {
                            lat: -15.7975,
                            lng: -47.8919,
                            label: 'Brazil (Brasília)',
                        },
                    },
                    {
                        start: {
                            lat: -15.7975,
                            lng: -47.8919,
                            label: 'Brazil (Brasília)',
                        },
                        end: {
                            lat: 38.7223,
                            lng: -9.1393,
                            label: 'Lisbon',
                        },
                    },
                    {
                        start: {
                            lat: 51.5074,
                            lng: -0.1278,
                            label: 'London',
                        },
                        end: {
                            lat: 28.6139,
                            lng: 77.209,
                            label: 'New Delhi',
                        },
                    },
                    {
                        start: {
                            lat: 28.6139,
                            lng: 77.209,
                            label: 'New Delhi',
                        },
                        end: {
                            lat: 43.1332,
                            lng: 131.9113,
                            label: 'Vladivostok',
                        },
                    },
                    {
                        start: {
                            lat: 28.6139,
                            lng: 77.209,
                            label: 'New Delhi',
                        },
                        end: {
                            lat: -1.2921,
                            lng: 36.8219,
                            label: 'Nairobi',
                        },
                    },
                ]}
            />
        </div>
    );
}
