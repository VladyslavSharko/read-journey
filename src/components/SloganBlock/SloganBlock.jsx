import books from "../../assets/images/books@2x.png";
import css from "./SloganBlock.module.css";

const SloganBlock = () => {
  return (
    <div className={css.sloganBlock}>
      <img className={css.booksImg} src={books} alt="Books" />
      <p className={css.sloganText}>
        {'"'}Books are <span className={css.sloganTextSpan}>windows</span> to
        the world, and reading is a journey into the unknown.{'"'}
      </p>
    </div>
  );
};

export default SloganBlock;
