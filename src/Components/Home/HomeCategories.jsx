// React BootStrap
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Components
import SubTitle from "../../Components/Utility/SubTitle";
import CategoryCard from "../Categories/CategoryCard";

// Home Categories Hook
import HomeCategoriesHook from "../../Hooks/Categories/HomeCategoriesHook"; 

const HomeCategories = () => {
  const [colors, CategoriesData, CategoriesLoader] = HomeCategoriesHook();

  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" path="/allcategories" />
      <Row className="d-flex justify-content-center">
        {CategoriesLoader ? (
          <Spinner animation="border" />
        ) : CategoriesData.data.length > 0 ? (
          CategoriesData.data
            .slice(0, 5)
            .map((item, index) => (
              <CategoryCard
                key={item._id}
                title={item.name}
                backgroundColor={colors[index]}
                img={item.image}
              />
            ))
        ) : (
          <h3>لايوجد تصنيفات متاحة حالياً</h3>
        )}
      </Row>
    </Container>
  );
};

export default HomeCategories;
