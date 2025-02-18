import React, { useRef, useState } from "react";
import ellipse from "../assets/images/ellipse.svg";
import { useSelector } from "react-redux";
import StarRating from "../components/starRating";
import chat from "../assets/images/chat.svg";
import heart from "../assets/images/heart 2.svg";
import arrowUpDown from "../assets/images/arrowUpDown.svg";
import flag from "../assets/images/flag.svg";
import CustomerReviews from "../components/productPage/customerReviews";
import data from "../data/data.json";
import Reviews from "../components/productPage/reviews";
import Pagination from "../components/pagination";
import ProductDescription from "../components/productPage/productDescription";
import MeetTheShop from "../components/productPage/meetTheShop";
import Product from "../components/products";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  addItem,
  decrementCount,
  removeItem,
} from "../state/cartCountSlice";
import { clearSelectedProduct } from "../state/productSlice";
import CartUpdateButtons from "../components/cartUpdateButtons";

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);

  const handleClickCart = (item) => {
    dispatch(incrementCount());
    dispatch(addItem(item));
  };

  const scrollHorizontalRef = useRef(null);
  const reviewRef = useRef(null);
  const descriptionRef = useRef(null);
  const shopRef = useRef(null);
  const productsRef = useRef(null);

  const [scrollTo, setScrollTo] = useState("description");

  const scrollToSection = (scrollTo) => {
    setScrollTo(scrollTo);
    if (scrollTo === "reviews") {
      reviewRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "description") {
      descriptionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "shop") {
      shopRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "product") {
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  //Reviews
  const totalReviews = Object.keys(data.reviews).length;
  const totalRatings = data.reviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const averageRatings = (totalRatings / totalReviews).toFixed(1);

  const fiveStar = data.reviews.filter((review) => review.rating === 5);
  const fourStar = data.reviews.filter((review) => review.rating === 4);
  const threeStar = data.reviews.filter((review) => review.rating === 3);
  const twoStar = data.reviews.filter((review) => review.rating === 2);
  const oneStar = data.reviews.filter((review) => review.rating === 1);

  const handleWheel = (event) => {
    // event.preventDefault();
    scrollHorizontalRef.current.scrollLeft += event.deltaY;
  };

  //filter Search by Ratings
  const [reviewPage, setReviewPage] = useState("all");

  const handleClickReview = (button) => {
    setReviewPage(button);
  };

  let filteredReviews = data.reviews;

  if (reviewPage === "all") {
    filteredReviews = data.reviews;
  } else if (reviewPage === "5 stars") {
    filteredReviews = fiveStar;
  } else if (reviewPage === "4 stars") {
    filteredReviews = fourStar;
  } else if (reviewPage === "3 stars") {
    filteredReviews = threeStar;
  } else if (reviewPage === "2 stars") {
    filteredReviews = twoStar;
  } else if (reviewPage === "1 star") {
    filteredReviews = oneStar;
  }

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOFFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReviews.slice(indexOFFirstItem, indexOfLastItem);

  //Count occurrences of each product in the cart
  const cartItems = useSelector((state) => state.cartItems.items);

  const itemCounts = cartItems.reduce((allItems, eachItems) => {
    allItems[eachItems.id] = (allItems[eachItems.id] || 0) + 1;
    return allItems;
  }, {});

  const handleIncrement = (product) => {
    dispatch(addItem(product));
    dispatch(incrementCount());
  };

  const handleDecrement = (product) => {
    const allItems = [...cartItems];
    const indexToRemove = allItems.findIndex((item) => item.id === product.id);

    console.log("Before:", allItems);
    console.log(indexToRemove);

    if (indexToRemove !== -1) {
      allItems.splice(indexToRemove, 1);
    }

    dispatch(removeItem(allItems));
    dispatch(decrementCount());
    if (itemCounts === 0) {
      console.log("clear", dispatch(clearSelectedProduct()));
    }
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-7xl mx-auto py-3 px-5 mt-5">
        <h3 className="text-md pb-3">Home / Artworks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-8">
          <div className="sm:col-span-6 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden">
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-full sm:h-[var(--custom-height)]"
              />
            </div>
            <div
              className="w-auto h-fit flex justify-between gap-2 overflow-x-auto scrollbar-hide"
              onWheel={handleWheel}
              ref={scrollHorizontalRef}
            >
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
              <img
                src={require(`../assets/images${product.image}`)}
                alt={product.name}
                className="w-24 h-24 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-4 flex flex-col">
            {" "}
            <h3 className="max-sm:text-2xl text-4xl font-semibold text-indigo-950">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 py-2">
              <StarRating rating={averageRatings} />
              <p className="text-sm max-sm:text-xs text-indigo-950 py-2">
                {averageRatings} ({totalReviews + " reviews"})
              </p>
              <img src={ellipse} alt="ellipse" />
              <p className="text-sm max-sm:text-xs text-stone-400">
                {product.sales}+ Sold
              </p>
            </div>
            <p className="text-3xl text-indigo-950 font-semibold">
              <span className="text-xl">$ </span>
              {(
                product.price -
                product.price * product.discount * 0.01
              ).toFixed(2)}
            </p>
            <p className="text-sm text-yellow-500">
              <span className="text-xs">$</span>
              {product.price} ({product.discount}% offer)
            </p>
            <p className="text-sm font-semibold text-indigo-950 pt-3 pb-1">
              Select size
            </p>
            <div className="flex justify-start text-sm gap-3 flex-wrap">
              <div className="flex items-center max-w-34 h-11 px-4 font-medium bg-stone-100 rounded-md">
                24"x38"
              </div>
              <div className="flex items-center max-w-34 h-11 px-4 font-medium bg-stone-100 rounded-md">
                30"x40"
              </div>
              <div className="flex items-center max-w-34 h-11 px-4 font-medium bg-stone-100 rounded-md">
                36"x48"
              </div>
            </div>
            <p className="text-sm font-semibold text-indigo-950 pt-3 pb-1">
              Select color
            </p>
            <div className="flex justify-start gap-2">
              <div className="w-8 h-8 px-3 bg-red-500 rounded-md"></div>
              <div className="w-8 h-8 px-3 bg-yellow-600 rounded-md"></div>
              <div className="w-8 h-8 px-3 bg-pink-300 rounded-md"></div>
              <div className="w-8 h-8 px-3 bg-yellow-400 rounded-md"></div>
              <div className="w-8 h-8 px-3 bg-blue-600 rounded-md"></div>
            </div>
            {!itemCounts[product.id] ? (
              <button
                className="border border-indigo-800 bg-indigo-50 font-semibold text-sm rounded-md w-full h-12 mt-5"
                onClick={() => handleClickCart(product)}
              >
                Add to cart
              </button>
            ) : (
              <CartUpdateButtons
                height={10}
                width={10}
                pt={4}
                text={true}
                btnTextSize={16}
                inputTextSize={14}
                itemCounts={itemCounts[product.id]}
                handleIncrement={() => handleIncrement(product)}
                handleDecrement={() => handleDecrement(product)}
              />
            )}
            <button className="border bg-indigo-800 border-indigo-800 text-white font-semibold text-sm rounded-md w-full h-12 mt-3">
              Buy now
            </button>
            <div className="flex justify-center items-center gap-4 pt-2">
              <div className="flex gap-1">
                <img src={chat} alt="chat icon" />
                <p className="text-sm font-semibold">Chat seller</p>
              </div>
              <p className="text-stone-400 text-md pb-2">|</p>
              <div className="flex gap-1">
                <img src={heart} alt="love icon" />
                <p className="text-sm font-semibold">Add to wish list</p>
              </div>
            </div>
            <div className="flex gap-2 items-center pt-3">
              <img src={arrowUpDown} alt="arrow icon" />
              <p className="text-xs font-semibold">
                Delivery and return policies
              </p>
            </div>
            <div className="flex gap-2 items-center pt-3">
              <img src={flag} alt="arrow icon" />
              <p className="text-xs font-semibold">
                Report this product to GiriToday
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-2 flex-wrap mt-16">
            <button
              className={`${
                scrollTo === "description"
                  ? "bg-indigo-950 text-white"
                  : "bg-indigo-50 text-indigo-950"
              } font-medium border border-indigo-950 px-3 py-1 text-sm h-11 rounded-md`}
              onClick={() => scrollToSection("description")}
            >
              Description and specifications
            </button>
            <button
              className={`${
                scrollTo === "reviews"
                  ? "bg-indigo-950 text-white"
                  : "bg-indigo-50 text-indigo-950"
              } font-medium border border-indigo-950 px-3 py-1 text-sm h-11 rounded-md`}
              onClick={() => scrollToSection("reviews")}
            >
              Customer reviews
            </button>
            <button
              className={`${
                scrollTo === "shop"
                  ? "bg-indigo-950 text-white"
                  : "bg-indigo-50 text-indigo-950"
              } font-medium border border-indigo-950 px-3 py-1 text-sm h-11 rounded-md`}
              onClick={() => scrollToSection("shop")}
            >
              Meet the shop
            </button>
            <button
              className={`${
                scrollTo === "product"
                  ? "bg-indigo-950 text-white"
                  : "bg-indigo-50 text-indigo-950"
              } font-medium border border-indigo-950 px-3 py-1 text-sm h-11 rounded-md`}
              onClick={() => scrollToSection("product")}
            >
              Products you may also like
            </button>
          </div>
          <div ref={descriptionRef}>
            <ProductDescription />
          </div>
          <div ref={reviewRef}>
            <CustomerReviews
              totalReviews={totalReviews}
              rating={averageRatings}
              fiveStar={fiveStar.length}
              fourStar={fourStar.length}
              threeStar={threeStar.length}
              twoStar={twoStar.length}
              oneStar={oneStar.length}
              handleClickReview={handleClickReview}
            />
            <div className="flex gap-2 flex-wrap mt-6">
              <button
                className={`${
                  reviewPage === "all"
                    ? "bg-indigo-950 text-white"
                    : "bg-indigo-50 text-indigo-950"
                } border border-indigo-950 rounded-md text-sm font-medium h-11 px-3`}
                onClick={() => handleClickReview("all")}
              >
                All reviews ({totalReviews})
              </button>
              <button
                className={`${
                  reviewPage === "5 stars"
                    ? "bg-indigo-950 text-white"
                    : "bg-indigo-50 text-indigo-950"
                } border border-indigo-950 rounded-md text-sm font-medium h-11 px-3`}
                onClick={() => handleClickReview("5 stars")}
              >
                5 Stars ({fiveStar.length})
              </button>
              <button
                className={`${
                  reviewPage === "4 stars"
                    ? "bg-indigo-950 text-white"
                    : "bg-indigo-50 text-indigo-950"
                } border border-indigo-950 rounded-md text-sm font-medium h-11 px-3`}
                onClick={() => handleClickReview("4 stars")}
              >
                4 Stars ({fourStar.length})
              </button>
              <button
                className={`${
                  reviewPage === "3 stars"
                    ? "bg-indigo-950 text-white"
                    : "bg-indigo-50 text-indigo-950"
                } border border-indigo-950 rounded-md text-sm font-medium h-11 px-3`}
                onClick={() => handleClickReview("3 stars")}
              >
                3 Stars ({threeStar.length})
              </button>
              <button
                className={`${
                  reviewPage === "2 stars"
                    ? "bg-indigo-950 text-white"
                    : "bg-indigo-50 text-indigo-950"
                } border border-indigo-950 rounded-md text-sm font-medium h-11 px-3`}
                onClick={() => handleClickReview("2 stars")}
              >
                2 Stars ({twoStar.length})
              </button>
              <button
                className={`${
                  reviewPage === "1 star"
                    ? "bg-indigo-950 text-white"
                    : "bg-indigo-50 text-indigo-950"
                } border border-indigo-950 rounded-md text-sm font-medium h-11 px-3`}
                onClick={() => handleClickReview("1 star")}
              >
                1 Star ({oneStar.length})
              </button>
            </div>
          </div>
          <div>
            {currentItems.map((review, index) => (
              <Reviews
                key={index}
                rating={review.rating}
                review={review.review}
                userName={review.first_name}
                date={review.date}
              />
            ))}
          </div>
          <Pagination
            totalItems={filteredReviews.length}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            sectionRef={reviewRef}
            position={"review"}
          />
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 max-w-7xl sm:mx-auto sm:px-5"
        ref={shopRef}
      >
        <div className="col-span-1">
          {data.shops.map(
            (store, index) =>
              index === 0 && (
                <MeetTheShop
                  key={index}
                  name={store.name}
                  logo={require(`../assets/images${store.logo}`)}
                  caption={store.caption}
                  reviews={store.reviews}
                  followers={store.followers}
                  sales={store.sales}
                />
              )
          )}
        </div>
        <div className="col-span-1 flex justify-between gap-3 mx-auto px-5">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold pb-4">
              Sellers handpicked featured products
            </h3>
            <div className="flex gap-3">
              <Product
                key={product.id}
                name={product.name}
                image={require(`../assets/images${product.image}`)}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                sales={product.sales}
                shop={product.shop}
                discount={product.discount}
                product={product}
              />
              <Product
                key={product.id}
                name={product.name}
                image={require(`../assets/images${product.image}`)}
                rating={product.rating}
                reviews={product.reviews}
                price={product.price}
                sales={product.sales}
                shop={product.shop}
                discount={product.discount}
                product={product}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col max-w-7xl mx-auto px-5 my-16 gap-3"
        ref={productsRef}
      >
        <h3 className="text-xl font-semibold pb-4">
          Products you may also like
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Product
            key={product.id}
            name={product.name}
            image={require(`../assets/images${product.image}`)}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            sales={product.sales}
            shop={product.shop}
            discount={product.discount}
            product={product}
          />
          <Product
            key={product.id}
            name={product.name}
            image={require(`../assets/images${product.image}`)}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            sales={product.sales}
            shop={product.shop}
            discount={product.discount}
            product={product}
          />
          <Product
            key={product.id}
            name={product.name}
            image={require(`../assets/images${product.image}`)}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            sales={product.sales}
            shop={product.shop}
            discount={product.discount}
            product={product}
          />
          <Product
            key={product.id}
            name={product.name}
            image={require(`../assets/images${product.image}`)}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            sales={product.sales}
            shop={product.shop}
            discount={product.discount}
            product={product}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
