import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { getMoviesByQuery } from "../../api/search-api";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchMovie = (query) => {
    setSearchParams(`?query=${query}`);
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      getMoviesByQuery(query).then(({ data }) => {
        setMovies(data.results);
      });
    }
  }, [searchParams]);

  return (
    <>
      <SearchForm onSubmit={searchMovie} />
      {!movies ? (
        <p className={css.message}>Enter your search query</p>
      ) : (
        <MovieList data={movies} />
      )}
    </>
  );
}