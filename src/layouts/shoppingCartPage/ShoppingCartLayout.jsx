import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseItemCount,
  decreaseItemCount,
  removeFromCart,
  toggleItemCheck,
} from "../../store/actions/shoppingCartActions";
import { Icon } from "@iconify/react";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";

const ShoppingCartLayout = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const calculateItemTotal = (count, price) => {
    return (count * price).toFixed(2);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + (item.checked ? item.product.price * item.count : 0),
    0
  );
  const isShippingFree = (totalPrice) => totalPrice >= 300;
  const shippingCost = isShippingFree(total) ? 0 : 29.99;
  const orderTotal = total + shippingCost;
  const handleCheckboxChange = (productId) => {
    dispatch(toggleItemCheck(productId));
  };
  return (
    <div className="container mx-auto my-6 p-4 bg-ltGrey rounded-xl flex justify-between gap-10">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold mb-4">
          My Cart ({cartItems.reduce((total, item) => total + item.count, 0)}{" "}
          Items)
        </h2>
        {cartItems.length === 0 ? (
          <div className="flex text-center justify-center items-center flex-col h-full gap-5">
            <p className="font-semibold text-hdGrey">No products added! </p>
            <Link
              to="/shop"
              className="mt-4  bg-prBlue text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-300 transition duration-300 ease-in-out place-self-center cursor-pointer"
            >
              Shop Now!
            </Link>
          </div>
        ) : (
          <>
            {isShippingFree(total) ? (
              <div className="text-green-600 font-bold mb-2">
                Free Shipping!
              </div>
            ) : (
              <div className="font-normal mb-2">
                Add{" "}
                <span className="font-bold text-red-600 ">
                  ${parseFloat((300 - total).toFixed(2)).toFixed(2)}
                </span>{" "}
                worth of products to get{" "}
                <span className="text-successGreen font-semibold">
                  Free Shipping!
                </span>
              </div>
            )}
            <div className="flex flex-col space-y-4  bg-white ">
              {cartItems.map((item) => {
                const itemTotal = calculateItemTotal(
                  item.count,
                  item.product.price
                );
                return (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between p-4 border border-solid border-semiGrey rounded-xl "
                  >
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.product.id)}
                      />
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="h-14 w-14 rounded-xl object-cover mr-4 object-top"
                      />
                      <p className="font-semibold w-[300px]">
                        {item.product.name}
                      </p>
                    </div>
                    <div className="flex items-center ">
                      <button
                        className="bg-prBlue text-white text-md rounded-l px-2 py-1"
                        onClick={() =>
                          dispatch(decreaseItemCount(item.product.id))
                        }
                      >
                        -
                      </button>
                      <span className="border border-solid border-semiGrey text-xs px-3 py-[7px] text-darkBg">
                        {item.count}
                      </span>
                      <button
                        className="bg-prBlue text-white text-md rounded-r px-2 py-1"
                        onClick={() =>
                          dispatch(increaseItemCount(item.product.id))
                        }
                      >
                        +
                      </button>
                    </div>
                    <span className="font-semibold">${itemTotal}</span>

                    <Icon
                      className="flex justify-end items-end hover:cursor-pointer "
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
                      {isShippingFree(total) ? (
                        <div className="flex gap-2">
                          <span className="text-blue-500 line-through">
                            $29.99
                          </span>
                          <span className="text-successGreen">Free!</span>
                        </div>
                      ) : (
                        "$29.99"
                      )}
                    </td>
                  </tr>
                  <tr className=" border-t border-solid border-semiGrey ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold lg:text-[18px] text-[20px]">
                      Order Total:
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal lg:text-[18px] text-[20px]">
                      $
                      {isShippingFree(total)
                        ? total.toFixed(2)
                        : orderTotal.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <OrderSummary
        total={total}
        shippingCost={shippingCost}
        orderTotal={orderTotal}
      />
    </div>
  );
};

export default ShoppingCartLayout;
