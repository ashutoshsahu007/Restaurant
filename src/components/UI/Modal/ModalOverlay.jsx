const ModalOverlay = (props) => {
  return (
    <div
      onClick={() => props.onCloseModal(false)}
      className="fixed inset-0 flex justify-center items-start pt-[30vh] z-50 bg-black/30 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl w-[90%] max-w-md p-6 shadow-2xl"
      >
        {props.children}
      </div>
    </div>
  );
};

export default ModalOverlay;
