const LocationReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeCurrentAttraction":
      return {
        ...state,
        currentAttraction: state.currentLocation.attractions[payload],
      };
    case "clearCurrentAttraction":
      return {
        ...state,
        currentAttraction: {},
      };

    default:
      return state;
  }
};

export default LocationReducer;
