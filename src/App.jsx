import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MealList from "./components/MealList/MealList";
import ReactDOM from "react-dom";
import Backdrop from "./components/UI/Modal/Backdrop";
import ModalOverlay from "./components/UI/Modal/ModalOverlay";
import Modal from "./components/UI/Modal/Modal";
import { useState } from "react";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <Header setShowCart={setShowCart} showCart={showCart} />
      <HeroSection />
      <MealList />
      {showCart && <Modal setShowCart={setShowCart} />}
    </>
  );
};

export default App;
