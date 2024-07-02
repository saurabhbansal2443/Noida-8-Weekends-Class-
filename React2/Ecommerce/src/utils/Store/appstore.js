import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

let appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
