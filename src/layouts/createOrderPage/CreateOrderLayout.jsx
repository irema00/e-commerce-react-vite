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
      <OrderSummary
        total={total}
        shippingCost={shippingCost}
        orderTotal={orderTotal}
      />
    </div>
  );
}
