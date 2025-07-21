import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MealList from "./components/MealList/MealList";
import Modal from "./components/UI/Modal/Modal";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <Header setShowCart={setShowCart} showCart={showCart} />
      <HeroSection />
      <MealList />
      {showCart && <Modal setShowCart={setShowCart} />}
    </CartProvider>
  );
};

export default App;
