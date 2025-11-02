// React Hooks & Redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  GetAllProductsWithPage,
  GetProductsWithQueryString,
} from "../../Redux/Actions/ProductAction";

const ViewSearchProductsHook = () => {
  const ProductsData = useSelector((state) => state.Products.allProducts);
  const productLoader = useSelector((state) => state.Products.Loading);
  const searchWords = useSelector((state) => state.search.keyword);
  const sortType = useSelector((state) => state.sortingProducts.sort_type);
  const queryCategories = useSelector(
    (state) => state.SortingByCategories.categories_checked
  );
  const queryBrands = useSelector(
    (state) => state.SortingByBrands.brands_checked
  );
  const priceGte = useSelector((state) => state.SortingByPrices.price_gte);
  const priceLte = useSelector((state) => state.SortingByPrices.price_lte);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, [searchWords, sortType, queryCategories, queryBrands, priceGte, priceLte]);

  const getProducts = async () => {
    let query = `limit=3&keyword=${searchWords}&sort=${sortType}&${queryCategories}&${queryBrands}`;

    if (priceGte) query += `&price[gte]=${priceGte}`;
    if (priceLte) query += `&price[lte]=${priceLte}`;

    await dispatch(GetProductsWithQueryString(query));
  };

  let items = [];

  if (Array.isArray(ProductsData?.data) && ProductsData.data.length > 0) {
    items = ProductsData.data;
  } else {
    items = [];
  }

  let pageCount = 0;

  try {
    // To Get The Number Of Pages
    if (ProductsData.paginationResult) {
      pageCount = ProductsData.paginationResult.numberOfPages;
    }
  } catch (e) {}

  // When The Paginations Items Are Pressed
  const getPage = (page) => {
    let query = `limit=3&keyword=${searchWords}&sort=${sortType}&page=${page}&${queryCategories}&${queryBrands}`;
    if (priceGte) query += `&price[gte]=${priceGte}`;
    if (priceLte) query += `&price[lte]=${priceLte}`;
    dispatch(GetProductsWithQueryString(query));
  };

  return [items, pageCount, getPage, productLoader, getProducts];
};

export default ViewSearchProductsHook;
