import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

const MainMap = () => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const { currentLocation, availableAttractions } = locationState;

  return (
    <div>
      <ul>
        {availableAttractions.map((attraction, index) => (
          <li
            key={index}
            onClick={() =>
              locationDispatch({
                type: "changeCurrentAttraction",
                payload: attraction,
              })
            }
          >
            <img
              style={{ height: "50px" }}
              alt=""
              src={currentLocation.attractions[attraction].icon}
            />
          </li>
          /* <button onClick={() => console.log(attraction)}>{attraction}</button> */
        ))}
      </ul>
    </div>
  );
};

export default MainMap;
