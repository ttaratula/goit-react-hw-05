import { Link, useLocation } from "react-router-dom";
import { getImagePath } from "../../api/search-api";
import css from "./MovieItem.module.css";

export default function MovieItem({ data }) {
  const location = useLocation();
  return (
    <Link to={`/movies/${data.id}`} state={location}>
      <div className={css.item}>
        <img src={getImagePath(data.poster_path)} width={200} height={300} />
        <div className={css.info}>
          <h2 className={css.title}>{data.title}</h2>
          <p className={css.description}>{data.overview}</p>
        </div>
      </div>
    </Link>
  );
}