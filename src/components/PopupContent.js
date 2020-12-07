import "../scss/popupmenuContent.scss";
import { Link } from "react-router-dom";

const PopupContent = ({
  currentLocation,
  currentAttraction,
  currentLanguage,
}) => {
  return (
    <div className="popup-content">
      <h2>{currentAttraction.name}</h2>
      <br />
      <p>{currentAttraction.description[currentLanguage]}</p>
      <br />
      <Link to={`/${currentLocation.name}/${currentAttraction.name_short}`}>
        Show More
      </Link>
    </div>
  );
};

export default PopupContent;
