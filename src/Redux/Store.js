import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import settingReducer from "./Settingslice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    setting: settingReducer,
  },
});

export default store;
