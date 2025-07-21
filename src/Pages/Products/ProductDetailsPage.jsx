import { Container, Row } from "react-bootstrap";
import CategoriesHeader from "../../Components/Categories/CategoriesHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import "../../Styles/ProductDetailsPageStyles.css";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductsContainer from "../../Components/Products/ProductsContainer";

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: "425px" }}>
      <CategoriesHeader />
      <Container>
        <ProductDetails />
        <RateContainer />
        <ProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
