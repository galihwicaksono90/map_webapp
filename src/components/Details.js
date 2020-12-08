import { CSSTransition } from "react-transition-group";

import DetailsHeader from "./DetailsHeader";
import CloseButton from "./CloseButton";
import DetailsContent from "./DetailsContent";
import GallerySmall from "./GallerySmall";

import "../scss/details.scss";

const Details = ({ closeDetails, openDetails, currentAttraction }) => {
  return (
    <CSSTransition
      in={openDetails}
      timeout={300}
      classNames="popup"
      unmountOnExit
      appear
    >
      <div className="details-container" onClick={(e) => console.log({ e })}>
        <div className="details">
          <div className="details-top">
            <DetailsHeader currentAttraction={currentAttraction} />
            <CloseButton closeDetails={closeDetails} />
            <DetailsContent currentAttraction={currentAttraction} />
          </div>
          {/* <GallerySmall term={currentAttraction.term} /> */}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Details;
