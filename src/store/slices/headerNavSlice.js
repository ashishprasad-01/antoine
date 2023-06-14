import { createSlice } from "@reduxjs/toolkit";
import {
  getAboutus,
  getHeaderCountry,
  getHeaderNav,
  getService,
} from "../actions/headerNavAction";

const initialState = {
  navCategories: [],
  country: [],
  footer: [],
  aboutus: [],
  service: [],
  loading: false,
};

const headerNavSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHeaderNav.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHeaderNav.fulfilled, (state, action) => {
        state.navCategories = action.payload;
        state.loading = false;
      })
      .addCase(getHeaderNav.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getHeaderCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHeaderCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.country = action.payload;
      })
      .addCase(getHeaderCountry.rejected, (state) => {
        state.loading = false;
      })
      // .addCase(getFooter.pending, (state) => {
      //     state.loading = true
      // })
      // .addCase(getFooter.fulfilled, (state,action) => {
      //     state.loading = false
      //     state.footer = action.payload
      // })
      // .addCase(getFooter.rejected, (state) => {
      //     state.loading = false
      // })
      .addCase(getAboutus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAboutus.fulfilled, (state, action) => {
        state.loading = false;
        state.aboutus = action.payload;
      })
      .addCase(getAboutus.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getService.pending, (state) => {
        state.loading = true;
      })
      .addCase(getService.fulfilled, (state, action) => {
        state.loading = false;
        state.service = action.payload;
      })
      .addCase(getService.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default headerNavSlice.reducer;
