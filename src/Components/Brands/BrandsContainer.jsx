// React BootStrap
import { Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Components
import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";

// Home Brands Hook
import HomeBrandsHook from "../../Hooks/Brands/HomeBrandsHook";

const BrandsContainer = ({ title, btnTitle, path }) => {
  const [BrandsData, BrandsLoader] = HomeBrandsHook();
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      <Row className="my-4 justify-content-center">
        {BrandsLoader ? (
          <Spinner animation="border" />
        ) : BrandsData.data.length > 0 ? (
          BrandsData.data
            .slice(0, 5)
            .map((item) => <BrandCard key={item._id} img={item.image} />)
        ) : (
          <h3>لا يوجد ماركات متاحة حالياً</h3>
        )}
      </Row>
    </Container>
  );
};

export default BrandsContainer;
