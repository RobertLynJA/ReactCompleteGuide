import { configureStore } from "@reduxjs/toolkit";

import uiReducers from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiReducers,
  },
});

export default store;

