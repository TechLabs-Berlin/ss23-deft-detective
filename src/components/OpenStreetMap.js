import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './OpenStreetMap.css';

function OpenStreetMap({ latitude, longitude }) {
    const position = [latitude, longitude];

    return (
        <MapContainer center={position} zoom={13} style={{ width: '100%', height: '400px' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
        </MapContainer>
    );
}

export default OpenStreetMap;
