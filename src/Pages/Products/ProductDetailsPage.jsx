// React BootStrap
import { Container } from "react-bootstrap";

// CSS File
import "../../Styles/ProductDetailsPageStyles.css";

// Components
import CategoriesHeader from "../../Components/Categories/CategoriesHeader";
import ProductDetails from "../../Components/Products/ProductDetails";
import RateContainer from "../../Components/Rate/RateContainer";
import ProductsContainer from "../../Components/Products/ProductsContainer";

// React Hooks
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const id = useParams();
  console.log(id);
  return (
    <div style={{ minHeight: "425px" }}>
      <CategoriesHeader />
      <Container>
        <ProductDetails id={id} />
        <RateContainer />
        <ProductsContainer title="منتجات قد تعجبك" />
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
