const LocationReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeCurrentLocation":
      return {
        ...state,
        currentLocation: payload,
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
