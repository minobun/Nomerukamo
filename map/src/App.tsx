import Map, { Source, Layer } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { FeatureCollection } from 'geojson';
import type { CircleLayer } from 'react-map-gl/maplibre';

import ControlPanel from './control-panel';

const geojson: FeatureCollection = {
  "type": "FeatureCollection",
  "features": [
    { "type": "Feature", "geometry": { "type": "Point", "coordinates": [139.6946632, 35.5300397] }, "properties": { "name": "川崎タワー" } },
    { "type": "Feature", "geometry": { "type": "Point", "coordinates": [139.6996434, 35.5349831] }, "properties": { "name": "ソリッドスクエア" } }
  ]
}
const officeLayerStyle: CircleLayer = {
  "id": "offices",
  "type": "circle",
  "source": "office",
  "paint": {
    "circle-color": "blue"
  }
};

function App() {


  return (
    <>
      <Map
        initialViewState={{
          longitude: 139.69696947,
          latitude: 35.53152243,
          zoom: 16
        }}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
      >
        <Source id="office" type="geojson" data={geojson}>
          <Layer {...officeLayerStyle} />
        </Source>
      </Map>
      <ControlPanel />
    </>
  )
}

export default App
