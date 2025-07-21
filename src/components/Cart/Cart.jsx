import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Cart = ({ setShowCart, showCart }) => {
  return (
    <button
      onClick={() => setShowCart(!showCart)}
      className="bg-white flex items-center gap-2 text-red-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-100 transition duration-300 ease-in-out cursor-pointer"
    >
      <FaShoppingCart className="text-xl" />
      <span>Your Cart</span>
      <span className="bg-red-600 text-white text-sm font-bold rounded-full px-2 py-0.5">
        88
      </span>
    </button>
  );
};

export default Cart;
