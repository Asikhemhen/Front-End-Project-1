import React, { Component } from "react";
import logo from "./common/icons/logo.svg";
import heart from "./common/icons/heart.svg";
import line from "./common/icons/line.svg";
import shoppingCart from "./common/icons/shoppingCart.svg";
import SearchBoxCategory from "./common/searchBoxCategory";
import { Link } from "react-router-dom";
import Categories from "./common/categories";
import arrowDown from "./common/icons/arrowDown.svg";

class HeaderBottom extends Component {
  render() {
    return (
      <div className="header-bottom">
        <img src={logo} className="logo" alt="logo" />
        <SearchBoxCategory
          inputGroupClass={"input-category"}
          inputBtnClass={"input-btn"}
          inputFieldClass={"input"}
          inputArrowClass={"input-arrow"}
          inputSearchClass={"search"}
          arrow={arrowDown}
        />
        <div className="header-bottom-right">
          <Categories
            classNameButton={"categories"}
            buttonLabel="Categories"
            classNameArrow={"classNameArrow"}
          />
          <div className="header-bottom-right-items">
            <img
              src={line}
              className="header-bottom-right-items line"
              alt="line"
            />
          </div>
          <button className="header-bottom-right-items login" to="/login">
            Login
          </button>
          <div className="header-bottom-right-items">
            <button className="sign-up">Sign up</button>
          </div>
          <div className="header-bottom-right-items">
            <img src={heart} className="heart" alt="logo" />
          </div>
          <div className="header-bottom-right-items">
            <img src={shoppingCart} className="shoppingCart" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBottom;
