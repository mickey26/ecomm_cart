import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Bill.css";

function Bill() {
  const [price, setPrice] = useState(0);
  const cartState = useSelector((data) => data.LandingReducers.cartData);

  useEffect(() => {
    let amount = 0;
    cartState.map((data,index) => {
      amount = amount + data.count * data.price;
    });
    let shortAmount = amount.toFixed(3);
    setPrice(shortAmount);
  }, [cartState]);
  return (
    <div className = "billDivContainer">
      <h3 style = {{color:"#e40046"}}> Total Bill : {price} </h3>
    </div>
  );
}

export default Bill;
