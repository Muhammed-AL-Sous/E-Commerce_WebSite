import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../assets/images/laptops.png";
import "../../Styles/DiscountSectionStyles.css";

const DiscountSection = () => {
  return (
    <Container>
      <Row className="main-dis-sec">
        <Col sm="6">
          <div>
            <p className="discount-title">خصم يصل حتى 30% على أجهزة اللابتوب</p>
          </div>
        </Col>
        <Col sm="6">
          <img
            src={laptops}
            className="laptop-img"
            alt="laptop-img"
            style={{ width: "220px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
