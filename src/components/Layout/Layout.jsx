import { NavLink, Outlet, useNavigate } from "react-router-dom";
import css from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk, refreshUserThunk } from "../../redux/auth/operations";
import { useEffect } from "react";

const Layout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div className={css.layout}>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/library">Library</NavLink>
            </li>
          </ul>
        </nav>
        <p>Hello, {user?.name || "Guest"}</p>
        <button
          type="button"
          onClick={async () => {
            await dispatch(logoutThunk()).unwrap();
            navigate("/login");
          }}
        >
          Log out
        </button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
