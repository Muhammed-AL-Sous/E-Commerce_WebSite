import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Utility/Pagination";

const AdminAllProductsPage = () => {
  return (
    <Container>
      <Row className="py-4">
        <Col xs="3" sm="2">
          <AdminSideBar />
        </Col>
        <Col xs="9" sm="10">
          <AdminAllProducts />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
