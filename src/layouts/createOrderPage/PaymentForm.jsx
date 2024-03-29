import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import { Icon } from "@iconify/react";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { addCard, updateCard } from "../../store/actions/shoppingCartActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const PaymentForm = ({ onClose, card }) => {
  const initialExpiry = card
    ? `${card.expire_month.toString().padStart(2, "0")}/${card.expire_year
        .toString()
        .substr(-2)}`
    : "";
  const [state, setState] = useState({
    number: card?.card_no || "",
    expiry: initialExpiry,
    cvc: "",
    name: card?.name_on_card || "",
    focus: "",
  });

  const dispatch = useDispatch();
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === "expiry") {
      const onlyNums = value.replace(/[^\d]/g, "");
      if (onlyNums.length <= 2) {
        setState((prev) => ({ ...prev, [name]: onlyNums }));
      } else if (onlyNums.length > 2 && onlyNums.length <= 4) {
        setState((prev) => ({
          ...prev,
          [name]: `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`,
        }));
      }
    } else {
      setState((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const submitCard = async (cardData) => {
    if (card) {
      dispatch(updateCard({ ...cardData, id: card.id }));
    } else {
      dispatch(addCard(cardData));
    }
  };
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (state.number && state.name && state.expiry && state.cvc) {
      const [expiryMonth, expiryYear] = state.expiry.split("/");
      const cardData = {
        id: card?.id,
        card_no: state.number,
        expire_month: parseInt(expiryMonth, 10),
        expire_year: 2000 + parseInt(expiryYear, 10),
        name_on_card: state.name,
      };

      if (card) {
        dispatch(updateCard(cardData));
      } else {
        submitCard(cardData);
      }
      onClose();
    } else {
      toast.error("Please fill the missing parts.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-ltGrey  ">
      <div className="flex m-3 w-full  ">
        <Icon onClick={onClose} icon="icon-park:close" className="flex " />
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <div className="mb-5">
          <Cards
            number={state.number}
            name={state.name}
            expiry={state.expiry}
            cvc={state.cvc}
            focused={state.focus}
          />
        </div>
        <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
          <div className="mb-5">
            <input
              type="text"
              name="number"
              placeholder="Card Number"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="input input-bordered w-full max-w-xs p-2 cursor-text"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="input input-bordered w-full max-w-xs p-2 cursor-text"
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY Expiry"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="input input-bordered w-1/2 p-2 cursor-text"
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="input input-bordered w-1/2 cursor-text"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm md:text-lg w-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
