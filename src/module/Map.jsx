import { GoogleMap, useGoogleMap } from '@react-google-maps/api';
import '../css/map.css'
// import { GoogleMap } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"
import { useCallback, useEffect, useRef } from 'react';

export function Map() {
  let map,infoWindow
  const initMap = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // infoWindow.setPosition(pos);
          // infoWindow.setContent("Location found.");
          // infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        },{enableHighAccuracy:true}
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    map=new window.google.maps.Map(document.querySelector('#map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 13,
    });
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }
  }, []);

  useEffect(() => {
    initMap();
  }, [initMap]);
    return(
        <>
            <h1>MAP</h1>
            <div id="map"></div>
        </>
    )
}