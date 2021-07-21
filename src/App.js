import React from "react";
import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import Cart from "../src/components/cart/Cart";
import FilterBar from "./components/filter/FilterBar";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Cart />
      <FilterBar/>
    </div>
  );
}

export default App;
