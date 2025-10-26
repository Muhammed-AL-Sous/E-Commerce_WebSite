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
  const dispatch = useDispatch();

  const getProducts = async () => {
    await dispatch(
      GetProductsWithQueryString(`limit=3&keyword=${searchWords}`)
    );
  };

  useEffect(() => {
    getProducts();
  }, [searchWords]);

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
    dispatch(GetAllProductsWithPage(page, 3));
  };

  return [items, pageCount, getPage, productLoader, getProducts];
};

export default ViewSearchProductsHook;
