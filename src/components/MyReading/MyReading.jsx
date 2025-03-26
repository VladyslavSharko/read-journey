import { useDispatch } from "react-redux";
import {
  startReadingBook,
  finishReadingBook,
} from "../../redux/books/operations";
import { RecordIcon, StopIcon } from "../Icons";
import css from "./MyReading.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MyReading = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const book = location.state?.book;

  const [isReading, setIsReading] = useState(false);

  const handleStartReading = () => {
    setIsReading(true);
    console.log("Book:", book);

    if (book) {
      dispatch(startReadingBook({ id: book._id, page: 1 }));
    }
  };

  const handleFinishReading = () => {
    setIsReading(false);
    console.log("Book:", book);

    if (book) {
      dispatch(finishReadingBook({ id: book._id, page: 1 }));
    }
  };

  return (
    <div className={css.myReading}>
      <h3 className={css.myReadingTitle}>My reading</h3>

      {book ? (
        <div className={css.bookContainer}>
          <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
          <h4 className={css.bookTitle}>{book.title}</h4>
          <p className={css.bookAuthor}>{book.author}</p>

          {isReading ? (
            <button
              className={css.stopButton}
              type="button"
              onClick={handleFinishReading}
            >
              <StopIcon className={css.startIcon} />
            </button>
          ) : (
            <button
              className={css.startButton}
              type="button"
              onClick={handleStartReading}
            >
              <RecordIcon className={css.startIcon} />
            </button>
          )}
        </div>
      ) : (
        <p className={css.noBook}>No book selected for reading.</p>
      )}
    </div>
  );
};

export default MyReading;
