import { Dropdown } from "../Dropdown/Dropdown";
import books from "../../assets/images/books@2x.png";
import css from "./MyLibrary.module.css";
import { DeleteBtnIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
import { selectAddBook } from "../../redux/books/selectors";
import { removeFromLibrary } from "../../redux/books/operations";

const MyLibrary = () => {
  const dispatch = useDispatch();
  const libraryBooks = useSelector(selectAddBook);

  const removeBook = (id) => {
    if (id) {
      dispatch(removeFromLibrary({ id }));
    } else {
      console.error("Book ID is undefined!");
    }
  };

  return (
    <div className={css.myLibrary}>
      <div className={css.containerTitleDropdown}>
        <h3 className={css.myLibraryTitle}>My library</h3>
        <Dropdown />
      </div>

      {libraryBooks.length === 0 ? (
        <div className={css.emptyMyLibrary}>
          <div className={css.booksImgWrapper}>
            <img className={css.booksimg} src={books} alt="Books" />
          </div>
          <p className={css.emptyLibraryText}>
            To start training, add{" "}
            <span className={css.libraryTextSpan}>some of your books</span> or
            from the recommended ones
          </p>
        </div>
      ) : (
        <ul className={css.addedBooksList}>
          {libraryBooks.map((book) => (
            <li className={css.addedBooksItem} key={book._id}>
              <img
                className={css.bookImg}
                src={book.imageUrl}
                alt={book.title}
              />
              <div className={css.containerBookInfo}>
                <div className={css.subcontainerBookInfo}>
                  <h3 className={css.bookInfoTitle}>{book.title}</h3>
                  <p className={css.bookInfoAuthor}>{book.author}</p>
                </div>
                <button
                  type="button"
                  className={css.deleteBtnContainer}
                  onClick={() => removeBook(book._id)}
                >
                  <DeleteBtnIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyLibrary;
