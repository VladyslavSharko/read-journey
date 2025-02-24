import LoginForm from "../components/LoginForm/LoginForm";
import MainImgBoard from "../components/MainImgBoard/MainImgBoard";
import "./styles.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <LoginForm />
      <MainImgBoard />
    </div>
  );
};

export default LoginPage;
