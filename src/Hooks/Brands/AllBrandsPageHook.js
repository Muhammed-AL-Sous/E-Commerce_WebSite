// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllBrands,
  GetAllBrandsWithPage,
} from "../../Redux/Actions/BrandsAction";

const AllCategoriesPageHook = () => {
  const BrandsData = useSelector((state) => state.Brands.Brands);
  const dispatch = useDispatch();
  let pageCount = 0;

  // To Get The Number Of Pages
  if (BrandsData.paginationResult) {
    pageCount = BrandsData.paginationResult.numberOfPages;
  }

  // When The Page Loads For The First Time
  useEffect(() => {
    dispatch(GetAllBrands(2));
  }, []);

  // When The Paginations Items Are Pressed
  const getPage = (page) => {
    dispatch(GetAllBrandsWithPage(page));
  };

  return [BrandsData, pageCount, getPage];
};

export default AllCategoriesPageHook;
