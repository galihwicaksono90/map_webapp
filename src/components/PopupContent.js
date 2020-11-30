import "../scss/popupmenuContent.scss";

const PopupContent = ({
  currentAttraction,
  currentLanguage,
  setOpenDetails,
}) => {
  return (
    <div className="popup-content">
      <h2>{currentAttraction.name}</h2>
      <br />
      <p>{currentAttraction.description[currentLanguage]}</p>
      <br />
      <button onClick={() => setOpenDetails(true)} className="btn-normal">
        Show More
      </button>
    </div>
  );
};

export default PopupContent;
