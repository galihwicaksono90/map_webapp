import { CSSTransition, TransitionGroup } from "react-transition-group";
import PopupContent from "./PopupContent";
import "../scss/popupmenu.scss";

const PopupMenu = ({
  currentLocation,
  currentAttraction,
  currentLanguage,
  popupOpen,
  setPopupOpen,
  setOpenDetails,
}) => {
  const popupStyle = () => {
    return {
      top: currentAttraction.popup.position.top + "%",
      left: currentAttraction.popup.position.left + "%",
    };
  };
  return (
    <CSSTransition
      in={popupOpen}
      timeout={500}
      classNames="popup"
      unmountOnExit
    >
      <TransitionGroup component="div">
        <CSSTransition
          key={currentAttraction.name}
          timeout={500}
          classNames="fade-in"
        >
          <div
            className="popup-menu rounded-corner"
            style={popupStyle(currentAttraction)}
          >
            <PopupContent
              currentLocation={currentLocation}
              currentAttraction={currentAttraction}
              currentLanguage={currentLanguage}
              setOpenDetails={setOpenDetails}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </CSSTransition>
  );
};

export default PopupMenu;
