import API from "./API";

const FILMS_API = '/films';

export const listFilms = () => API.get(FILMS_API);

export const createFilm = (film) => API.post(FILMS_API, film);

export const getFilm = (filmId) =>  API.get(`${FILMS_API}/${filmId}`);

export const updateFilm = (filmId, film) => API.put(`${FILMS_API}/${filmId}`, film);

export const deleteFilm = (filmId) => API.delete(`${FILMS_API}/${filmId}`);