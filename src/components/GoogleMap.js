//note: code formatted for ES6 here
import React, { useEffect, useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
export const MapContainer = (props) => {
  const [address, setAddress] = useState("");
  //const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  //const [activeMarker, setActiveMarker] = useState({});
  //const [selectedPlace, setSelectedPlace] = useState({});
  const [mapCenter, setMapCenter] = useState({
    lat: 40.1885,
    lng: 29.061,
  });

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setAddress(address);
        setMapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };
  useEffect(() => {
    setAddress(props.province);
    handleSelect(props.province);
  }, [props?.province]);
  useEffect(() => {
    setAddress(props.province + " " + props.district);
    handleSelect(props.province + " " + props.district);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.district]);
  useEffect(() => {
    setAddress(
      props.province + " " + props.district + " " + props.neighborhood
    );
    handleSelect(
      props.province + " " + props.district + " " + props.neighborhood
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.neighborhood]);

  return (
    <div id="googleMap">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      <Map
        google={props.google}
        initialCenter={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        center={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
      >
        <Marker
          position={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
