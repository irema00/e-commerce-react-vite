import { AxiosInstance } from "../../api/api";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    dispatch(calculateTotals());
    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const removeFromCart = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
    dispatch(calculateTotals());
    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const increaseItemCount = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "INCREASE_ITEM_COUNT",
      payload: productId,
    });
    dispatch(calculateTotals());
    localStorage.setItem("cart", JSON.stringify(getState().shoppingCart.cart));
  };
};

export const decreaseItemCount = (productId) => {
  return (dispatch, getState) => {
    dispatch({
      type: "DECREASE_ITEM_COUNT",
      payload: productId,
    });
    dispatch(calculateTotals());
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

export const addAddress = (addressData) => async (dispatch) => {
  try {
    await AxiosInstance.post("/user/address", addressData);
    dispatch(fetchAddresses());
  } catch (error) {
    console.error("Address adding failed!", error);
  }
};

export const fetchAddresses = () => async (dispatch) => {
  try {
    const response = await AxiosInstance.get("/user/address");
    dispatch({ type: "FETCH_ADDRESSES", payload: response.data });
    console.log("addresses fetched.", response.data);
  } catch (error) {
    dispatch({ type: "FETCH_ADDRESSES_FAILURE", error });
    console.error("Error fetching addresses:", error);
  }
};

export const selectAddress = (addressId) => {
  return {
    type: "SELECT_ADDRESS",
    payload: addressId,
  };
};

export const editAddress = (address) => ({
  type: "EDIT_ADDRESS",
  payload: address,
});

export const deleteAddress = (addressId) => ({
  type: "DELETE_ADDRESS",
  payload: addressId,
});

export const fetchCards = () => async (dispatch) => {
  try {
    const response = await AxiosInstance.get("/user/card");
    dispatch({ type: "FETCH_CARDS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_CARDS_FAILURE", error });
  }
};

export const addCard = (cardData) => async (dispatch) => {
  dispatch({ type: "ADD_CARD_REQUEST" });
  try {
    const response = await AxiosInstance.post("/user/card", cardData);
    dispatch({ type: "ADD_CARD_SUCCESS", payload: response.data });
    dispatch(fetchCards());
  } catch (error) {
    dispatch({ type: "ADD_CARD_FAILURE", error });
  }
};
export const selectCard = (cardId) => {
  return {
    type: "SELECT_CARD",
    payload: cardId,
  };
};
export const updateCard = (cardData) => async (dispatch) => {
  try {
    await AxiosInstance.put("/user/card", cardData);
    dispatch({ type: "UPDATE_CARD_SUCCESS", payload: cardData });
    dispatch(fetchCards());
  } catch (error) {
    console.error("Card update failed:", error);
  }
};

export const completeOrder = (orderData) => async (dispatch) => {
  try {
    const response = await AxiosInstance.post("/order", orderData);
    console.log("Order Response:", response.data);
    dispatch({ type: "ORDER_COMPLETE_SUCCESS", payload: orderData });
  } catch (error) {
    console.error("Order complete failed", error);
  }
};
