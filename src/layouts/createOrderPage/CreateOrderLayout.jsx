import React, { useEffect, useState } from "react";
import OrderSummary from "../../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../../store/actions/shoppingCartActions";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import {
  fetchAddresses,
  selectAddress,
} from "../../store/actions/shoppingCartActions";
import AddAddressModal from "./AddAddressModal";

export default function CreateOrderLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, shippingCost, orderTotal, addresses, selectedAddress } =
    useSelector((state) => state.shoppingCart);
  const [isAddAddressModalOpen, setIsAddAddressModalOpen] = useState(false);
  const selectedAddressDetails = addresses.find(
    (addr) => addr.id === selectedAddress
  );

  useEffect(() => {
    dispatch(calculateTotals());
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleGoCart = () => {
    navigate("/cart");
  };

  const openAddAddressModal = () => {
    setIsAddAddressModalOpen(true);
  };

  const closeAddAddressModal = () => {
    setIsAddAddressModalOpen(false);
  };
  const handleSelectAddress = (addressId) => {
    dispatch(selectAddress(addressId));
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
            <div className="flex gap-2 flex-col sm:flex-row">
              <div className=" border-solid border-b-4 border-prBlue mb-4 p-4 bg-white rounded shadow sm:w-1/2">
                <div className="flex justify-between gap-2">
                  <h2 className="text-lg font-bold mb-3 ">
                    Address Information
                  </h2>
                  <h1 className="text-2xl font-bold text-successGreen">1</h1>
                </div>
                {selectedAddressDetails && (
                  <div className="flex flex-col border border-solid border-semiGrey rounded-lg p-3 shadow-lg ">
                    <p className="flex  text-prBlue font-bold ">
                      {selectedAddressDetails.title}
                    </p>
                    <span className="text-darkBg text-xs font-semibold mt-1 ">
                      {selectedAddressDetails.name}{" "}
                      {selectedAddressDetails.surname}
                    </span>
                    <div className="flex gap-1 mt-1 mb-1 lg:flex-row flex-col">
                      <span className="text-gray-600 text-xs">
                        {selectedAddressDetails.address}
                      </span>
                      <span className="text-gray-600 text-xs">
                        <p>
                          {selectedAddressDetails.neighborhood},{" "}
                          {selectedAddressDetails.district},
                        </p>
                      </span>
                      <span className="text-gray-600 text-xs font-semibold">
                        {selectedAddressDetails.city}
                      </span>
                    </div>

                    <span className="text-gray-600 text-xs">
                      {selectedAddressDetails.phone}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 mb-4 bg-white rounded shadow  sm:w-1/2">
                <div className="flex justify-between gap-2">
                  <h2 className="text-lg font-bold mb-3w-1/2">
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
                      className=" p-4 m-2 border border-solid border-semiGrey rounded shadow-lg  w-[250px] "
                    >
                      <input
                        type="radio"
                        name="selectedAddress"
                        value={address.id}
                        onChange={() => handleSelectAddress(address.id)}
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

          <div className="flex h-[350px] ">
            <OrderSummary
              total={total}
              shippingCost={shippingCost}
              orderTotal={orderTotal}
              selectedAddress={selectedAddress}
              context="createOrder"
            />
          </div>
          {isAddAddressModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <AddAddressModal onClose={closeAddAddressModal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
