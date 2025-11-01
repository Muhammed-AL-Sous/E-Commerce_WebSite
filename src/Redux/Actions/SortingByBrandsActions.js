import { Sorting_By_Brands } from "../Type";

export const SortingByBrands = (brandsChecked) => {
  return {
    type: Sorting_By_Brands,
    payload: brandsChecked,
  };
};
