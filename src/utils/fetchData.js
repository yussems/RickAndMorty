import axios from "axios";

export function fetchData(id) {
  const URL = `https://rickandmortyapi.com/api/character`;
  const movies = axios
    .get(URL)
    .then((res) => res)
  return movies;
}

export function fetchQueryData(id) {
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
  const movies = axios
    .get(URL)
    .then((res) => res)
  return movies;
}
