// React BootStrap
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Components
import BrandCard from "./BrandCard";

// React Hooks & Redux
import { useSelector } from "react-redux";

const BrandsFeatures = ({ BrandsData }) => {
  const BrandsLoader = useSelector((state) => state.Brands.Loading);
  return (
    <Container>
      <h3 className="text-muted fw-bold mt-4">جميع الماركات</h3>
      <Row className="my-4 justify-content-center">
        {BrandsLoader ? (
          <Spinner animation="border" />
        ) : BrandsData.data.length > 0 ? (
          BrandsData.data.map((item) => (
            <BrandCard key={item._id} img={item.image} />
          ))
        ) : (
          <h3>لا يوجد ماركات متاحة حالياً</h3>
        )}
      </Row>
    </Container>
  );
};

export default BrandsFeatures;
