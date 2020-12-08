import { useContext, useState } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { CSSTransition } from "react-transition-group";
import MapIcons from "./MapIcons";
import PopupMenu from "./PopupMenu";
import LoadingSpinner from "./LoadingSpinner";
import Details from "./Details";
import Footer from "./Footer";

import useLoadLocation from "../hooks/useLoadLocation";
import "../scss/mainmap.scss";

const MainMap = ({ match }) => {
  const { locationState, locationDispatch } = useContext(LocationContext);
  const {
    currentLocation,
    currentAttraction,
    availableAttractions,
    currentLanguage,
  } = locationState;
  const [isLoading, setIsLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  useLoadLocation(locationDispatch, match.params.location, setIsLoading);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CSSTransition
            in={!isLoading}
            timeout={300}
            classNames="fade-in"
            unmountOnExit
            appear
          >
            <>
              <div className="mainmap">
                <img
                  className="mainmap-image"
                  alt=""
                  src={currentLocation.mapImage}
                  onClick={() => setPopupOpen(false)}
                />
                <MapIcons
                  currentLocation={currentLocation}
                  availableAttractions={availableAttractions}
                  locationDispatch={locationDispatch}
                  currentAttraction={currentAttraction}
                  popupOpen={popupOpen}
                  setPopupOpen={setPopupOpen}
                />
                <PopupMenu
                  currentLocation={currentLocation}
                  currentAttraction={currentAttraction}
                  currentLanguage={currentLanguage}
                  popupOpen={popupOpen}
                  setPopupOpen={setPopupOpen}
                  openDetails={() => setOpenDetails(true)}
                />
                <Details
                  closeDetails={() => setOpenDetails(false)}
                  openDetails={openDetails}
                  currentAttraction={currentAttraction}
                />
              </div>
              <Footer />
            </>
          </CSSTransition>
        </>
      )}
    </>
  );
};

export default MainMap;
