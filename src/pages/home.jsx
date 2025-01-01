import { React, useRef, useState, useEffect } from "react";
import hero from "../assets/images/hero.svg";
import search from "../assets/images/search.svg";
import arrowDownWhite from "../assets/images/arrowDownWhite.svg";
import frame from "../assets/images/frame.svg";
import data from "../data/data.json";
import { NavLink } from "react-router-dom";
import explore from "../assets/images/whygiri.svg";
import Categories from "../components/categoryDropDown";
import PopularShops from "../components/popularShops";
import PopularProducts from "../components/popularProducts";
import RecommendedProducts from "../components/recommendedProducts";
import OutsideClicks from "../components/OutsideClicks";

const Home = () => {
  let [dropDown, setDropDown] = useState(false);
  let [dropDownSelect, setDropDownSelect] = useState("All Categories");

  let dropDownRef = useRef(null);
  let scrollHorizontalRef = useRef(null);

  // Category Drop Down Button
  const toggleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };

  const handleSelectCategory = (event) => {
    setDropDownSelect(event);
    setDropDown(false);
  };

  OutsideClicks(dropDownRef, () => setDropDown(false));

  // Category Horizontal Scroll
  const handleWheel = (event) => {
    event.preventDefault();
    scrollHorizontalRef.current.scrollLeft += event.deltaY;
  };
  return (
    <div>
      <section className="bg-indigo-100 flex max-lg:block">
        <div className="flex basis-full max-w-2xl mx-auto py-3 px-5 max-lg:py-12 max-lg:max-w-5xl">
          <div className="bg-indigo-100 flex flex-col justify-center basis-full space-y-5">
            <div className="flex justify-end border border-white rounded-3xl h-10 max-w-80 relative">
              <img src={frame} className="h-6 self-center absolute left-2" />
              <h6 className="text-sm text-center p-2 pr-10">
                Trusted by over 2M+ buyers!
              </h6>
            </div>
            <h1 className="hero-text text-indigo-950 text-4xl font-extrabold">
              Discover Your Next Favourite Product From Africa!
            </h1>
            <div className="flex border rounded-xl bg-white h-16 border-white relative">
              <div className="m-1" ref={dropDownRef}>
                <button
                  className="min-w-40 h-full border rounded-l-xl bg-indigo-900 text-white text-sm font-medium mr-0"
                  onClick={toggleDropDown}
                >
                  {dropDownSelect}{" "}
                  <img
                    src={arrowDownWhite}
                    className="inline"
                    alt="arrow-down"
                  />
                </button>
                <Categories
                  display={dropDown ? "flex" : "hidden"}
                  handleClickCategoryItem={handleSelectCategory}
                  top="top-16"
                />
              </div>
              <input
                className="w-full rounded-r-xl bg-stone-50 text-sm text-stone-900 m-1 ml-0 pl-16 pr-8"
                type="text"
                placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
              />
              <img src={search} className="h-6 self-center absolute left-48" />
            </div>
            <div className="space-y-2">
              <h6>Explore these categories:</h6>
              <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
                Fabrics
              </button>
              <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
                Arts
              </button>
              <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
                Fashion
              </button>
              <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
                Clothing
              </button>
              <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
                Foods
              </button>
              <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9">
                Auction
              </button>
            </div>
          </div>
        </div>
        <img className="max-lg:w-full" src={hero} alt="hero image" />
      </section>
      <section className="flex flex-col content-center gap-5 mt-20 mb-16">
        <h2 className="text-3xl font-semibold self-center pb-5">
          Shop by category
        </h2>
        <div
          className="overflow-x-auto scrollbar-hide"
          onWheel={handleWheel}
          ref={scrollHorizontalRef}
        >
          <div className="flex justify-between items-center gap-5">
            {data.categories.map((category) => (
              <NavLink
                to={"/" + category.name}
                key={category.id}
                className="flex flex-col justify-center items-center hover:opacity-50"
              >
                <div className="flex justify-center items-center w-52 h-52 rounded-full overflow-hidden mb-3">
                  <img
                    src={require(`../assets/images${category.image}`)}
                    alt={category.name}
                    className="w-full"
                  />
                </div>
                <p className="text-lg font-medium">{category.name}</p>
                <p className="text-stone-400 text-md">
                  {category.quantity}{" "}
                  <span className="pl-1 text-m text-stone-400">Products</span>
                </p>
              </NavLink>
            ))}
          </div>
        </div>
        <button className="self-center max-w-56 h-12 px-4 mt-3 border border-indigo-950 rounded-lg text-sm font-medium">
          View all categories -12
        </button>
      </section>
      <RecommendedProducts />
      <PopularProducts />
      <PopularShops />
      <section className="bg-indigo-50 flex flex-col justify-center mt-20">
        <div className="max-w-7xl mx-auto px-5 mt-16 pb-10">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-center">Why GiriToday?</h3>
            <p className="text-md text-center">
              Uncover the GiriToday difference and experience the essence of
              Africa through out curated selection, authentic products, and
              seamless shopping experience.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center max-lg:flex-col max-lg:content-center gap-5 pb-20  max-w-7xl mx-auto px-5">
          <div className="max-w-96 min-h-64 rounded-xl bg-white">
            <div className="p-6">
              <img src={explore} alt="giriToday" />
              <p className="text-lg font-semibold py-1">
                Authenticity Guaranteed
              </p>
              <p className="text-sm text-stone-500">
                At GiriToday, authenticity is our top priority. We meticulously
                verify each product and trader to ensure that you receive only
                genuine African treasures. Shop with confidence, knowing that
                every purchase supports local artisans and communities.
              </p>
            </div>
          </div>
          <div className="max-w-96 min-h-64 rounded-xl bg-white">
            <div className="p-6">
              <img src={explore} alt="giriToday" />
              <p className="text-lg font-semibold py-1">Diverse Selection</p>
              <p className="text-sm text-stone-500">
                Discover a world of diversity at GiriToday. Our platform offers
                a vast selection of handpicked goods, ranging from traditional
                crafts to contemporary creations. With over 300 qualitv
                traders/stores, you'll find something unique to suit every taste
                and stvle.
              </p>
            </div>
          </div>
          <div className="max-w-96 min-h-64 rounded-xl bg-white">
            <div className="p-6">
              <img src={explore} alt="giriToday" />
              <p className="text-lg font-semibold py-1">
                Seamless Shopping Experience
              </p>
              <p className="text-sm text-stone-500">
                Experience convenience like never before with GiriToday. Our
                user-friendly interface, secure payment options, and worldwide
                shipping make shopping a breeze. Whether you're browsing from
                your desktop or mobile device. GiriTodav ensures a seamless
                shopping experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
