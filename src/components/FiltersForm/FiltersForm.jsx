import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { setFilter as setFilterRedux } from "../../redux/books/slice";
import css from "./FiltersForm.module.css";

const FiltersForm = () => {
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState({ title: "", author: "" });

  const { register, handleSubmit, watch } = useForm({
    defaultValues: localFilter,
  });

  const title = watch("title");
  const author = watch("author");

  const handleChange = () => {
    const updatedFilter = { title, author };
    setLocalFilter(updatedFilter);
    dispatch(setFilterRedux(updatedFilter));
  };

  const onSubmit = (data) => {
    dispatch(setFilterRedux(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.filterForm}>
      <p className={css.filtersTitle}>Filters:</p>
      <input
        {...register("title", { onChange: handleChange })}
        placeholder="Book title:"
        className={css.filtersInput}
      />
      <input
        {...register("author", { onChange: handleChange })}
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
  onFilter: PropTypes.func,
};

export default FiltersForm;
