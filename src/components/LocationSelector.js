import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts/LocationContext";
import "../scss/locationSelector.scss";
import diengMap from "../store/img/dieng/map.png";
import wadaslintangMap from "../store/img/wadaslintang/map.png";

const imageArray = [diengMap, wadaslintangMap];

const LocationSelector = ({ setIsLoading }) => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const { availableLocations } = locationState;
  const [location, setLocation] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    const loadLocation = async () => {
      setIsLoading(true);
      const res = await import(`../store/${location}Store.js`);
      const data = res.default;
      locationDispatch({ type: "changeCurrentLocation", payload: data });
      setTimeout(function () {
        setIsLoading(false);
      }, 500);
    };

    // skip on first render
    if (location !== "") loadLocation();

    return locationDispatch({ type: "changeCurrentLocation", payload: {} });
  }, [location, locationDispatch]);

  return (
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
            onClick={() => setActive(location)}
            className="location-selection"
            style={{
              backgroundImage: `url(${imageArray[index]})`,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default LocationSelector;
