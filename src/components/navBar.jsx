import React from "react";
import ellipse from "../assets/images/ellipse.svg";
import globe from "../assets/images/globe.svg";
import dollar from "../assets/images/dollar.svg";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import heart from "../assets/images/heart.svg";
import line from "../assets/images/line.svg";
import shoppingCart from "../assets/images/shoppingCart.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import search from "../assets/images/search.svg";
import menu from "../assets/images/menu.svg";

function NavBar() {
  return (
    <header>
      <section class="bg-indigo-950 text-white sticky top-0 z-10">
        <div class="max-w-7xl mx-auto py-3 px-5 flex items-center justify-end sm:justify-between">
          <NavLink className="hidden sm:flex text-sm" to="/open-a-store">
            Open a Giri store
          </NavLink>
          <div>
            <nav class="space-x-5 text-sm flex" aria-label="main">
              <NavLink className="hover:opercity-90 flex" to="/nigeria">
                <img src={globe} className="pr-1" alt="globe" />
                Nigeria
              </NavLink>
              <img src={ellipse} alt="ellipse" />
              <NavLink className="hover:opercity-90 flex" to="/nigeria">
                <img src={dollar} className="pr-1" alt="globe" /> (USD)
              </NavLink>
              <img src={ellipse} alt="ellipse" />
              <NavLink className="hover:opercity-90 flex" to="/eng-uk">
                ENG(UK)
              </NavLink>
            </nav>
          </div>
        </div>
      </section>
      <section class="bg-white text-white">
        <section class="max-w-7xl mx-auto py-3 px-5">
          <div className="flex justify-between items-center space-x-20">
            <div className="flex">
              <img
                className="text-3xl menu hidden max-lg:flex focus:outline-none text-stone-500 mr-4"
                src={menu}
                alt="menu"
              />
              <NavLink to="/#">
                <img className="min-h-16 min-w-16" src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className="header-container flex justify-end basis-full">
              <div className="hidden sm:flex search-container basis-full border rounded-lg bg-stone-50 h-12  border-stone-300 relative">
                <button className="min-w-40 border-r border-stone-300 rounded-l-md bg-stone-50 text-indigo-950 text-sm font-medium">
                  All Categories{" "}
                  <img src={arrowDown} className="inline" alt="arrow-down" />
                </button>
                <input
                  className="w-full bg-transparent text-sm text-stone-900 pl-16"
                  type="text"
                  placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
                />
                <img
                  src={search}
                  className="h-6 self-center absolute left-48"
                />
              </div>
              <button className="max-lg:hidden min-w-32 text-indigo-950 text-sm font-medium">
                Categories{" "}
                <img src={arrowDown} className="inline" alt="arrow-down" />
              </button>
              <img src={line} className="max-lg:hidden inline" alt="line" />
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
            <button className="min-w-40 border-r border-stone-300 rounded-l-md bg-stone-50 text-indigo-950 text-sm font-medium">
              All Categories{" "}
              <img src={arrowDown} className="inline" alt="arrow-down" />
            </button>
            <input
              className="w-full bg-transparent text-sm text-stone-900 pl-16"
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
