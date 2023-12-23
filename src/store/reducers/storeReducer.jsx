const SET_STORE = "SET_STORE";

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default storeReducer;
