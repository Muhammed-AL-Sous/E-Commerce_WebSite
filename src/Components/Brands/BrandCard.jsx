import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BrandCard = ({ img }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" xl="2" className="my-2 ">
      <Card
        className="shadow"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          border: "none",
          padding: "10px",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Img variant="top" src={img} />
      </Card>
    </Col>
  );
};

export default BrandCard;
