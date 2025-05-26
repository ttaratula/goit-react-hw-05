import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/search-api";
import CastItem from "../CastItem/CastItem";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCast(movieId).then(({ data }) => {
      return setCasts(data.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {casts.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <CastItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}