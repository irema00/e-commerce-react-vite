export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: "REMOVE_FROM_CART",
  payload: itemId,
});

export const updatePaymentInfo = (paymentInfo) => ({
  type: "UPDATE_PAYMENT_INFO",
  payload: paymentInfo,
});

export const updateAddressInfo = (addressInfo) => ({
  type: "UPDATE_ADDRESS_INFO",
  payload: addressInfo,
});
