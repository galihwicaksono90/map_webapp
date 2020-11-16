import React, { useContext, useState } from "react";
import PopupMenu from "./PopupMenu";
import MapIcons from "./MapIcons";
import { LocationContext } from "../contexts/LocationContext";
import "./css/mainmap.css";

const MainMap = (props) => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const {
    currentLocation,
    currentAttraction,
    availableAttractions,
    currentLanguage,
  } = locationState;
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="mainmap">
      <h1>{currentAttraction.name}</h1>
      <button onClick={() => setPopupOpen(!popupOpen)}>Popup</button>
      <img className="mainmap-image" alt="" src={currentLocation.mapImage} />
      <MapIcons
        currentLocation={currentLocation}
        availableAttractions={availableAttractions}
        locationDispatch={locationDispatch}
        currentAttraction={currentAttraction}
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
      />
      <PopupMenu
        currentAttraction={currentAttraction}
        currentLanguage={currentLanguage}
        popupOpen={popupOpen}
      />
    </div>
  );
};

export default MainMap;
