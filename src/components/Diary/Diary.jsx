import {
  DeleteBtnIcon,
  HourglassIcon,
  PieChartIcon,
  ProgressIcon,
} from "../Icons";
import css from "./Diary.module.css";

const Diary = () => {
  return (
    <div className={css.diary}>
      <div className={css.containerTitle}>
        <h3 className={css.diaryTitle}>Diary</h3>

        <div className={css.containerDiaryButtons}>
          <button className={css.diaryButton}>
            <HourglassIcon className={css.diaryIcon} />
          </button>
          <button className={css.diaryButton}>
            <PieChartIcon className={css.diaryIcon} />
          </button>
        </div>
      </div>

      <div className={css.diaryContentContainer}>
        <div className={css.diaryContent}>
          <div className={css.containerProgressInfo}>
            <div className={css.progressItem}>
              <p className={css.progressDate}>21.10.2023</p>
              <p className={css.progressPersent}>7.6%</p>
              <p className={css.progressMinutes}>29 minutes</p>
            </div>

            <div className={css.pagesInfo}>
              <p className={css.pagesAmount}>42 pages</p>

              <div className={css.pagesProgress}>
                <ProgressIcon className={css.progressIcon} />
                
                <button className={css.deleteButton} type="button">
                  <DeleteBtnIcon className={css.deleteIconProgress} />
                </button>
              </div>

              <div className={css.pagesPerHour}>45 pages per hour</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary;
