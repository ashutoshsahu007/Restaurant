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
        <div
          key={meal.id}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 border-b last:border-none"
        >
          {/* Meal Info */}
          <div>
            <h3 className="text-lg font-semibold">{meal.name}</h3>
            <p className="text-sm italic text-gray-600">{meal.description}</p>
            <p className="text-orange-600 font-bold mt-1">
              ${meal.price.toFixed(2)}
            </p>
          </div>

          {/* Form */}
          <form className="flex items-center gap-2">
            <div className="flex flex-col text-sm font-medium text-gray-700">
              <label htmlFor={`amount_${meal.id}`} className="mb-1">
                Amount
              </label>
              <input
                id={`amount_${meal.id}`}
                type="number"
                min="1"
                step="1"
                defaultValue="1"
                className="w-16 border rounded px-2 py-1 text-center focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-red-800 text-white px-4 py-1 rounded-full font-semibold hover:bg-red-700 transition"
            >
              + Add
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default MealList;
