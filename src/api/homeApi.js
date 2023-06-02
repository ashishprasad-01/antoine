import axios from "axios";
import { path } from "../constants/path";

export const fetchDeals = () => {
    return axios.get(path.deals)
}

export const fetchBooks = () => {
    return axios.get(path.books)
}

export const fetchLanguageBook = () => {
    return axios.get(path.languageBooks)
}

export const fetchMusicVideo = () => {
    return axios.get(path.music)
}

export const fetchToys = () => {
    return axios.get(path.toys)
}