import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter(props) {
  const [counterValue, setCounterValue] = useState(1);
  const counterState = useSelector((data) => data.LandingReducers.productData);
  const cartState = useSelector((data) => data.LandingReducers.cartData);
  const dispatch = useDispatch();

  const handleCountById = (item, di) => {
    let varList = counterState;
    let tempCartList = cartState;
    varList.map((data) => {
      if (data.id === item.productId.id) {
        data.count = data.count + 1;
      }
    });
    dispatch({ type: "INCCOUNTER", payload: { varList, tempCartList } });
  };

  const handleCountDecrement = (item, c) => {
    let x = cartState;
    if (c >= 0) {
      if (c === 1) {
        x = cartState.filter((data) => data.id !== item.productId.id);
      }
      let varList = counterState;
      varList.map((data) => {
        if (data.id === item.productId.id) {
          data.count = data.count - 1;
        }
      });
      dispatch({ type: "DECCOUNTER", payload: { varList, x } });
    }
  };

  return (
    <div>
      <button onClick={() => handleCountById(props, props.productId.id)}>
        +
      </button>
      {"   "}
      {props.productId.count}
      {"   "}
      <button
        onClick={() => handleCountDecrement(props, props.productId.count)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
