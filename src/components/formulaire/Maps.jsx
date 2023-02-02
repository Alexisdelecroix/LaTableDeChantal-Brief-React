import React from "react";

import { GoogleMap, InfoBox, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '90%',
    height: '500px'
}

const center = {
    
    lat: 50.73627906581671,
    lng: 3.1481157321615734
}

// const onLoad = InfoBox => {
//     console.log('Infobox: ', InfoBox)
// }

// const divStyle = {
//     background: `red`,
//     border: `1px solid #ccc`,
//   }


export default function Map() {
  return (
    <div className="positionMap">
      <LoadScript 
      >
    <GoogleMap
    
    mapContainerStyle={containerStyle}
    center={center}
    zoom={16}>

        <Marker
        position={center}>
        </Marker>

    </GoogleMap>
      </LoadScript>
    </div>

  );
}