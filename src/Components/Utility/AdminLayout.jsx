import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import { Outlet, useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import useAdminProductManagementHook from "../../Hooks/Admin/useAdminProductManagementHook";

const AdminLayout = () => {
  const { pageCount: rawPageCount, getPage } = useAdminProductManagementHook();

  // اجعل pageCount عدد صحيح ≥ 1 أو 0 إذا البيانات لم تجهز
  const pageCount = rawPageCount ? Math.ceil(rawPageCount) : 0;

  const location = useLocation();

  const hidePagination = [
    "/admin/allorders/details",
    "/admin/addbrand",
    "/admin/addproduct",
    "/admin/addcategory",
    "/admin/addsubcategory",
  ].some((path) => location.pathname.startsWith(path));

  const paginationConfig = [
    {
      match: (path) => path.startsWith("/admin/allproducts"),
      pageCount,
      onPageChange: getPage,
    },
  ];

  const currentConfig = paginationConfig.find((cfg) =>
    cfg.match(location.pathname)
  );

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

      {!hidePagination && currentConfig && currentConfig.pageCount > 1 && (
        <Row>
          <Col xs="12">
            <Pagination
              pageCount={currentConfig.pageCount}
              onPress={currentConfig.onPageChange}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AdminLayout;
