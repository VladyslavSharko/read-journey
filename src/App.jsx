import { Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RecommendedPage from "./pages/RecommendedPage";
import MyLibraryPage from "./pages/MyLibraryPage";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserThunk } from "./redux/auth/operations";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import ReadingPage from "./pages/ReadingPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return (
    <div className="appContainer">
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<RecommendedPage />} />
            <Route path="/recommended" element={<RecommendedPage />} />
            <Route path="/library" element={<MyLibraryPage />} />
            <Route path="/reading" element={<ReadingPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

// ---------------------------
