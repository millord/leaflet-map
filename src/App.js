import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./index.css";
import * as parkData from "./data/data.json";

const App = () => {
  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
        />
      ))}
    </Map>
  );
};

export default App;
