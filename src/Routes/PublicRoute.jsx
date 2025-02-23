import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
