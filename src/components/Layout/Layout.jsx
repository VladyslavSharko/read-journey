import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const Layout = () => {
  const user = useSelector(selectUser)

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
        <button type="button">Log out</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
