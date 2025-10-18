import {
  get_categories,
  get_specific_category,
  get_error,
  create_category,
} from "../Type";

const initialState = {
  Categories: [],
  Specific_Category: [],
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

    case get_specific_category:
      return {
        ...state,
        Specific_Category: action.payload,
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

    case "CLEAR_SPECIFIC_CATEGORY":
      return {
        ...state,
       Specific_Category: [],
      };

    default:
      return state;
  }
}
