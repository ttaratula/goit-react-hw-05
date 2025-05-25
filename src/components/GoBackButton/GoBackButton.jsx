import { Link } from "react-router-dom";
import css from "./GoBackButton.module.css";

export default function GoBackBtn({ to }) {
  return <Link to={to} className={css.button}>Back</Link>;
}