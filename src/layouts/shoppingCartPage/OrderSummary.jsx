import React from "react";

export default function OrderSummary({ total, shippingCost, orderTotal }) {
  return (
    <div className="bg-ltGrey rounded-xl border border-solid border-semiGrey p-4 w-full lg:w-[400px] h-[300px] justify-between flex flex-col ">
      <h3 className="text-2xl font-bold mb-4 text-center">Order Summary</h3>
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
        <button className="mt-4 w-full bg-prBlue text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-300 transition duration-300 ease-in-out place-self-end">
          Complete Order
        </button>
      </div>
    </div>
  );
}
