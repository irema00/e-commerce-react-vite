import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartDropdown() {
  const cartItems = useSelector((state) => state.shoppingCart.cart);

  return (
    <div className="absolute right-0 mt-2 py-2 w-80 bg-white rounded-lg shadow-xl z-20">
      <div className="flex text-darkBg items-center justify-end px-5">x</div>
      <div className="flex flex-col px-4  ">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-solid border-b border-gray-200 py-3   "
            >
              <img
                className="h-12 w-12 rounded-xl object-cover mr-4 object-top"
                src={item.images[0].url}
                alt={item.name}
              />
              <div className="flex flex-col flex-grow gap-1">
                <span className="font-bold text-sm hover:underline hover:cursor-pointer">
                  {item.name}
                </span>
                <span className="text-gray-600">${item.price}</span>

                <p className="font-semibold text-xs text-hdGrey">
                  adet: {item.quantity}
                  <span className="text-gray-600"> </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-sm">
            Your cart is empty.
          </p>
        )}
      </div>
      <div className="flex justify-end items-center py-3 px-5 text-darkBg gap-2">
        Total: <span>0</span>
      </div>
      <div className="flex justify-between items-center py-1 px-4">
        <Link
          to="/cart"
          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Go to Cart
        </Link>
        <button className="text-sm bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Siparişi Tamamla
        </button>
      </div>
    </div>
  );
}

export default CartDropdown;
