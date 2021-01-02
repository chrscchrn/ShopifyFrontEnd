import axios from "axios";

export default function movieSearch(value) {
    return axios.get(`http://www.omdbapi.com/?apikey=7037cccb&type=movie&s=${value}`);
};