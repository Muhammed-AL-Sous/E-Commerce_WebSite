import { Col, Row } from "react-bootstrap";
import rate from "../../assets/images/rate.png";

const Ratings_And_Reviews = () => {
  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        paddingTop: "10px",
        marginTop: "10px",
      }}
    >
      <Row className="my-1">
        <Col>
          <div className="d-flex align-items-center">
            <h6 className="text-body-tertiary fw-bold mx-2">أحمد محمود</h6>
            <img
              src={rate}
              alt="rate"
              width="16px"
              height="16px"
              style={{ position: "relative", top: "-3px" }}
            />
            <span className="fw-bold text-muted me-1">4.3</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mx-2 text-body-secondary fw-semibold">
            منتج سعره مناسب بالنسبة للوقت الحالي و أنصح به بشدة
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Ratings_And_Reviews;
