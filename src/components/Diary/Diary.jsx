


import { useState } from "react";
import {
  DeleteBtnIcon,
  HourglassIcon,
  PieChartIcon,
  ProgressIcon,
} from "../Icons";
import css from "./Diary.module.css";

const Diary = () => {
  const [activeTab, setActiveTab] = useState("diary");

  return (
    <div className={css.diary}>
      <div className={css.containerTitle}>
        <h3 className={css.title}>
          {activeTab === "diary" ? "Diary" : "Statistics"}
        </h3>

        <div className={css.containerDiaryButtons}>
          <button
            className={css.diaryButton}
            onClick={() => setActiveTab("diary")}
          >
            <HourglassIcon
              className={`${css.diaryIcon} ${
                activeTab === "diary" ? css.diaryIconActive : ""
              }`}
            />
          </button>

          <button
            className={css.diaryButton}
            onClick={() => setActiveTab("statistics")}
          >
            <PieChartIcon
              className={`${css.diaryIcon} ${
                activeTab === "statistics" ? css.diaryIconActive : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div className={css.diaryContentContainer}>
        {activeTab === "diary" ? (
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
        ) : (
          <div>
            <p className={css.diaryParagraph}>
              Each page, each chapter is a new round of knowledge, a new step
              towards understanding. By rewriting statistics, we create our own
              reading history.
            </p>
            <div className={css.statisticProgressContent}>
              <div className={css.statisticProgressItem}>
                <p className={css.statisticProgressPersent}>100%</p>
              </div>

              <div className={css.readingProgressContainer}>
                <div className={css.marker}></div>

                <div className={css.readingProgress}>
                  <p className={css.progressPersentStat}>0%</p>
                  <p className={css.progressPages}>0 pages read</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Diary;
