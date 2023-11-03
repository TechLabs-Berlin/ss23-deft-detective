import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import axios from 'axios';
import { useFormData } from './FormDataContext';

function MapPage() {
  const { formData, dispatch } = useFormData();
  const [polygonCoords, setPolygonCoords] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    connectionToBackend();
  }, [polygonCoords]);

  const handlePolygonCreated = (e) => {
    const polygon = e.layer;
    const coords = polygon.getLatLngs()[0].map((latlng) => [
      latlng.lat,
      latlng.lng,
    ]);
    setPolygonCoords(coords);
  };

  const connectionToBackend = async () => {
    try {
      const response = await axios.post('http://localhost:1000/coordinates', { data: polygonCoords });

        if (response.status === 200) {
          const { places: placesInsidePolygon } = response.data;
          setPlaces(placesInsidePolygon);
          dispatch({
            type: 'UPDATE_WHERE',
            payload: { places: placesInsidePolygon },
        })
          console.log('Data sent successfully');
        } else {
          console.error('Failed to send data');
        }
      }
     catch (error) {
      console.error('Error:', error);
    }
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
    </div>
  );
}

export default MapPage;