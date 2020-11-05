import React, { createContext, useReducer } from "react";
import locationStore from "../store/locationStore";
import LocationReducer from "../reducers/LocationReducer";

const locationContextDefaultValue = {
  locationStore: locationStore,
  availableLocations: Object.keys(locationStore),
  get currentLocation() {
    return this.locationStore[this.availableLocations[0]];
  },
  get availableAttractions() {
    return Object.keys(this.currentLocation.attractions);
  },
  get currentAttraction() {
    return this.currentLocation.attractions[this.availableAttractions[0]];
  },
  availableLanguages: ["en", "in"],
  currentLanguage: "en",
};

export const LocationContext = createContext();

export const LocationProvider = (props) => {
  const [locationState, locationDispatch] = useReducer(
    LocationReducer,
    locationContextDefaultValue
  );
  return (
    <LocationContext.Provider value={{ locationState, locationDispatch }}>
      {props.children}
    </LocationContext.Provider>
  );
};
