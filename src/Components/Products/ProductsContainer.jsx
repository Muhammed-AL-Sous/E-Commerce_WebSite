import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle";

const ProductsContainer = () => {
  return (
    <Container>
      <SubTitle title="الأكثر مبيعاً" btnTitle="المزيد" />
      <Row className="d-flex justify-content-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
};

export default ProductsContainer;
