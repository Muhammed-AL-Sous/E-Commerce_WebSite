import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import SubTitle from "../Utility/SubTitle";
import Spinner from "react-bootstrap/Spinner";

const ProductsContainer = ({
  title,
  btnTitle,
  path,
  ProductsData,
  productLoader,
}) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      <Row className="d-flex justify-content-center">
        {productLoader ? (
          <Spinner animation="border" />
        ) : ProductsData && ProductsData.length > 0 ? (
          ProductsData.map((item) => <ProductCard item={item} key={item._id} />)
        ) : (
          <h3>لا يوجد منتجات متاحة حالياً</h3>
        )}
      </Row>
    </Container>
  );
};

export default ProductsContainer;
