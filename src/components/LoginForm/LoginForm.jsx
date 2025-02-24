import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import css from "./LoginForm.module.css";
import { loginThunk } from "../../redux/auth/operations";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(loginThunk(data));
      console.log(data);

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Login failed!");
    }
  };

  return (
    <div className={css.containerLoginForm}>
      <NavLink className={css.mainLogo} to="/">
        <svg className={css.mainLogoIcon}>
          <use href="/icons.svg#mainLogo" />
        </svg>
        <p className={css.mainLogoText}>read journey</p>
      </NavLink>

      <h1 className={css.mainTitle}>
        Expand your mind, reading{" "}
        <span className={css.mainTitleSpan}>a book</span>
      </h1>

      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputWrapper}>
          <input
            className={css.loginInput}
            {...register("email")}
            placeholder="Mail:"
          />
          {/* {errors.email && <p>{errors.email.message}</p>} */}
        </div>

        <div>
          <input
            className={`${css.loginInput} ${
              errors.email ? css.loginInputError : ""
            }`}
            type="password"
            {...register("password")}
            placeholder="Password:"
          />
          {errors.password && (
            <p className={css.errorMessage}>Enter a valid Password*</p>
          )}
        </div>

        <div className={css.buttonWrapper}>
          <button
            className={css.loginButton}
            type="submit"
            disabled={isSubmitting}
          >
            Log in
          </button>
          <NavLink className={css.torRegisterLink} to="/register">
            Do not have an account?
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
