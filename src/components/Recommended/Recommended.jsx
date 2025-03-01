import { useEffect, useState } from "react";
import { PaginationLeftIcon, PaginationRightIcon } from "../Icons";
import css from "./Recommended.module.css";
import { fetchRecommendedBooks } from "../../redux/books/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBooks,
  selectError,
  selectIsLoading,
} from "../../redux/books/selectors";

const Recommended = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(() => {
    if (window.innerWidth >= 1280) return 10;
    if (window.innerWidth >= 768) return 8;
    return 2;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setLimit(10);
      else if (window.innerWidth >= 768) setLimit(8);
      else setLimit(2);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page, limit }));
  }, [dispatch, page, limit]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const isNextDisabled = books.length < limit;

  return (
    <div className={css.recommended}>
      <div className={css.titlePaginationWrapper}>
        <h3 className={css.recommendedTitle}>Recommended</h3>

        <div className={css.paginationButtonsWrapper}>
          <button
            className={css.paginationButton}
            type="button"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            <PaginationLeftIcon className={css.paginationIcon} />
          </button>

          <button
            className={css.paginationButton}
            type="button"
            onClick={handleNextPage}
            disabled={isNextDisabled}
          >
            <PaginationRightIcon className={css.paginationIcon} />
          </button>
        </div>
      </div>

      <ul className={css.recommendedList}>
        {books.length > 0 &&
          books.map((book) => (
            <li className={css.recommendedItem} key={book.id}>
              <img
                className={css.recommendedBookImg}
                src={book.imageUrl}
                alt="book"
              />
              <h4 className={css.bookTitle}>{book.title}</h4>
              <p className={css.bookAuthor}>{book.author}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Recommended;
