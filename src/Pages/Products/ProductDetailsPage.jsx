import { Container, Row } from "react-bootstrap";
import CategoriesHeader from "../../Components/Categories/CategoriesHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import "../../Styles/ProductDetailsPageStyles.css";

const ProductDetailsPage = () => {
  return (
    <div style={{backgroundColor:"#f9f9f9" , padding:"10px"}}>
      <Container>
        <CategoriesHeader />
        <ProductDetails />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
