import AllCategoriesContainer from "../../Components/Categories/AllCategoriesContainer";
import Pagination from "../../Components/Utility/Pagination";

const AllCategoriesPage = () => {
  return (
    <div style={{ minHeight: "425px" }}>
      <AllCategoriesContainer />
      <Pagination />
    </div>
  );
};

export default AllCategoriesPage;
