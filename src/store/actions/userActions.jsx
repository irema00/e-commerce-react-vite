import api from "../../api/api";

export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  payload: userInfo,
});

export const setIsLoggedIn = (isLoggedIn) => ({
  type: "SET_IS_LOGGED_IN",
  payload: isLoggedIn,
});

export const loginUser = (credentials) => (dispatch) => {
  api
    .post("/login", credentials)
    .then((response) => {
      dispatch({ type: "LOGIN", payload: response.data });
      dispatch(setUserInfo(response.data.user));
      dispatch(setIsLoggedIn(true));
    })
    .catch((error) => {
      throw error;
    });
};
