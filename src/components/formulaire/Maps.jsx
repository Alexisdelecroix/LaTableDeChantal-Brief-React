import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "500px",
};

const center = {
  lat: 50.73627906581671,
  lng: 3.1481157321615734,
};

export default function Map() {
  return (
    <div className="positionMap">
      <LoadScript>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker position={center}></Marker>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
