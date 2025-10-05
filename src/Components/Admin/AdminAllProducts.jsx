import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";
import useAdminProductManagementHook from "../../Hooks/Admin/useAdminProductManagementHook.js";

const AdminAllProducts = () => {
  const { products, loading } = useAdminProductManagementHook();

  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">
        إدارة جميع المنتجات
      </div>
      <Row className="justify-content-start">
        <AdminAllProductsCard products={products || []} loading={loading} />
      </Row>
    </>
  );
};

export default AdminAllProducts;
