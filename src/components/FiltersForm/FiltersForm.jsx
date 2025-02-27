import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import css from "./FiltersForm.module.css";

const FiltersForm = ({ onFilter }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    onFilter(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.filterForm}>
      <p className={css.filtersTitle}>Filters:</p>
      <input
        {...register("title")}
        placeholder="Book title:"
        className={css.filtersInput}
      />
      <input
        {...register("author")}
        placeholder="The author:"
        className={`${css.filtersInput} ${css.filtersInputAuthor}`}
      />
      <button className={css.filtersButton} type="submit">
        To apply
      </button>
    </form>
  );
};

FiltersForm.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FiltersForm;
