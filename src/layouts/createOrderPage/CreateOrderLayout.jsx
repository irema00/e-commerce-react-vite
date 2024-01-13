import React, { useEffect } from "react";
import OrderSummary from "../../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../../store/actions/shoppingCartActions";

export default function CreateOrderLayout() {
  const dispatch = useDispatch();
  const { total, shippingCost, orderTotal } = useSelector(
    (state) => state.shoppingCart
  );

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-6 p-4 bg-ltGrey rounded-xl flex justify-between gap-10">
      <OrderSummary
        total={total}
        shippingCost={shippingCost}
        orderTotal={orderTotal}
      />
    </div>
  );
}
