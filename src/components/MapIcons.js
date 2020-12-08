const MapIcons = ({
  currentLocation,
  availableAttractions,
  locationDispatch,
  popupOpen,
  setPopupOpen,
  currentAttraction,
}) => {
  const getIconPosition = (attraction) => ({
    top: currentLocation.attractions[attraction].icon.position.top + "%",
    left: currentLocation.attractions[attraction].icon.position.left + "%",
  });

  const getIconScale = (attraction) => {
    return {
      transform: `scale(${currentLocation.attractions[attraction].icon.scale})`,
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
          className={`mainmap-icon ${attraction}-icon ${
            currentAttraction.name ===
              currentLocation.attractions[attraction].name && popupOpen
              ? "mainmap-icon-active"
              : ""
          }`}
          style={getIconPosition(attraction)}
          onClick={() => popupHandler(attraction)}
        >
          <img
            className="mainmap-icon-image"
            alt=""
            src={currentLocation.attractions[attraction].icon.image}
            style={getIconScale(attraction)}
          />
        </li>
      ))}
    </ul>
  );
};

export default MapIcons;
