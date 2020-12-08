import "../scss/popupmenuContent.scss";

const PopupContent = ({
  currentLocation,
  currentAttraction,
  currentLanguage,
  openDetails,
}) => {
  return (
    <div className="popup-content">
      <h2>{currentAttraction.name}</h2>
      <br />
      <p>{currentAttraction.description[currentLanguage]}</p>
      <br />
      <button onClick={() => openDetails()}>Show More</button>
    </div>
  );
};

export default PopupContent;
