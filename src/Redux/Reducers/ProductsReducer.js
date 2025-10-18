import {
  get_products,
  get_error,
  create_product,
  get_specific_product,
  get_similar_products,
  delete_product,
  update_product,
} from "../Type";

const initialState = {
  Products: [],
  allProducts: [],
  specific_product: [],
  similar_products: [],
  delete_product: [],
  update_product: [],
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

    case get_specific_product:
      return {
        ...state,
        specific_product: action.payload,
        Loading: false,
        error: null,
      };

    case get_similar_products:
      return {
        ...state,
        similar_products: action.payload,
        Loading: false,
        error: null,
      };

    case create_product:
      return {
        Products: action.payload,
        Loading: false,
        error: null,
      };

    case delete_product:
      return {
        ...state,
        delete_product: action.payload,
        Loading: false,
        error: null,
      };

    case update_product:
      return {
        ...state,
        update_product: action.payload,
        Loading: false,
        error: null,
      };

    case "CLEAR_SPECIFIC_PRODUCT":
      return {
        ...state,
        specific_product: [],
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
