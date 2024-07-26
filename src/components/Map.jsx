import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWtpZjM2OSIsImEiOiJjbHl4NzFjYWEwejhyMm1zYmVub2IxZTd5In0.KcO45ESer8qQAH0lCv-yww';

function Map() {
  const mapContainerRef = useRef(null);
  const customMarkerUrl = '/icon/location.png'; // Path to the marker image in public directory

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10', // Dark theme
      center: [55.37250, 25.28029], // Coordinates for 25°16'48.9"N 55°21'12.2"E
      zoom: 14, // Starting zoom
    });

    // Add custom marker to the map
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(${customMarkerUrl})`;
    el.style.width = '50px'; // Adjust width as needed
    el.style.height = '50px'; // Adjust height as needed
    el.style.backgroundSize = '100%';

    new mapboxgl.Marker(el)
      .setLngLat([55.35339, 25.28025])
      .addTo(map);

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        width: '100%',
        height: '500px', // Adjust the height as needed
      }}
    />
  );
}

export default Map;
