import Container from "react-bootstrap/Container";
import SubTitle from "../../Components/Utility/SubTitle";
import CategoryCard from "../Categories/CategoryCard";
import { Row } from "react-bootstrap";
import img from "../../assets/images/sale.png";

const HomeCategories = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" />
      <Row className="d-flex justify-content-center">
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
      </Row>
    </Container>
  );
};

export default HomeCategories;
