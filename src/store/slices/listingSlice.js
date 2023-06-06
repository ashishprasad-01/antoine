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

    filterCategory: (state, action) => {
      let category = action.payload;

      state.allproducts = state.productsByCategory;

      let data = state.productsByCategory.filter((x) => {
        return x.category.find(
          (ele) => ele.toLowerCase() === category.toLowerCase()
        );
      });
      state.allproducts = data;
    },

    filterByLanguage: (state, action) => {

      let language = action.payload;

      let data = state.productsByCategory.filter((x) => {
        return x.language.find(
          (ele) => ele.toLowerCase() === language.toLowerCase()
        );
      });

      state.allproducts = data
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
        state.productsByCategory = action.payload;
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

export const { sortProductsByName, sortProductsByPrice, filterCategory, filterByLanguage } =
  listingSlice.actions;
export default listingSlice.reducer;
