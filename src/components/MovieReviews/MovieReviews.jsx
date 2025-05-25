import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/search-api";
import Review from "../Review/Review";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieReviews(movieId).then(({ data }) => setReviews(data.results));
  }, []);

  return (
    <ul>
      {reviews.length === 0 ? (
        <p className={css.message}>I don't have any reviews yet.</p>
      ) : (
        reviews.map((review) => {
          return (
            <li key={review.id}>
              <Review data={review} />
            </li>
          );
        })
      )}
    </ul>
  );
}