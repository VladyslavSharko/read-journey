import { useForm } from "react-hook-form";
import css from "./FilterFormLibrary.module.css";

const FilterFormLibrary = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <div className={css.filterFormLibrary}>
      <p className={css.filtersTitle}>Filters:</p>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <input
          id="title"
          {...register("title")}
          className={css.filtersInput}
          placeholder="Book title:"
        />

        <input
          id="author"
          {...register("author")}
          className={css.filtersInput}
          placeholder="Book author:"
        />

        <input
          id="pages"
          type="number"
          {...register("pages", {
            min: { value: 1, message: "Pages must be a positive number" },
          })}
          className={`${css.filtersInput} ${css.filtersInputPages}`}
          placeholder="Number of pages:"
        />

        <button type="submit" className={css.addButton}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default FilterFormLibrary;
