const userInitial = {
  user: null,
  token: null,
  fetchState: "NOT_FETCHED",
  isLoggedIn: !!localStorage.getItem("token"),
  error: null,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: true };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
        isLoggedIn: false,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
        error: null,
      };

    default:
      return state;
  }
};
