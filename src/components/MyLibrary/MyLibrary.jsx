import { Dropdown } from "../Dropdown/Dropdown";
import books from "../../assets/images/books@2x.png";
import css from "./MyLibrary.module.css";
// import { DeleteBtnIcon } from "../Icons";

const MyLibrary = () => {
  return (
    <div className={css.myLibrary}>
      <div className={css.containerTitleDropdown}>
        <h3 className={css.myLibraryTitle}>My library</h3>
        <Dropdown />
      </div>

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

      {/* <ul className={css.addedBooksList}>
        <li className={css.addedBooksItem}>
          <img className={css.bookImg} src="" alt="Book" />
          <div className={css.containerBookInfo}>
            <div className={css.subcontainerBookInfo}>
              <h3 className={css.bookInfoTitle}>Book Title</h3>
              <p className={css.bookInfoAuthor}>Book Author</p>
            </div>
            <button type="button" className={css.deleteBtnContainer}>
              <DeleteBtnIcon />
            </button>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default MyLibrary;
