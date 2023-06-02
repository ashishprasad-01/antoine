import axios from "axios"
import { path } from "../constants/path"

export const fetchWishlist = () => {
    return axios.get(path.getWishlist)
}

export const deleteItemFromWishList = (id) => {
    console.log(id);
    return (
        axios.delete(path.deleteWishlistItem(id))
    )
}