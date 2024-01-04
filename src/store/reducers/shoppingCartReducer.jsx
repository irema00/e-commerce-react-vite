const cartInitial = {
  cart: [],
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = cartInitial, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingCartItemIndex] = {
          ...updatedCart[existingCartItemIndex],
          count: updatedCart[existingCartItemIndex].count + 1,
        };
        return { ...state, cart: updatedCart };
      } else {
        const newCartItem = {
          count: 1,
          checked: true,
          product: action.payload,
        };
        return { ...state, cart: [...state.cart, newCartItem] };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "SET_PAYMENT_INFO":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS_INFO":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};
