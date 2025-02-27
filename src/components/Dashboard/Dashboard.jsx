import FiltersForm from "../FiltersForm/FiltersForm";
import FunctionalDescription from "../FunctionalDescription/FunctionalDescription";
import css from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={css.dashboard}>
      <FiltersForm />
      <FunctionalDescription />
    </div>
  );
};

export default Dashboard;
