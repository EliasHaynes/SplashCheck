import React, { useEffect, useRef,useState } from "react";
import PoolData from "./PoolData";
import { useJsApiLoader } from "@react-google-maps/api";

function Map({sendDisplayToHomeComponent}) {
  // Loads the Google Maps Javascript Api
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ["marker", "maps"], // Include the marker library
  });

  const mapRef = useRef(null);
  const [data, setData] = useState(null)
  const [display,setDisplay] = useState(false)

  const mapContainerStyle = { width: "800px", height: "800px" };
  const center = { lat: 30.266666, lng: -97.73333 };
  const locations = [
    { lat: 30.266666, lng: -97.73333 },
    { lat: 30.366666, lng: -97.73333 },
    { lat: 30.466666, lng: -97.73333 },
  ];

  const words = ["Elias", "Marcus", "Haynes"];

  //Grab the value from child component on conditional to display map, this is then also sent to Home component
  const handleDisplayMapFromPoolData = (displayMapFromPoolData) => {
    setDisplay(displayMapFromPoolData)
    //Send conditional render of map to Home component
    sendDisplayToHomeComponent(true);
  }

  const handleDataFromPoolData = (poolData) => {
    setData(poolData)
  }

  useEffect(() => {
    async function loadMap() {
      if (isLoaded && mapRef.current) {
        // Imported libraries
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
        const { InfoWindow, Geocoder } = await window.google.maps.importLibrary("maps");
        
        //Map configuration
        const map = new window.google.maps.Map(mapRef.current, {
          center: center,
          zoom: 15,
          mapId: "4627d2c3cd0d056",
        });

        // Create instances of libraries to be reused
        const infoWindow = new InfoWindow();
        // const geocoder = new Geocoder();

        //Dynamically display markers
        locations.forEach((location, idx) => {
          const marker = new AdvancedMarkerElement({
            position: location,
            map: map,
          });

          // Add a click listener to the marker
          marker.addListener("click", () => {
            infoWindow.setContent(words[idx]);
            infoWindow.open(map, marker);
          });
        });
      }
    }

    loadMap();
  }, [isLoaded]);


  return (
    <div>
      <PoolData sendDataToMapComponent={handleDataFromPoolData} sendDisplayToMapComnponent={handleDisplayMapFromPoolData}></PoolData>
    
  <div ref={mapRef} style={mapContainerStyle}></div>
  </div>
  )
}

export default Map;


// // import axios from 'axios'
// // import {APIProvider, Map, MapCameraChangedEvent,AdvancedMarker,Pin} from '@vis.gl/react-google-maps'

// // const locations = [
// //   {key: 'peaseSplashPad', location: {lat: 30.28291173100007, lng: -97.75437819199999}},
// //   {key: 'Lott Splashpad', location: {lat: 30.269695108000064, lng: -97.73017088999995}},
// //   {location: {lat: 30.265983430000063, lng: -97.76862557799996}}
// // ];

// // function Home() {
// //  const map_id = '4627d2c3cd0d056 '
// //   const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_API_KEY
// //   return (
// //     <div>
// //     <APIProvider apiKey={googleMapsAPIKey} onLoad={() => console.log("Maps API has loaded.")}>
// //       <div>
// // <Map
// // mapId={map_id}
// // defaultZoom={13}
// // defaultCenter={ {lat:30.266666, lng: -97.733330}}
// // // If code doesnt work after billing review this code (Im not sure if the actual map id goes here or 'Test' the name of the map style i set in Google Cloud)

// // //  If code doesnt work after billing review this code (Refactored their typecript event to JS event)
// // onCameraChanged={(ev) => {
// //  console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom);
// // }}>
// //  {/* <PoiMarkers pois={locations} onLoad={() => console.log("Poi loaded")}></PoiMarkers> */}
// // </Map>
// // </div>
// //     </APIProvider>
// //     </div>
// //   )
// // }

// // const PoiMarkers = (props) => {
// //   return (
// //     <>
// //       {props.pois.map((poi) => (
// //         <AdvancedMarker
// //           key={poi.key}
// //           position={poi.location}
// //         >
// //           <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
// //         </AdvancedMarker>
// //       ))}
// //     </>
// //   );
// // };

// // export default Home;

// // const APP_TOKEN = process.env.REACT_APP_APP_TOKEN
// // // const config = {
// // //   headers: {
// // //     'X-App_Token': APP_TOKEN
// // //   }
// // // }
// // const handleClick = async () => {
// //  const response =  await axios.get(`https://data.austintexas.gov/resource/xaxa-886r.json`, {headers: {'X-APP-TOKEN' :APP_TOKEN}})
// //  console.log("response:", response.data)
// // }

// // return (
// //   <div>
// //     <div>
// //       <button onClick={handleClick} >Test API Endpoint</button>
// //     </div>
// //   </div>
// // );
