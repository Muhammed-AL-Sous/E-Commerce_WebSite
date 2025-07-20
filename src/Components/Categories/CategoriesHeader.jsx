import { Col, Container, Row } from "react-bootstrap";

const CategoriesHeader = () => {
  return (
    <Row>
      <Col>
        <ul
          className="list-unstyled d-flex gap-3 text-muted fw-semibold my-4 flex-wrap"
          style={{ cursor: "pointer" }}
        >
          <li>الكل</li>
          <li>إلكترونيات</li>
          <li>ملابس</li>
          <li>كهربائيات</li>
          <li>تخفيضات</li>
          <li>المزيد</li>
        </ul>
      </Col>
    </Row>
  );
};

export default CategoriesHeader;
