import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

function MapPage() {
  const [polygonCoords, setPolygonCoords] = useState([]);

  const handlePolygonCreated = (e) => {
    const polygon = e.layer;
    const coords = polygon.getLatLngs()[0].map((latlng) => [
      latlng.lat,
      latlng.lng,
    ]);
    setPolygonCoords(coords);
  };

  return (
    <div className="map" style={{ height: "500px", width: "100%" }}>
      <MapContainer center={[52.5200, 13.4050]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handlePolygonCreated}
            draw={{
              polygon: true,
              polyline: false,
              rectangle: false,
              circle: false,
              marker: false,
            }}
          />
        </FeatureGroup>
        {polygonCoords.length > 0 && (
          <Polygon positions={polygonCoords} />
        )}
      </MapContainer>
      <div>
        <h2>Polygon Coordinates</h2>
        <ul>
          {polygonCoords.map((coord, index) => (
            <li key={index}>{`Lat: ${coord[0]}, Lng: ${coord[1]}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MapPage;