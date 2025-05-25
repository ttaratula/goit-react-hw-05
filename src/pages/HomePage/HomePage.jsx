import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/search-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => setMovies(data.results));
  }, []);

  return (
    <>
      <MovieList data={movies} />
    </>
  );
}