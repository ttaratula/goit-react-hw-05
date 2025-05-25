import { useEffect, useRef, useState } from "react";
import { getImagePath, getMovie } from "../../api/search-api";
import { useParams, Outlet, NavLink, useLocation } from "react-router-dom";
import GoBackBtn from "../../components/GoBackButton/GoBackButton";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetailsPage() {
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/");
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then(({ data }) => {
      setMovieData(data);
    });
  }, []);

  return (
    <>
      <GoBackBtn to={backLinkHref.current} />
      <div className={css.head}>
        <img
          src={getImagePath(movieData.poster_path, 500)}
          width={500}
          height={700}
        />
        <div className={css.information}>
          <h2 className={css.title}>{movieData.title}</h2>
          <p className={css.originalTitle}>{movieData.original_title}</p>
          <p className={css.description}>{movieData.overview}</p>
        </div>
      </div>
      <div className={css.nav}>
        <NavLink className={buildLinkClass} to="cast">
          Credits
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </div>
      <div className={css.outlet}>
        <Outlet />
      </div>
    </>
  );
}