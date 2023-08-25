import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL =
  "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"; // Replace with your API URL

// export const fetchProducts = async () => {
//   try {
//     const response = await fetch(BASE_URL).then((res) => res.json());
//     return response;
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };

const initialState = {
  products: [],
  isLoading: true,
};

export const getProducts = createAsyncThunk(async () => {
  try {
    console.log("called while api");
    const resp = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    ).then((res) => res.json());
    return resp;
  } catch (error) {
    console.log("called while api");
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  //   reducers: {
  //     removeItem: (state, action) => {
  //       const itemId = action.payload;
  //       state.products = state.products.filter((item) => item.id !== itemId);
  //     },
  //     clearProducts: (state) => {
  //       state.products = [];
  //     },
  //   },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(getProducts.pending, (state) => {
  //         console.log("pending", action);
  //         state.isLoading = true;
  //       })
  //       .addCase(getProducts.fulfilled, (state, action) => {
  //         console.log("full filled", action);
  //         state.isLoading = false;
  //         state.products = action.payload;
  //       })
  //       .addCase(getProducts.rejected, (state, action) => {
  //         console.log(action, "rejected");
  //         state.isLoading = false;
  //       });
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { clearProducts, removeItem } = productsSlice.actions;

export default productsSlice.reducer;
