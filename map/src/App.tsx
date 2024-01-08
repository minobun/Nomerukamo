import Map, { Source, Layer, Popup, Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { FeatureCollection } from 'geojson';
import type { CircleLayer } from 'react-map-gl/maplibre';

import ControlPanel from './control-panel';
import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';

const officeJson: FeatureCollection = {
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

interface izakayaObj {
  "name":string;
  "longitude":number;
  "latitude":number;
}

const izakaya: izakayaObj[] = [
  {"name":"Feliz", "longitude":139.700736,"latitude":35.52904}
]

function App() {

  const [popupInfo,setPopupInfo] = useState<izakayaObj>();
  const [isShown,setIsShown] = useState<boolean>(false);
  const [izakayaList, setIzakayaList] = useState<izakayaObj[]>();


  const searchIzakaya = () => {
    axios.get("nomerukamoapi.azurewebsites.net")
      .then((response) => setIzakayaList(response.data))
  }

  const pins = useMemo(
    () =>
      izakaya.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setIsShown(true);
            setPopupInfo(city);
          }}
        >
        </Marker>
      )),
    []
  );

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
        <Source id="office" type="geojson" data={officeJson}>
          <Layer {...officeLayerStyle} />
        </Source>
        
        {pins}

        {isShown && popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setIsShown(false)}
          >
            <div>
              {popupInfo.name}
            </div>
          </Popup>
        )}
      </Map>
      <ControlPanel onClick={searchIzakaya}/>
    </>
  )
}

export default App
