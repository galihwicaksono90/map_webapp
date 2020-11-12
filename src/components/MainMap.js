import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { LocationContext } from "../contexts/LocationContext";
import "./css/mainmap.css";

const MainMap = (props) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { locationState, locationDispatch } = useContext(LocationContext);
  const { currentLocation, availableAttractions } = locationState;

  const iconStyle = (attraction) => {
    return {
      top: currentLocation.attractions[attraction].icon.position.top + "%",
      left: currentLocation.attractions[attraction].icon.position.left + "%",
    };
  };

  return (
    <div className="mainmap">
      <img className="mainmap-image" alt="" src={currentLocation.mapImage} />
      <ul className="mainmap-icons">
        {availableAttractions.map((attraction, index) => (
          <li
            key={index}
            className={`mainmap-icon ${attraction}-icon`}
            style={iconStyle(attraction)}
          >
            <img
              className={"mainmap-icon-image"}
              alt=""
              src={currentLocation.attractions[attraction].icon.image}
              onClick={() => {
                setOpenSidebar(true);
                locationDispatch({
                  type: "changeCurrentAttraction",
                  payload: attraction,
                });
              }}
            />
          </li>
        ))}
      </ul>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </div>
  );
};

export default MainMap;
