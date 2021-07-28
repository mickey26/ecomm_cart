import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Bill from "../bill/Bill";
import { GrClose } from 'react-icons/gr';

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

  const closeCart = () =>{
    dispatch({type:"cartModel",payload:false});
  }

  return (
    <div className="cartContainer">
      <div style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems:'center'
      }}>
        <h2>My Cart </h2>
        <GrClose onClick = {()=>closeCart()} />
      </div>

      <div>
        <Bill />
        {states &&
          states.map((data,index) => (
            <div className="cartCardContainer" key = {index}>
              <h5>{data.title}</h5>
              <h5>Quantity:{data.count}</h5>
              <h4>Item price = {data.count * data.price}</h4>
              <div className="buttonContainerCart" onClick={() => handleRemoveFromCart(data.id)}>
                Remove Item
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
