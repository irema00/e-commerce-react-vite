import api from "../../api/api";

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
    return api
      .post("/login", loginInfo)
      .then((response) => {
        localStorage.setItem("isLoggedIn", "true");
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        return response;
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
        throw error;
      });
  };
};
