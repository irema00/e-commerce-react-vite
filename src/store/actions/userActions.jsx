import { AxiosInstance, renewAxiosInstance } from "../../api/api";

export const setUser = (userInfo) => ({
  type: "SET_USER",
  payload: userInfo,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: "SET_IS_LOGGED_IN",
  payload: isLoggedIn,
});

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const loginUser = (loginInfo) => {
  return (dispatch) => {
    return AxiosInstance.post("/login", loginInfo)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        renewAxiosInstance();
        return response;
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
        throw error;
      });
  };
};
