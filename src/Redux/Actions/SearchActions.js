import { SET_SEARCH_KEYWORD } from "../Type";

export const setSearchKeyword = (keyword) => {
  return {
    type: SET_SEARCH_KEYWORD,
    payload: keyword,
  };
};
