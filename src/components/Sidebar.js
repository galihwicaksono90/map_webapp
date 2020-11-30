import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "../scss/sidebar.scss";

const duration = 500;
const SidebarContent = (props) => {
  const { locationState } = useContext(LocationContext);
  const { currentAttraction, currentLanguage } = locationState;

  return (
    <SwitchTransition>
      <CSSTransition
        key={currentAttraction.name}
        timeout={duration}
        classNames="fade-content"
      >
        <div className="sidebar-content">
          <img
            alt=""
            src={currentAttraction.icon.image}
            height="auto"
            width="100px"
          />
          <h1>{currentAttraction.name}</h1>
          <p>{currentAttraction.description[currentLanguage]}</p>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

const Sidebar = (props) => {
  return (
    <CSSTransition
      in={props.openSidebar}
      timeout={duration}
      classNames="fade"
      unmountOnExit
    >
      <div className="sidebar">
        <SidebarContent setOpenSidebar={props.setOpenSidebar} />
        <button
          onClick={() => props.setOpenSidebar(false)}
          className="sidebar-btn"
        >
          X
        </button>
      </div>
    </CSSTransition>
  );
};

export default Sidebar;
