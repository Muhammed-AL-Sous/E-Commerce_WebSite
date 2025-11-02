import { Sorting_By_Price_Gte, Sorting_By_Price_Lte } from "../Type";

const initialState = {
  price_gte: null,
  price_lte: null,
};

export const SortingByPricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sorting_By_Price_Gte:
      return {
        ...state,
        price_gte: action.payload,
      };

    case Sorting_By_Price_Lte:
      return {
        ...state,
        price_lte: action.payload,
      };

    default:
      return state;
  }
};
