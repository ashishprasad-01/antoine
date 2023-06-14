import { createSlice } from "@reduxjs/toolkit";
import {
  getBooks,
  getDeals,
  getLanguageBook,
  getMusicVideo,
  getToys,
} from "../actions/homeActions";

const initialState = {
  deals: [],
  trendingBook: [],
  languageBook: [],
  music: [],
  toys: [],
  loading: false,
};

const bodySlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDeals.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDeals.fulfilled, (state, action) => {
        state.deals = action.payload;
        state.loading = false;
      })
      .addCase(getDeals.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.trendingBook = action.payload;
        state.loading = false;
      })
      .addCase(getBooks.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getLanguageBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLanguageBook.fulfilled, (state, action) => {
        state.languageBook = action.payload;
        state.loading = false;
      })
      .addCase(getLanguageBook.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getMusicVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMusicVideo.fulfilled, (state, action) => {
        state.music = action.payload;
        state.loading = false;
      })
      .addCase(getMusicVideo.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getToys.pending, (state) => {
        state.loading = true;
      })
      .addCase(getToys.fulfilled, (state, action) => {
        state.toys = action.payload;
        state.loading = false;
      })
      .addCase(getToys.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bodySlice.reducer;
