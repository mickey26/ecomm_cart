import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Bill from "../bill/Bill";
import Skeleton from "react-loading-skeleton";

const Cart = (props) => {
  const states = useSelector((state) => state.LandingReducers.cartData);
  const productState = useSelector((data) => data.LandingReducers.productData);
  const loadingState = useSelector((data) => data.LandingReducers.isLoading);
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
      {loadingState ? (
        <Skeleton count={1} height={800} width={400} />
      ) : (
        <div >
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
      )}
    </div>
  );
};

export default Cart;