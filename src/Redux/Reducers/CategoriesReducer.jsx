import { get_categories, get_error, create_category } from "../Type";

const initialState = {
  Categories: [],
  error: null,
  Loading: true,
};

export default function CategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case get_categories:
      return {
        ...state,
        Categories: action.payload,
        Loading: false,
        error: null,
      };

    case create_category:
      return {
        ...state,
        Categories: action.payload,
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
