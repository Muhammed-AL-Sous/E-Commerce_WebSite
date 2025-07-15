import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import product from "../../assets/images/prod1.png";
import fav from "../../assets/images/fav-off.png";
import rate from "../../assets/images/rate.png";

const ProductCard = () => {
  return (
    <Col xs="12" sm="6" md="5" lg="4" xl="3" className="my-4">
      <Card
        className="shadow"
        style={{
          borderRadius: "8px",
          border: "none",
          backgroundColor: "white",
        }}
      >
        <Card.Img
          variant="top"
          src={product}
          style={{ width: "100%", height: "228px" }}
        />
        <div className="d-flex justify-content-end mx-3">
          <img src={fav} alt="" style={{ width: "35px", height: "35px" }} />
        </div>
        <Card.Body>
          <Card.Title className="m-0">
            لابتوب لينوفو كارت شاشة منفصل مع رامات بمواصفات عالية
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="d-flex justify-content-between align-items-center">
              <img src={rate} alt="rate-icon" style={{ width: "20px" }} />
              <span
                className="d-block mx-1 fw-bold position-relative"
                style={{ top: "3px", color: "gold" }}
              >
                4.5
              </span>
            </div>
            <div style={{ position: "relative", top: "3px" }}>
              <span style={{ fontWeight: "600", fontSize: "20px" }}>80</span>
              <span style={{ fontWeight: "600", fontSize: "20px" }}>$</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
