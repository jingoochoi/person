import { GoogleMap, useGoogleMap } from '@react-google-maps/api';
import '../css/map.css'
// import { GoogleMap } from '@react-google-maps/api';
import { Loader } from "@googlemaps/js-api-loader"
import { useCallback, useEffect, useRef } from 'react';
import mapo from '../data/data.json'
import { Marker } from 'react-naver-maps';
export function Map() {
  let map,infoWindow,marker,pos
  const initMap = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // eqfeed_callback()
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // infoWindow.setPosition(pos);
          // eqfeed_callback()
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
  
      marker=new window.google.maps.Marker({
        position: latLng,
        map: map,
        title: results[i].name,
        // icon:'url'
      });
      infoWindow=new window.google.maps.InfoWindow({
        content:results[i].name,
        disableAutoPan:true
      })
      infoWindow.open(map,marker)
    }
    // map.setCenter(pos)
  }
  // window.google.maps.event.addListener(Marker,'click',function(){infoWindow.open(map,Marker)})

  useEffect(() => {
    initMap();
    eqfeed_callback();
    // initMap()
    // map.setCenter(pos)
  });
    return(
        <>
            <h1>MAP</h1>
            <input type="text" style={{width:'500px',border:'1px solid black',borderRadius:'21px'}}/>
            <span style={{position:'absolute',left:'20px',top:'11vh'}}>🚩</span>
            <br /><b>리스트 보기</b>
            <h3 style={{display:'block',textAlign:'center'}}>※알림창 뜰 시 허용해주세요.※</h3>
            <div id="map"></div>
        </>
    )
}