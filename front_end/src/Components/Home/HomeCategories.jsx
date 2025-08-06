// React BootStrap
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

// Components
import SubTitle from "../../Components/Utility/SubTitle";
import CategoryCard from "../Categories/CategoryCard";

// React Hooks & Redux
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../Redux/Actions/CategoriesAction";

const HomeCategories = () => {
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];
  const CategoriesData = useSelector((state) => state.Categories.Categories);
  const CategoriesLoader = useSelector((state) => state.Categories.Loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategories());
  }, []);

  return (
    <Container>
      <SubTitle title="التصنيفات" btnTitle="المزيد" path="/allcategories" />
      <Row className="d-flex justify-content-center">
        {CategoriesLoader ? (
          <Spinner animation="border" />
        ) : CategoriesData.data ? (
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
