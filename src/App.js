import React from "react";
import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import Cart from "../src/components/cart/Cart";
import FilterBar from "./components/filter/FilterBar";
import MainWrapper from "./components/MainWrapper";
function App() {
  return (
    <MainWrapper>
      <div className="App">
        <div className="filterAndResultContainer">
          <div className="filterBar">
            <FilterBar />
          </div>
          <LandingPage />
        </div>
        <Cart />
      </div>
    </MainWrapper>
  );
}

export default App;
