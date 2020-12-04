const LocationReducer = (
  state, // = locationContextDefaultValue
  { type, payload }
) => {
  switch (type) {
    case "changeCurrentLocation":
      return {
        ...state,
        get currentLocation() {
          return this.locationStore[payload];
        },
        get availableAttractions() {
          return Object.keys(this.currentLocation.attractions);
        },
        get currentAttraction() {
          return this.currentLocation.attractions[this.availableAttractions[0]];
        },
      };
    case "changeCurrentAttraction":
      return {
        ...state,
        get currentAttraction() {
          if (
            Object.keys(this.currentLocation).length === 0 &&
            this.locationStore.constructor === Object
          )
            return {};
          return this.currentLocation.attractions[payload];
        },
      };
    case "changeCurrentLanguage":
      return {
        ...state,
        currentLanguage: payload,
      };
    default:
      return state;
  }
};

export default LocationReducer;
