import { Col, Container, Row } from "react-bootstrap";
import CategoriesHeader from "../../Components/Categories/CategoriesHeader";
import SearchCountResult from "../../Components/Utility/SearchCountResult";
import SideFilter from "../../Components/Utility/SideFilter";
import ProductsContainer from "../../Components/Products/ProductsContainer";
import Pagination from "../../Components/Utility/Pagination";

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <CategoriesHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />
        <Row className="mt-4">
          <Col xs="0" md="3" lg="2">
            <SideFilter />
          </Col>
          <Col>
            <ProductsContainer title="" btnTitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  );
};

export default ShopProductsPage;
