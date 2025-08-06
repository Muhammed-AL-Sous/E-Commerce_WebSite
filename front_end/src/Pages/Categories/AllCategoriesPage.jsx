// Components
import AllCategoriesContainer from "../../Components/Categories/AllCategoriesContainer";
import Pagination from "../../Components/Utility/Pagination";

// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";

const AllCategoriesPage = () => {
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const dispatch = useDispatch();
  let pageCount = 0;

  if (CategoriesData.data) {
    pageCount = CategoriesData.paginationResult.numberOfPages;
    console.log(pageCount);
  }

  useEffect(() => {
    dispatch(GetAllCategories(2));
  }, []);

  return (
    <div style={{ minHeight: "425px" }}>
      <AllCategoriesContainer CategoriesData={CategoriesData} />
      <Pagination pageCount={pageCount} />
    </div>
  );
};

export default AllCategoriesPage;
