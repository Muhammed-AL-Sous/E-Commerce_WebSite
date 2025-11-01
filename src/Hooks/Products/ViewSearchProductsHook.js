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

  const dispatch = useDispatch();

  const getProducts = async () => {
    await dispatch(
      GetProductsWithQueryString(
        `limit=3&keyword=${searchWords}&sort=${sortType}&${queryCategories}&${queryBrands}`
      )
    );
  };

  useEffect(() => {
    getProducts();
  }, [searchWords, sortType, queryCategories, queryBrands]);

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
    dispatch(
      GetProductsWithQueryString(
        `limit=3&keyword=${searchWords}&sort=${sortType}&page=${page}&${queryCategories}&${queryBrands}`
      )
    );
  };

  return [items, pageCount, getPage, productLoader, getProducts];
};

export default ViewSearchProductsHook;
