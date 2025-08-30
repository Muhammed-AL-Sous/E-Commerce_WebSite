import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";

const ProductDetails = ({ id }) => {
  return (
    <Row className="my-3">
      <Col xs="12" lg="4">
        <ProductGallery id={id} />
      </Col>
      <Col xs="12" lg="8">
        <ProductDescription id={id} />
      </Col>
    </Row>
  );
};

export default ProductDetails;
