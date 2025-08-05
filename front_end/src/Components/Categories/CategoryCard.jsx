// Import Custom Css File
import "../../Styles/CategoryCard.css";

// React-BootStrap
import { Col } from "react-bootstrap";

const CategoryCard = ({ backgroundColor, img, title }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" xl="2" className="my-5">
      <div>
        <div
          className="category-card shadow-sm"
          style={{
            backgroundColor: `${backgroundColor}`,
          }}
        >
          <img src={img} alt="cat-img" className="category-img" />
        </div>
        <p className="category-card-title">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
