// React BootStrap
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import CategoryCard from "../Categories/CategoryCard";

// React Hooks & Redux
import { useSelector } from "react-redux";

const AllCategoriesContainer = ({ CategoriesData }) => {
  const CategoriesLoader = useSelector((state) => state.Categories.Loading);
  const colors = [
    "#FFD3E8",
    "#F4DBA5",
    "#55CFDF",
    "#FF6262",
    "#0034FF",
    "#FFD3E8",
  ];

  return (
    <Container>
      <h3 className="text-muted fw-bold mt-4">جميع التصنيفات</h3>
      <Row className="d-flex justify-content-center">
        {CategoriesLoader ? (
          <Spinner animation="border" />
        ) : CategoriesData.data.length > 0 ? (
          CategoriesData.data.map((item) => (
            <CategoryCard
              key={item._id}
              title={item.name}
              backgroundColor={
                colors[Math.floor(Math.random() * colors.length)]
              }
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

export default AllCategoriesContainer;
