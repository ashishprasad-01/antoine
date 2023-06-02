import axios from "axios";
import { path } from "../constants/path";

export const fetchMagazinesCategory = () => {
    return axios.get(path.magazines)
}

export const fetchAllProducts = () => {
    return axios.get(path.allproducts)
}

// Product Detail Api

export const fetchProductById = (id) => {
    return axios.get(path.productByID(id))
}