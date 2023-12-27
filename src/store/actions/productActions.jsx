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

export const setTotalProductCount = (count) => ({
  type: "SET_TOTAL_PRODUCT_COUNT",
  payload: count,
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

export const fetchProducts =
  (queryParams = {}) =>
  (dispatch) => {
    dispatch(setFetchState(FETCH_STATES.fetching));

    AxiosInstance.get("/products", { params: queryParams })
      .then((response) => {
        dispatch(setProductList(response.data.products));
        dispatch(setTotalProductCount(response.data.total));
        dispatch(setFetchState(FETCH_STATES.fetched));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        dispatch(setFetchState(FETCH_STATES.failed));
      });
  };
