import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobile from "../../assets/images/mobile.png";
import rate from "../../assets/images/rate.png";

const UserAllOrderItem = () => {
  return (
    <Container>
      <Row className=" p-2 mb-3">
        <Col xs="12" md="3" className="d-flex justify-content-center">
          <img src={mobile} alt="mobile" width="150px" />
        </Col>
        <Col xs="12" md="9" className="mt-1">
          <h3 className="text-secondary fs-4 fw-bold">الإلكترونيات</h3>
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
        </Col>
      </Row>
    </Container>
  );
};

export default UserAllOrderItem;
