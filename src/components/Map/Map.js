import React from "react";
import GoogleMapReact from 'google-map-react';
import '../Map/Map.css';

const AnyReactComponent = ({ text }) => <div className="mapSize">{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 39.45856031346867,
      lng: -83.87021115078711
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="mapHeightWidth">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={39.45856031346867}
          lng={-83.87021115078711}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

