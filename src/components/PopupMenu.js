import { SwitchTransition, CSSTransition } from "react-transition-group";
import PopupContent from "./PopupContent";
import "../scss/popupmenu.scss";

const PopupMenu = ({
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
      classNames="fade-in"
      unmountOnExit
    >
      <SwitchTransition>
        <CSSTransition
          in={popupOpen}
          key={currentAttraction.name}
          timeout={500}
          classNames="fade-in"
        >
          <div
            className="popup-menu rounded-corner"
            style={popupStyle(currentAttraction)}
          >
            <PopupContent
              currentAttraction={currentAttraction}
              currentLanguage={currentLanguage}
              setOpenDetails={setOpenDetails}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </CSSTransition>
  );
};

export default PopupMenu;
