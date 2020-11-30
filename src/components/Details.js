import DetailsHeader from "./DetailsHeader";
import DetailsContent from "./DetailsContent";
import GallerySmall from "./GallerySmall";
import { useContext } from "react";
import CloseButton from "./CloseButton";

import { LocationContext } from "../contexts/LocationContext";
import { CSSTransition } from "react-transition-group";
import "../scss/details.scss";

const Details = ({ openDetails, setOpenDetails }) => {
  const { locationState } = useContext(LocationContext);
  const { currentAttraction } = locationState;

  return (
    <CSSTransition
      in={openDetails}
      timeout={500}
      classNames="slide-in"
      unmountOnExit
    >
      <div className="details">
        <div className="details-top">
          <DetailsHeader currentAttraction={currentAttraction} />
          <CloseButton setState={setOpenDetails} state={openDetails} />
          <DetailsContent currentAttraction={currentAttraction} />
        </div>
        <GallerySmall />
      </div>
    </CSSTransition>
  );
};

export default Details;
