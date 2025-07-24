import { FaMinus, FaPlus } from "react-icons/fa";
import ModalOverlay from "../UI/Modal/ModalOverlay";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import DUMMY_MEALS from "../../data/meals-data";

const Cart = ({ setShowCart }) => {
  const ctx = useContext(CartContext);

  const handleRemove = (id) => {
    ctx.removeItem(id);
  };

  const handleAdd = (id) => {
    const addedMeal = DUMMY_MEALS.find((meal) => id == meal.id);
    const amount = 1;

    if (!addedMeal || amount < 1) return;

    const mealWithAmount = {
      ...addedMeal,
      amount: +amount,
    };
    ctx.addItem(mealWithAmount);
  };

  return (
    <ModalOverlay onCloseModal={setShowCart}>
      {ctx.items.map((item) => (
        <div key={item.id} className="mb-4 border-b pb-3 border-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-red-600 font-bold text-sm">
                ${item.price.toFixed(2)}
              </span>
              <span className="ml-2 border px-2 py-[2px] rounded-md text-sm">
                x {item.amount}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleRemove(item.id)}
                className="border border-gray-400 px-2 py-1 rounded-md hover:bg-gray-200 transition text-sm"
              >
                <FaMinus size={12} />
              </button>
              <button
                onClick={() => handleAdd(item.id)}
                className="bg-[#6b1b0b] text-white px-2 py-1 rounded-md hover:bg-[#4e1308] transition text-sm"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center font-bold text-lg mb-6">
        <span>Total Amount</span>
        <span>${ctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-end gap-4">
        <button
          onClick={() => setShowCart(false)}
          className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition cursor-pointer"
        >
          Close
        </button>
        <button className="px-4 py-2 bg-[#6b1b0b] text-white rounded-full hover:bg-[#4e1308] transition cursor-pointer">
          Order
        </button>
      </div>
    </ModalOverlay>
  );
};

export default Cart;
