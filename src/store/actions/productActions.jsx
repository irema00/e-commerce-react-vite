import { AxiosInstance } from "../../api/api";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETCHING",
  fetched: "FETCHED",
  failed: "FAILED",
};

export const setProductList = (productList) => ({
  type: "SET_PRODUCTS",
  payload: productList,
});

export const setTotalProductCount = (total) => ({
  type: "SET_TOTAL_PRODUCT_COUNT",
  payload: total,
});

export const setPageCount = (count) => ({
  type: "SET_PAGE_COUNT",
  payload: count,
});

export const setActivePage = (page) => ({
  type: "SET_ACTIVE_PAGE",
  payload: page,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const fetchProducts = (params = {}) => {
  return (dispatch) => {
    dispatch(setFetchState(FETCH_STATES.fetching));
    AxiosInstance.get("/products", { params: params })
      .then((response) => {
        dispatch(setProductList(response.data.products));
        dispatch(setTotalProductCount(response.data.totalProductCount));
        dispatch(setActivePage(response.data.page));
        dispatch(setFetchState(FETCH_STATES.fetched));
        console.log("PRODUCTS FETCHED", response.data.productList);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState(FETCH_STATES.failed));
      });
  };
};
