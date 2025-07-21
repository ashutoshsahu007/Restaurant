import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MealList from "./components/MealList/MealList";
import Modal from "./components/UI/Modal/Modal";
import { useState } from "react";
import CartContext from "./store/cart-context";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider
      value={{
        cartItems: cartItems,
      }}
    >
      <Header setShowCart={setShowCart} showCart={showCart} />
      <HeroSection />
      <MealList />
      {showCart && <Modal setShowCart={setShowCart} />}
    </CartContext.Provider>
  );
};

export default App;
