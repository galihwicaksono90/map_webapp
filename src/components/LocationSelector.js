import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

const Testing = (props) => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const { availableLocations } = locationState;
  const buttonHandler = (location) => {
    props.setMap(location);
    locationDispatch({
      type: "changeCurrentLocation",
      payload: location,
    });
  };
  return (
    <div>
      {availableLocations.map((location, index) => (
        <button key={index} onClick={() => buttonHandler(location)}>
          {location}
        </button>
      ))}
    </div>
  );
};

export default Testing;
