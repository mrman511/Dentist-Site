import {
  GoogleMap,
  LoadScriptNext,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Map = (props) => {
  const location = { lat: 42.95521, lng: -81.28155 }
  
  const mapStyles = {
    height: "100%",
    width: "100%",
  };


  return (
    <LoadScriptNext googleMapsApiKey={ process.env.NEXT_PUBLIC_GOOGLE_API_KEY }>
      <GoogleMap
        mapContainerStyle={ mapStyles }
        zoom={ 14.6 }
        center={ location }
      >
        <Marker
          key="office"
          position={ location }
        />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Map;
