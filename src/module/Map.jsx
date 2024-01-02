import { GoogleMap, useGoogleMap } from '@react-google-maps/api';
import '../css/map.css'
// import { GoogleMap } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"

export function Map() {
  const loader = new Loader({
    apiKey: "AIzaSyBVCB_65HYOI5VTkuNwW08SMv9JOfx7Rdo",
    version: "weekly",
    // ...additionalOptions,
  });
  let map,infoWindow
  loader.load().then(async () => {
    const { Map } = await window.google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    infoWindow=new window.google.maps.InfoWindow()
  });
  function initMap() {
    const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
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
  });
  }
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }
  
  window.initMap = initMap;
  
    return(
        <>
            <h1>MAP</h1>
            <div id="map"></div>
        </>
    )
}