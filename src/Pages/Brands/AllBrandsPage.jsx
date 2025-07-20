import BrandsFeatures from "../../Components/Brands/BrandsFeatures";
import Pagination from "../../Components/Utility/Pagination";

const AllBrandsPage = () => {
  return (
    <div style={{ minHeight: "425px" }}>
      <BrandsFeatures />
      <Pagination />
    </div>
  );
};

export default AllBrandsPage;
