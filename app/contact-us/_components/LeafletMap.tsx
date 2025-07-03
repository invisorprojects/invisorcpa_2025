// app/contact-us/_components/CanadaMap.tsx
'use client';

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const locations = [
    {
        name: '645 St David St N, Fergus, Ontario, N1M 2K6, Canada - Fergus Office',
        position: [43.7054, -80.3745],
    },
    {
        name: 'Unit 120, 341 Talbot Street, London, Ontario, N6A2R5, Canada.',
        position: [42.9849, -81.2463],
    },
    {
        name: '300 Thorn Dr, Strathroy, ON N7G 4E1, Canada Strathroy office',
        position: [42.9583, -81.6071],
    },
];

const CanadaMap = () => {
    useEffect(() => {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl:
                'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl:
                'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl:
                'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
    }, []);

    return (
        <MapContainer
            center={[43.5, -81.0]}
            zoom={7}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                attribution="&copy; OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc, index) => (
                <Marker key={index} position={loc.position as [number, number]}>
                    <Tooltip>{loc.name}</Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default CanadaMap;
