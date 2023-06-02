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
        const { data } = await deleteItemFromCart(id)
        console.log(data, 'data');
        return id;
    }
)

export const incDecQuantity = createAsyncThunk(
    "cart/incDecQuantity",
    async ({id, qty, inc} ) => {
        console.log(id, qty, inc, '------------------');

        inc ? qty = ++qty : qty = --qty

        if (qty < 1 || qty > 10) { return false }

        const { data } = await updateCartItem(id, qty);
        console.log(data, 'cart action is called');
        return data;
    }
);