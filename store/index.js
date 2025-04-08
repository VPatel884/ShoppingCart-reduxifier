import productsReducer from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import wishListReducer from "./slices/wishListSlice";
import { configureStore } from "@reduxjs/toolkit";
import { apiMiddleware } from "./middleware/apiMiddleware";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartSlice,
    wishList: wishListReducer,
  },
  // middleware: [apiMiddleware],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});
