import { get_products, get_error, create_product } from "../Type";

const initialState = {
  Products: [],
  allProducts: [],
  error: null,
  Loading: true,
};

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case get_products:
      return {
        ...state,
        allProducts: action.payload,
        Loading: false,
        error: null,
      };

    case create_product:
      return {
        ...state,
        Products: action.payload,
        Loading: false,
        error: null,
      };

    case get_error:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
