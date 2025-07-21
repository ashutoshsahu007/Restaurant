import React from "react";

import Cart from "../Cart/Cart";

const Header = ({ setShowCart, showCart }) => {
  return (
    <React.Fragment>
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-red-500 to-yellow-400 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">ReactMeals</h1>
        <Cart setShowCart={setShowCart} showCart={showCart} />
      </header>
    </React.Fragment>
  );
};

export default Header;
