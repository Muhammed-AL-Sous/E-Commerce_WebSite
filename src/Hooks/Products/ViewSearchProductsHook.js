// React Hooks & Redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetAllProducts, GetAllProductsWithPage } from "../../Redux/Actions/ProductAction";

const ViewSearchProductsHook = () => {
  const ProductsData = useSelector((state) => state.Products.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts(3));
  }, []);

  let items = [];

  if (ProductsData.data) {
    items = ProductsData.data;
  } else {
    items = [];
  }

let pageCount = 0;

    // To Get The Number Of Pages
  if (ProductsData.paginationResult) {
    pageCount = ProductsData.paginationResult.numberOfPages;
  }

    // When The Paginations Items Are Pressed
    const getPage = (page) => {
      dispatch(GetAllProductsWithPage(page,3));
    };

  return [items, pageCount, getPage];
};

export default ViewSearchProductsHook;
