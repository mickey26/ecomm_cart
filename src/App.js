import React from "react";
import "./App.css";
import LandingPage from "../src/components/landingPage/LandingPage";
import Cart from "../src/components/cart/Cart";


function App() {
  return (
    <div className = "App">
      <LandingPage />
      <Cart />
      {/* <Bill/> */}
    </div>
  );
}

export default App;
