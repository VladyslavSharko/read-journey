import { useForm } from "react-hook-form";
import css from "./StartReadingForm.module.css";

const StartReadingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Starting from page:", data.page);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <p className={css.startPage}>Start page:</p>
      <input
        type="number"
        placeholder="Page number:"
        {...register("page", { required: "This field is required", min: 1 })}
        className={css.inputStartPage}
      />
      {errors.page && <p className={css.error}>{errors.page.message}</p>}
      <button className={css.toStartButton} type="submit" onSubmit={onSubmit}>
        To Start
      </button>
    </form>
  );
};

export default StartReadingForm;
