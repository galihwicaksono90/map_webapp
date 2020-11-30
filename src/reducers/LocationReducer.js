const LocationReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeCurrentAttraction":
      return {
        ...state,
        currentAttraction: state.currentLocation.attractions[payload],
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
