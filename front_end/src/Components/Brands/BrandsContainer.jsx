import SubTitle from "../Utility/SubTitle";
import BrandCard from "./BrandCard";
import { Container, Row } from "react-bootstrap";

import brand_01 from "../../assets/images/brand1.png";
import brand_02 from "../../assets/images/brand2.png";
import brand_03 from "../../assets/images/brand3.png";

const BrandsContainer = ({ title, btnTitle, path }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      <Row className="my-4 justify-content-center">
        <BrandCard img={brand_01} />
        <BrandCard img={brand_02} />
        <BrandCard img={brand_03} />
        <BrandCard img={brand_01} />
        <BrandCard img={brand_02} />
        <BrandCard img={brand_03} />
      </Row>
    </Container>
  );
};

export default BrandsContainer;
