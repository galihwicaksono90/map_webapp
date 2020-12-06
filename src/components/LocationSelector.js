import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { CSSTransition } from "react-transition-group";
import "../scss/locationSelector.scss";
import diengMap from "../store/img/dieng/map.png";
import wadaslintangMap from "../store/img/wadaslintang/map.png";

const imageArray = [diengMap, wadaslintangMap];

const LocationSelector = ({
  setIsLoading,
  locationSelectorShow,
  setLocationSelectorShow,
}) => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const { availableLocations } = locationState;
  const [location, setLocation] = useState("");

  useEffect(() => {
    const loadLocation = async () => {
      setIsLoading(true);
      setLocationSelectorShow(false);
      const res = await import(`../store/${location}Store.js`);
      const data = res.default;
      locationDispatch({ type: "changeCurrentLocation", payload: data });
      setTimeout(function () {
        setIsLoading(false);
      }, 1500);
    };

    // skip on first render
    if (location !== "") loadLocation();

    return locationDispatch({ type: "changeCurrentLocation", payload: {} });
  }, [location, locationDispatch, locationSelectorShow]);

  return (
    <CSSTransition
      in={locationSelectorShow}
      timeout={300}
      classNames="fade-in"
      unmountOnExit
    >
      <div className="location-selector">
        {availableLocations.map((location, index) => (
          <div className={`location-selection-container`} key={index}>
            <div className="location-selection-overlay">
              <h1>{location}</h1>
              <button
                className="btn-visit btn-normal hide"
                onClick={() => setLocation(location)}
              >
                Visit
              </button>
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
