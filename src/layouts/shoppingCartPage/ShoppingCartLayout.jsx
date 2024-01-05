import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemCount,
  decreaseItemCount,
  removeFromCart,
} from "../../store/actions/shoppingCartActions";
import { Icon } from "@iconify/react";

const ShoppingCartLayout = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const isShippingFree = (totalPrice) => totalPrice >= 300;

  const calculateTotal = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.count,
      0
    );
  };

  const total = calculateTotal();

  const calculateItemTotal = (count, price) => {
    return (count * price).toFixed(2);
  };

  return (
    <div className="container mx-auto my-6 p-4">
      <h2 className="text-2xl font-bold mb-4">
        My Cart ({cartItems.reduce((total, item) => total + item.count, 0)}{" "}
        Items)
      </h2>
      <div className="flex flex-col space-y-4">
        {cartItems.map((item) => {
          const itemTotal = calculateItemTotal(item.count, item.product.price);
          return (
            <div
              key={item.product.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => {}}
                />
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="h-14 w-14 rounded-xl object-cover mr-4 object-top"
                />
                <p className="font-semibold">{item.product.name}</p>
              </div>
              <div className="flex items-center ">
                <button
                  className="bg-prBlue text-white text-md rounded-l px-2 py-1"
                  onClick={() => dispatch(decreaseItemCount(item.product.id))}
                >
                  -
                </button>
                <span className="border border-solid border-semiGrey text-xs px-2 py-2 text-darkBg">
                  {item.count}
                </span>
                <button
                  className="bg-prBlue text-white text-md rounded-r px-2 py-1"
                  onClick={() => dispatch(increaseItemCount(item.product.id))}
                >
                  +
                </button>
              </div>
              <span className="font-semibold">${itemTotal}</span>

              <Icon
                className="flex justify-end items-end hover:cursor-pointer"
                icon="fluent:delete-24-regular"
                width="20"
                height="20"
                onClick={() => dispatch(removeFromCart(item.product.id))}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end mt-4  ">
        <table className="w-[300px] divide-y divide-gray-200 border border-solid border-semiGrey">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold lg:text-[18px] text-[20px]">
                Total Price:
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-normal lg:text-[18px] text-[20px]">
                ${total.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold lg:text-[18px] text-[20px]">
                Shipping:
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-normal lg:text-[18px] text-[20px]">
                {isShippingFree(total) ? "Free" : "$29.99"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShoppingCartLayout;
