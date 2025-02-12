// import heart from "../../assets/images/heart.svg";
import ellipse from "../../assets/images/ellipse.svg";
import verify from "../../assets/images/verify.svg";
import location from "../../assets/images/location.svg";
import chat from "../../assets/images/message 2.svg";

const MeetTheShop = (props) => {
  return (
    <div className="flex flex-col sm:rounded-2xl bg-indigo-50 max-sm:">
      <h3 className="text-lg sm:text-2xl font-semibold p-3">Meet the shop</h3>
      <div className="flex flex-col px-4 mx-3 mb-3 bg-white rounded-lg overflow-hidden relative">
        <img
          className="absolute top-4 left-5 w-16 sm:w-28"
          src={props.logo}
          alt="logo"
        />
        <div className="mt-20 sm:mt-32 mx-1 relative">
          <div className="flex gap-1 items-center">
            <p className="text-md font-medium">{props.name}</p>
            <img src={verify} alt="verify" className="" />
          </div>
          <p className="text-sm text-stone-400">"{props.caption}"</p>
          <div className="flex justify-start ">
            <p className="text-[10px] sm:text-sm mr-1">
              <span className="text-[10px] sm:text-sm font-medium mr-1">
                {props.reviews}%
              </span>
              possitive reviews
            </p>
            <img className="mr-1" src={ellipse} alt="ellipse" />
            <p className="text-[10px] sm:text-sm font-medium mr-1">
              {props.followers} Followers
            </p>
            <img className="mr-1" src={ellipse} alt="ellipse" />
            <p className="text-[10px] sm:text-sm text-stone-400">
              {props.sales}+ sold
            </p>
          </div>
          <div className="flex flex-wrap gap-1 pt-1 pb-2">
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              Art
            </button>
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              Accessories
            </button>
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              Decor
            </button>
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              Jewelry
            </button>
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              Beauty
            </button>
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              Collections
            </button>
            <button className="bg-stone-100 rounded-md h-9 font-medium text-xs px-4">
              3+
            </button>
          </div>
          <div className="flex gap-1 pb-2">
            <div className="flex items-center">
              <img src={location} alt="location" className="w-4 sm:w-5" />
              <p className="text-stone-400 text-[11px] sm:text-sm">
                Store location:{" "}
                <span className="text-indigo-900 font-medium">
                  Abuja, Nigeria
                </span>
              </p>
            </div>
            <div className="flex items-center">
              <img src={chat} alt="location" className="w-4 sm:w-5" />
              <p className="text-stone-400 text-[11px] sm:text-sm">
                Chat reply:{" "}
                <span className="text-indigo-900 font-medium">98%</span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 mb-5 mx-1">
            <button className="border text-sm font-medium border-indigo-950 rounded-lg h-12 py-1 sm:h-9 w-32">
              Follow store
            </button>
            <button className="border text-sm font-medium bg-indigo-50 border-indigo-950 rounded-lg h-12 py-1 sm:h-9 w-32">
              Message store
            </button>
            <button className="bg-indigo-900 border border-indigo-900 text-white text-sm font-medium rounded-lg h-12 py-1 sm:h-9 w-32">
              Visit store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheShop;
