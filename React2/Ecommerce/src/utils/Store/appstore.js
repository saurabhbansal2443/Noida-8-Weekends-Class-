import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import userReducer from "./UserSlice"

let appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user : userReducer
  },
});

export default appStore;
