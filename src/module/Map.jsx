import { GoogleMap, useGoogleMap } from '@react-google-maps/api';
import '../css/map.css'
// import { GoogleMap } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"
import { useCallback, useEffect, useRef } from 'react';
import mapo from '../data/data.json'
import { Marker } from 'react-naver-maps';
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
        }
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
      alert(browserHasGeolocation? "Error: The Geolocation service failed.": "Error: Your browser doesn't support geolocation.")
      // infoWindow.setPosition(pos);
      // infoWindow.setContent(
      //   browserHasGeolocation
      //     ? "Error: The Geolocation service failed."
      //     : "Error: Your browser doesn't support geolocation."
      // );
      // infoWindow.open(map);
    }
  }, []);
  const eqfeed_callback = function (results) {
    results=mapo
    for (let i = 0; i < results.length; i++) {
      const coords = results[i].lat;
      const coords2 = results[i].long;
      const latLng = new window.google.maps.LatLng(coords, coords2);
  
      let marker=new window.google.maps.Marker({
        position: latLng,
        map: map,
        title: results[i].name,
      });
      infoWindow=new window.google.maps.InfoWindow({
        content:results[i].name
      })
      infoWindow.open(map,marker)
    }
  };
  window.google.maps.event.addListener(Marker,'click',function(){infoWindow.open(map,Marker)})

  useEffect(() => {
    initMap();
    eqfeed_callback();
  }, [initMap],[eqfeed_callback]);
    return(
        <>
            <h1>MAP</h1>
            <div id="map"></div>
        </>
    )
}