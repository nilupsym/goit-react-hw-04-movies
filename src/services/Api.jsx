import axios from 'axios';

const API_KEY = '6ac85d37fc5933a9e58505b5650ac08b';
const BASE_URL = 'https://api.themoviedb.org/3';



const fetchPopular = () => {
    return axios
        .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
        .then(response => response.data.results);
};

const fetchMovieByQuery = (query) => {
    return axios
        .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
        .then(response => response.data.results);
};

const fetchMovieDetails = (movieId) => {
    return axios
        .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.data);
};

const fetchMovieCast = (movieId) => {
    return axios
        .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
        .then(response => response.data);
};

const fetchMovieReviews = (movieId) => {
    return axios
        .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.data);
};
// eslint-disable-next-line
export default { fetchPopular, fetchMovieByQuery, fetchMovieDetails, fetchMovieCast, fetchMovieReviews};