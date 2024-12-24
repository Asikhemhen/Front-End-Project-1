import arrowDown from "./icons/arrowDown.svg";
import { Link } from "react-router-dom";
const Categories = ({ classNameButton, buttonLabel, classNameArrow }) => {
  return (
    <button className={classNameButton} to={"/" + classNameButton}>
      {buttonLabel} <img src={arrowDown} className={classNameArrow} />
    </button>
  );
};

export default Categories;
