import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"; // Replace with your API URL

const initialState = {
  products: [],
  isLoading: true,
};

export const getProducts = createAsyncThunk(
  "get/getProducts",
  async (name, thunkAPI) => {
    try {
      const resp = await fetch(BASE_URL).then((res) => res.json());
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.products = state.products.filter((item) => item.id !== itemId);
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearProducts, removeItem } = productsSlice.actions;

export default productsSlice.reducer;
