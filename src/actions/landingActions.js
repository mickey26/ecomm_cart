import axios from "axios";
const GET_PRODUCT_URL = "https://fakestoreapi.com/products";

export const getProductData = () => {
  return (dispatch) => {
    axios.get(GET_PRODUCT_URL).then((res) => {
      if (res.status === 200) {
        let result = res.data;
        let list = result.map((data) => ({
          ...data,
          count: 0,
          showCounter: false,
        }));
        dispatch({ type: "productData", payload: list });
      }
    });
  };
};

export const addDataToCart = (productList, cardData) => {
  return (dispatch) => {
    dispatch({ type: "addDataToCart", payload: { productList, cardData } });
  };
};


