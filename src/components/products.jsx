import heart from "../assets/images/heart 2.svg";
import star from "../assets/images/star.svg";
import ellipse from "../assets/images/ellipse.svg";
import shops from "../assets/images/shop-icon.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedProduct } from "../state/productSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/product-details`);
  };

  return (
    <div
      className="flex flex-col gap-2 max-w-80 hover:cursor-pointer"
      onMouseDown={() => handleProductClick(props.product)}
    >
      <div className="w-auto h-56 rounded-xl overflow-hidden relative">
        <img
          className="w-full h-72 object-cover"
          src={props.image}
          alt={props.name}
        />
        <div className="rounded-full flex justify-center items-center w-10 h-10 bg-slate-200 bg-opacity-50 absolute right-3 top-2">
          <img className="hover:cursor-pointer" src={heart} alt="heart" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-1xl font-medium">{props.name}</p>
        <div className="flex justify-start gap-1 relative">
          <img className="absolute -top-1" src={star} alt="star" />
          <p className="text-sm ml-6">
            {props.rating} ({props.reviews} reviews)
          </p>
          <img src={ellipse} alt="ellipse" className="max-w-1" />
          <p className="text-sm text-stone-400">{props.sales}+ Sold</p>
        </div>
        <div className="flex justify-start">
          <p className="text-md pr-1">$</p>
          <p className="text-1xl font-semibold">
            {(props.price - props.price * props.discount * 0.01).toFixed(2)}
          </p>
          <p className="text-xs py-1 pl-2 text-amber-400">
            ${props.price} ({props.discount}% offer)
          </p>
        </div>
        <div className="flex justify-start">
          <img src={shops} alt="shop logo" />
          <p className="text-sm font-medium ml-1">{props.shop}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
