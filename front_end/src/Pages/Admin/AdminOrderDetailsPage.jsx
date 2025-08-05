import { Button, Col, Row } from "react-bootstrap";
import CartItem from "../../Components/Cart/CartItem";

const AdminOrderDetailsPage = () => {
  return (
    <>
      <div className="text-muted fs-4 fw-semibold mb-3">
        تفاصيل الطلب رقم #2046
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="shadow rounded-4 p-3">
        <Row>
          <Col xs="12">
            <div>
              <h5 className="text-secondary fw-bold mb-3">تفاصيل العميل</h5>
              <p className="fw-semibold">
                الإسم :{" "}
                <span className="text-muted fw-medium"> محمد الصوص</span>
              </p>
              <p className="fw-semibold">
                رقم الهاتف :{" "}
                <span className="text-muted fw-medium">07503120748</span>
              </p>
              <p className="fw-semibold">
                الإيميل :{" "}
                <span className="text-muted fw-medium">
                  mhd.alsous.98@gmail.com
                </span>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div
              style={{
                border: "1px solid",
                borderColor: "#ccc transparent",
                padding: "10px 0",
                margin: "10px 0",
                textAlign: "center",
                fontWeight: "800",
                color: "#555",
              }}
            >
              المجموع : 900 دولار أمريكي
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className="d-flex justify-content-center">
              <select className="form-select w-50">
                <option value="">حالة الطلب</option>
                <option value="">قيد التنفيذ</option>
                <option value="">تم الإنتهاء</option>
                <option value="">إلغاء</option>
              </select>
              <Button variant="dark" className="me-2">
                حفظ
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminOrderDetailsPage;
