import FiltersForm from "../FiltersForm/FiltersForm";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import SloganBlock from "../SloganBlock/SloganBlock";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <FiltersForm />
      <FunctionalDescription />
      <SloganBlock/>
    </div>
  );
};

export default Dashboard;
