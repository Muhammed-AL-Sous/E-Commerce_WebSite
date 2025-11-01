import { Sorting_By_Categories } from "../Type";

const initialState = {
  categories_checked: [],
};

export const SortingByCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sorting_By_Categories:
      return {
        ...state,
        categories_checked: action.payload,
      };

    default:
      return state;
  }
};
