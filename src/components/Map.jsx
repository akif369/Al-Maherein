import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ContactCard from './ContactBox';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWtpZjM2OSIsImEiOiJjbHl4NzFjYWEwejhyMm1zYmVub2IxZTd5In0.KcO45ESer8qQAH0lCv-yww';

function Map() {
  const mapContainerRef = useRef(null);
  const customMarkerUrl = '/icon/location.png'; // Path to the marker image in public directory
  const mapRef = useRef(null); // To store the map instance

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10', // Dark theme
      center: [55.36950, 25.28029], // Default center
      zoom: 14, // Starting zoom
    });

    mapRef.current = map; // Store the map instance

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

    // Function to update the map center based on screen size
    const updateMapCenter = () => {
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      const isMediumScreen = window.matchMedia('(min-width: 768px) and (max-width: 900px)').matches;

      if (isSmallScreen) {
        map.setCenter([55.35750, 25.27529]); // Center for small screens
      } else if (isMediumScreen) {
        map.setCenter([55.36650, 25.28029]);// Center for medium screens
      } else {
        map.setCenter([55.37050, 25.28029]); // Default center
      }
    };

    // Set initial center based on current screen size
    updateMapCenter();

    // Add event listeners for window resize
    window.addEventListener('resize', updateMapCenter);

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', updateMapCenter);
      map.remove();
    };
  }, []);

  return (
    <div className='relative h-[950px] md:h-[1000px] '>
   <div
        ref={mapContainerRef}
        style={{
          width: '100%',
          height: '500px', // Adjust the height as needed
          position: 'relative',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '500px', // Match the height of the map
          background: 'radial-gradient(circle, transparent, rgba(0, 0, 0, 0.4))',
          pointerEvents: 'none', // Allow interactions with the map
        }}
      />
      <ContactCard/>
    </div>
  );
}

export default Map;
