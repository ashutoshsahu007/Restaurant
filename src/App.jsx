import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MealList from "./components/MealList/MealList";
import ReactDOM from "react-dom";
import Backdrop from "./components/UI/Modal/Backdrop";
import ModalOverlay from "./components/UI/Modal/ModalOverlay";
import Modal from "./components/UI/Modal/Modal";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MealList />
      <Modal />
    </div>
  );
};

export default App;
