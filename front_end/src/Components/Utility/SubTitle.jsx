// Import Custom Css File
import { Link } from "react-router-dom";
import "../../Styles/SubTitleStyles.css";

// React-BootStrap
import Button from "react-bootstrap/Button";

const SubTitle = ({ title, btnTitle, path }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4 p-2">
      <h3 className="sub-title">{title}</h3>
      {btnTitle ? (
        <Link to={path}>
          <Button variant="dark" className="more-btn">
            {btnTitle}
          </Button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SubTitle;
