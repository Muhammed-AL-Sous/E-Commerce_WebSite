// React BootStrap
import { Col, Container, Row } from "react-bootstrap";

// Components
import CategoriesHeader from "../../Components/Categories/CategoriesHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import Pagination from "../../Components/Utility/Pagination";

// View Search Product sHook
import ViewSearchProductsHook from "../../Hooks/Products/ViewSearchProductsHook";

const ShopProductsPage = () => {
  const [items, pageCount, getPage] = ViewSearchProductsHook();

  return (
    <div style={{ minHeight: "100vh" }}>
      <CategoriesHeader />
      <Container>
        <SearchCountResult title={`يوجد ${items.length} نتيجة بحث ...`} />
        <Row className="mt-4">
          <Col xs="0" md="3" lg="2">
            <SideFilter />
          </Col>
          <Col>
            <ProductsContainer ProductsData={items} title="" btnTitle="" />
          </Col>
        </Row>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null}
      </Container>
    </div>
  );
};

export default ShopProductsPage;
