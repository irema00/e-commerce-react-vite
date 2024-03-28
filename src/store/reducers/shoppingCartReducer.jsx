const cartInitial = {
  cart: [],
  payment: {},
  addresses: [],
  selectedAddress: null,
  total: 0,
  shippingCost: 29.99,
  orderTotal: 0,
  cards: [],
  orders: [],
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

    case "INCREASE_ITEM_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case "DECREASE_ITEM_COUNT":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: Math.max(item.count - 1, 1) }
            : item
        ),
      };
    case "TOGGLE_ITEM_CHECK":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
    case "CALCULATE_TOTALS":
      return {
        ...state,
        total: action.payload.total,
        shippingCost: action.payload.shippingCost,
        orderTotal: action.payload.orderTotal,
      };
    case "FETCH_ADDRESSES":
      return { ...state, addresses: action.payload };
    case "SELECT_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    case "SET_PAYMENT_INFO":
      return { ...state, payment: action.payload };
    case "SET_ADDRESS_INFO":
      return { ...state, address: action.payload };
    case "EDIT_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
        selectedAddress:
          state.selectedAddress === action.payload
            ? null
            : state.selectedAddress,
      };
    case "FETCH_CARDS_SUCCESS":
      return { ...state, cards: action.payload };
    case "FETCH_CARDS_FAILURE":
      console.error("Error fetching cards:", action.error);
      return state;
    case "ADD_CARD_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
        cardAdded: false,
      };
    case "ADD_CARD_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        cardAdded: true,
      };
    case "ADD_CARD_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
        cardAdded: false,
      };
    case "SELECT_CARD":
      return {
        ...state,
        selectedCard: action.payload,
      };
    case "UPDATE_CARD_SUCCESS":
      const updatedCards = state.cards.map((card) =>
        card.id === action.payload.id ? action.payload : card
      );
      return { ...state, cards: updatedCards };
    case "ADD_ADDRESS":
      const newAddress = action.payload;
      return {
        ...state,
        addresses: [...state.addresses, newAddress],
      };
    case "ORDER_COMPLETE_SUCCESS":
      const newOrder = action.payload;
      return {
        ...state,
        orders: [...state.orders, newOrder],
      };

    default:
      return state;
  }
};
