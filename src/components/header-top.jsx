import { Component } from "react";
import ellipse from "./common/icons/ellipse.svg";
import globe from "./common/icons/globe.svg";
import { Link, NavLink } from "react-router-dom";

class HeaderTop extends Component {
  render() {
    return (
      <div className="header-top">
        <div className="collapsible header-top-collapsible header-top-left">
          <Link className="header-top-link" to="/giri-store">
            Open a Giri store
          </Link>
        </div>
        <div className="header-top-right" id="">
          <div className="heasdr-top-nav">
            <img src={globe} className="globe" alt="globe" />
            <NavLink
              className="header-top-link header-top-link-nigeria"
              to="/nigeria"
            >
              Nigeria
            </NavLink>
            <img src={ellipse} className="ellipse" alt="ellipse" />
            <NavLink className="header-top-link header-top-link-usd" to="/usd">
              $ (USD)
            </NavLink>
            <img src={ellipse} className="ellipse" alt="ellipse" />
            <NavLink
              className="header-top-link header-top-link-eng"
              to="/eng-uk"
            >
              ENG (UK)
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTop;
