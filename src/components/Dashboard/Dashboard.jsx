import { useLocation } from "react-router-dom";
import FilterFormLibrary from "../FilterFormLibrary/FilterFormLibrary";
import FiltersForm from "../FiltersForm/FiltersForm";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import RecommendedBooks from "../RecommendedBooks/RecommendedBooks";
import SloganBlock from "../SloganBlock/SloganBlock";
import css from "./Dashboard.module.css";
import StartReadingForm from "../StartReadingForm/StartReadingForm";
// import EmptyProgressBlock from "../EmptyProgressBlock/EmptyProgressBlock";
import Diary from "../Diary/Diary";

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
      {location.pathname === "/reading" && (
        <>
          <StartReadingForm />
          {/* <EmptyProgressBlock /> */}
          <Diary/>
        </>
      )}
    </div>
  );
};

export default Dashboard;
