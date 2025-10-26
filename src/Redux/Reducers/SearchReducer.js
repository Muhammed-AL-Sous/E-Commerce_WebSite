import { SET_SEARCH_KEYWORD } from "../Type";

const initialState = {
  keyword: "",
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    default:
      return state;
  }
};
