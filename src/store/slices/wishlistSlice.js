import { createSlice } from "@reduxjs/toolkit"
import { deleteWishlistItem, getWishlist } from "../actions/wishlistActios"

const initialState = {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState, 
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getWishlist.fulfilled, (state, action) => {
                state.wishlist=action.payload
            })

            .addCase(deleteWishlistItem.fulfilled, (state, action) => {
                const prodId = action.payload
                console.log(prodId);
                state.wishlist = state.wishlist.filter(
                    (item) => item.id !== prodId
                );
            })
    }
})

export default wishlistSlice.reducer