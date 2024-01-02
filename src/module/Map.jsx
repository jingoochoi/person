import { GoogleMap, useGoogleMap } from '@react-google-maps/api';
import '../css/map.css'
// import { GoogleMap } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"

export function Map() {
  const loader = new Loader({
    apiKey: "YOUR_API_KEY",
    version: "weekly",
    // ...additionalOptions,
  });
  let map
  loader.load().then(async () => {
    const { Map } = await window.google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });
    return(
        <>
            <h1>MAP</h1>
            <div id="map"></div>
        </>
    )
}