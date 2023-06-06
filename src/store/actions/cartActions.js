import { createAsyncThunk } from "@reduxjs/toolkit"
import { deleteItemFromCart, fetchCart, updateCartItem } from "../../api/cartApi"


export const getCart = createAsyncThunk('cart/getCart',
    async () => {
        const { data } = await fetchCart()
        return data
    }
)

export const deleteCartItem = createAsyncThunk('cart/deleteCartItem',
    async (id) => {
        await deleteItemFromCart(id)
        return id;
    }
)

export const incDecQuantity = createAsyncThunk(
    "cart/incDecQuantity",
    async ({id, qty, inc} ) => {

        inc ? qty = ++qty : qty = --qty

        if (qty < 1 || qty > 10) { return false }

        const { data } = await updateCartItem(id, qty);
        return data;
    }
); 