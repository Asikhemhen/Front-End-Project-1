import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import close from "../assets/images/closeMenu.svg";
import { NavLink } from "react-router-dom";

const MenuBar = (props) => {
  return (
    <div
      className={`flex flex-col bg-white shadow-lg shadow-indigo-950 ${props.display} max-w-72 min-w-72 p-4 gap-2 h-screen fixed left-0 top-0 z-20`}
      ref={props.menuRef}
    >
      <div className="flex justify-between items-center mb-4">
        <NavLink to="/#">
          <img src={logo} alt="logo" />
        </NavLink>
        <img
          src={close}
          alt="hide menu"
          onClick={props.toggleMenu}
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
      <p>hjasgdjakbNxhk</p>
    </div>
  );
};

export default MenuBar;
