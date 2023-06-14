import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteItemFromWishList, fetchWishlist } from "../../api/WishListApi";

export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async () => {
    const { data } = await fetchWishlist();
    return data;
  }
);

export const deleteWishlistItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id) => {
    const { data } = await deleteItemFromWishList(id);
    console.log(data, "data");
    return id;
  }
);
