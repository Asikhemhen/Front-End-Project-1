import ellipse from "../assets/images/ellipse.svg";
import globe from "../assets/images/globe.svg";
import dollar from "../assets/images/dollar.svg";
import { Link, NavLink } from "react-router-dom";
import { declare } from "../../node_modules/@reduxjs/toolkit/dist/query/react/index.d";

const TopBar = () => {
  return (
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
  );
};

export default TopBar;
