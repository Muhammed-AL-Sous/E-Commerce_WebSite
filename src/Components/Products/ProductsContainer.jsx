import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle";

const ProductsContainer = ({ title, btnTitle, path }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
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
