import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define custom icons
const blueIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%2300f" /%3E%3C/svg%3E',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const redIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;charset=utf-8,%3Csvg width="25" height="41" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="41" r="10" fill="%23ff0000" /%3E%3C/svg%3E',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

function MyMap() {
  const [userLocation, setUserLocation] = useState({
    latitude: -25.7479, // Fallback latitude (Pretoria)
    longitude: 28.2293, // Fallback longitude (Pretoria)
  });
  const [searchLocation, setSearchLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationEnabled, setLocationEnabled] = useState(false); // New state to track if location is enabled

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationEnabled(true); // Set location enabled to true when location is fetched
      },
      (error) => {
        console.error('Error getting location: ', error);
        alert('Please enable location services to use the map.');
        // Keep the fallback location if geolocation fails
      }
    );
  }, []);

  const handleSearch = async () => {
    if (!locationEnabled) {
      alert('Please enable location services to search for a location.');
      return;
    }

    if (searchQuery.trim() === '') return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const results = await response.json();
      
      if (results && results.length > 0) {
        const { lat, lon } = results[0];
        setSearchLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
        });
      } else {
        alert('Location not found. Please try a different search query.');
      }
    } catch (error) {
      console.error('Error during search:', error);
      alert('Error during search. Please try again.');
    }
  };

  return (
    <div>
        <br />
        <br />
      <div style={{ padding: '10px', textAlign: 'center' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a location"
          style={{ padding: '5px', width: '200px' }}
        />
        <button onClick={handleSearch} style={{ padding: '5px 10px', marginLeft: '10px' }}>
          Search
        </button>
      </div>

      <MapContainer
        center={searchLocation ? [searchLocation.latitude, searchLocation.longitude] : [userLocation.latitude, userLocation.longitude]}
        zoom={13}
        style={{ height: '90vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker
          position={[userLocation.latitude, userLocation.longitude]}
          icon={blueIcon} // Apply the custom blue icon for current location
        >
          <Popup>Your current location.</Popup>
        </Marker>
        {searchLocation && (
          <Marker
            position={[searchLocation.latitude, searchLocation.longitude]}
            icon={redIcon} // Apply the custom red icon for searched location
          >
            <Popup>{searchQuery}</Popup>
          </Marker>
        )}
        <ChangeMapView coords={searchLocation || userLocation} />
      </MapContainer>
    </div>
  );
}

function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView([coords.latitude, coords.longitude], map.getZoom());

  return null;
}

export default MyMap;