// import React from "react";
import StarRating from "../starRating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerReviews = (props) => {
  const percentRating = (rating) => {
    if (props.totalReviews === 0) return { width: "0px" }; // Avoid division by zero
    const percent = (rating / props.totalReviews) * 128; // 128 is the total width
    return { width: `${percent.toFixed(0)}px` };
  };

  //   console.log(percentRating(props.fiveStar));

  return (
    <div className="flex flex-col mt-10">
      <h3 className="text-lg font-semibold">
        Customer reviews ({props.totalReviews})
      </h3>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-2xl font-semibold text-indigo-950">
            {props.rating}/5
          </p>
          <StarRating rating={props.rating} starWidth={4} />
          <p className="text-[10px] text-indigo-950 font-medium">
            All form verified purchases
          </p>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-[10px]">5</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-2.5" />
            <div className="w-32 h-1.5 rounded-md bg-stone-300">
              <div
                style={percentRating(props.fiveStar)}
                className={`h-1.5 rounded-md bg-yellow-500`}
              ></div>
            </div>
            <p className="text-[10px]">{props.fiveStar}</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-[10px]">4</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-2.5" />
            <div className="w-32 h-1.5 rounded-md bg-stone-300">
              <div
                style={percentRating(props.fourStar)}
                className={`h-1.5 rounded-md bg-yellow-500`}
              ></div>
            </div>
            <p className="text-[10px]">{props.fourStar}</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-[10px]">3</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-2.5" />
            <div className="w-32 h-1.5 rounded-md bg-stone-300">
              <div
                style={percentRating(props.threeStar)}
                className={`h-1.5 rounded-md bg-yellow-500`}
              ></div>
            </div>
            <p className="text-[10px]">{props.threeStar}</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-[10px]">2</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-2.5" />
            <div className="w-32 h-1.5 rounded-md bg-stone-300">
              <div
                style={percentRating(props.twoStar)}
                className={`h-1.5 rounded-md bg-yellow-500`}
              ></div>
            </div>
            <p className="text-[10px]">{props.twoStar}</p>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-[10px] pr-0.5">1</p>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 w-2.5" />
            <div className="w-32 h-1.5 rounded-md bg-stone-300">
              <div
                style={percentRating(props.oneStar)}
                className={`h-1.5 rounded-md bg-yellow-500`}
              ></div>
            </div>
            <p className="text-[10px]">{props.oneStar}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
