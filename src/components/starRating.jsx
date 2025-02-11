import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt, fa0 } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating, starWidth = 4, maxStars = 5 }) => {
  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => {
        if (index + 1 <= rating) {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`text-yellow-500 w-${starWidth}`}
            />
          );
        } else if (
          index + 1 > rating &&
          index + 1 - rating <= 0.5 &&
          index + 1 - rating < 1
        ) {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarHalfAlt}
              className={`text-yellow-500 w-${starWidth}`}
            />
          );
        } else {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={`text-gray-300 w-${starWidth}`}
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
