import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import { Outlet } from "react-router-dom";
import Pagination from "./Pagination";
import { useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();

  const hidePagination = [
    "/admin/allorders/details",
    "/admin/addbrand",
    "/admin/addproduct",
    "/admin/addcategory",
    "/admin/addsubcategory",
  ].includes(location.pathname);
  return (
    <Container>
      <Row className="py-4">
        {/* Sidebar */}
        <Col xs="3" sm="2">
          <AdminSideBar />
        </Col>

        {/* Dynamic Content */}
        <Col xs="9" sm="10">
          <Outlet />
        </Col>
      </Row>

      {!hidePagination && (
        <Row>
          <Col xs="12">
            <Pagination />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AdminLayout;
