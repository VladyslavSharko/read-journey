import { NavLink } from "react-router-dom";
import { ArrowIcon } from "../Icons";
import css from "./FunctionalDescription.module.css";

const FunctionalDescription = () => {
  return (
    <div className={css.functionalDescription}>
      <h3 className={css.functionalDescriptionTitle}>Start your workout</h3>

      <ul className={css.functionalDescriptionList}>
        <li className={css.functionalDescriptionItem}>
          <div className={css.descriptionOrderNum}>1</div>
          <p className={css.descriptionText}>
            Create a personal library:{" "}
            <span className={css.descriptionTextSpan}>
              add the books you intend to read to it.
            </span>
          </p>
        </li>

        <li className={css.functionalDescriptionItem}>
          <div className={css.descriptionOrderNum}>2</div>
          <p className={css.descriptionText}>
            Create your first workout:{" "}
            <span className={css.descriptionTextSpan}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </li>
      </ul>

      <div className={css.toLibraryWrapper}>
        <NavLink to="/library">
          <p className={css.toLibraryText}>My library</p>
        </NavLink>

        <NavLink to="/library">
          <ArrowIcon className={css.toLibraryIcon} />
        </NavLink>
      </div>
    </div>
  );
};

export default FunctionalDescription;
