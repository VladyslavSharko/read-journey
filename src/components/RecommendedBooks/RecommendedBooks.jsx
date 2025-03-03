import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { ArrowIcon } from "../Icons";
import { fetchRecommendedBooks } from "../../redux/books/operations";
import css from "./RecommendedBooks.module.css";

const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page: 1, limit: 3 }));
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(items)) return <p>No books available</p>;

  return (
    <div className={css.recommendedBooks}>
      <h3 className={css.recommendedBooksTitle}>Recommended books</h3>

      <ul className={css.recommendedBooksList}>
        {items.map((book) => (
          <li key={book.id} className={css.recommendedBooksItem}>
            <img className={css.bookImg} src={book.imageUrl} alt={book.title} />
            <h4 className={css.bookTitle}>{book.title}</h4>
            <p className={css.bookAuthor}>{book.author}</p>
          </li>
        ))}
      </ul>

      <div className={css.toHomeContainer}>
        <NavLink to="/">
          <p className={css.toHomeText}>Home</p>
        </NavLink>

        <NavLink to="/">
          <ArrowIcon className={css.toHomeIcon} />
        </NavLink>
      </div>
    </div>
  );
};

export default RecommendedBooks;

// import { NavLink } from "react-router-dom";
// import { ArrowIcon } from "../Icons";
// import css from "./RecommendedBooks.module.css";

// const RecommendedBooks = () => {
//   return (
//     <div className={css.recommendedBooks}>
//       <h3 className={css.recommendedBooksTitle}>Recommended books</h3>

//       <ul className={css.recommendedBooksList}>
//         <li className={css.recommendedBooksItem}>
//           <img className={css.bookImg} src="" alt="Book" />
//           <h4 className={css.bookTitle}>Book Title</h4>
//           <p className={css.bookAuthor}>Book Author</p>
//         </li>
//       </ul>

//       <div className={css.toHomeContainer}>
//         <NavLink to="/">
//           <p className={css.toHomeText}>Home</p>
//         </NavLink>

//         <NavLink to="/">
//           <ArrowIcon className={css.toHomeIcon} />
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default RecommendedBooks;
