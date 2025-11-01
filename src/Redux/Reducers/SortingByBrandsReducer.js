import { Sorting_By_Brands } from "../Type";

const initialState = {
  brands_checked: [],
};

export const SortingByBrandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sorting_By_Brands:
      return {
        ...state,
        brands_checked: action.payload,
      };

    default:
      return state;
  }
};
