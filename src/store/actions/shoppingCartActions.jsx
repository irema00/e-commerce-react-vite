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
