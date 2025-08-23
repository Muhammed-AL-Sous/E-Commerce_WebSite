// Components
import AllCategoriesContainer from "../../Components/Categories/AllCategoriesContainer";
import Pagination from "../../Components/Utility/Pagination";

// All Categories Hook
import AllCategoriesPageHook from "../../Hooks/Categories/AllCategoriesPageHook";

const AllCategoriesPage = () => {
  const [CategoriesData, pageCount, getPage] = AllCategoriesPageHook();

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
