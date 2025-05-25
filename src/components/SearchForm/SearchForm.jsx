import css from "./SearchForm.module.css";

export default function SearchForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    if (query !== "") {
      onSubmit(query);
      form.reset();
    }
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}