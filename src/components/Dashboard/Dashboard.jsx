import { useLocation } from "react-router-dom";
import FilterFormLibrary from "../FilterFormLibrary/FilterFormLibrary";
import FiltersForm from "../FiltersForm/FiltersForm";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks";
import SloganBlock from "../SloganBlock/SloganBlock";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className={css.dashboard}>
      {location.pathname === "/" && (
        <>
          <FiltersForm />
          <FunctionalDescription />
          <SloganBlock />
        </>
      )}
      {location.pathname === "/library" && (
        <>
          <FilterFormLibrary />
          <RecommendedBooks />
        </>
      )}
    </div>
  );
};

export default Dashboard;
