import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecommendedPage from "./pages/RecommendedPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<RecommendedPage />}/>
      </Routes>
    </div>
  );
};

export default App;
