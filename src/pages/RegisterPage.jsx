import MainImgBoard from "../components/MainImgBoard/MainImgBoard";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import "./styles.css";

const RegisterPage = () => {
  return (
    <div className='registerPage'>
      <RegisterForm />
      <MainImgBoard/>
    </div>
  );
};

export default RegisterPage;
