import React, { Component } from "react";
import "./output.css";
import TopHeader from "./components/tailwind/landing/Header/topHeader";
import BottomHeader from "./components/tailwind/landing/Header/bottomHeader";
import Hero from "./components/tailwind/landing/Hero/hero";
import Footer from "./components/tailwind/landing/Footer/footer";
import PopularShops from "./components/tailwind/landing/body/popular-shops";
import Popular from "./components/tailwind/landing/body/popular";
import Recommended from "./components/tailwind/landing/body/recommended";
import WhyGiri from "./components/tailwind/landing/body/whyGiri";
import Categories from "./components/common/tailwindcss/categories";

function App() {
  return (
    <React.Fragment>
      <TopHeader />
      <BottomHeader />
      <Hero />
      <Categories />
      <Recommended />
      <Popular />
      <PopularShops />
      <WhyGiri />
      <Footer />
    </React.Fragment>
  );
}

export default App;
