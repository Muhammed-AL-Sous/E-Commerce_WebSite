import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle";

const ProductsContainer = ({ title, btnTitle, path, ProductsData }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      <Row className="d-flex justify-content-center">
        {ProductsData ? (
          ProductsData.map((item) => <ProductCard item={item} key={item._id} />)
        ) : (
          <h3>لا يوجد منتجات متاحة حالياً</h3>
        )}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
