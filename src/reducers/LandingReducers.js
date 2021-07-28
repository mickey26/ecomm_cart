const INIITIAL_STATE = {
  productData: [],
  filterFor:[],
  cartData: [],
  isLoading:true,
  isCartOpen:false,
  
};
export default function LandingReducers(state = INIITIAL_STATE, action) {
  switch (action.type) {
    case "productData":
      return {
        ...state,
        productData: action.payload,
        filterFor:action.payload,
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
    case "FILTERED_DATA":
      return{
        ...state,
        productData:[...action.payload]
      }
    case "ALLDATA":
      return{
        ...state,
        productData:[...action.payload]
      }
    case "cartModel":
      return {
        ...state,
        isCartOpen:action.payload
      }
    default:
      return state;
  }
}
