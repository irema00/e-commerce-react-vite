const userInitial = {
  user: null,
  token: null,
  fetchState: "NOT_FETCHED",
  isLoggedIn: false,
  error: null,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload };

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

    default:
      return state;
  }
};
