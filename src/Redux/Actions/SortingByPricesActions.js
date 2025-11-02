import { Sorting_By_Price_Gte, Sorting_By_Price_Lte } from "../Type";

export const SortingByPriceGte = (priceGte) => {
  return {
    type: Sorting_By_Price_Gte,
    payload: priceGte,
  };
};

export const SortingByPriceLte = (priceLte) => {
  return {
    type: Sorting_By_Price_Lte,
    payload: priceLte,
  };
};
