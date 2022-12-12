import { configureStore } from "@reduxjs/toolkit";

import uiReducers from "./ui-slice";
import cartReducers from "./cart-slice";

const store = configureStore({
  reducer: {
    ui: uiReducers,
    cart: cartReducers,
  },
});

export default store;
