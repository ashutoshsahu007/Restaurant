import React from "react";

const ModalOverlay = () => {
  return (
    <div className="fixed w-full top-[30vh] z-100 flex justify-center">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg">
        <p className="text-sm text-gray-500">hello </p>

        <div className="flex justify-between items-center mt-2 mb-4">
          <h2 className="text-lg font-bold">Total Amount</h2>
          <span className="text-lg font-bold">444</span>
        </div>

        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Close
          </button>
          <button className="px-4 py-2 bg-[#6b1b0b] text-white rounded-full hover:bg-[#4e1308] transition">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
