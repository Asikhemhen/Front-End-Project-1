import { React, useRef, useState } from "react";
import NavBar from "../components/navBar";
import hero from "../assets/images/hero.svg";
import search from "../assets/images/search.svg";
import arrowDownWhite from "../assets/images/arrowDownWhite.svg";
import frame from "../assets/images/frame.svg";
import Product from "../components/products";
import more from "../assets/images/arrow-right.svg";
import data from "../data/data.json";
import { NavLink } from "react-router-dom";
import Shops from "../components/shops";
import explore from "../assets/images/whygiri.svg";
import Footer from "../components/footer";
import Categories from "../components/categoryDropDown";

const Home = () => {
  let scrollHorizontalRef = useRef(null);

  let [catDropDown, setcatDropDown] = useState("hidden");
  let [catBtnState, setCatBtnState] = useState("All Categories");

  const handleClickCategoryBtn = () => {
    catDropDown = catDropDown === "hidden" ? "flex" : "hidden";
    setcatDropDown(catDropDown);
  };

  const handleClickCategoryItem = (event) => {
    setCatBtnState(event);
    setcatDropDown("hidden");
  };

  const handleWheel = (event) => {
    event.preventDefault();
    scrollHorizontalRef.current.scrollLeft += event.deltaY;
  };
  return (
    <div>
      <NavBar />
      <section className="bg-indigo-100 flex max-lg:block">
        <div className="flex basis-full max-w-2xl mx-auto py-3 px-5 max-lg:py-12 max-lg:max-w-5xl">
          <div className="bg-indigo-100 flex flex-col justify-center basis-full space-y-5">
            <div className="flex justify-end border border-white rounded-3xl h-10 max-w-80 relative">
              <img src={frame} className="h-6 self-center absolute left-2" />
              <h6 className="text-sm text-right p-2 pr-3">
                Trusted by over 2M+ buyers!
              </h6>
            </div>
            <h1 className="hero-text text-indigo-950 text-4xl font-extrabold">
              Discover Your Next Favourite Product From Africa!
            </h1>
            <div className="flex border rounded-xl bg-white h-16 border-white relative">
              <button
                className="min-w-40 border rounded-l-xl bg-indigo-900 text-white text-sm font-medium m-1 mr-0"
                onClick={handleClickCategoryBtn}
              >
                {catBtnState}{" "}
                <img src={arrowDownWhite} className="inline" alt="arrow-down" />
              </button>
              <input
                className="w-full rounded-r-xl bg-stone-50 text-sm text-stone-900 m-1 ml-0 pl-16 pr-8"
                type="text"
                placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
              />
              <img src={search} className="h-6 self-center absolute left-48" />
              <Categories
                display={catDropDown}
                handleClickCategoryItem={handleClickCategoryItem}
                top="top-16"
              />
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
      <section className="bg-stone-100 py-16">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto py-3 px-5">
          <div className="flex justify-between max-md:justify-center items-center">
            <h2 className="text-2xl font-bold md:">Recommended Products</h2>
            <p className="max-md:hidden text-lg font-medium">
              {"Explore recommended products"}
              <img src={more} alt="Explore More" className="inline" />
            </p>
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
            {data.products.map((product) => (
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
              />
            ))}
          </div>
          <p className="md:hidden text-lg font-medium self-center">
            {"Explore recommended products"}
            <img src={more} alt="Explore More" className="inline" />
          </p>
        </div>
      </section>
      <section className="my-14">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto py-3 px-5">
          <div className="flex justify-between max-md:justify-center items-center">
            <h2 className="text-2xl font-bold md:">Popular products now</h2>
            <p className="max-lg:hidden text-lg font-medium">
              {"Explore popular products"}
              <img src={more} alt="Explore More" className="inline" />
            </p>
          </div>
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
            {data.products.map((product) => (
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
              />
            ))}
          </div>
          <p className="lg:hidden text-lg font-medium self-center">
            {"Explore popular products"}
            <img src={more} alt="Explore More" className="inline" />
          </p>
        </div>
      </section>
      <section className="rounded-lg bg-slate-50 max-lg:bg-white max-w-7xl mx-auto py-12 px-5">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Popular Shops</h3>
          <p className="text-md font-medium">
            {"View All"}
            <img src={more} alt="Explore More" className="inline" />
          </p>
        </div>
        <div className="grid place-self-center grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {data.shops.map((store) => (
            <Shops
              key={store.id}
              name={store.name}
              image={require(`../assets/images${store.image}`)}
              logo={require(`../assets/images${store.logo}`)}
              caption={store.caption}
              reviews={store.reviews}
              followers={store.followers}
              sales={store.sales}
            />
          ))}
        </div>
      </section>
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
      <Footer />
    </div>
  );
};

export default Home;
