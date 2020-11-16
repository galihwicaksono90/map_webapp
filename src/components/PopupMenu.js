import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./css/popupmenu.css";

const PopupContent = (props) => {
  return (
    <div className="popup-content">
      <h2>{props.currentAttraction.name}</h2>
      <br />
      <p>{props.currentAttraction.description[props.currentLanguage]}</p>
      <br />
      <p>More Details...</p>
    </div>
  );
};

const PopupMenu = ({ currentAttraction, currentLanguage, popupOpen }) => {
  const popupStyle = () => {
    return {
      top: currentAttraction.icon.position.top + "%",
      left: currentAttraction.icon.position.left + "%",
    };
  };
  return (
    <CSSTransition
      in={popupOpen}
      timeout={500}
      classNames="fade-content"
      unmountOnExit
    >
      <SwitchTransition>
        <CSSTransition
          key={currentAttraction.name}
          timeout={500}
          classNames="fade-content"
        >
          <div className="popup-menu" style={popupStyle(currentAttraction)}>
            <PopupContent
              currentAttraction={currentAttraction}
              currentLanguage={currentLanguage}
            />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </CSSTransition>
  );
};

export default PopupMenu;
