import React, { use, useRef } from "react";
import DUMMY_MEALS from "../../data/meals-data";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealList = () => {
  const inputRefs = useRef({});
  const ctx = useContext(CartContext);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const amount = inputRefs.current[id]?.value;
    const addedMeal = DUMMY_MEALS.find((meal) => id == meal.id);

    if (!addedMeal || amount < 1) return;

    const mealWithAmount = {
      ...addedMeal,
      amount: +amount,
    };

    ctx.addItem(mealWithAmount);
  };

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
          <form
            onSubmit={(e) => handleSubmit(e, meal.id)}
            className="flex items-center gap-2"
          >
            <div className="flex flex-col text-sm font-medium text-gray-700">
              <label htmlFor={`amount_${meal.id}`} className="mb-1">
                Amount
              </label>
              <input
                id={`amount_${meal.id}`}
                type="number"
                min="1"
                max="10"
                ref={(amt) => (inputRefs.current[meal.id] = amt)}
                step="1"
                defaultValue="1"
                className="w-16 border rounded px-2 py-1 text-center focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-red-800 text-white px-4 py-1 rounded-full font-semibold hover:bg-red-700 transition cursor-pointer"
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
