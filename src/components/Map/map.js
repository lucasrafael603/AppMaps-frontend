import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
//import * as parkData from '../../data/skateboard-parks.json'
import "../Map/App.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

    </Map>
  );
}
