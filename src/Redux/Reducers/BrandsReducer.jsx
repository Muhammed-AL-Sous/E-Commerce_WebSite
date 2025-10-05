import {
  get_Brands,
  create_Brand,
  get_specific_brand,
  get_error,
} from "../Type";

const initialState = {
  Brands: [],
  Specific_Brand: [],
  error: null,
  Loading: true,
};

export default function BrandsReducer(state = initialState, action) {
  switch (action.type) {
    case get_Brands:
      return {
        ...state,
        Brands: action.payload,
        Loading: false,
        error: null,
      };

    case get_specific_brand:
      return {
        ...state,
        Specific_Brand: action.payload,
        Loading: false,
        error: null,
      };

    case create_Brand:
      return {
        ...state,
        Brands: action.payload,
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
