import { useLocation } from "react-router-dom";
import { RecordIcon } from "../Icons";
import css from "./MyReading.module.css";
import { useDispatch } from "react-redux";
import { startReadingBook } from "../../redux/books/operations";

const MyReading = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const book = location.state?.book;

  const handleStartReading = () => {
    if (book) {
      console.log("Starting reading:", { id: book._id, page: 1 });
      dispatch(startReadingBook({ id: book._id, page: 1 }));
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
          <button
            className={css.startButton}
            type="button"
            onClick={handleStartReading}
          >
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

// import { useLocation } from "react-router-dom";
// import { RecordIcon } from "../Icons";
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
//         </div>
//       ) : (
//         <p className={css.noBook}>No book selected for reading.</p>
//       )}
//     </div>
//   );
// };

// export default MyReading;
