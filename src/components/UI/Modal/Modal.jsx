import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
