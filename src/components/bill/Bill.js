import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Bill.css";

function Bill() {
  const [price, setPrice] = useState(0);
  const cartState = useSelector((data) => data.LandingReducers.cartData);

  useEffect(() => {
    let amount = 0;
    cartState.map((data) => {
      amount = amount + data.count * data.price;
    });
    setPrice(amount);
  }, [cartState]);
  return (
    <div className = "billDivContainer">
      <h3 style = {{color:"red"}}> Total Bill : {price} </h3>
    </div>
  );
}

export default Bill;
