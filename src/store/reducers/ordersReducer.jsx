const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ORDERS_START":
      return { ...state, loading: true, error: null };
    case "FETCH_ORDERS_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_ORDERS_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
