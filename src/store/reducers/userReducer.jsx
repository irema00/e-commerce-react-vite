const userInitial = {
  user: null,
  fetchState: "NOT_FETCHED",
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return { ...state, name: action.payload };

    case "SET_USER_EMAIL":
      return { ...state, email: action.payload };

    default:
      return state;
  }
};
