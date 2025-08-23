import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobile from "../../assets/images/mobile.png";
import rate from "../../assets/images/rate.png";
import { Link } from "react-router-dom";

const AdminOrdersList = () => {
  return (
    <Container>
      <div className="text-muted fs-4 fw-semibold mb-3">إدارة الطلبات</div>
      <Row className="shadow rounded-4 p-2 mb-3">
        <Col xs="12" md="3" className="d-flex justify-content-center">
          <Link to="/admin/allorders/details/25">
            <img src={mobile} alt="mobile" width="150px" />
          </Link>
        </Col>
        <Col xs="12" md="9" className="mt-1">
          <div className="d-flex justify-content-between">
            <h3 className="text-secondary fs-4 fw-bold">طلب رقم #2064</h3>
            <button
              type="button"
              className="btn btn-outline-danger fw-semibold"
            >
              <FontAwesomeIcon icon="trash-can" className="ms-1" />
              حذف
            </button>
          </div>
          <div className="my-2">
            <p className="mt-2 mb-1 text-muted fs-6 fw-semibold">
              آيفون 16 برو ماكس بنظام حديد سعة 128 جيجا بايت و نظام تخزين عالي
            </p>
            <div className="my-1 fw-semibold">
              التقييم :
              <img
                src={rate}
                alt="rate"
                width="15px"
                height="15px"
                style={{ margin: "0 5px" }}
              />
              <span
                className="fw-bold my-1 text-muted"
                style={{ position: "relative", top: "3px" }}
              >
                4.5
              </span>
            </div>
            <p className="my-1 fw-semibold">
              الماركة : <span className="text-muted">آبل</span>
            </p>
            <span
              className="my-1"
              style={{
                display: "block",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "red",
              }}
            ></span>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <label htmlFor="qty" className="text-muted fw-semibold">
                الكمية :
              </label>
              <input
                type="number"
                id="qty"
                style={{ width: "50px", outline: "none", marginRight: "5px" }}
                className="text-muted fw-semibold"
              />
            </div>
            <div className="fw-bold fs-4">300$</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrdersList;
