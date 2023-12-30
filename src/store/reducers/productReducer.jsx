import { FETCH_STATES } from "../actions/productActions";

const productInitial = {
  productList: [],
  totalProductCount: 0,
  pageCount: 1,
  activePage: 1,
  fetchState: FETCH_STATES.notFetched,
};
export const productReducer = (state = productInitial, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        productList: [...action.payload],
      };
    case "SET_MORE_PRODUCTS":
      return {
        ...state,
        productList: [...state.productList, ...action.payload],
      };
    case "SET_TOTAL_PRODUCT_COUNT":
      return { ...state, totalProductCount: action.payload };
    case "SET_FETCH_STATE":
      return { ...state, fetchState: action.payload };
    case "SET_PAGE_COUNT":
      return { ...state, pageCount: action.payload };
    case "SET_ACTIVE_PAGE":
      return { ...state, activePage: action.payload };
    default:
      return state;
  }
};
