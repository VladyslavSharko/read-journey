import { PaginationLeftIcon, PaginationRightIcon } from "../Icons";
import css from "./Recommended.module.css";

const Recommended = () => {
  return (
    <div className={css.recommended}>
      <div className={css.titlePaginationWrapper}>
        <h3 className={css.recommendedTitle}>Recommended</h3>

        <div className={css.paginationButtonsWrapper}>
          <button className={css.paginationButton} type="button">
            <PaginationLeftIcon className={css.paginationIcon} />
          </button>

          <button className={css.paginationButton} type="button">
            <PaginationRightIcon className={css.paginationIcon} />
          </button>
        </div>
      </div>

      <ul className={css.recommendedList}>
        <li className={css.recommendedItem}>
          <img className={css.recommendedItemImg} src="" alt="book" />
          <h4 className={css.bookTitle}>Book Title</h4>
          <p className={css.bookAuthor}>Author Name</p>
        </li>
      </ul>
    </div>
  );
};

export default Recommended;
