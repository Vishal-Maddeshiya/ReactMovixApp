import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTQ0YjFiMTdkZDQwYjE1YzA2YWU3NWE2MDM3ZDAwNCIsInN1YiI6IjY1OTRkMGQyYTY5OGNmMTg1NjQzOTk4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yn9cH_m9Wkw-RQS1CgewOOuv8QaF2rcW7i9rTkF4qGQ";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
