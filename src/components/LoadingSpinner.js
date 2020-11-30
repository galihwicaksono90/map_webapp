import DotLoader from "react-spinners/DotLoader";
import "../scss/loadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <DotLoader color="#d79921" />
    </div>
  );
};

export default LoadingSpinner;
