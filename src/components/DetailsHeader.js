import "../scss/detailsHeader.scss";

const DetailsHeader = ({ currentAttraction }) => {
  return (
    <div className="details-header">
      <div className="details-icon-container">
        <img
          className="details-icon-image"
          alt=""
          src={currentAttraction.icon.image}
        />
      </div>
      <div className="details-title">
        <h1>{currentAttraction.name}</h1>
      </div>
    </div>
  );
};

export default DetailsHeader;
