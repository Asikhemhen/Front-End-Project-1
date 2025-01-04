import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./styles/tailwind.css";
import Home from "./pages/home";
import Search from "./pages/search";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Test from "./components/test";

const App = () => {
  // State for dropdown
  const [dropDown, setDropDown] = useState(false);
  const [dropDownSelected, setDropDownSelected] = useState("All Categories");

  // Toggle dropdowns
  const toggleDropDown = () => setDropDown((prev) => !prev);

  // Handle dropdown item click
  const handleDropDownItemClick = (category) => {
    setDropDownSelected(category);
    setDropDown(false);
  };

  //Search item state
  const [searchItem, setSearchItem] = useState("");
  const location = useLocation();
  const showMenu = location.pathname !== "/login"; // Hide menu on login page

  //Navigate to Search Page
  const navigate = useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchItem(value);

    if (value) {
      navigate(`/search-product?search=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div>
      {showMenu && (
        <NavBar
          value={searchItem}
          handleChange={handleChange}
          setDropDown={setDropDown}
          dropDown={dropDown}
          toggleDropDown={toggleDropDown}
          dropDownSelected={dropDownSelected}
          handleDropDownItemClick={handleDropDownItemClick}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-product"
          element={
            <Search searchItem={searchItem} category={dropDownSelected} />
          }
        />
      </Routes>

      {showMenu && <Footer />}
    </div>
  );
};

export default App;
