import "../scss/detailsContent.scss";
import {
  AiOutlineHome,
  AiOutlineClockCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FiMapPin, FiTwitter, FiInstagram } from "react-icons/fi";

const DetailsContentList = ({ detail, index, currentAttraction }) => {
  const getIcon = (detail) => {
    // try to move to custom hooks
    switch (detail) {
      case "address":
        return <AiOutlineHome />;
      case "openHour":
        return <AiOutlineClockCircle />;
      case "phone":
        return <AiOutlinePhone />;
      case "email":
        return <AiOutlineMail />;
      case "gmaps":
        return <FiMapPin />;
      case "twitter":
        return <FiTwitter />;
      case "instagram":
        return <FiInstagram />;
      default:
        return <AiOutlinePhone />;
    }
  };
  const getLink = (detail) => {
    return detail !== "gmaps" ? (
      currentAttraction[detail]
    ) : (
      <a href={currentAttraction[detail]}>Location</a>
    );
  };

  return (
    <li key={index} className="details-content-item">
      <div className="details-item-container">
        <span className="details-list-icon">{getIcon(detail)}</span>
        {getLink(detail)}
      </div>
    </li>
  );
};

const DetailsContent = ({ currentAttraction }) => {
  return (
    <div className="details-content-container">
      <div className="details-content-title">
        <h1>Details</h1>
      </div>
      <ul className="details-content-items">
        {Object.keys(currentAttraction.details).map((detail, index) => (
          <DetailsContentList
            detail={detail}
            index={index}
            currentAttraction={currentAttraction.details}
          />
        ))}
      </ul>
    </div>
  );
};

export default DetailsContent;
