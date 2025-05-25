import { BASE_URL, options } from "../convig";
import axios from "axios";

export function getImagePath(imgName, size = 200) {
  return `https://image.tmdb.org/t/p/w${size}${imgName}`;
}

export async function getTrendingMovies(
  timeWindow = "day",
  language = "en-US"
) {
  const url = `${BASE_URL}/3/trending/movie/${timeWindow}?language=${language}`;
  return await axios.get(url, options);
}

export async function getMovie(id) {
  const url = `${BASE_URL}/3/movie/${id}`;
  return await axios.get(url, options);
}

export async function getMovieCast(id) {
  const url = `${BASE_URL}/3/movie/${id}/credits`;
  return await axios.get(url, options);
}

export async function getMovieReviews(id) {
  const url = `${BASE_URL}/3/movie/${id}/reviews`;
  return await axios.get(url, options);
}

export async function getMoviesByQuery(query) {
  const url = `${BASE_URL}/3/search/movie?query=${query}`;
  return await axios.get(url, options);
}