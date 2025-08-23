import { get_error, get_sub_categories, create_sub_category } from "../Type";

const initialState = {
  Sub_Categories: [],
  error: null,
  Loading: true,
};

export default function SubCategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case get_sub_categories:
      return {
        ...state,
        Sub_Categories: action.payload,
        Loading: false,
        error: null,
      };

    case create_sub_category:
      return {
        ...state,
        Sub_Categories: action.payload,
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
