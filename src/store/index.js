import { configureStore } from "@reduxjs/toolkit";
import headerNavSlice from "./slices/headerNavSlice";
import bodySlice from "./slices/bodySlice";
import listingSlice from "./slices/listingSlice";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";

const reducer = {
    navigation: headerNavSlice,
    body: bodySlice,
    product: listingSlice,
    cart: cartSlice,
    wishlist: wishlistSlice
}

const store = configureStore({
    reducer: reducer
})

export default store