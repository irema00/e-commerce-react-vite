import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { completeOrder } from "../store/actions/shoppingCartActions";

export default function OrderSummary({ context }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    total,
    shippingCost,
    orderTotal,
    cart,
    selectedCard,
    selectedAddress,
    addresses,
    cards,
  } = useSelector((state) => state.shoppingCart);

  console.log("Seçilen Adres ID", selectedAddress);
  console.log("Seçilen Kart ID:", selectedCard);
  console.log("Mevcut Kartlar:", cards);
  console.log("Mevcut Adresler", addresses);

  const handleCreateOrderClick = () => {
    navigate("/order");
    console.log("SEPET", cart);
  };
  const handleSaveAndContinue = () => {
    if (!selectedAddress) {
      alert("Please select an address.");
      return;
    }
    console.log(cart);
    navigate("/payment");
  };

  const handleCompleteOrderClick = async () => {
    const addressId = localStorage.getItem("selectedAddressId");
    console.log("ADRESİMİZİN IDSİ", addressId);
    const selectedCardDetails = cards.find((card) => card.id === selectedCard);
    console.log("KART BİLGİLERİ", selectedCardDetails);
    console.log("SEÇİLEN ÜRÜNLER", cart);
    if (!selectedAddress) {
      alert("Please select an address. ");
    } else if (!selectedCard) {
      alert("Please select a payment method.");
    } else {
      const orderData = {
        address_id: addressId,
        order_date: new Date().toISOString(),
        card_no: selectedCardDetails.card_no,
        card_name: selectedCardDetails.name_on_card,
        card_expire_month: selectedCardDetails.expire_month,
        card_expire_year: selectedCardDetails.expire_year,
        card_ccv: selectedCardDetails.card_ccv,
        price: orderTotal,
        products: (cart || []).map((item) => ({
          product_id: item.product.id,
          product_count: item.count,
          product_name: item.product.name,
        })),
      };

      try {
        await dispatch(completeOrder(orderData));
        console.log("SİPARİŞ ÖZETİ", orderData);
        toast.success(
          "Congratulations! Your order has been successfully created."
        );
      } catch (error) {
        console.error("HATA order complete edilmedi");
        toast.error("Failed to complete the order. Please try again.");
      }
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
              <span className="font-normal">
                ${parseFloat(total).toFixed(2)}
              </span>
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
              <span className="font-bold">
                ${parseFloat(orderTotal).toFixed(2)}
              </span>
            </div>
          </div>
          {context === "shoppingCart" && (
            <button
              className="mt-4 w-full bg-prBlue text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-300 transition duration-300 ease-in-out place-self-end"
              disabled={total === 0}
              onClick={handleCreateOrderClick}
            >
              Create Order
            </button>
          )}
          {context === "createOrder" && (
            <button
              className="mt-4 w-full bg-prBlue text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-300 transition duration-300 ease-in-out place-self-end"
              disabled={total === 0}
              onClick={handleSaveAndContinue}
            >
              Save and Continue
            </button>
          )}
          {context === "paymentOptions" && (
            <button
              className="mt-4 w-full bg-prBlue text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-300 transition duration-300 ease-in-out place-self-end"
              disabled={total === 0}
              onClick={handleCompleteOrderClick}
            >
              Complete Order
            </button>
          )}
        </div>
      )}
    </div>
  );
}
