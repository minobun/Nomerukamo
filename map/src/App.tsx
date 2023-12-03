import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <Map
      initialViewState={{
        longitude: 139.69696941,
        latitude: 35.53152244,
        zoom: 16
      }}
      style={{ width: '100vw', height: '100vh' }}
      mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
    />
  )
}

export default App
