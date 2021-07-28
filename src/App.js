import React from "react";
import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import Cart from "../src/components/cart/Cart";
import FilterBar from "./components/filter/FilterBar";
import MainWrapper from "./components/MainWrapper";
import { useSelector } from "react-redux";

function App() {
  const isCartOpen = useSelector(data =>data.LandingReducers.isCartOpen);
  return (
      <MainWrapper>
        <FilterBar />
        <LandingPage />
        {isCartOpen ? <Cart/> :null}
      </MainWrapper>
  );
}

export default App;
