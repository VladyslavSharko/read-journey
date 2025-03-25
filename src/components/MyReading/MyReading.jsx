import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { RecordIcon, StopIcon } from "../Icons";
import {
  startReadingBook,
  finishReadingBook,
} from "../../redux/books/operations";

import {selectCurrentReadingBook} from '../../redux/books/selectors'

import css from "./MyReading.module.css";

const MyReading = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const book = location.state?.book;

  const currentReadingBook = selectCurrentReadingBook(book);
  // const readingProgress = selectReadingProgress(book);

  const handleStartReading = () => {
    if (!book || (currentReadingBook && currentReadingBook._id === book._id)) return;
    dispatch(startReadingBook({ id: book._id, page: 1 }));
    console.log(currentReadingBook);
    
  };

  const handleFinishReading = () => {
    if (!book || book._id !== currentReadingBook?._id) return;
    dispatch(finishReadingBook({ id: book._id, page: book.totalPages }));
  };

  return (
    <div className={css.myReading}>
      <h3 className={css.myReadingTitle}>My reading</h3>

      {book ? (
        <div className={css.bookContainer}>
          <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
          <h4 className={css.bookTitle}>{book.title}</h4>
          <p className={css.bookAuthor}>{book.author}</p>

          <button
            className={css.startButton}
            type="button"
            onClick={handleStartReading}
          >
            <RecordIcon className={css.startIcon} />
          </button>

          <button
            className={css.stopButton}
            type="button"
            onClick={handleFinishReading}
          >
            <StopIcon className={css.startIcon} />
          </button>
        </div>
      ) : (
        <p className={css.noBook}>No book selected for reading.</p>
      )}
    </div>
  );
};

export default MyReading;

// import { useLocation } from "react-router-dom";
// import { RecordIcon, StopIcon } from "../Icons";
// import css from "./MyReading.module.css";

// const MyReading = () => {
//   const location = useLocation();
//   const book = location.state?.book;

//   return (
//     <div className={css.myReading}>
//       <h3 className={css.myReadingTitle}>My reading</h3>

//       {book ? (
//         <div className={css.bookContainer}>
//           <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
//           <h4 className={css.bookTitle}>{book.title}</h4>
//           <p className={css.bookAuthor}>{book.author}</p>
//           <button className={css.startButton} type="button">
//             <RecordIcon className={css.startIcon} />
//           </button>

//           <button className={css.stopButton} type="button">
//             <StopIcon className={css.startIcon} />
//           </button>
//         </div>
//       ) : (
//         <p className={css.noBook}>No book selected for reading.</p>
//       )}
//     </div>
//   );
// };

// export default MyReading;
