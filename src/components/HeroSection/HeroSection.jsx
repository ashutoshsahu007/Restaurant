import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src="/meals.jpg"
        alt="image not found"
        className="w-full max-h-[400px] object-cover"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 w-full flex justify-center">
        <div className="bg-gray-900 bg-opacity-75 text-white text-center p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
            Delicious Food, Delivered To You
          </h2>
          <p className="mb-2 text-xs sm:text-sm md:text-base">
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
