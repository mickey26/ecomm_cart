import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Bill from "../bill/Bill";

const Cart = (props) => {
  const states = useSelector((state) => state.LandingReducers.cartData);
  const productState = useSelector((data) => data.LandingReducers.productData);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (productId) => {
    let tempList = states;
    let productTempList = productState;
    tempList = tempList.filter((data) => data.id !== productId);
    productTempList.map((data) => {
      if (data.id === productId) {
        data.count = 0;
      }
    });
    dispatch({
      type: "RemoveFromCart",
      payload: { tempList, productTempList },
    });
  };
  
  return (
    <div className="cartContainer">
      <h2>My Cart </h2>
      <Bill />
      {states &&
        states.map((data) => (
          <div className="cartCardContainer">
            <h5>{data.title}</h5>
            <h5>Quantity:{data.count}</h5>
            <h4>Item price = {data.count * data.price}</h4>
            <button onClick={() => handleRemoveFromCart(data.id)}>
              Remove from cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
