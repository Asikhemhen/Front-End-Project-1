import React, { Component, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./styles/tailwind.css";
import Home from "./pages/home";
import Search from "./pages/search";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

const App = () => {
  //Search item state
  const [searchItem, setSearchItem] = useState("");
  const location = useLocation();
  const showMenu = location.pathname !== "/login"; // Hide menu on login page

  //Navigate to Search Page
  const navigate = useNavigate();
  const handleChange = (event) => {
    const value = event.target.value;
    setSearchItem(value);

    if (searchItem) {
      navigate(`/search-product?=${encodeURIComponent(searchItem)}`);
    }
  };

  console.log(searchItem);
  return (
    <div>
      {showMenu && <NavBar value={searchItem} handleChange={handleChange} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-product"
          element={<Search searchItem={searchItem} />}
        />
      </Routes>
      {showMenu && <Footer />}
    </div>
  );
};

export default App;
