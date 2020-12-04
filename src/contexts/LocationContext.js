import React, { createContext, useReducer } from "react";
import locationStore from "../store/locationStore";
import LocationReducer from "../reducers/LocationReducer";

// default location variable
const defaultLocation = "wadaslintang";

const locationContextDefaultValue = {
  locationStore: locationStore,
  get availableLocations() {
    if (
      Object.keys(this.locationStore).length === 0 &&
      this.locationStore.constructor === Object
    )
      return [];
    return Object.keys(this.locationStore);
  },
  get currentLocation() {
    if (
      Object.keys(this.locationStore).length === 0 &&
      this.locationStore.constructor === Object
    )
      return {};
    return this.locationStore[defaultLocation];
  },
  get availableAttractions() {
    if (
      Object.keys(this.currentLocation).length === 0 &&
      this.currentLocation.constructor === Object
    )
      return [];
    return Object.keys(this.currentLocation.attractions);
  },
  get currentAttraction() {
    if (
      Object.keys(this.currentLocation).length === 0 &&
      this.locationStore.constructor === Object
    )
      return {};
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
