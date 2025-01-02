import React, { Component, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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

  console.log(searchItem);
  return (
    <div>
      {showMenu && <NavBar value={searchItem} handleChange={setSearchItem} />}
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
