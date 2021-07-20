const INIITIAL_STATE = {
  productData: [],
  cartData: [],
  isLoading:true,
  
};
export default function LandingReducers(state = INIITIAL_STATE, action) {
  switch (action.type) {
    case "productData":
      return {
        ...state,
        productData: action.payload,
        isLoading:false,
      };
    case "addDataToCart":
      return {
        ...state,
        productData: [...action.payload.productList],
        cartData: [...state.cartData, action.payload.cardData],
      };
    case "INCCOUNTER":
      return {
        ...state,
        productData: [...action.payload.varList],
        cartData: [...action.payload.tempCartList],
      };
    case "DECCOUNTER":
      return {
        ...state,
        productData: [...action.payload.varList],
        cartData: [...action.payload.x],
      };
    case "RemoveFromCart":
      return {
        ...state,
        cartData: [...action.payload.tempList],
        productData:[...action.payload.productTempList],
      };
    default:
      return state;
  }
}
