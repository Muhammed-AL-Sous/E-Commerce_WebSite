import BrandsFeatures from "../../Components/Brands/BrandsFeatures";
import Pagination from "../../Components/Utility/Pagination";

import AllCategoriesPageHook from "../../Hooks/Brands/AllBrandsPageHook";

const AllBrandsPage = () => {
  const [BrandsData, pageCount, getPage] = AllCategoriesPageHook();

  return (
    <div style={{ minHeight: "425px" }}>
      <BrandsFeatures BrandsData={BrandsData} />
      {pageCount > 1 ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </div>
  );
};

export default AllBrandsPage;
