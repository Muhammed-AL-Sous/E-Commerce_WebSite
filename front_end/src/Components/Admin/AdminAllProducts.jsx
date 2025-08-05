import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = () => {
  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">
        إدارة جميع المنتجات
      </div>
      <Row className="justify-content-start">
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
        <AdminAllProductsCard />
      </Row>
    </>
  );
};

export default AdminAllProducts;
