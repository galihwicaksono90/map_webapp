import React, { createContext, useReducer } from "react";
import LocationReducer from "../reducers/LocationReducer";

// append array to add available locations
const defaultAvailableLocations = ["dieng", "wadaslintang"];

const locationContextDefaultValue = {
  currentLocation: {},
  availableLocations: defaultAvailableLocations,
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
      this.currentLocation.constructor === Object
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
