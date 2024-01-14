import React, { useEffect } from "react";
import OrderSummary from "../../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../../store/actions/shoppingCartActions";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function CreateOrderLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, shippingCost, orderTotal } = useSelector(
    (state) => state.shoppingCart
  );

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  const handleGoCart = () => {
    navigate("/cart");
  };
  return (
    <div className="container mx-auto my-6 p-4 bg-ltGrey rounded-xl flex justify-between gap-10 flex-col">
      <div className="flex items-center gap-3 text-xs text-hdGrey font-semibold mt-3">
        <Icon
          icon="fluent-mdl2:back"
          onClick={handleGoCart}
          className="cursor-pointer text-gray-800"
        />{" "}
        <p
          className="cursor-pointer hover:underline hover:text-semiGrey"
          onClick={handleGoCart}
        >
          Go Back To My Cart
        </p>
      </div>

      <div className="flex w-full">
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="flex flex-col ">
            <div className="flex gap-2 ">
              <div className="mb-4 p-4 bg-white rounded shadow w-1/2">
                <div className="flex justify-between gap-2">
                  <h2 className="text-lg font-bold mb-3 ">
                    Address Information
                  </h2>
                  <h1 className="text-2xl font-bold text-successGreen">1</h1>
                </div>

                <div className="flex flex-col items-start justify-between">
                  <p className="flex text-prBlue font-bold ">Home</p>
                  <span className="text-gray-600 text-sm">Ahmet Akyürek</span>
                  <span className="text-gray-600 text-sm">
                    Üniversiteler Mh.
                  </span>
                  <span className="text-gray-600 text-sm">
                    06800- Ankara/Çankaya
                  </span>
                </div>
              </div>
              <div className="p-4 mb-4 bg-white rounded shadow w-1/2">
                <div className="flex justify-between gap-2">
                  <h2 className="text-lg font-bold mb-3 w-1/2">
                    Payment Options
                  </h2>
                  <h1 className="text-2xl font-bold text-successGreen">2</h1>
                </div>
                <p className="text-sm text-gray-500">
                  You can make your payment safely with a
                  <span className="font-bold text-hdGrey">
                    {" "}
                    bank/credit card{" "}
                  </span>
                  or
                  <span className="font-bold text-hdGrey">
                    {" "}
                    Shopping Credit
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-4 p-4 gap-3 bg-white rounded shadow ">
              <div className="flex justify-between w-full ">
                <h2 className="text-lg font-bold mb-3">Delivery Address</h2>
                <div className="flex items-center justify-between">
                  <button
                    onClick={openAddAddressModal}
                    className="p-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:border hover:border-solid hover:border-gray-100 "
                  >
                    <p className="flex text-xs font-bold text-darkBg ">
                      Add New Address +
                    </p>
                  </button>
                </div>{" "}
              </div>
              <div className="flex flex-wrap">
                {addresses &&
                  addresses.map((address) => (
                    <div
                      key={address.id}
                      className=" p-4 m-2 border border-solid border-semiGrey rounded shadow-lg w-1/3  "
                    >
                      <input
                        type="radio"
                        name="selectedAddress"
                        value={address.id}
                        onChange={() => {
                          /* selection */
                        }}
                        checked={selectedAddress === address.id}
                        className="flex float-right shadow-xl "
                      />
                      <h3 className="text-md font-bold text-prBlue">
                        {address.title}
                      </h3>
                      <p className="text-xs text-darkBg font-semibold mt-1">
                        {address.name} {address.surname}
                      </p>
                      <p className="text-xs text-darkBg font-normal mt-1">
                        {address.address}
                      </p>
                      <p className="text-xs text-darkBg font-normal mt-1">
                        {address.neighborhood}, {address.district}
                      </p>
                      <p className="text-xs text-darkBg font-normal mt-1">
                        {address.city}
                      </p>
                      <p className="text-xs text-darkBg font-normal mt-1">
                        {address.phone}
                      </p>
                      <div className="flex justify-between mt-4 ">
                        <div className="flex gap-2">
                          {" "}
                          <button
                            className="flex bg-blue-500
hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded focus:outline-none focus:shadow-outline"
                          >
                            Edit
                          </button>
                          <button
                            className="flex bg-blue-500
                          hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div>
            <OrderSummary
              total={total}
              shippingCost={shippingCost}
              orderTotal={orderTotal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
