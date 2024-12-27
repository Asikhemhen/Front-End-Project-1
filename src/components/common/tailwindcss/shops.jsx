import shops from "../icons/shop-hero.svg";
import shoplogo from "../icons/shop-logo.svg";
import heart from "../icons/heart.svg";
import ellipse from "../icons/ellipse.svg";
import verify from "../icons/verify.svg";

function Shops() {
  return (
    <div className="flex flex-col borde bg-white max-lg:bg-slate-100 w-96 rounded-lg overflow-hidden relative">
      <div className="h-24 w-auto rounded-lg m-1 overflow-hidden">
        <img className="w-full" src={shops} alt="product" />
      </div>
      <div className="rounded-full flex justify-center items-center overflow-hidden w-9 h-9 bg-white absolute right-4 top-3">
        <img className="hover:cursor-pointer" src={heart} alt="heart" />{" "}
      </div>
      <img className="absolute top-16 left-3" src={shoplogo} alt="heart" />
      <div className="mt-14 mx-1 relative">
        <p className="text-md font-medium">Creative Beads Store</p>
        <img src={verify} alt="verify" className="absolute top-0 left-40" />
        <p className="text-sm text-stone-400">
          "The best African fashion beads"
        </p>
        <div className="flex justify-start ">
          <p className="text-sm mr-1">
            <span className="text-md font-medium mr-1">96.3%</span>possitive
            reviews
          </p>
          <img className="mr-1" src={ellipse} alt="ellipse" />
          <p className="text-sm font-medium mr-1">636 Followers</p>
          <img className="mr-1" src={ellipse} alt="ellipse" />
          <p className="text-sm font-medium text-stone-400">5000+ sold</p>
        </div>
        <div className="flex flex-wrap gap-1 mt-1 mb-5">
          <span className="bg-stone-100 rounded-md text-sm py-1 px-4">
            Fashion
          </span>
          <span className="bg-stone-100 rounded-md text-xs py-1 px-4">
            Accessories
          </span>
          <span className="bg-stone-100 rounded-md text-xs py-1 px-4">
            Decor
          </span>
          <span className="bg-stone-100 rounded-md text-xs py-1 px-4">
            Jewelry
          </span>
          <span className="bg-stone-100 rounded-md text-xs py-1 px-4">
            Beauty
          </span>
          <span className="bg-stone-100 rounded-md text-xs py-1 px-4">
            Collections
          </span>
          <span className="bg-stone-100 rounded-md text-xs py-1 px-4">3+</span>
        </div>
        <div className="flex justify-between gap-2 mb-2 mx-1">
          <button className="border-2 text-sm font-medium border-indigo-950 rounded-lg h-11 w-44">
            Follow store
          </button>
          <button className="btn-landing text-white text-sm font-medium rounded-lg h-11 w-44">
            Visit store
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shops;
