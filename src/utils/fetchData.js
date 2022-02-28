import axios from "axios";

export function fetchData() {
  const URL = "https://rickandmortyapi.com/api/character";
  const movies = axios
    .get(URL)
    .then((res) => res)
    .catch((err) => console.log(err));
  return movies;
}
