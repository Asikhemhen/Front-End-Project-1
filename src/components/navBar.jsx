import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import close from "../assets/images/closeMenu.svg";
import OutsideClicks from "./OutsideClicks";
import dark from "../assets/images/darkMode.svg";
import light from "../assets/images/lightMode.svg";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../state/themeSlice";
import { useSelector } from "react-redux";
import SideCart from "./cart";

function NavBar(props) {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state) => state.cartItems.count);

  const [openCart, setOpenCart] = useState(false);

  // Refs for dropdowns
  const dropDownRef = useRef(null);

  // Handle outside click for dropdown
  OutsideClicks(dropDownRef, () => props.setDropDown(false));

  //State for Menu
  let [menuState, setMenuState] = useState(false);
  let menuRef = useRef(null);
  let cartRef = useRef(null);

  //Hide the menu bar and side cart when a new page is opened
  const location = useLocation();
  useEffect(() => {
    setMenuState(false);
    setOpenCart(false);
  }, [location.pathname]);

  //Toggle Munu
  const toggleMenu = () => {
    setMenuState((prevState) => !prevState);
  };

  //Disable page scroll when menu or side cart opens
  if (menuState || openCart) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  //Hide the menu bar on outside click
  OutsideClicks(menuRef, () => setMenuState(false));

  //Hide the side cart on outside click
  OutsideClicks(cartRef, () => setOpenCart(false));

  return (
    <header>
      <section className="bg-indigo-950 text-white w-full fixed top-0 z-10">
        <div className="max-w-7xl mx-auto py-3 px-5 flex items-center justify-end sm:justify-between">
          <NavLink className="hidden sm:flex text-sm" to="/open-a-store">
            Open a Giri store
          </NavLink>
          <div>
            <nav className="space-x-5 text-sm flex" aria-label="main">
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
              <img src={ellipse} alt="ellipse" />
              <img
                onMouseDown={() => dispatch(toggleTheme())}
                src={props.theme === "dark" ? dark : light}
                alt={props.theme === "moon icon" ? dark : "sun icon"}
                className="hover:cursor-pointer"
              />
            </nav>
          </div>
        </div>
      </section>
      <section className="bg-white  text-white max-w-7xl mx-auto mt-12 py-3 px-5">
        <div className="grid grid-cols-2 grid-rows-2 sm:flex justify-between items-center">
          <div className="flex">
            <img
              className="text-3xl menu hidden max-lg:flex focus:outline-none text-stone-500 mr-4 hover:cursor-pointer hover:opacity-60"
              src={menu}
              alt="menu"
              onClick={toggleMenu}
            />
            <NavLink to="/#">
              <img className="min-h-16 min-w-16" src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="order-3 col-span-2 sm:order-none flex justify-end basis-full">
            <div className="flex search-container sm:ml-20 sm:mr-10 lg:mr-20 basis-full border rounded-lg bg-stone-50 h-12  border-stone-300 relative">
              <div ref={dropDownRef}>
                <button
                  className="min-w-40 h-full border-r border-stone-300 rounded-l-md bg-stone-50 text-indigo-950 text-sm font-medium pr-5"
                  onClick={props.toggleDropDown}
                >
                  {props.dropDownSelected}{" "}
                  <img
                    src={arrowDown}
                    className="absolute top-3 left-32"
                    alt="arrow-down"
                  />
                </button>

                <Categories
                  display={props.dropDown ? "flex" : "hidden"}
                  handleClickCategoryItem={props.handleDropDownItemClick}
                  top="top-12"
                />
              </div>
              <input
                className="w-full bg-transparent text-sm text-stone-900 pl-16 pr-8 focus:ring-1 focus:ring-indigo-900 focus:rounded-r-lg focus:outline-none"
                type="text"
                placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
                value={props.value}
                onChange={props.handleChange}
              />
              <img src={search} className="h-6 self-center absolute left-48" />
            </div>
          </div>
          <div className="flex justify-end items-center relative">
            <NavLink
              className="max-lg:hidden self-center text-indigo-950 hover:opercity-90 mx-5"
              to="/Login"
            >
              Login
            </NavLink>
            <button className="max-lg:hidden min-w-24 h-12 border border-indigo-950 rounded-md text-indigo-950 text-md font-medium">
              Sign Up
            </button>
            <img src={heart} className="mx-5" alt="heart" />
            <img
              src={shoppingCart}
              className="hover:opacity-60"
              alt="shoppingCart"
              onClick={() => setOpenCart((prev) => !prev)}
              ref={cartRef}
            />
            {cartItemsCount && (
              <div
                className="flex items-center justify-center bg-indigo-900 rounded-full h-4 w-4 text-[8px] absolute top-2 right-2"
                onClick={() => setOpenCart((prev) => !prev)}
              >
                {cartItemsCount}
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Menu Bar */}
      {menuState && (
        <div ref={menuRef}>
          <div
            className={`flex flex-col bg-white shadow-lg shadow-indigo-950 max-w-72 min-w-72 p-4 gap-2 h-screen fixed left-0 top-0 z-20`}
          >
            <div className="flex justify-between items-center mb-4">
              <NavLink to="/#">
                <img src={logo} alt="logo" />
              </NavLink>
              <img
                src={close}
                alt="hide menu"
                onClick={toggleMenu}
                className="hover:cursor-pointer p-3 hover:opacity-60 hover:bg-indigo-100 hover:rounded-md"
              />
            </div>
            <NavLink className="text-lg hover:opacity-60" to="/open-a-store">
              {/* <img src={menu} alt="open a store" className="inline"></img>  */}
              Open a Giri Store
            </NavLink>
            <NavLink className="text-lg hover:opacity-60" to="/login">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2UlEQVR4nNWVPQrCQBCFt/AQ9vaZEUmhO2Ezk0KDJ/AansJbWHkdL2BltBIDtjYqa0RswpKQAfPgdbPzwc6fMQFBki6R+Iwkz0a2ckIreSi/eQc2Tf6FcBEGUBUcDGz7DnsPAOKrtxrgV75oUZLOjRYALN+Q+I7EKxUATrMYrFyQ5BFRtu4c4DWZ8QhIDlUC3piuAV6xc0O0vP8M09Y5NzB1ACQuW08qVQaSXS3At6AqQP2L/qrIqN2moD1oQHzsfFUgcam67LD39wDVAepH30reCmK5GFO2eAEMZS8JrDPY7AAAAABJRU5ErkJggg=="
                alt="login"
                className="h-5 w-5 inline mr-3"
              ></img>{" "}
              Login
            </NavLink>
            <NavLink className="text-lg hover:opacity-60" to="/sign-up">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgUlEQVR4nO2ZbWiOYRTHf8/E7IO3mmQUsoSND0ZeJmp88f7+hcgHDW2UJmJNW6xsX2QpCRElIhlZMi+xwmRptkkSavMeU0Tz8jy6dFZXV/f93PfzPPez+47963xYz7nOdf73da5zznUG3fg30B9YDZwBHgCtwGPgGlACZBNw9AZ2AJ+BiINUA6MJIAYD9S4I6PIdWEWAMBB4bjj5HqgClgG5wBygCLhr6IUlDH1HD+CW4dw+oE+UNfOAt8bJTMJnrDVIFLpcNwxo09apkwrhE1KAl5ozx2NcP1VCq3O9OilfMEVzogPIiMPG2QQ+hGfYpTlxJU4bizQbr/EJRzQnyuK0kWFkMFWLuhznNSe2xGmjl5EsVD3qchzWHNgdp40hxomk4gNKPLgji4NwRyYbWUt93VhxLghZKwS80Bw5EeP6XKOOzMVHrDEu62aX64YDr7R1d/ys7J3V/aZBZj/QF3sslKZS77VyCADSgWcGmQ/AAWCFhJAKm60WrX44aK18ukUX7CRfpc0PHFKBbUC7CxKqmI4i4Ogn4XIauC9v9hagFigGxvrtYDf+d6QAeZLOG6SF6ZD6o0K2QjKir/XHCfOBJpfZ7x4wI9YNZgF1wDvgk0fyEVgg9nsCh2JM4xGpR+Vyio5QY5vfcWziJBUaiatR9GqAcRYjJV1OOYXaAPl6XpN4qr0KnU6iQPRKHfSivlaXaIqq4M2U/ihRydDuRMQjImFgoh2RdZqiGkZ7PeRr8pBIBLjhhoiq0F4iz2UYFsRAREmW1WYrNYVmj4lUJYlIsdVm04z3g5dDgoYkEamx2iwN+KIp5XtI5I2x+Xqxb0qW6OfY/L4RuK3ZarTb8Jim1OrhDKpDs6vqRCKYrdlSQ3JLZEpYdSo+BAaROMyp/E5gu4VMEP3pNr+rO/HI8M8Wm4w4VK3K8gQbt/ok3ZFLThvvtVjULDE61KXzadItKFQmiUiRG0c2AN9sDLTIf3RLZSacL2Mi1ToclBb8h7TnZkb0kkimy4/6V/Ek8MulYVPapFEMSSvuJZFq4oAaIuwBnsRIpF0uLvKeCHtE5CcwhgQxAlgqYXRUZruqpbkgf1dKnci2eDuUOzhYKHplDnoqIfmKFHlP2DlYJw+7xig6nffOd4TkizuFWcQinHw/CSuo98R1lyRqgfEEHFlS6S9L1W6Vin1R6sRIvx3sBnHgD95AnRD5OdkKAAAAAElFTkSuQmCC"
                alt="sign up"
                className="h-6 w-6 inline mr-2"
              ></img>{" "}
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
      <div>
        <SideCart
          cartRef={cartRef}
          openCart={openCart}
          setOpenCart={setOpenCart}
        />
      </div>
    </header>
  );
}

export default NavBar;
