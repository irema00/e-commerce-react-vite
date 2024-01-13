export const addToCart = (product) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });

    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const increaseItemCount = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "INCREASE_ITEM_COUNT",
      payload: productId,
    });

    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const decreaseItemCount = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "DECREASE_ITEM_COUNT",
      payload: productId,
    });
    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const toggleItemCheck = (productId) => {
  return {
    type: "TOGGLE_ITEM_CHECK",
    payload: productId,
  };
};
export const calculateTotals = () => {
  return (dispatch, getState) => {
    const cartItems = getState().shoppingCart.cart;
    const total = cartItems.reduce(
      (acc, item) => acc + item.count * item.product.price,
      0
    );
    const shippingCost = parseFloat(total) > 300 ? 0 : 29.99;
    const orderTotal = total + shippingCost;

    dispatch({
      type: "CALCULATE_TOTALS",
      payload: {
        total,
        shippingCost,
        orderTotal,
      },
    });
  };
};
export const setPaymentInfo = (paymentInfo) => {
  return {
    type: "SET_PAYMENT_INFO",
    payload: paymentInfo,
  };
};

export const setAddressInfo = (addressInfo) => {
  return {
    type: "SET_ADDRESS_INFO",
    payload: addressInfo,
  };
};
