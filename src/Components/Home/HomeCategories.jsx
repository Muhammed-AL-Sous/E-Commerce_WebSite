// React BootStrap
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Components
import SubTitle from "../../Components/Utility/SubTitle";
import CategoryCard from "../Categories/CategoryCard";

// Home Categories Hook
import HomeCategoriesHook from "../../Hooks/Categories/HomeCategoriesHook";
import { useMemo } from "react";

const HomeCategories = () => {
  const [colors, CategoriesData, CategoriesLoader] = HomeCategoriesHook();

  // useMemo لتخزين أول 5 تصنيفات وعدم إعادة حسابها إلا عند تغير البيانات
  const firstFiveCategories = useMemo(() => {
    if (CategoriesData && CategoriesData.data) {
      return CategoriesData.data.slice(0, 5);
    }
    return [];
  }, [CategoriesData]);

  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" path="/allcategories" />
      <Row className="d-flex justify-content-center">
        {CategoriesLoader ? (
          <Spinner animation="border" />
        ) : firstFiveCategories.length > 0 ? (
          firstFiveCategories.map((item, index) => (
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
