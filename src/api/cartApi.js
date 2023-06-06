import axios from "axios";
import { path } from "../constants/path";

export const fetchCart = () => {
    return axios.get(path.getCartApi)
}

export const deleteItemFromCart = (id) => {
    console.log(id);
    return (
        axios.delete(path.deleteCartItem(id))
    )
}

export const updateCartItem = (id, qty) => {
    return axios.patch(
        path.cartEditApi(id),
        { qty },
    );
}