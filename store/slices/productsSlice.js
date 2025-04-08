import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    list: [],
    error: "",
  },
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload || "Something went wrong!";
    },
    updateAllProducts(state, action) {
      state.loading = false;
      state.error = "";
      state.list = action.payload;
    },
  },
});

export const getAllProducts = (state) => state.products.list;
export const getProductsLoading = (state) => state.products.loading;
export const getProductsError = (state) => state.products.error;

export const { updateAllProducts, fetchProducts, fetchError } = slice.actions;
export default slice.reducer;
