import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

const Pagination = () => {
  const [pageRange, setPageRange] = useState(2);

  useEffect(() => {
    const updatePageRange = () => {
      // Mobile Screens
      if (window.innerWidth < 576) {
        setPageRange(1);
        // Tablet Screens
      } else if (window.innerWidth < 768) {
        setPageRange(2);
        // Large Screens
      } else {
        setPageRange(3);
      }
    };
    updatePageRange();
    window.addEventListener("resize", updatePageRange);

    return () => window.removeEventListener("resize", updatePageRange);
  }, []);

  const handlePageClick = () => {};

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={pageRange}
      pageCount={100}
      previousLabel="السابق"
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
    />
  );
};

export default Pagination;
