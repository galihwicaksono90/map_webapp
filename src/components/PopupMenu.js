import { CSSTransition, TransitionGroup } from "react-transition-group";
import PopupContent from "./PopupContent";
import "../scss/popupmenu.scss";

const PopupMenu = ({
  currentLocation,
  currentAttraction,
  currentLanguage,
  popupOpen,
  setPopupOpen,
  openDetails,
}) => {
  const popupStyle = () => {
    const popupPositionAdder = 5;
    return {
      top:
        parseInt(currentAttraction.icon.position.top) +
        popupPositionAdder +
        "%",
      left: currentAttraction.icon.position.left + "%",
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
              //prop drilling??
              openDetails={openDetails}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </CSSTransition>
  );
};

export default PopupMenu;
