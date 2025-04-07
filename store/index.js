import productsReducer from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";
// import { logger } from './middleware/logger';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartSlice,
    wishList: wishListReducer,
  },
  // middleware: [logger]
});
