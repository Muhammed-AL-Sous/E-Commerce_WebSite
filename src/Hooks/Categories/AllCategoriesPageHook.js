// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategories,
  GetAllCategoriesWithPage,
} from "../../Redux/Actions/CategoriesAction";

const AllCategoriesPageHook = () => {
    
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const dispatch = useDispatch();
  let pageCount = 0;

  // To Get The Number Of Pages
  if (CategoriesData.paginationResult) {
    pageCount = CategoriesData.paginationResult.numberOfPages;
  }

  // When The Page Loads For The First Time
  useEffect(() => {
    dispatch(GetAllCategories(2));
  }, []);

  // When The Paginations Items Are Pressed
  const getPage = (page) => {
    dispatch(GetAllCategoriesWithPage(page));
  };

  return [CategoriesData, pageCount, getPage];
};

export default AllCategoriesPageHook;
