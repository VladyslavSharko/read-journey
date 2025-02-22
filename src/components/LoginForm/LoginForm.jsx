import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    <div>
      <form className={css.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className={css.loginInput}
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            className={css.loginInput}
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
          <p>Do not have an account?</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

// import css from "./LoginForm.module.css";

// const LoginForm = () => {
//   return <div className={css.loginForm}></div>;
// };

// export default LoginForm;
