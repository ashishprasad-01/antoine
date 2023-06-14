import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAboutus,
  fetchCountry,
  fetchNav,
  fetchService,
} from "../../api/headerNavApi";

export const getHeaderNav = createAsyncThunk(
  "navigation/getHeaderNav",
  async () => {
    const { data } = await fetchNav();
    return data;
  }
);

export const getHeaderCountry = createAsyncThunk(
  "navgation/getHeaderCountry",
  async () => {
    const { data } = await fetchCountry();
    return data;
  }
);

// export const getFooter = createAsyncThunk('navigation/getFooter',
//     async () => {
//         const { data } = await fetchFooter()
//         return data
//     }
// )

export const getAboutus = createAsyncThunk(
  "navigation/getAboutus",
  async () => {
    const { data } = await fetchAboutus();
    return data;
  }
);

export const getService = createAsyncThunk(
  "navigation/getService",
  async () => {
    const { data } = await fetchService();
    return data;
  }
);
