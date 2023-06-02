import axios from "axios";
import { path } from "../constants/path";

// Header api

export const fetchNav = () => {
    return axios.get(path.navApi)
}

export const fetchCountry = () => {
    return axios.get(path.topNavApi)
}

// export const fetchFooter = () => {
//     return axios.get(path.topFooter)
// }

export const fetchAboutus = () => {
    return axios.get(path.aboutus)
}

export const fetchService = () => {
    return axios.get(path.service)
}
