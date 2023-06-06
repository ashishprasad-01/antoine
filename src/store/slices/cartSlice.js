import { createSlice } from "@reduxjs/toolkit";
import { deleteCartItem, getCart, incDecQuantity } from "../actions/cartActions";

const initialState = {
    cartItem: [],
    subTotal: 0,
    loading: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        calculateSubTotal: (state) => {
            if(state.cartItem){
                state.cartItem.forEach((item) => {
                    state.subTotal += item.price * item.qty;
                });
            }
        },

    },
    
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state) => {
                state.loading = true
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.cartItem = action.payload
                state.loading = false
            })
            .addCase(getCart.rejected, (state) => {
                state.loading = false
            })

            .addCase(deleteCartItem.fulfilled, (state, action) => {
                console.log(action);
                const prodId = action.payload
                console.log(prodId);
                state.cartItem = state.cartItem.filter(
                    (item) => item.id !== prodId
                );
            })

            .addCase(incDecQuantity.fulfilled, (state, action) => {
                const qty = action.payload.qty
                state.cartItem = state.cartItem.map((item) => {
                  if (item.id === action.payload.id) {
                    return { ...item, qty: qty };
                  }
                  return item;
                });
              });
    }
})

export const{calculateSubTotal} = cartSlice.actions
export default cartSlice.reducer