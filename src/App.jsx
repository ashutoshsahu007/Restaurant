import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MealList from "./components/MealList/MealList";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="bg-gray-100 min-h-screen p-4">
        <MealList />
      </div>
    </div>
  );
};

export default App;
