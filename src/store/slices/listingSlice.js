import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getMagazinesCategory,
  getProductByID,
} from "../actions/listingAction";
import { sortByName, sortByPrice } from "../../utils";

const initialState = {
  category: [],
  allproducts: [],
  productsByCategory: [],
  productDetail: {},
  loading: false,
};

const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    
    sortProductsByName: (state, action) => {
      if (action.payload) {
        sortByName(state.allproducts, action.payload);
      } else {
        sortByName(state.allproducts);
      }
    },

    sortProductsByPrice: (state, action) => {
      if (action.payload) {
        sortByPrice(state.allproducts, action.payload);
      } else {
        sortByPrice(state.allproducts);
      }
    },
  },


  extraReducers: (builder) => {
    builder
      .addCase(getMagazinesCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMagazinesCategory.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(getMagazinesCategory.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.allproducts = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.loading = false;
      })

      // Product Detail
      .addCase(getProductByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.loading = false;
      })
      .addCase(getProductByID.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { sortProductsByName, sortProductsByPrice } = listingSlice.actions;
export default listingSlice.reducer;
