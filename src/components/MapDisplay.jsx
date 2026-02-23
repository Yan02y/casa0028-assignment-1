import * as React from 'react';
import {Map, Source, Layer,Popup, NavigationControl} from 'react-map-gl/maplibre';
import { Bikedata } from '../data/Bikedata';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useState } from 'react';
import ParkingCard from './ParkingCard';

export default function MapDisplay({ data }) {

  const geojsonData = {
    type: 'FeatureCollection',
    features: data,
  };

  const [selectedParking, setSelectedParking] = useState(null);

  const handleMapClick = (event) => {
    if (!event.features || event.features.length === 0) return;
    setSelectedParking(event.features[0]);
  };

  const ParkingLayerStyle = {
    id: 'Parking-layer',
    type: 'circle',
    source: 'Bikedata',
    paint: {
      'circle-radius': 6,
      'circle-color': '#0091ff',
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  };

  return (
    <Map
      initialViewState={{
        longitude: 8.3,
        latitude: 46.8,
        zoom: 7
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      interactiveLayerIds={['Parking-layer']}
      onClick={handleMapClick}
    >
      <NavigationControl position="top-right" />

      <Source id="Bikedata" type="geojson" data={geojsonData}>
        <Layer {...ParkingLayerStyle} />
      </Source>

      {selectedParking && (
        <Popup
          longitude={selectedParking.geometry.coordinates[0]}
          latitude={selectedParking.geometry.coordinates[1]}
          onClose={() => setSelectedParking(null)}
          closeButton={true}
          offset={15}
        >
          <ParkingCard feature={selectedParking} />
        
        </Popup>
      )}
    </Map>
  );
}