import React from "react";
import StarRating from "../starRating";
import thumbsUp from "../../assets/images/helpful.svg";
import flag from "../../assets/images/flag.svg";
import share from "../../assets/images/share.svg";

const Reviews = (props) => {
  return (
    <div className="pt-4">
      <div className="flex flex-col border-b pb-2 max-w-3xl">
        <p className="text-sm font-medium text-indigo-950">{props.userName}</p>
        <p className="text-xs text-stone-400">{props.date}</p>
        <div className="flex items-center gap-1">
          <StarRating starWidth={3} rating={props.rating} />
          <p className="text-sm font-medium text-indigo-950">{props.rating}</p>
        </div>
        <p className="text-sm text-indigo-950">{props.review}</p>
      </div>
      <div className="flex gap-2 pt-2">
        <div className="flex gap-1 items-center">
          <img src={thumbsUp} alt="thumbs up icon" className="w-5" />
          <p className="text-xs text-indigo-950">Mark review as helpful</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={share} alt="share icon" className="w-5" />
          <p className="text-xs text-indigo-950">Share</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={flag} alt="flag icon" className="w-5" />
          <p className="text-xs text-red-600">Report</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
