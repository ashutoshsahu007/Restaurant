import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = ({ setShowCart, showCart }) => {
  const ctx = useContext(CartContext);

  return (
    <React.Fragment>
      <header className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-red-500 to-yellow-400 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">ReactMeals</h1>
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-white flex items-center gap-2 text-red-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-100 transition duration-300 ease-in-out cursor-pointer"
        >
          <FaShoppingCart className="text-xl" />
          <span>Your Cart</span>
          <span className="bg-red-600 text-white text-sm font-bold rounded-full px-2 py-0.5">
            {ctx.items.length}
          </span>
        </button>
      </header>
    </React.Fragment>
  );
};

export default Header;
