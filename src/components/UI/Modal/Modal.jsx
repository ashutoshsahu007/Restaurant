import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ setShowCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setShowCart={setShowCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay setShowCart={setShowCart} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
