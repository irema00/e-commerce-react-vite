import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
} from "../../store/actions/shoppingCartActions";

function CartDropdown({ onClose }) {
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleClose = () => {
    onClose();
  };
  const totalCartPrice = cartItems
    .reduce((total, item) => {
      return total + item.product.price * item.count;
    }, 0)
    .toFixed(2);
  const totalItemCount = cartItems.reduce((total, item) => {
    return total + item.count;
  }, 0);
  return (
    <div className="absolute right-0 left-0 mt-2 pb-2 w-50 px-2 mx-5 bg-white rounded-lg  shadow-xl z-50 lg:w-80">
      <div className="flex text-darkBg items-center justify-end px-5 pt-3 hover:text-semiGrey ">
        <Icon
          icon="uiw:close"
          onClick={handleClose}
          className="hover:cursor-pointer"
        />
      </div>
      <p className="flex items-center justify-center pb-3 font-bold text-darkBg lg:text-lg text-[18px]">
        My Cart ({totalItemCount})
      </p>
      <div className="flex flex-col px-4 py-2  ">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            const totalPrice = (item.product.price * item.count).toFixed(2);
            return (
              <div
                key={item.product.id}
                className="flex items-center border-solid border-b border-gray-200 py-3   "
              >
                <img
                  className="h-14 w-14 rounded-xl object-cover mr-4 object-top"
                  src={item.product.images[0].url}
                  alt={item.product.name}
                />
                <div className="flex flex-col flex-grow gap-1">
                  <span className="font-bold text-sm hover:underline hover:cursor-pointer">
                    {item.product.name}
                  </span>
                  <span className="text-gray-600 py-1 lg:text-[15px] text-[18px] font-normal">
                    ${parseFloat(totalPrice).toFixed(2)}
                  </span>

                  <div className="flex font-semibold text-xs text-hdGrey justify-end gap-2 ">
                    <div>
                      <button
                        className="bg-prBlue text-white text-md rounded-l px-2 py-1"
                        onClick={() =>
                          dispatch(decreaseItemCount(item.product.id))
                        }
                      >
                        -
                      </button>
                      <span className="border border-solid border-semiGrey text-xs px-2 py-1 text-darkBg">
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
                    <Icon
                      className="flex justify-end items-end hover:cursor-pointer"
                      icon="fluent:delete-24-regular"
                      width="20"
                      height="20"
                      onClick={() => handleRemove(item.product.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 text-sm">
            Your cart is empty.
          </p>
        )}
      </div>
      <div className="flex justify-end item.products-center py-3 px-5 text-darkBg gap-2">
        <p className="font-bold lg:text-[18px] text-[20px]">Total: </p>
        <span className="font-normal lg:text-[18px] text-[20px]">
          ${totalCartPrice}
        </span>
      </div>
      <div className="flex justify-between items-center py-1 px-4">
        <Link
          to="/cart"
          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold lg:py-2 lg:px-4 py-4 px-7 rounded"
        >
          Go to Cart
        </Link>
        <button className="text-sm bg-prBlue hover:bg-blue-300 text-white font-semibold lg:py-2 lg:px-4 py-4 px-7 rounded">
          Complete Order
        </button>
      </div>
    </div>
  );
}

export default CartDropdown;
