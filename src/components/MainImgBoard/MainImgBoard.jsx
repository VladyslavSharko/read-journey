import iphone from "../../assets/images/iphone.png";
import css from "./MainImgBoard.module.css";

const MainImgBoard = () => {
  return (
    <div className={css.mainImgBoard}>
      <img className={css.iphoneImg} src={iphone} alt="iphone" />
    </div>
  );
};

export default MainImgBoard;
