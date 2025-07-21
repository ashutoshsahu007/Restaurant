import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <React.Fragment>
      <header className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-red-500 to-yellow-400 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">ReactMeals</h1>
        <div className="bg-white flex items-center gap-2 text-red-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-red-100 transition duration-300 ease-in-out cursor-pointer">
          <FaShoppingCart className="text-xl" />
          <span>Your Cart</span>
          <span className="bg-red-600 text-white text-sm font-bold rounded-full px-2 py-0.5">
            88
          </span>
        </div>
      </header>

      <div className="overflow-hidden">
        <img
          src="/meals.jpg"
          alt="image not found"
          className="w-full max-h-[400px] object-cover"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
