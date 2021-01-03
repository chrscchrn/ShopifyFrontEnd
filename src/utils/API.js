import axios from "axios";

export default function movieSearch(value) {
    return axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&type=movie&s=${value}`);
};