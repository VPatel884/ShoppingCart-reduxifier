import { createSelector, createSlice } from "@reduxjs/toolkit";

const findItemIndex = (cartList, action) =>
  cartList.findIndex(
    (cartItem) => cartItem.productId === action.payload.productId
  );

const slice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true;
    },
    fetchCartItemsError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong!";
    },
    loadCartItems(state, action) {
      state.loading = false;
      state.list = action.payload.products;
    },
    addToCart(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1;
      else state.list.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity += 1;
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1);
    },
  },
});

export const getProducts = (state) => state.products.list;
export const getCartList = (state) => state.cartItems.list;
export const allCartItems = createSelector(
  [getProducts, getCartList],
  (products, cartList) =>
    cartList
      .map(({ productId, quantity }) => {
        const product = products.find((p) => p.id === productId);
        return product ? { ...product, quantity } : null;
      })
      .filter(Boolean)
);
export const cartLoading = (state) => state.cartItems.loading;
export const cartError = (state) => state.cartItems.error;

export const {
  fetchCartItemsError,
  fetchCartItems,
  loadCartItems,
  addToCart,
  removeFromCart,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions;

export default slice.reducer;
