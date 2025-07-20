import Container from "react-bootstrap/Container";
import CategoryCard from "../Categories/CategoryCard";
import { Row } from "react-bootstrap";
import img from "../../assets/images/sale.png";

const AllCategoriesContainer = () => {
  return (
    <Container>
      <h3 className="text-muted fw-bold mt-4">جميع التصنيفات</h3>
      <Row className="d-flex justify-content-center">
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
        <CategoryCard title="تخفيضات" backgroundColor="#eee" img={img} />
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

export default AllCategoriesContainer;
