// Components
import AllCategoriesContainer from "../../Components/Categories/AllCategoriesContainer";
import Pagination from "../../Components/Utility/Pagination";

// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllCategories,
  GetAllCategoriesWithPage,
} from "../../Redux/Actions/CategoriesAction";

const AllCategoriesPage = () => {
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

  return (
    <div style={{ minHeight: "425px" }}>
      <AllCategoriesContainer CategoriesData={CategoriesData} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllCategoriesPage;
