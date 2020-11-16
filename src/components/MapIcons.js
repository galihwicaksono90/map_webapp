const MapIcons = ({
  currentLocation,
  availableAttractions,
  locationDispatch,
  popupOpen,
  setPopupOpen,
  currentAttraction,
}) => {
  const iconStyle = (attraction) => {
    return {
      top: currentLocation.attractions[attraction].icon.position.top + "%",
      left: currentLocation.attractions[attraction].icon.position.left + "%",
    };
  };
  const popupHandler = (attraction) => {
    currentAttraction === currentLocation.attractions[attraction] && popupOpen
      ? setPopupOpen(false)
      : setPopupOpen(true);
    locationDispatch({
      type: "changeCurrentAttraction",
      payload: attraction,
    });
  };

  return (
    <ul className="mainmap-icons">
      {availableAttractions.map((attraction, index) => (
        <li
          key={attraction}
          className={`mainmap-icon ${attraction}-icon`}
          style={iconStyle(attraction)}
          onClick={() => popupHandler(attraction)}
        >
          <img
            className={"mainmap-icon-image"}
            alt=""
            src={currentLocation.attractions[attraction].icon.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default MapIcons;
