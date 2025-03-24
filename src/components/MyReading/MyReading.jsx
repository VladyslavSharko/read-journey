import { useLocation } from "react-router-dom";
import { RecordIcon } from "../Icons";
import css from "./MyReading.module.css";

const MyReading = () => {
  const location = useLocation();
  const book = location.state?.book;

  return (
    <div className={css.myReading}>
      <h3 className={css.myReadingTitle}>My reading</h3>

      {book ? (
        <div className={css.bookContainer}>
          <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
          <h4 className={css.bookTitle}>{book.title}</h4>
          <p className={css.bookAuthor}>{book.author}</p>
          <button className={css.startButton} type="button">
            <RecordIcon className={css.startIcon} />
          </button>
        </div>
      ) : (
        <p className={css.noBook}>No book selected for reading.</p>
      )}
    </div>
  );
};

export default MyReading;
