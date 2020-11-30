import { AiOutlineClose } from "react-icons/ai";

const CloseButton = ({ setState, state }) => {
  return (
    <>
      <button onClick={() => setState(!state)} className="btn-close">
        <AiOutlineClose />
      </button>
    </>
  );
};

export default CloseButton;
