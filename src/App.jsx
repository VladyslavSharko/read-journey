import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RecommendedPage from "./pages/RecommendedPage";
import MyLibraryPage from "./pages/MyLibraryPage";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div className="appContainer">
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<RecommendedPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
          <Route path="/library" element={<MyLibraryPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
