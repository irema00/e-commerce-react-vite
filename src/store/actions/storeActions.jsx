export const setStore = (storeDetails) => {
  return {
    type: "SET_STORE",
    payload: storeDetails,
  };
};
