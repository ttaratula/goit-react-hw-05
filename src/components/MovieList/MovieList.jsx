import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({ data }) {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <MovieItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}