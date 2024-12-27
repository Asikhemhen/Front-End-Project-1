import heart from "../icons/heart 2.svg";
import product from "../icons/product.svg";
import star from "../icons/star.svg";
import ellipse from "../icons/ellipse.svg";
import shop from "..//icons/shop-icon.svg";
import { NavLink } from "react-router-dom";

function Product() {
  return (
    <div className="flex flex-col gap-2 max-w-80">
      <div className="w-auto h-56 rounded-xl overflow-hidden relative">
        <img className="w-full h-72 object-cover" src={product} alt="product" />
        <div className="rounded-full flex justify-center items-center w-10 h-10 bg-slate-200 bg-opacity-50 absolute right-3 top-2">
          <img className="hover:cursor-pointer" src={heart} alt="heart" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-1xl font-medium">
          Pattern Africa Exquisite Collage Art on Stretched Canvas
        </p>
        <div className="flex justify-start gap-1 relative">
          <img className="absolute -top-1" src={star} alt="star" />
          <p className="text-sm ml-6">4.9 (430 reviews)</p>
          <img src={ellipse} alt="ellipse" />
          <p className="text-sm text-stone-400">500+ Sold</p>
        </div>
        <div className="flex justify-start">
          <p className="text-md pr-1">$</p>
          <p className="text-1xl font-semibold">219.95</p>
          <p className="text-xs py-1 pl-2 text-amber-400">
            $280.95 (30% offer)
          </p>
        </div>
        <div className="flex justify-start">
          <img src={shop} alt="shop logo" />
          <p className="text-sm font-medium ml-1">Tola Artz & Designs</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
