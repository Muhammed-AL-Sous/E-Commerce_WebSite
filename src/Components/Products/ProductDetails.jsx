import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";

const ProductDetails = () => {
  return (
    <Row className="my-3">
      <Col xs="12" lg="4">
        <ProductGallery />
      </Col>
      <Col xs="12" lg="8">
        <ProductDescription />
      </Col>
    </Row>
  );
};

export default ProductDetails;
