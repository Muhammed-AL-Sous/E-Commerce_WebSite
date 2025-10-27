import { SET_SORT_TYPE } from "../Type";

const initialState = {
  sort_type: "",
};

export const SortingProdcutsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return {
        ...state,
        sort_type: action.payload,
      };

    default:
      return state;
  }
};
