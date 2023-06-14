import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchMagazinesCategory,
  fetchProductById,
} from "../../api/productApi";

export const getMagazinesCategory = createAsyncThunk(
  "listing/getMagazinesCategory",
  async () => {
    const { data } = await fetchMagazinesCategory();
    return data;
  }
);

export const getAllProducts = createAsyncThunk(
  "listing/getAllProducts",
  async () => {
    const { data } = await fetchAllProducts();
    return data;
  }
);

export const getProductByID = createAsyncThunk(
  "listing/getProductById",
  async (id) => {
    const { data } = await fetchProductById(id);
    return data;
  }
);
