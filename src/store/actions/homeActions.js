import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchBooks,
  fetchDeals,
  fetchLanguageBook,
  fetchMusicVideo,
  fetchToys,
} from "../../api/homeApi";

export const getDeals = createAsyncThunk("home/getDeals", async () => {
  const { data } = await fetchDeals();
  return data;
});

export const getBooks = createAsyncThunk("home/getBooks", async () => {
  const { data } = await fetchBooks();
  return data;
});

export const getLanguageBook = createAsyncThunk(
  "home/getLanguageBook",
  async () => {
    const { data } = await fetchLanguageBook();
    return data;
  }
);

export const getMusicVideo = createAsyncThunk(
  "home/getMusicVideo",
  async () => {
    const { data } = await fetchMusicVideo();
    return data;
  }
);

export const getToys = createAsyncThunk("home/getToys", async () => {
  const { data } = await fetchToys();
  return data;
});
