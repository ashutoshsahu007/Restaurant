import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealList = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden">
      {DUMMY_MEALS.map((meal) => (
        <div key={meal.id} className="p-4 border-b last:border-none">
          <h3 className="text-lg font-semibold">{meal.name}</h3>
          <p className="text-sm italic text-gray-600">{meal.description}</p>
          <p className="text-orange-600 font-bold mt-1">
            ${meal.price.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MealList;
