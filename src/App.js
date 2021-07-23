import React from "react";
import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import Cart from "../src/components/cart/Cart";
import FilterBar from "./components/filter/FilterBar";
import MainWrapper from "./components/MainWrapper";
function App() {
  return (
    // <div className="App">
      <MainWrapper>
        <div style={{marginTop: "50px",display: "flex",flexDirection: "row",justifyContent:'space-between'}}>
        <FilterBar />
        <LandingPage />
        <Cart />
        </div>
      </MainWrapper>
    // </div>
  );
}

export default App;
