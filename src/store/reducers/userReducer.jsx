const userInitial = {
  userName: null,
  userMail: null,
  userGravatar: null,
  token: null,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  error: null,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_IS_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "SET_USER":
      return {
        ...state,
        userName: action.payload.name,
        userMail: action.payload.email,
        userGravatar: action.payload.gravatar,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
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
        userName: null,
        userMail: null,
        userGravatar: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
