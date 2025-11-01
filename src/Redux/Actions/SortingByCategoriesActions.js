import { Sorting_By_Categories } from "../Type";

export const SortingByCategories = (categoriesChecked) => {
  return {
    type: Sorting_By_Categories,
    payload: categoriesChecked,
  };
};
