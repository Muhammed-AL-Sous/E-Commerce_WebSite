import { SET_SORT_TYPE } from "../Type";

export const SetSortType = (sortType) => {
  return {
    type: SET_SORT_TYPE,
    payload: sortType,
  };
};
