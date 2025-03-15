import star from "../../assets/images/star@2x.png";
import css from "./EmptyProgressBlock.module.css";

const EmptyProgressBlock = () => {
  return (
    <div className={css.emptyProgressBlock}>
      <h3 className={css.emptyProgressTitle}>Progress</h3>

      <p className={css.emptyProgressText}>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>

      <div className={css.containerImg}>
        <img className={css.starImg} src={star} alt="star" />
      </div>
    </div>
  );
};

export default EmptyProgressBlock;
