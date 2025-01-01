import React, { Component } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles/tailwind.css";
import Home from "./pages/home";
import Search from "./pages/search";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

const App = () => {
  const location = useLocation();

  const showMenu = location.pathname !== "/login"; // Hide menu on login page

  return (
    <div>
      {showMenu && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {showMenu && <Footer />}
    </div>
  );
};

export default App;
