import { AxiosInstance, renewAxiosInstance } from "../../api/api";

export const setUser = (userInfo) => ({
  type: "SET_USER",
  payload: userInfo,
});

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const loginUser = (loginInfo) => {
  return async (dispatch) => {
    return AxiosInstance.post("/login", loginInfo)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch(login(response.data));
        renewAxiosInstance();
        return response;
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
        throw error;
      });
  };
};
