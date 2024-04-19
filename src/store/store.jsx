import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { bestsellerReducer, productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";
import { ordersReducer } from "./reducers/ordersReducer";

export const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  products: productReducer,
  shoppingCart: shoppingCartReducer,
  bestseller: bestsellerReducer,
  orders: ordersReducer,
});

const loadFromLocalStorage = () => {
  try {
    if (localStorage.getItem("cart") === null) return undefined;
    return { shoppingCart: { cart: JSON.parse(localStorage.getItem("cart")) } };
  } catch (err) {
    console.error("Error loading state from localStorage", err);
    return undefined;
  }
};

export const store = createStore(
  reducers,
  loadFromLocalStorage(),
  applyMiddleware(logger, thunk)
);
