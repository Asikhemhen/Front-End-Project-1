import React, { Component } from "react";
import "./output.css";
import TopHeader from "./components/tailwind/Header/topHeader";
import BottomHeader from "./components/tailwind/Header/bottomHeader";
import Hero from "./components/tailwind/Hero/hero";

function App() {
  return (
    <React.Fragment>
      <TopHeader />
      <BottomHeader />
      <Hero />
    </React.Fragment>
  );
}

export default App;
