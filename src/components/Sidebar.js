import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

const Sidebar = () => {
  const { locationState } = useContext(LocationContext);
  const { currentAttraction, currentLanguage } = locationState;

  return (
    <div className="sidebar">
      <h1>{currentAttraction.name}</h1>
      <p>{currentAttraction.description[currentLanguage]}</p>
    </div>
  );
};

export default Sidebar;
