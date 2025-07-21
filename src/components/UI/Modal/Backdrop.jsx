import React from "react";

const Backdrop = ({ setShowCart }) => {
  return (
    <div
      onClick={() => setShowCart(false)}
      className="fixed inset-0 bg-gray-500/60 z-10"
    ></div>
  );
};

export default Backdrop;
