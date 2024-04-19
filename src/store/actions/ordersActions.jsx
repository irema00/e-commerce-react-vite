import { AxiosInstance } from "../../api/api";

export const fetchOrdersStart = () => ({
  type: "FETCH_ORDERS_START",
});

export const fetchOrdersSuccess = (orders) => ({
  type: "FETCH_ORDERS_SUCCESS",
  payload: orders,
});

export const fetchOrdersFail = (error) => ({
  type: "FETCH_ORDERS_FAIL",
  payload: error,
});

export const fetchOrders = () => {
  return async (dispatch) => {
    dispatch(fetchOrdersStart());
    try {
      const response = await AxiosInstance.get("/order");
      dispatch(fetchOrdersSuccess(response.data));
    } catch (error) {
      dispatch(fetchOrdersFail(error.message));
    }
  };
};
