import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
const Testing = () => {
  const { locationState } = useContext(LocationContext);
  const { currentLocation } = locationState;
  return (
    <div>
      <h1>Testing</h1>
      <h3>{currentLocation.name}</h3>
      <button onClick={() => console.log(locationState)}>Check</button>
    </div>
  );
};

export default Testing;
