import { getImagePath } from "../../api/search-api";
import css from "./CastItem.module.css";

export default function CastItem({ data }) {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={getImagePath(data.profile_path, 300)}
        alt=""
        width={150}
        height={150}
      />
      <h3>{data.name}</h3>
    </div>
  );
}