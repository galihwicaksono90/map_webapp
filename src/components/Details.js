import { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { LocationContext } from "../contexts/LocationContext";

import DetailsHeader from "./DetailsHeader";
import CloseButton from "./CloseButton";
import DetailsContent from "./DetailsContent";
import GallerySmall from "./GallerySmall";

import "../scss/details.scss";

// const Details = ({ openDetails, setOpenDetails }) => {
const Details = () => {
  const { locationState } = useContext(LocationContext);
  const { currentAttraction } = locationState;
  const [openDetails, setOpenDetails] = useState(true);

  return (
    <CSSTransition
      in={openDetails}
      timeout={500}
      classNames="slide-in"
      unmountOnExit
      appear
    >
      <div className="details">
        <div className="details-top">
          <DetailsHeader currentAttraction={currentAttraction} />
          {/* <CloseButton closeDetails={() => setOpenDetails(false)} /> */}
          <DetailsContent currentAttraction={currentAttraction} />
          <h1>{openDetails.toString()}</h1>
        </div>
        {/* <GallerySmall term={currentAttraction.term} /> */}
      </div>
    </CSSTransition>
  );
};

export default Details;
