import { Col, Container, Row } from "react-bootstrap";

const CategoriesHeader = () => {
  return (
    <Row>
      <Col>
        <ul className="parent-categories-header">
          <li className="el-categories-header">الكل</li>
          <li className="el-categories-header">إلكترونيات</li>
          <li className="el-categories-header">ملابس</li>
          <li className="el-categories-header">كهربائيات</li>
          <li className="el-categories-header">تخفيضات</li>
          <li className="el-categories-header">المزيد</li>
        </ul>
      </Col>
    </Row>
  );
};

export default CategoriesHeader;
