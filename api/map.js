import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function Map() {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: "weekly"
    });
    let map;
    loader.load().then(() => {
      const google = window.google; // ADDED
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.585250136738544, lng: -58.44405126383858 },
        zoom: 15,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons

      });
      
    });
  });
  return <div id="map" ref={googlemap} />;
}
export default Map;
