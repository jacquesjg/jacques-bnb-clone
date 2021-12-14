import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import axios from 'axios';
require("dotenv").config();

function Map() {

  function setMapCenter() {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 40.730610, lng: -73.935242 }} />
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(setMapCenter));

  const [combineListingData, setCombineListingData] = useState([]);

  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default Map
