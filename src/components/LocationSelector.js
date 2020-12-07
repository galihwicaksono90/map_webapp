import { useContext, useState } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "../scss/locationSelector.scss";
import diengMap from "../store/img/dieng/map.png";
import wadaslintangMap from "../store/img/wadaslintang/map.png";

// add to array to add new location map image
const imageArray = [diengMap, wadaslintangMap];

const LocationSelector = ({
  setIsLoading,
  locationSelectorShow,
  setLocationSelectorShow,
}) => {
  const { locationState } = useContext(LocationContext);
  const { availableLocations } = locationState;

  return (
    <CSSTransition
      in={locationSelectorShow}
      timeout={300}
      classNames="fade-in"
      unmountOnExit
      appear
    >
      <div className="location-selector">
        {availableLocations.map((location, index) => (
          <div className={`location-selection-container`} key={index}>
            <div className="location-selection-overlay">
              <h1>
                <Link to={`/location/${location}`}>{location}</Link>
              </h1>
            </div>
            <div
              className="location-selection"
              style={{
                backgroundImage: `url(${imageArray[index]})`,
              }}
            ></div>
          </div>
        ))}
      </div>
    </CSSTransition>
  );
};

export default LocationSelector;
