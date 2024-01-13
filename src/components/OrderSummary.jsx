import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function OrderSummary({ total, shippingCost, orderTotal }) {
  const navigate = useNavigate();

  const handleCreateOrderClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
    }
  };
  return (
    <div className="bg-ltGrey rounded-xl border border-solid border-semiGrey p-4 w-full lg:w-[400px] h-full justify-between flex flex-col bg-white">
      <h3 className="text-2xl font-bold mb-4 text-center">Order Summary</h3>
      {total === 0 ? (
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
        <div className="flex flex-col p-2 justify-center ">
          <div className="mb-4">
            <div className="flex justify-between mb-2 gap-2">
              <span className="font-bold">Total Products:</span>
              <span className="font-normal">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 gap-2">
              <span className="font-bold">Shipping Total:</span>
              <span>$ 29.99 </span>
            </div>
            {shippingCost === 0 && (
              <div className="flex justify-between mb-2 items-center gap-2 ">
                <span className="font-bold">
                  $300 and above Free Shipping (Covered by Seller):
                </span>
                <span className="font-bold text-prBlue">-$29.99</span>
              </div>
            )}
          </div>
          <div className="border-t border-semiGrey border-solid pt-4">
            <div className="flex justify-between">
              <span className="font-bold ">Total:</span>
              <span className="font-bold">${orderTotal.toFixed(2)}</span>
            </div>
          </div>
          <button
            className="mt-4 w-full bg-prBlue text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-300 transition duration-300 ease-in-out place-self-end"
            disabled={total === 0}
            onClick={handleCreateOrderClick}
          >
            Create Order
          </button>
        </div>
      )}
    </div>
  );
}
