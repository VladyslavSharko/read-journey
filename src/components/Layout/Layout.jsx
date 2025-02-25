import { NavLink, Outlet, useNavigate } from "react-router-dom";
import css from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk, refreshUserThunk } from "../../redux/auth/operations";
import { useEffect, useState } from "react";
import { BurgerMenuIcon, CloseBtnIcon } from "../Icons";

const Layout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <div className={css.layout}>
      <header className={css.header}>
        <NavLink className={css.mainLogo} to="/">
          <svg className={css.mainLogoIcon}>
            <use href="/icons.svg#mainLogo" />
          </svg>
          <p className={css.mainLogoText}>read journey</p>
        </NavLink>
        <nav className={css.nav}>
          <ul className={css.navList}>
            <li className={css.navListItem}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.active}` : css.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/library"
                className={({ isActive }) =>
                  isActive ? `${css.navLink} ${css.active}` : css.navLink
                }
              >
                Library
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={css.containerUserMenu}>
          <div className={css.containerUserInfo}>
            <div className={css.userAvatar}>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <p className={css.userName}>{user?.name || "User Name"}</p>
          </div>

          <button
            className={css.burgerMenu}
            type="button"
            onClick={() => setIsModalOpen(true)}
          >
            <BurgerMenuIcon className={css.burgerMenuIcon} />
          </button>

          <button
            className={css.logoutButton}
            type="button"
            onClick={async () => {
              await dispatch(logoutThunk()).unwrap();
              navigate("/login");
            }}
          >
            Log out
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {isModalOpen && (
        <div className={css.backdrop} onClick={() => setIsModalOpen(false)}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={css.closeButtun}
              type="button"
              onClick={() => setIsModalOpen(false)}
            >
              <CloseBtnIcon className={css.closeBtnIcon} />
            </button>

            <ul className={css.modalNavList}>
              <li className={css.modalNavItem}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${css.modalNavLink} ${css.activeModal}`
                      : css.modalNavLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className={css.modalNavItem}>
                <NavLink
                  to="/library"
                  className={({ isActive }) =>
                    isActive
                      ? `${css.modalNavLink} ${css.activeModal}`
                      : css.modalNavLink
                  }
                >
                  Library
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
