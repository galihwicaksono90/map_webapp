import { AiOutlineClose } from "react-icons/ai";

const CloseButton = ({ closeDetails }) => {
  return (
    <>
      <button onClick={closeDetails} className="btn-close">
        <AiOutlineClose />
      </button>
    </>
  );
};

export default CloseButton;
