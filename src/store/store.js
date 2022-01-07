import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart.slice";
import paginationSlice from "./pagination-slice";

const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    cart: cartSlice,
  },
});

export default store;
