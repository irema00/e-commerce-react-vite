import React, { useEffect, useState } from "react";
import OrderSummary from "../../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import {
  calculateTotals,
  fetchCards,
  fetchAddresses,
  selectCard,
} from "../../store/actions/shoppingCartActions";
import PaymentForm from "./PaymentForm";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export default function PaymentOptions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, shippingCost, orderTotal, addresses, selectedAddress } =
    useSelector((state) => state.shoppingCart);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const [selectedCardForEdit, setSelectedCardForEdit] = useState(null);
  const selectedAddressDetails = addresses?.find(
    (addr) => addr.id === selectedAddress
  );
  const { cards, selectedCard } = useSelector((state) => state.shoppingCart);
  const installmentOptions = [2, 3, 4];
  useEffect(() => {
    dispatch(calculateTotals());
    dispatch(fetchAddresses());
    dispatch(fetchCards());
  }, [dispatch]);

  const handleGoCart = () => {
    navigate("/cart");
  };

  const openAddCardModal = () => {
    setSelectedCardForEdit(null);
    setIsAddCardModalOpen(true);
  };

  const closeAddCardModal = () => {
    setIsAddCardModalOpen(false);
  };

  const handleCardSelection = (cardId) => {
    dispatch(selectCard(cardId));
  };
  const openEditCardModal = (card) => {
    setSelectedCardForEdit(card);
    setIsAddCardModalOpen(true);
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
              <div className="mb-4 p-4 bg-white rounded shadow sm:w-1/2">
                <div className="flex justify-between gap-2">
                  <h2 className="text-lg font-bold mb-3 ">
                    Address Information
                  </h2>
                  <h1 className="text-2xl font-bold text-successGreen">1</h1>
                </div>
                {addresses && selectedAddressDetails && (
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
              <div className="border-solid border-b-4 border-prBlue p-4 mb-4 bg-white rounded shadow  sm:w-1/2">
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
                <h2 className="text-lg font-bold mb-3">Card Selection</h2>
                <div className="flex items-center justify-between">
                  <button
                    onClick={openAddCardModal}
                    className="p-2 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 hover:border hover:border-solid hover:border-gray-100 "
                  >
                    <p className="flex text-xs font-bold text-darkBg ">
                      Add New Credit Card +
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-wrap w-full ">
                  {cards && cards.length > 0 ? (
                    cards.map((card) => (
                      <div
                        key={card.id}
                        className="p-5 flex items-center flex-col"
                      >
                        <input
                          type="radio"
                          name="selectedCard"
                          value={card.id}
                          onChange={() => handleCardSelection(card.id)}
                          checked={selectedCard === card.id}
                          className="self-start mb-4"
                        />
                        <Cards
                          number={card.card_no}
                          name={card.name_on_card}
                          expiry={`${
                            card.expire_month &&
                            card.expire_month.toString().padStart(2, "0")
                          }/${
                            card.expire_year &&
                            card.expire_year.toString().substr(-2)
                          }`}
                          cvc={"***"}
                          focused="number"
                          preview={true}
                        />
                        <div className="flex m-1 gap-1">
                          <button
                            onClick={() => openEditCardModal(card)}
                            className=" text-bgDark border border-solid border-semiGrey font-bold  text-sm rounded p-1 px-2  focus:outline-none focus:shadow-outline"
                          >
                            Edit Card
                          </button>
                          {/* <button
                          onClick={() => deleteCard(card.id)}
                          className=" bg-prBlue text-white border border-solid border-prBlue font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline text-sm"
                        >
                          Delete
                        </button> */}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No cards available. Please add a new card.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  gap-5 ">
            <OrderSummary
              total={total}
              shippingCost={shippingCost}
              orderTotal={orderTotal}
              context="paymentOptions"
            />
            <div className="bg-ltGrey rounded-xl border border-solid border-semiGrey p-4 w-full lg:w-[400px] h-full justify-between flex flex-col bg-white">
              <label
                htmlFor="installments"
                className="text-xl font-bold mb-4 text-center "
              >
                Installment Options:
              </label>
              <select
                id="installments"
                name="installments"
                className="mt-1 block pl-3 pr-10 py-2 text-base border border-solid border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue=""
              >
                <option disabled value="">
                  Select
                </option>
                {installmentOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} installments
                  </option>
                ))}
              </select>
            </div>
          </div>
          {isAddCardModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="modal-background">
                <div className="modal-content">
                  <PaymentForm
                    onClose={closeAddCardModal}
                    card={selectedCardForEdit}
                  />
                </div>
                <button
                  onClick={closeAddCardModal}
                  className="modal-close is-large"
                  aria-label="close"
                ></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
