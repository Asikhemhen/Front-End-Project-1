import React, { useState, useRef, useEffect } from "react";
import ellipse from "../assets/images/ellipse.svg";
import globe from "../assets/images/globe.svg";
import dollar from "../assets/images/dollar.svg";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import heart from "../assets/images/heart.svg";
import shoppingCart from "../assets/images/shoppingCart.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import search from "../assets/images/search.svg";
import menu from "../assets/images/menu.svg";
import Categories from "./categoryDropDown";
import MenuBar from "./menu";

function NavBar(props) {
  // State for large screen dropdown
  const [largeScreenDropdown, setLargeScreenDropdown] = useState(false);
  const [largeScreenSelected, setLargeScreenSelected] =
    useState("All Categories");

  // State for small screen dropdown
  const [smallScreenDropdown, setSmallScreenDropdown] = useState(false);
  const [smallScreenSelected, setSmallScreenSelected] =
    useState("All Categories");

  // Refs for dropdowns
  const largeScreenRef = useRef(null);
  const smallScreenRef = useRef(null);

  // Handle outside click for large screen dropdown
  useEffect(() => {
    const handleOutsideClickLarge = (event) => {
      if (
        largeScreenRef.current &&
        !largeScreenRef.current.contains(event.target)
      ) {
        setLargeScreenDropdown(false);
      }
    };
    document.addEventListener("click", handleOutsideClickLarge);

    return () => {
      document.removeEventListener("click", handleOutsideClickLarge);
    };
  }, []);

  // Handle outside click for small screen dropdown
  useEffect(() => {
    const handleOutsideClickSmall = (event) => {
      if (
        smallScreenRef.current &&
        !smallScreenRef.current.contains(event.target)
      ) {
        setSmallScreenDropdown(false);
      }
    };
    document.addEventListener("click", handleOutsideClickSmall);

    return () => {
      document.removeEventListener("click", handleOutsideClickSmall);
    };
  }, []);

  // Toggle dropdowns
  const toggleLargeScreenDropdown = () =>
    setLargeScreenDropdown((prev) => !prev);
  const toggleSmallScreenDropdown = () =>
    setSmallScreenDropdown((prev) => !prev);

  // Handle dropdown item click
  const handleLargeScreenItemClick = (category) => {
    setLargeScreenSelected(category);
    setLargeScreenDropdown(false);
  };

  const handleSmallScreenItemClick = (category) => {
    setSmallScreenSelected(category);
    setSmallScreenDropdown(false);
  };

  return (
    <header>
      <section class="bg-white text-white">
        <section class="max-w-7xl mx-auto py-3 px-5">
          <div className="flex justify-between items-center space-x-20">
            <div className="flex " ref={props.menuRef}>
              <img
                className="text-3xl menu hidden max-lg:flex focus:outline-none text-stone-500 mr-4 hover:cursor-pointer hover:opacity-60"
                src={menu}
                alt="menu"
                onClick={props.toggleMenu}
              />
              <NavLink to="/#">
                <img className="min-h-16 min-w-16" src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className="header-container flex justify-end basis-full">
              <div className="hidden sm:flex search-container basis-full border rounded-lg bg-stone-50 h-12  border-stone-300 relative">
                <div ref={largeScreenRef}>
                  <button
                    className="min-w-40 h-full border-r border-stone-300 rounded-l-md bg-stone-50 text-indigo-950 text-sm font-medium"
                    onClick={toggleLargeScreenDropdown}
                  >
                    {largeScreenSelected}{" "}
                    <img src={arrowDown} className="inline" alt="arrow-down" />
                  </button>
                  <Categories
                    display={largeScreenDropdown ? "flex" : "hidden"}
                    handleClickCategoryItem={handleLargeScreenItemClick}
                    top="top-12"
                  />
                </div>
                <input
                  className="w-full bg-transparent text-sm text-stone-900 pl-16 pr-8"
                  type="text"
                  placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
                />
                <img
                  src={search}
                  className="h-6 self-center absolute left-48"
                />
              </div>
              <NavLink
                className="max-lg:hidden self-center text-indigo-950 hover:opercity-90 mx-5"
                to="/Login"
              >
                Login
              </NavLink>
              <button className="max-lg:hidden min-w-24 border border-indigo-950 rounded-md text-indigo-950 text-md font-medium">
                Sign Up
              </button>
              <img src={heart} className="mx-5" alt="heart" />
              <img src={shoppingCart} className="" alt="shoppingCart" />
            </div>
          </div>
          <div className="flex sm:hidden basis-full mt-3 border rounded-lg bg-stone-50 h-12 border-stone-300 relative">
            <div ref={smallScreenRef}>
              <button
                className="min-w-40 h-full border-r border-stone-300 rounded-l-md bg-stone-50 text-indigo-950 text-sm font-medium"
                onClick={toggleSmallScreenDropdown}
              >
                {smallScreenSelected}{" "}
                <img src={arrowDown} className="inline" alt="arrow-down" />
              </button>
              <Categories
                display={smallScreenDropdown ? "flex" : "hidden"}
                handleClickCategoryItem={handleSmallScreenItemClick}
                top="top-12"
              />
            </div>
            <input
              className="w-full bg-transparent text-sm text-stone-900 pl-16 pr-8"
              type="text"
              placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
            />
            <img src={search} className="h-6 self-center absolute left-48" />
          </div>
        </section>
      </section>
    </header>
  );
}

export default NavBar;
